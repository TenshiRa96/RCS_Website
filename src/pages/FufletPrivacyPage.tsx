import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Seo from '../components/Seo'
import { company } from '../data/site'
import { useLocale } from '../i18n'

// Offline beta policy. Online services require a new data review before activation.
const privacy = {
  en: {
    title: 'Fuflet privacy',
    description: 'Privacy information for the offline beta of Fuflet — The Shapeshifter.',
    draft: 'Offline beta · updated 30 September 2026',
    scope: 'This policy describes the offline beta of Fuflet — The Shapeshifter. It does not cover future online accounts, rankings, purchases, advertising or online analytics.',
    contents: 'On this page',
    contact: 'Privacy contact',
    companyLink: 'Company details and website terms',
    sections: [
      ['operator', 'Who provides the game', 'Fuflet — The Shapeshifter is provided by Reality Computer Software SRL, Romania. Our contact for privacy questions and requests is realitycomputersoftware.rcs@gmail.com. You can also use realitycomputersoftware@gmail.com.'],
      ['progress', 'Your progress and preferences', 'The game stores progress, earned currency, unlocked and equipped items, language and accessibility choices in app storage on your device. This lets you continue playing between sessions. This beta does not offer an online player account, online rankings or a game-operated cloud save.'],
      ['notes', 'Optional local usage notes', 'Local usage notes are off by default and are not needed to play. If enabled in Settings, they record categories of gameplay actions, numeric values, durations, a day number and error counts. Their record format contains no names, emails, account identifiers, device identifiers, advertising identifiers or raw exception messages. At most 256 recent events are retained, with events older than seven days removed when the game processes the notes. The game does not send this note file to us. Settings lets you turn notes off and delete them.'],
      ['notifications', 'Reminders', 'Reminders for daily tasks and returning to the game are scheduled locally. Android controls notification permission; you can change it in the system settings for Fuflet. Scheduling uses the device clock. This beta does not use a remote push service.'],
      ['backup', 'Storage, backup and deletion', 'Progress and preferences stay in app storage until removed. Clearing the app’s storage also removes local progress. Android may back up or transfer progress according to your phone and Google account settings. The game excludes local usage notes and local performance reports from Android cloud backup and device transfer. Backup availability and retention are controlled by Android and your backup provider, not by us. Uninstalling the app does not necessarily delete an existing system backup.'],
      ['support', 'When you contact us', 'If you email us, we receive your address and the information you choose to include. Please do not send passwords, payment details or identity documents. We use correspondence to answer your request and resolve support or privacy issues. The company owner handles requests through a standard Gmail account. Ordinary support messages are deleted 12 months after resolution, unless a documented legal obligation or dispute requires longer retention. This does not override an applicable earlier erasure request. We retain only the minimum record of a privacy request (date, request type and response) for three years after closure, reviewed annually, to document how we handled it. Longer retention requires a documented legal obligation or dispute. Email is processed through Google Gmail, including storage that may be outside the EEA. Google describes the applicable adequacy decisions, EU–US Data Privacy Framework and standard contractual clauses in its transfer information. We use an ordinary Gmail account, not a Google Workspace account.'],
      ['basis', 'Why we use information', 'We use local progress and settings to provide the game you request (GDPR Article 6(1)(b), where applicable). Optional local notes are enabled only by your choice and can be switched off and deleted. We handle ordinary support based on our legitimate interest in helping players and keeping the game working (Article 6(1)(f)); we limit the information to what is necessary and you may object. We respond to GDPR rights requests to comply with a legal obligation (Article 6(1)(c)). Retaining a minimal closure record supports our legitimate interest in demonstrating proper handling and, where applicable, legal compliance. We do not sell player data or use it for targeted advertising in this beta.'],
      ['audience', 'Intended audience', 'Fuflet is intended for teenagers aged 13 and over and adults. This beta does not ask for a date of birth or create online player accounts. If you believe a child has sent us personal information by email, contact us so we can assess and delete information that is not needed or lawfully retained.'],
      ['rights', 'Your choices and rights', 'Where GDPR applies, you may request access, correction, deletion, restriction and, where applicable, portability of personal data we hold. You may object to processing based on legitimate interests and withdraw consent without affecting prior lawful processing. Contact the address above; we will assess the request against the data we actually hold and the applicable conditions. You may complain to your local supervisory authority, including Romania’s ANSPDCP.'],
      ['future', 'Purchases, ads and future changes', 'This offline beta does not process real-money purchases or show ads. Future shop offers are previews, not purchasable products. Data practices and this policy must be reviewed before any online service is activated. We will update this page when these practices change and provide any additional notices or choices needed before new processing begins.'],
    ],
  },
  ro: {
    title: 'Confidențialitate în Fuflet',
    description: 'Informații privind datele personale pentru versiunea beta offline a jocului Fuflet — The Shapeshifter.',
    draft: 'Versiune beta offline · actualizare 30 septembrie 2026',
    scope: 'Această politică descrie versiunea beta offline a jocului Fuflet — The Shapeshifter. Nu acoperă viitoarele conturi online, clasamente, cumpărături, reclame sau statistici online.',
    contents: 'Cuprins',
    contact: 'Contact pentru date personale',
    companyLink: 'Datele firmei și termenii site-ului',
    sections: [
      ['operator', 'Cine oferă jocul', 'Fuflet — The Shapeshifter este oferit de Reality Computer Software SRL, România. Pentru întrebări și cereri privind datele personale, ne poți scrie la realitycomputersoftware.rcs@gmail.com. Poți folosi și realitycomputersoftware@gmail.com.'],
      ['progress', 'Progresul și preferințele tale', 'Jocul păstrează în spațiul aplicației de pe dispozitiv progresul, monedele câștigate, obiectele deblocate și echipate, limba și preferințele de accesibilitate. Astfel poți continua aventura între sesiuni. Această versiune beta nu oferă conturi de jucător online, clasamente online sau salvări pe serverele jocului.'],
      ['notes', 'Înregistrări locale opționale', 'Înregistrările de utilizare sunt dezactivate inițial și nu sunt necesare pentru a juca. Dacă le activezi din Setări, ele păstrează categorii de acțiuni din joc, valori numerice, durate, numărul zilei și numărul erorilor. Formatul lor nu conține nume, adrese de email, identificatori de cont, de dispozitiv sau de publicitate și nici mesajele complete ale erorilor. Sunt păstrate cel mult 256 de evenimente recente; cele mai vechi de șapte zile sunt eliminate când jocul prelucrează înregistrările. Jocul nu ne trimite acest fișier. Din Setări poți dezactiva și șterge înregistrările.'],
      ['notifications', 'Mementouri', 'Mementourile pentru sarcinile zilnice și revenirea în joc sunt programate local. Permisiunea pentru notificări este gestionată de Android și poate fi schimbată în setările telefonului pentru Fuflet. Programarea folosește ceasul dispozitivului. Această versiune nu folosește un serviciu de notificări trimise de la distanță.'],
      ['backup', 'Păstrare, copii de siguranță și ștergere', 'Progresul și preferințele rămân în spațiul aplicației până la ștergere. Ștergerea datelor aplicației elimină și progresul local. Android poate salva sau transfera progresul în funcție de setările telefonului și ale contului Google. Jocul exclude înregistrările locale de utilizare și rapoartele locale de performanță din copiile Android și transferul între dispozitive. Disponibilitatea și păstrarea copiilor sunt gestionate de Android și furnizorul copiei de siguranță, nu de noi. Dezinstalarea nu șterge neapărat o copie de siguranță deja existentă.'],
      ['support', 'Când ne contactezi', 'Dacă ne trimiți un email, primim adresa ta și informațiile pe care alegi să le incluzi. Nu trimite parole, date de plată sau acte de identitate. Folosim corespondența pentru a răspunde și a rezolva cererile de asistență sau privind datele personale. Proprietarul firmei gestionează cererile printr-un cont Gmail obișnuit. Mesajele obișnuite de asistență sunt șterse la 12 luni după rezolvare, cu excepția cazurilor documentate în care o obligație legală sau un litigiu necesită păstrarea lor mai mult timp. Această perioadă nu înlătură dreptul aplicabil de a cere ștergerea mai devreme. Păstrăm numai evidența minimă a unei cereri privind datele personale (data, tipul cererii și răspunsul) timp de trei ani după închidere, cu revizuire anuală, pentru a documenta soluționarea ei. O perioadă mai lungă necesită o obligație legală sau un litigiu documentat. Emailurile sunt prelucrate prin Google Gmail, inclusiv prin stocare care poate fi în afara SEE. Google descrie deciziile de adecvare aplicabile, cadrul UE–SUA pentru protecția datelor și clauzele contractuale standard în informațiile sale despre transferuri. Folosim un cont Gmail obișnuit, nu Google Workspace.'],
      ['basis', 'De ce folosim informațiile', 'Folosim progresul și setările locale pentru a oferi jocul solicitat (articolul 6 alineatul (1) litera (b) din GDPR, când se aplică). Înregistrările locale opționale sunt activate doar la alegerea ta și pot fi oprite și șterse. Pentru asistența obișnuită ne bazăm pe interesul legitim de a ajuta jucătorii și a menține funcționarea jocului (litera (f)); limităm informațiile la cele necesare și te poți opune prelucrării. Răspundem cererilor de exercitare a drepturilor GDPR pentru a respecta o obligație legală (litera (c)). Evidența minimă a soluționării susține interesul legitim de a demonstra tratarea corectă a cererilor și, după caz, respectarea obligațiilor legale. Nu vindem datele jucătorilor și nu le folosim pentru publicitate personalizată în această versiune beta.'],
      ['audience', 'Publicul vizat', 'Fuflet se adresează adolescenților de la 13 ani și adulților. Această versiune beta nu solicită data nașterii și nu creează conturi online de jucător. Dacă bănuiești că un copil ne-a trimis informații personale prin email, contactează-ne pentru a le analiza și a șterge informațiile care nu sunt necesare sau păstrate legal.'],
      ['rights', 'Opțiunile și drepturile tale', 'Dacă se aplică GDPR, poți cere accesul la datele personale pe care le deținem, corectarea, ștergerea, restricționarea prelucrării și, când este cazul, portabilitatea lor. Te poți opune prelucrărilor bazate pe interese legitime și îți poți retrage consimțământul fără a afecta prelucrările anterioare legale. Scrie-ne la adresa de mai sus; vom analiza cererea în raport cu datele pe care le deținem efectiv și condițiile aplicabile. Poți depune o plângere la autoritatea de supraveghere competentă, inclusiv ANSPDCP în România.'],
      ['future', 'Cumpărături, reclame și schimbări viitoare', 'Această versiune beta offline nu procesează cumpărături cu bani reali și nu afișează reclame. Ofertele viitoare din magazin sunt prezentări, nu produse disponibile pentru cumpărare. Practicile de prelucrare și politica trebuie revizuite înaintea activării serviciilor online. Vom actualiza această pagină când practicile se schimbă și vom oferi informările sau opțiunile necesare înainte de începerea unor prelucrări noi.'],
    ],
  },
}

export default function FufletPrivacyPage() {
  const { locale } = useLocale()
  const copy = privacy[locale]
  return (
    <PageTransition>
      <Seo title={`${copy.title} | Reality Computer Software`} description={copy.description} path="/fuflet/privacy" />
      <article className="section" style={{ maxWidth: 860, marginInline: 'auto', paddingTop: 'clamp(7rem, 12vw, 10rem)', paddingBottom: '5rem' }}>
        <p className="eyebrow">Fuflet — The Shapeshifter</p>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', overflowWrap: 'anywhere' }}>{copy.title}</h1>
        <p role="note" className="tag" style={{ display: 'block', whiteSpace: 'normal', marginBlock: '1.5rem' }}>{copy.draft}</p>
        <p className="lede">{copy.scope}</p>
        <nav aria-label={copy.contents} style={{ marginBlock: '2rem' }}>
          <h2 style={{ fontSize: '1.1rem' }}>{copy.contents}</h2>
          <ol style={{ paddingLeft: '1.4rem', lineHeight: 2 }}>
            {copy.sections.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}
          </ol>
        </nav>
        {copy.sections.map(([id, title, body]) => (
          <section key={id} id={id} style={{ scrollMarginTop: '7rem', paddingBlock: '1.25rem', borderTop: '1px solid rgba(128,128,128,.25)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '.75rem' }}>{title}</h2>
            <p style={{ lineHeight: 1.8, overflowWrap: 'anywhere' }}>{body}</p>
            {id === 'operator' && <p style={{ lineHeight: 1.8 }}>{company.registeredOffice} · CUI {company.cui} · {company.tradeRegister}</p>}
            {id === 'support' && <p style={{ lineHeight: 1.8 }}><a href="https://policies.google.com/privacy">Google Privacy</a> · <a href="https://policies.google.com/privacy/frameworks">Google — data transfers</a></p>}
            {id === 'rights' && <><p style={{ marginBlock: '1rem' }}><Link to="/fuflet/delete-account">{locale === 'ro' ? 'Solicită ștergerea contului sau a datelor Fuflet' : 'Request deletion of your Fuflet account or data'}</Link></p><a href="https://www.dataprotection.ro/">ANSPDCP</a></>}
          </section>
        ))}
        <p style={{ marginBlock: '1.5rem', overflowWrap: 'anywhere' }}>{copy.contact}: <a href="mailto:realitycomputersoftware.rcs@gmail.com">realitycomputersoftware.rcs@gmail.com</a></p>
        <Link to="/legal">{copy.companyLink}</Link>
      </article>
    </PageTransition>
  )
}
