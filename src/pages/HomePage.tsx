import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Layers3,
  PanelsTopLeft,
  Phone,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import OfferRequestForm from '../components/OfferRequestForm'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'
import { company } from '../data/site'
import { useLocale } from '../i18n'

export default function HomePage() {
  const { content, locale } = useLocale()
  const serviceIcons = [Globe, PanelsTopLeft, Layers3, Rocket]
  const websiteOfferIcons = [Globe, PanelsTopLeft, Sparkles]
  const seoDescription =
    locale === 'ro'
      ? 'Reality Computer Software creeaza website-uri personalizate, magazine de prezentare si aplicatii web, cu preturi de pornire de la 500 EUR si accent pe design premium, mobil si SEO.'
      : 'Reality Computer Software builds custom websites, presentation sites, and web apps starting from 500 EUR, with premium design, mobile readiness, and SEO-friendly structure.'
  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: company.legalName,
      url: company.siteUrl,
      email: company.email,
      telephone: company.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Aleea Campul cu Flori 14',
        addressLocality: 'Bucuresti',
        addressCountry: 'RO',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: company.name,
      url: company.siteUrl,
      inLanguage: locale,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: company.legalName,
      url: company.siteUrl,
      email: company.email,
      telephone: company.phoneDisplay,
      priceRange: '€500+',
      areaServed: 'RO',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: locale === 'ro' ? 'Servicii principale' : 'Primary services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: locale === 'ro' ? 'Website-uri personalizate' : 'Custom websites',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'EUR',
              minPrice: 500,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: locale === 'ro' ? 'Aplicatii personalizate' : 'Custom apps',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: locale === 'ro' ? 'Produse software' : 'Software products',
            },
          },
        ],
      },
    },
  ]

  return (
    <PageTransition>
      <Seo
        title={content.meta.homeTitle}
        description={seoDescription}
        path="/"
        schema={homeSchema}
      />
      <section className="section hero-section">
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">{content.home.hero.eyebrow}</p>
            <h1>{content.home.hero.title}</h1>
            <p className="lede">{content.home.hero.body}</p>

            <div className="cta-row">
              <Link className="button button--primary" to="/#website-offer">
                {content.home.hero.primaryCta}
                <ArrowRight size={18} />
              </Link>
              <Link className="button button--ghost" to="/#portfolio-websites">
                {content.home.hero.secondaryCta}
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="stat-grid">
              {content.home.stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                  <p>{stat.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={0.12}>
            <div className="hero-observatory" id="website-offer">
              <div className="observatory-ring observatory-ring--one" />
              <div className="observatory-ring observatory-ring--two" />

              {content.home.orbitSignals.map((signal) => (
                <span
                  key={signal.label}
                  className="orbit-chip"
                  style={{ top: signal.top, left: signal.left }}
                >
                  {signal.label}
                </span>
              ))}

              <TiltCard className="observatory-shell">
                <div className="observatory-console offer-console">
                  <div className="panel-topline">
                    <span>{content.home.websiteOffer.toplineLeft}</span>
                    <span>{content.home.websiteOffer.toplineRight}</span>
                  </div>

                  <div className="offer-summary">
                    <div className="offer-price-badge">
                      <span>{content.home.websiteOffer.priceLabel}</span>
                      <strong>{content.home.websiteOffer.priceValue}</strong>
                    </div>

                    <div className="observatory-copy offer-copy">
                      <h2>{content.home.websiteOffer.title}</h2>
                      <p>{content.home.websiteOffer.body}</p>
                    </div>
                  </div>

                  <div className="offer-tag-row">
                    {content.home.websiteOffer.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="signal-grid" id="website-pricing">
                    {content.home.websiteOffer.pricing.map((item, index) => {
                      const Icon = websiteOfferIcons[index]

                      return (
                        <div key={item.title} className="signal-card price-card">
                          <Icon size={18} />
                          <strong>{item.title}</strong>
                          <span className="price-card__value">{item.price}</span>
                          <span>{item.body}</span>
                        </div>
                      )
                    })}
                  </div>

                  <p className="offer-footnote">{content.home.websiteOffer.priceNote}</p>

                  <OfferRequestForm content={content.home.offerForm} />
                </div>
              </TiltCard>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="services">
        <Reveal>
          <SectionHeading
            eyebrow={content.home.servicesSection.eyebrow}
            title={content.home.servicesSection.title}
            description={content.home.servicesSection.description}
          />
        </Reveal>

        <div className="card-grid card-grid--services">
          {content.home.services.map((service, index) => {
            const Icon = serviceIcons[index]

            return (
              <Reveal
                key={service.title}
                className="grid-reveal"
                delay={index * 0.06}
              >
                <TiltCard
                  className={`feature-panel${'featured' in service && service.featured ? ' feature-panel--featured' : ''}`}
                  id={`services-${service.id}`}
                >
                  <div className="panel-icon">
                    <Icon size={22} />
                  </div>
                  {'priceFrom' in service ? <span className="service-price">{service.priceFrom}</span> : null}
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="bullet-list">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {'ctaLabel' in service ? (
                    <Link className="text-link service-cta" to="/#website-offer">
                      {service.ctaLabel}
                      <ArrowRight size={16} />
                    </Link>
                  ) : null}
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="section" id="portfolio">
        <Reveal>
          <SectionHeading
            eyebrow={content.home.portfolioSection.eyebrow}
            title={content.home.portfolioSection.title}
            description={content.home.portfolioSection.description}
          />
        </Reveal>

        <div className="portfolio-stack">
          {content.home.portfolioGroups.map((group, groupIndex) => {
            const projects = content.home.projects.filter(
              (project) => project.category === group.category,
            )

            return (
              <div key={group.id} id={group.id} className="portfolio-group">
                <Reveal delay={groupIndex * 0.06}>
                  <div className="portfolio-subhead">
                    <span className="project-type">{group.eyebrow}</span>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </Reveal>

                <div className="card-grid card-grid--portfolio portfolio-group__grid">
                  {projects.map((project, index) => (
                    <Reveal
                      key={project.title}
                      className="grid-reveal"
                      delay={index * 0.06}
                    >
                      <TiltCard className="portfolio-panel">
                        <div className="project-meta">
                          <span className="project-type">{project.type}</span>
                          <div className="tag-row">
                            {project.tags.map((tag) => (
                              <span key={tag} className="tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <h3>{project.title}</h3>
                        <p>{project.description}</p>

                        <ul className="bullet-list">
                          {project.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>

                        {project.external ? (
                          <a
                            className="text-link"
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.linkLabel}
                            <ArrowUpRight size={16} />
                          </a>
                        ) : (
                          <Link className="text-link" to={project.href}>
                            {project.linkLabel}
                            <ArrowRight size={16} />
                          </Link>
                        )}
                      </TiltCard>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={content.home.buildApproach.eyebrow}
            title={content.home.buildApproach.title}
            description={content.home.buildApproach.description}
            center
          />
        </Reveal>

        <div className="stage-grid">
          {content.home.stages.map((stage, index) => (
            <Reveal key={stage.stage} className="grid-reveal" delay={index * 0.05}>
              <div className="stage-card">
                <span className="stage-index">{stage.stage}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <SectionHeading
            eyebrow={content.home.principlesSection.eyebrow}
            title={content.home.principlesSection.title}
            description={content.home.principlesSection.description}
          />
        </Reveal>

        <div className="card-grid card-grid--three">
          {content.home.principles.map((principle, index) => (
            <Reveal key={principle.title} className="grid-reveal" delay={index * 0.06}>
              <TiltCard className="principle-panel">
                <div className="panel-icon">
                  <Sparkles size={22} />
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="eyebrow">{content.home.contactSection.eyebrow}</p>
              <h2>{content.home.contactSection.title}</h2>
              <p className="section-copy">{content.home.contactSection.description}</p>
            </div>

            <div className="contact-actions">
              <a className="button button--primary" href={`mailto:${company.email}`}>
                {content.home.contactSection.email}
                <ArrowRight size={18} />
              </a>
              <a className="button button--ghost" href={company.whatsappUrl} target="_blank" rel="noreferrer">
                {content.home.contactSection.whatsapp}
                <Phone size={18} />
              </a>
            </div>

            <div className="registry-grid">
              <div className="registry-card">
                <span className="registry-label">{content.home.contactSection.registryLabels.email}</span>
                <a className="registry-value" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </div>
              <div className="registry-card">
                <span className="registry-label">{content.home.contactSection.registryLabels.phone}</span>
                <a className="registry-value" href={`tel:${company.phone}`}>
                  {company.phoneDisplay}
                </a>
              </div>
              <div className="registry-card">
                <span className="registry-label">{content.home.contactSection.registryLabels.cui}</span>
                <p>{company.cui}</p>
              </div>
              <div className="registry-card">
                <span className="registry-label">
                  {content.home.contactSection.registryLabels.tradeRegister}
                </span>
                <p>{company.tradeRegister}</p>
              </div>
              <div className="registry-card registry-span">
                <span className="registry-label">
                  {content.home.contactSection.registryLabels.registeredOffice}
                </span>
                <p>{company.registeredOffice}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  )
}
