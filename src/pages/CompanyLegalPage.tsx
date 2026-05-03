import { Mail, MapPinned, Phone, ShieldCheck } from 'lucide-react'
import { useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import { useLocale } from '../i18n'

export default function CompanyLegalPage() {
  const { content } = useLocale()

  useEffect(() => {
    document.title = content.meta.companyLegalTitle
  }, [content.meta.companyLegalTitle])

  return (
    <PageTransition>
      <section className="section inner-hero">
        <Reveal>
          <p className="eyebrow">{content.companyLegal.hero.eyebrow}</p>
          <h1>{content.companyLegal.hero.title}</h1>
          <p className="lede">{content.companyLegal.hero.description}</p>
          <div className="tag-row">
            <span className="tag">
              {content.companyLegal.updatedLabel}: {content.companyLegal.updatedOn}
            </span>
            {content.companyLegal.hero.tags.map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section legal-grid">
        <Reveal className="legal-block">
          <div className="legal-title">
            <ShieldCheck size={20} />
            <h2>{content.companyLegal.sections[0].title}</h2>
          </div>
          <p>{content.companyLegal.sections[0].intro}</p>
          <ul className="legal-list">
            {content.companyLegal.sections[0].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="legal-block" delay={0.08}>
          <div className="legal-title">
            <Mail size={20} />
            <h2>{content.companyLegal.sections[1].title}</h2>
          </div>
          <p>{content.companyLegal.sections[1].intro}</p>
          <ul className="legal-list">
            {content.companyLegal.sections[1].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="legal-block" delay={0.12}>
          <div className="legal-title">
            <MapPinned size={20} />
            <h2>{content.companyLegal.sections[2].title}</h2>
          </div>
          <ul className="legal-list">
            {content.companyLegal.sections[2].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="legal-block" delay={0.16}>
          <div className="legal-title">
            <Phone size={20} />
            <h2>{content.companyLegal.sections[3].title}</h2>
          </div>
          <p>{content.companyLegal.sections[3].intro}</p>
          <ul className="legal-list">
            {content.companyLegal.sections[3].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </PageTransition>
  )
}
