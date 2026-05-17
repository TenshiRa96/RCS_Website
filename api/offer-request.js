import nodemailer from 'nodemailer'

function json(response, statusCode, body) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(body))
}

function getRequiredEnv(name) {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }

  return value
}

function toPublicErrorMessage(error) {
  if (error instanceof Error && error.message.startsWith('Missing environment variable:')) {
    return 'Email service is not configured correctly on the server.'
  }

  const errorCode = typeof error === 'object' && error && 'code' in error ? error.code : ''
  const responseCode =
    typeof error === 'object' && error && 'responseCode' in error ? error.responseCode : undefined

  if (errorCode === 'EAUTH' || responseCode === 535) {
    return 'Email authentication failed. Check the Gmail app password.'
  }

  if (errorCode === 'ETIMEDOUT' || errorCode === 'ESOCKET' || errorCode === 'ECONNECTION') {
    return 'The email server could not be reached. Please try again shortly.'
  }

  return 'Failed to send offer request.'
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return json(response, 405, { ok: false, error: 'Method not allowed' })
  }

  try {
    const {
      name = '',
      email = '',
      phone = '',
      projectType = '',
      budget = '',
      message = '',
      pageUrl = '',
      locale = '',
    } = request.body ?? {}

    if (!name || !email || !projectType || !budget || !message) {
      return json(response, 400, { ok: false, error: 'Missing required fields' })
    }

    const smtpHost = getRequiredEnv('SMTP_HOST')
    const smtpPort = Number(process.env.SMTP_PORT ?? 465)
    const smtpSecure = (process.env.SMTP_SECURE ?? 'true') !== 'false'
    const smtpUser = getRequiredEnv('SMTP_USER')
    const smtpPass = getRequiredEnv('SMTP_PASS').replaceAll(' ', '')
    const offerToEmail = process.env.OFFER_TO_EMAIL || smtpUser
    const offerFromEmail = process.env.OFFER_FROM_EMAIL || smtpUser

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.verify()

    await transporter.sendMail({
      from: `"Realitysoft Website" <${offerFromEmail}>`,
      to: offerToEmail,
      replyTo: email,
      subject: 'New website offer request',
      text: [
        'New website offer request',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone || '-'}`,
        `Project type: ${projectType}`,
        `Budget: ${budget}`,
        `Page URL: ${pageUrl || '-'}`,
        `Locale: ${locale || '-'}`,
        '',
        'Project details:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin: 0 0 16px;">New website offer request</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
            <tr><td style="padding: 8px 0; font-weight: 700;">Name</td><td style="padding: 8px 0;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">Email</td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">Phone / WhatsApp</td><td style="padding: 8px 0;">${escapeHtml(phone || '-')}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">Project type</td><td style="padding: 8px 0;">${escapeHtml(projectType)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">Budget</td><td style="padding: 8px 0;">${escapeHtml(budget)}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">Page URL</td><td style="padding: 8px 0;">${escapeHtml(pageUrl || '-')}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: 700;">Locale</td><td style="padding: 8px 0;">${escapeHtml(locale || '-')}</td></tr>
          </table>
          <div style="margin-top: 18px;">
            <div style="font-weight: 700; margin-bottom: 8px;">Project details</div>
            <div style="padding: 14px 16px; border-radius: 12px; background: #f3f4f6; white-space: pre-wrap;">${escapeHtml(message)}</div>
          </div>
        </div>
      `,
    })

    return json(response, 200, { ok: true })
  } catch (error) {
    console.error('Offer request send failed', error)
    return json(response, 500, { ok: false, error: toPublicErrorMessage(error) })
  }
}
