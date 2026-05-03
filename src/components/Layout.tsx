import type { ReactNode } from 'react'
import { ChevronDown, Mail, MessageCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { company } from '../data/site'
import { useLocale } from '../i18n'
import AnimatedBackground from './AnimatedBackground'
import CursorGlow from './CursorGlow'
import Footer from './Footer'
import Logo from './Logo'
import RouteContextBar from './RouteContextBar'
import TopProgress from './TopProgress'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const { locale, setLocale, content } = useLocale()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    function handleScroll() {
      const currentScrollY = window.scrollY
      const isGoingDown = currentScrollY > lastScrollY + 6
      const isGoingUp = currentScrollY < lastScrollY - 6

      setIsScrolled(currentScrollY > 18)

      if (currentScrollY < 80) {
        setIsHidden(false)
      } else if (isGoingDown) {
        setIsHidden(true)
      } else if (isGoingUp) {
        setIsHidden(false)
      }

      lastScrollY = currentScrollY
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setPortfolioOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  useEffect(() => {
    setPortfolioOpen(false)
  }, [location.pathname, location.hash])

  const siteflowActive =
    location.pathname.startsWith('/siteflow') || location.pathname.startsWith('/storybook')

  const navLinkClassName = (active: boolean) => `nav-link${active ? ' active' : ''}`
  const headerClassName = [
    'site-header',
    isScrolled ? 'site-header--scrolled' : '',
    isHidden ? 'site-header--hidden' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="site-shell">
      <TopProgress />
      <AnimatedBackground />
      <CursorGlow />

      <header className={headerClassName}>
        <div className="header-panel">
          <Link to="/" className="brand-lockup" aria-label={content.navigation.homeAria}>
            <Logo />
          </Link>

          <nav className="site-nav" aria-label={content.navigation.primaryNavigation}>
            <NavLink to="/" end className={({ isActive }) => navLinkClassName(isActive)}>
              {content.navigation.studio}
            </NavLink>

            <div
              ref={dropdownRef}
              className={`nav-dropdown${portfolioOpen ? ' nav-dropdown--open' : ''}`}
            >
              <button
                type="button"
                className={navLinkClassName(siteflowActive)}
                aria-expanded={portfolioOpen}
                aria-haspopup="menu"
                onClick={() => setPortfolioOpen((current) => !current)}
              >
                {content.navigation.portfolio}
                <ChevronDown size={16} className="nav-link__chevron" />
              </button>

              <div
                className="nav-submenu"
                role="menu"
                aria-label={content.navigation.portfolioMenuAria}
              >
                <Link to="/#portfolio" className="nav-submenu__lead" role="menuitem">
                  <span className="nav-submenu__eyebrow">
                    {content.navigation.portfolioOverviewEyebrow}
                  </span>
                  <strong>{content.navigation.portfolioOverviewTitle}</strong>
                  <span>{content.navigation.portfolioOverviewBody}</span>
                </Link>

                <a
                  href="https://horeca-tracker-six.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-submenu__item"
                  role="menuitem"
                >
                  <span className="nav-submenu__eyebrow">{content.navigation.horecaEyebrow}</span>
                  <strong>Horeca Tracker</strong>
                  <span>{content.navigation.horecaBody}</span>
                </a>

                <Link to="/siteflow" className="nav-submenu__item" role="menuitem">
                  <span className="nav-submenu__eyebrow">{content.navigation.siteFlowEyebrow}</span>
                  <strong>SiteFlow Playbooks</strong>
                  <span>{content.navigation.siteFlowBody}</span>
                </Link>
              </div>
            </div>

            <Link to="/#contact" className="nav-link">
              {content.navigation.contact}
            </Link>
          </nav>

          <div className="header-actions">
            <div className="lang-switch" aria-label={content.navigation.language}>
              <button
                type="button"
                className={`lang-switch__button${locale === 'en' ? ' active' : ''}`}
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
              >
                {content.navigation.english}
              </button>
              <button
                type="button"
                className={`lang-switch__button${locale === 'ro' ? ' active' : ''}`}
                onClick={() => setLocale('ro')}
                aria-pressed={locale === 'ro'}
              >
                {content.navigation.romanian}
              </button>
            </div>

            <a className="button button--ghost button--small" href={`mailto:${company.email}`}>
              <Mail size={16} />
              {content.navigation.email}
            </a>
            <a
              className="button button--primary button--small"
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} />
              {content.navigation.whatsapp}
            </a>
          </div>
        </div>
      </header>

      <RouteContextBar />

      <main className="site-main">{children}</main>
      <Footer />
    </div>
  )
}
