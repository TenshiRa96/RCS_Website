import { BadgeDollarSign, KeyRound, LockKeyhole, ScrollText } from 'lucide-react'
import { useEffect } from 'react'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import { useLocale } from '../i18n'

export default function SiteFlowLegalPage() {
  const { content } = useLocale()

  useEffect(() => {
    document.title = content.meta.siteFlowLegalTitle
  }, [content.meta.siteFlowLegalTitle])

  return (
    <PageTransition>
      <section className="section inner-hero">
        <Reveal>
          <p className="eyebrow">{content.siteFlow.legalPage.hero.eyebrow}</p>
          <h1>{content.siteFlow.legalPage.hero.title}</h1>
          <p className="lede">{content.siteFlow.legalPage.hero.description}</p>
          <div className="tag-row">
            <span className="tag">
              {content.siteFlow.legalPage.updatedLabel}: {content.siteFlow.legalPage.updatedOn}
            </span>
            {content.siteFlow.legalPage.hero.tags.map((tag) => (
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
            <ScrollText size={20} />
            <h2>{content.siteFlow.legalPage.sections[0].title}</h2>
          </div>
          <p>{content.siteFlow.legalPage.sections[0].intro}</p>
          <ul className="legal-list">
            {content.siteFlow.legalPage.sections[0].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="legal-block" delay={0.06}>
          <div className="legal-title">
            <LockKeyhole size={20} />
            <h2>{content.siteFlow.legalPage.sections[1].title}</h2>
          </div>
          <p>{content.siteFlow.legalPage.sections[1].intro}</p>
          <ul className="legal-list">
            {content.siteFlow.legalPage.sections[1].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="legal-block" delay={0.1}>
          <div className="legal-title">
            <BadgeDollarSign size={20} />
            <h2>{content.siteFlow.legalPage.sections[2].title}</h2>
          </div>
          <p>{content.siteFlow.legalPage.sections[2].intro}</p>
          <ul className="legal-list">
            {content.siteFlow.legalPage.sections[2].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="legal-block" delay={0.14}>
          <div className="legal-title">
            <KeyRound size={20} />
            <h2>{content.siteFlow.legalPage.sections[3].title}</h2>
          </div>
          <p>{content.siteFlow.legalPage.sections[3].intro}</p>
          <ul className="legal-list">
            {content.siteFlow.legalPage.sections[3].points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </section>
    </PageTransition>
  )
}
