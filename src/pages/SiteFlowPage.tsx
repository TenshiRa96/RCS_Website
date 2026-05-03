import {
  ArrowRight,
  BadgeDollarSign,
  CheckCheck,
  Keyboard,
  ListTodo,
  NotebookPen,
  PanelsTopLeft,
} from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'
import { useLocale } from '../i18n'

export default function SiteFlowPage() {
  const { content } = useLocale()

  useEffect(() => {
    document.title = content.meta.siteFlowTitle
  }, [content.meta.siteFlowTitle])

  return (
    <PageTransition>
      <section className="section inner-hero">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">{content.siteFlow.hero.eyebrow}</p>
            <h1>{content.siteFlow.hero.title}</h1>
            <p className="lede">{content.siteFlow.hero.body}</p>

            <div className="cta-row">
              <Link className="button button--primary" to="/siteflow/pricing">
                {content.siteFlow.hero.primaryCta}
                <BadgeDollarSign size={18} />
              </Link>
              <Link className="button button--ghost" to="/siteflow/legal">
                {content.siteFlow.hero.secondaryCta}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="tag-row">
              <span className="tag">{content.siteFlow.hero.tags[0]}</span>
              <span className="tag">{content.siteFlow.trial}</span>
              <span className="tag">
                {content.siteFlow.hero.tags[1]} {content.siteFlow.price}
              </span>
              <span className="tag">
                {content.siteFlow.hero.tags[2]}: {content.siteFlow.shortcut}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <TiltCard className="product-preview">
              <div className="browser-shell">
                <div className="browser-shell__top">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <div className="browser-url">{content.siteFlow.browserPreview.url}</div>
                </div>

                <div className="browser-shell__body">
                  <div className="browser-content">
                    {content.siteFlow.browserPreview.metrics.map((metric) => (
                      <div key={metric.label} className="browser-metric">
                        <span>{metric.label}</span>
                        <strong>{metric.value}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="playbook-panel">
                    <div className="playbook-panel__header">
                      <PanelsTopLeft size={18} />
                      <strong>{content.siteFlow.browserPreview.header}</strong>
                    </div>

                    <div className="playbook-stack">
                      <div className="playbook-block">
                        <div className="playbook-label">
                          <ListTodo size={16} />
                          {content.siteFlow.browserPreview.checklistLabel}
                        </div>
                        <ul>
                          {content.siteFlow.browserPreview.checklistItems.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="playbook-block">
                        <div className="playbook-label">
                          <NotebookPen size={16} />
                          {content.siteFlow.browserPreview.notesLabel}
                        </div>
                        <p>{content.siteFlow.browserPreview.notesBody}</p>
                      </div>

                      <div className="playbook-block">
                        <div className="playbook-label">
                          <Keyboard size={16} />
                          {content.siteFlow.browserPreview.snippetLabel}
                        </div>
                        <p>{content.siteFlow.browserPreview.snippetBody}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={content.siteFlow.highlightsSection.eyebrow}
            title={content.siteFlow.highlightsSection.title}
            description={content.siteFlow.highlightsSection.description}
          />
        </Reveal>

        <div className="card-grid card-grid--two">
          {content.siteFlow.highlights.map((highlight, index) => {
            const Icon = [PanelsTopLeft, NotebookPen, Keyboard, CheckCheck][index]

            return (
              <Reveal key={highlight.title} delay={index * 0.05}>
                <TiltCard className="feature-panel">
                  <div className="panel-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={content.siteFlow.howItWorks.eyebrow}
            title={content.siteFlow.howItWorks.title}
            description={content.siteFlow.howItWorks.description}
            center
          />
        </Reveal>

        <div className="stage-grid">
          {content.siteFlow.howItWorks.steps.map((step, index) => (
            <Reveal key={step.stage} delay={index * 0.05}>
              <div className="stage-card">
                <span className="stage-index">{step.stage}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={content.siteFlow.useCasesSection.eyebrow}
            title={content.siteFlow.useCasesSection.title}
            description={content.siteFlow.useCasesSection.description}
          />
        </Reveal>

        <div className="card-grid card-grid--two">
          {content.siteFlow.useCases.map((useCase, index) => (
            <Reveal key={useCase} delay={index * 0.04}>
              <div className="mini-panel">
                <span className="mini-panel__index">{index + 1}</span>
                <p>{useCase}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="cta-banner">
            <div>
              <p className="eyebrow">{content.siteFlow.ctaBanner.eyebrow}</p>
              <h2>{content.siteFlow.ctaBanner.title}</h2>
            </div>
            <div className="cta-row">
              <Link className="button button--primary" to="/siteflow/pricing">
                {content.siteFlow.ctaBanner.pricing}
                <ArrowRight size={18} />
              </Link>
              <Link className="button button--ghost" to="/siteflow/legal">
                {content.siteFlow.ctaBanner.legal}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
