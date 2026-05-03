import { ArrowRight, BadgeDollarSign, CircleHelp, Mail, ShieldCheck } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import { company } from '../data/site'
import { useLocale } from '../i18n'

export default function SiteFlowPricingPage() {
  const { content } = useLocale()

  useEffect(() => {
    document.title = content.meta.siteFlowPricingTitle
  }, [content.meta.siteFlowPricingTitle])

  return (
    <PageTransition>
      <section className="section inner-hero">
        <Reveal>
          <p className="eyebrow">{content.siteFlow.pricingPage.eyebrow}</p>
          <h1>{content.siteFlow.pricingPage.title}</h1>
          <p className="lede">{content.siteFlow.pricingPage.description}</p>
          <div className="tag-row">
            <span className="tag">
              {content.siteFlow.pricingPage.summaryTags.oneTimePro}: {content.siteFlow.price}
            </span>
            <span className="tag">
              {content.siteFlow.pricingPage.summaryTags.trial}: {content.siteFlow.trial}
            </span>
            <span className="tag">{content.siteFlow.pricingPage.checkoutModel}</span>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="card-grid card-grid--pricing">
          {content.siteFlow.pricingPage.tiers.map((tier, index) => (
            <Reveal key={tier.title} delay={index * 0.06}>
              <TiltCard className={`pricing-panel${tier.featured ? ' pricing-panel--featured' : ''}`}>
                <div className="pricing-meta">
                  <span className="project-type">{tier.title}</span>
                  {tier.featured ? (
                    <span className="tag tag--accent">{content.siteFlow.pricingPage.featuredTag}</span>
                  ) : null}
                </div>
                <h2>{tier.price}</h2>
                <p>{tier.note}</p>
                <ul className="bullet-list">
                  {tier.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="comparison-panel">
            <div className="comparison-heading">
              <p className="eyebrow">{content.siteFlow.pricingPage.comparisonEyebrow}</p>
              <h2>{content.siteFlow.pricingPage.comparisonTitle}</h2>
            </div>

            <div className="comparison-table">
              <div className="comparison-row comparison-row--head">
                {content.siteFlow.pricingPage.comparisonHeaders.map((header) => (
                  <span key={header}>{header}</span>
                ))}
              </div>

              {content.siteFlow.pricingPage.comparisonRows.map((row) => (
                <div key={row.label} className="comparison-row">
                  <span>{row.label}</span>
                  {row.values.map((value) => (
                    <span key={`${row.label}-${value}`}>{value}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="card-grid card-grid--two">
          <Reveal>
            <div className="mini-panel mini-panel--info">
              <BadgeDollarSign size={20} />
              <h3>{content.siteFlow.pricingPage.infoCards[0].title}</h3>
              <p>{content.siteFlow.pricingPage.infoCards[0].body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mini-panel mini-panel--info">
              <CircleHelp size={20} />
              <h3>{content.siteFlow.pricingPage.infoCards[1].title}</h3>
              <p>{content.siteFlow.pricingPage.infoCards[1].body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mini-panel mini-panel--info">
              <ShieldCheck size={20} />
              <h3>{content.siteFlow.pricingPage.infoCards[2].title}</h3>
              <p>{content.siteFlow.pricingPage.infoCards[2].body}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mini-panel mini-panel--info">
              <Mail size={20} />
              <h3>{content.siteFlow.pricingPage.infoCards[3].title}</h3>
              <p>{content.siteFlow.pricingPage.infoCards[3].body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="cta-banner">
            <div>
              <p className="eyebrow">{content.siteFlow.pricingPage.nextStep.eyebrow}</p>
              <h2>{content.siteFlow.pricingPage.nextStep.title}</h2>
            </div>
            <div className="cta-row">
              <Link className="button button--primary" to="/siteflow/legal">
                {content.siteFlow.pricingPage.nextStep.legal}
                <ArrowRight size={18} />
              </Link>
              <a className="button button--ghost" href={`mailto:${company.email}`}>
                {content.siteFlow.pricingPage.nextStep.contact}
                <Mail size={18} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
