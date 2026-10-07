import { createHash, timingSafeEqual } from 'node:crypto';

const project = '0ad517ba-e57c-4140-a286-5c4748317603';
const environments = Object.freeze({ development: 'ceaa5108-9140-467f-a98d-47c0cf870f35', beta: 'a3634af2-0adf-4673-be80-558aba5395c5' });
const callbackUrl = `https://cloud-code.services.api.unity.com/v1/projects/${project}/modules/Fuflet/ReceiveLevelPlayCompletion`;

// Vercel Node server function. No client bundle imports, no query/credential logs.
// Paused unless explicitly configured. Beta needs a second approval gate; never route by query.
export function createHandler({ env = process.env, fetcher = fetch, diagnostic = event => console.warn(JSON.stringify(event)), now = Date.now } = {}) {
  // Unity exchange tokens have a documented one-hour TTL. Retain them only in
  // this server instance for 50 minutes; never expose or persist the bearer.
  let cachedToken = null;
  return async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    const reply = (status, body) => { res.statusCode = status; res.end(body); };
    if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return reply(405, 'method_not_allowed'); }
    const environment = env.FUFLET_AD_CALLBACK_ENABLED;
    if (!Object.hasOwn(environments, environment) || environment === 'beta' && env.FUFLET_AD_BETA_APPROVED !== 'true' ||
        !/^[A-Za-z0-9_-]{8,128}$/.test(env.FUFLET_UGS_RELAY_KEY_ID || '') ||
        !/^[\x21-\x7e]{16,512}$/.test(env.FUFLET_UGS_RELAY_SECRET || '') ||
        !/^[\x21-\x7e]{32,256}$/.test(env.FUFLET_LEVELPLAY_CALLBACK_KEY || '')) return reply(503, 'not_configured');
    let entries, eventId;
    try {
      if (typeof req.url !== 'string' || req.url.length > 16384) throw Error();
      entries = [...new URL(req.url, 'https://callback.invalid').searchParams.entries()];
      if (entries.length < 5 || entries.length > 32 || new Set(entries.map(p => p[0])).size !== entries.length ||
          entries.reduce((n,p) => n + p[0].length + p[1].length,0) > 8192) throw Error();
      const q = Object.fromEntries(entries);
      const { timestamp, applicationUserId, rewards, signature } = q;
      eventId = q.eventId;
      if (!/^\d{12}$/.test(timestamp || '') || !/^[A-Za-z0-9]{1,128}$/.test(eventId || '') ||
          !/^[a-fA-F0-9]{64}$/.test(applicationUserId || '') || rewards !== '1' || !/^[a-fA-F0-9]{32}$/.test(signature || '')) throw Error();
      const date = new Date(`${timestamp.slice(0,4)}-${timestamp.slice(4,6)}-${timestamp.slice(6,8)}T${timestamp.slice(8,10)}:${timestamp.slice(10,12)}:00Z`);
      if (!Number.isFinite(date.getTime()) || date.toISOString().replace(/[-:TZ.]/g,'').slice(0,12) !== timestamp || timestamp.startsWith('0000')) throw Error();
      const expected = createHash('md5').update(timestamp + eventId + applicationUserId + rewards + env.FUFLET_LEVELPLAY_CALLBACK_KEY, 'utf8').digest();
      if (!timingSafeEqual(expected, Buffer.from(signature,'hex'))) throw Error();
    } catch { return reply(403, 'callback_rejected'); }

    // Authenticate only after the callback has passed its signature check.
    // One bounded attempt: provider retries are safe after a lost response.
    const signal = AbortSignal.timeout(15000);
    let stage = 'token_exchange', upstreamStatus = null;
    try {
      const identity = createHash('sha256').update(environment + ':' + env.FUFLET_UGS_RELAY_KEY_ID + ':' + env.FUFLET_UGS_RELAY_SECRET).digest('hex');
      const exchangeUrl = `https://services.api.unity.com/auth/v1/token-exchange?projectId=${project}&environmentId=${environments[environment]}`;
      let token = cachedToken?.identity === identity && cachedToken.expires > now() ? cachedToken.token : null;
      if (!token) {
        cachedToken = null;
        const started = now();
        const auth = Buffer.from(`${env.FUFLET_UGS_RELAY_KEY_ID}:${env.FUFLET_UGS_RELAY_SECRET}`).toString('base64');
        const exchange = await fetcher(exchangeUrl, { method:'POST', redirect:'error', signal,
          headers:{ Authorization:`Basic ${auth}`, 'Content-Type':'application/json' }, body:'{}' });
        upstreamStatus = exchange.status;
        // Live token exchange returns 201 Created; docs also describe 200 OK.
        if (exchange.status !== 200 && exchange.status !== 201) throw Error();
        stage = 'token_response';
        token = (await limitedJson(exchange)).accessToken;
        if (typeof token !== 'string' || token.length < 16 || token.length > 16384 || /\s/.test(token)) throw Error();
        cachedToken = { identity, token, expires: started + 50 * 60 * 1000 };
      }
      stage = 'cloud_code'; upstreamStatus = null;
      const result = await fetcher(callbackUrl, { method:'POST', redirect:'error', signal,
        headers:{ Authorization:`Bearer ${token}`, 'Content-Type':'application/json', UnityEnvironment:environment },
        body:JSON.stringify({ params:{ callback:{ fields:entries.map(([name,value]) => ({name,value})) } } }) });
      upstreamStatus = result.status;
      if (result.status === 401 || result.status === 403) cachedToken = null;
      if (result.status !== 200) throw Error();
      stage = 'commit_response';
      const response = (await limitedJson(result)).output;
      if (response?.accepted !== true || response.eventId !== eventId) throw Error();
      // Required by LevelPlay; never acknowledge before the durable UGS commit.
      return reply(200, `${eventId}:OK`);
    } catch {
      // Fixed labels + numeric status only: never record callback identifiers,
      // query strings, tokens, exception messages or upstream response bodies.
      try { diagnostic({ event:'levelplay_relay_failure', stage, upstreamStatus }); } catch { }
      return reply(503, 'retry_required');
    }
  };
}

async function limitedJson(response) {
  const reader = response.body.getReader();
  const chunks = []; let size = 0;
  try {
    for (;;) {
      const {value,done} = await reader.read(); if (done) break;
      size += value.byteLength; if (size > 65536) throw Error(); chunks.push(value);
    }
  } finally { await reader.cancel(); }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export default createHandler();
