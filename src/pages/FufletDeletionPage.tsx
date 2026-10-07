import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Seo from '../components/Seo'
import { useLocale } from '../i18n'

const email = 'realitycomputersoftware.rcs@gmail.com'
const copy = {
  en: {
    title: 'Delete your Fuflet account or data',
    description: 'Request deletion of your Fuflet — The Shapeshifter account and associated data from Reality Computer Software S.R.L.',
    intro: 'You can send a deletion request here even if you have uninstalled the game or cannot sign in.',
    button: 'Request deletion by email',
    subject: 'Fuflet — account / data deletion request',
    body: 'Hello,\nI would like to request deletion of my Fuflet account and associated online game data.\nOptional player ID, if already available: \nPlease let me know how to verify ownership safely.\n',
    alternative: 'No email app opens? Write directly to',
    steps: 'What to include',
    items: [
      'Say whether you want to delete an online game account, support correspondence, or other personal data.',
      'If you already have your Fuflet player ID from a game-data export, you may include it. It is optional; you do not need to reinstall the game to submit a request.',
      'Do not send passwords, sign-in codes, API keys, full payment-card details or identity documents in your initial email.',
    ],
    next: 'What happens next',
    nextBody: 'Reality Computer Software S.R.L. reviews the request and may ask for the minimum information needed to verify ownership before deleting account data. Opening this page or your email app does not submit a request or erase anything: send the email to begin. We will explain the next steps and confirm the outcome.',
    scope: 'What deletion covers',
    scopeBody: 'An online account deletion request covers the Fuflet game account and its associated online progress, inventory and game records. It does not delete your Google account or Google Play purchase history. If particular records must be retained for a documented legal, security or fraud-prevention reason, we will explain which records, why, and for how long in our response.',
    local: 'Progress stored only on your phone',
    localBody: 'The offline beta keeps its adventure on your device. We cannot remotely erase that local save. Android app-data controls and any device-backup settings are separate; clearing game storage can permanently remove local progress. You can still contact us about any data you have sent to us.',
    policy: 'Read the privacy policy',
  },
  ro: {
    title: 'Ștergerea contului sau a datelor Fuflet',
    description: 'Solicită ștergerea contului Fuflet — The Shapeshifter și a datelor asociate de la Reality Computer Software S.R.L.',
    intro: 'Poți trimite cererea de aici chiar dacă ai dezinstalat jocul sau nu te mai poți conecta.',
    button: 'Solicită ștergerea prin email',
    subject: 'Fuflet — cerere de ștergere a contului / datelor',
    body: 'Bună ziua,\nDoresc ștergerea contului meu Fuflet și a datelor de joc online asociate.\nCodul jucătorului, opțional, dacă îl am deja: \nVă rog să îmi indicați cum pot confirma în siguranță că îmi aparține contul.\n',
    alternative: 'Nu se deschide aplicația de email? Scrie direct la',
    steps: 'Ce să incluzi în cerere',
    items: [
      'Precizează dacă dorești ștergerea contului de joc online, a mesajelor de asistență sau a altor date personale.',
      'Dacă ai deja codul jucătorului Fuflet într-un export al datelor de joc, îl poți include. Este opțional; nu trebuie să reinstalezi jocul pentru a trimite cererea.',
      'Nu trimite parole, coduri de autentificare, chei API, date complete de card sau acte de identitate în emailul inițial.',
    ],
    next: 'Ce urmează',
    nextBody: 'Reality Computer Software S.R.L. analizează cererea și poate solicita informațiile minime necesare pentru a verifica dacă îți aparține contul, înainte de ștergere. Deschiderea acestei pagini sau a aplicației de email nu trimite cererea și nu șterge nimic: trimite emailul pentru a începe. Îți explicăm pașii următori și confirmăm rezultatul.',
    scope: 'Ce include ștergerea',
    scopeBody: 'Cererea de ștergere a unui cont online include contul Fuflet, progresul online, inventarul și înregistrările de joc asociate. Nu șterge contul Google sau istoricul cumpărăturilor din Google Play. Dacă anumite evidențe trebuie păstrate din motive documentate legate de lege, securitate sau prevenirea fraudei, îți explicăm în răspuns ce păstrăm, de ce și pentru cât timp.',
    local: 'Progresul păstrat doar pe telefon',
    localBody: 'Versiunea beta offline păstrează aventura pe dispozitivul tău. Nu putem șterge de la distanță această salvare locală. Gestionarea datelor aplicației în Android și eventualele copii de siguranță ale telefonului sunt separate; golirea datelor jocului poate elimina definitiv progresul local. Ne poți contacta în continuare pentru datele pe care ni le-ai trimis.',
    policy: 'Citește politica de confidențialitate',
  },
}

export default function FufletDeletionPage() {
  const { locale } = useLocale()
  const text = copy[locale]
  const href = `mailto:${email}?subject=${encodeURIComponent(text.subject)}&body=${encodeURIComponent(text.body)}`
  return (
    <PageTransition>
      <Seo title={`${text.title} | Reality Computer Software`} description={text.description} path="/fuflet/delete-account" />
      <article className="section" style={{ maxWidth: 860, marginInline: 'auto', paddingTop: 'clamp(7rem, 12vw, 10rem)', paddingBottom: '5rem', overflowWrap: 'anywhere' }}>
        <p className="eyebrow">Fuflet — The Shapeshifter</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}>{text.title}</h1>
        <p className="lede" style={{ marginBlock: '1.5rem' }}>{text.intro}</p>
        <a className="button button--primary" style={{ whiteSpace: 'normal', textAlign: 'center' }} href={href}>{text.button}</a>
        <p style={{ marginBlock: '1.5rem', lineHeight: 1.8 }}>{text.alternative} <a href={`mailto:${email}`}>{email}</a>.</p>
        <section style={{ marginTop: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>{text.steps}</h2>
          <ul style={{ paddingLeft: '1.4rem', lineHeight: 1.8 }}>{text.items.map(item => <li key={item} style={{ marginBlock: '.7rem' }}>{item}</li>)}</ul>
        </section>
        {[[text.next, text.nextBody], [text.scope, text.scopeBody], [text.local, text.localBody]].map(([title, body]) => (
          <section key={title} style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,.25)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '.75rem' }}>{title}</h2>
            <p style={{ lineHeight: 1.8 }}>{body}</p>
          </section>
        ))}
        <p style={{ marginTop: '2rem' }}><Link to="/fuflet/privacy">{text.policy}</Link></p>
      </article>
    </PageTransition>
  )
}
