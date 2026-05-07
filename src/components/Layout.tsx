import type { ReactNode } from 'react'
import {
  ChevronDown,
  Globe,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  PanelsTopLeft,
  Rocket,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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

type DropdownName = 'services' | 'portfolio' | null

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const { locale, setLocale, content } = useLocale()
  const headerRef = useRef<HTMLDivElement>(null)
  const [openDropdown, setOpenDropdown] = useState<DropdownName>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    function handleScroll() {
      const currentScrollY = window.scrollY
      const mobileViewport = window.innerWidth <= 960
      const isGoingDown = currentScrollY > lastScrollY + 6
      const isGoingUp = currentScrollY < lastScrollY - 6

      setIsScrolled(currentScrollY > 12)

      if (mobileViewport) {
        setIsHidden(false)
        lastScrollY = currentScrollY
        return
      }

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
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
    }
  }, [])

  useEffect(() => {
    setOpenDropdown(null)
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : previousOverflow

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMenuOpen])

  const siteflowActive =
    location.pathname.startsWith('/siteflow') || location.pathname.startsWith('/storybook')
  const servicesActive = location.pathname === '/' && location.hash.startsWith('#services')
  const portfolioActive =
    siteflowActive || (location.pathname === '/' && location.hash.startsWith('#portfolio'))
  const contactActive = location.pathname === '/' && location.hash === '#contact'
  const studioActive = location.pathname === '/' && location.hash === ''
  const headerClassName = [
    'site-header',
    isScrolled ? 'site-header--scrolled' : '',
    isHidden ? 'site-header--hidden' : '',
  ]
    .filter(Boolean)
    .join(' ')
  const serviceIcons = [Globe, PanelsTopLeft, Layers3, Rocket]
  const portfolioIcons = [Globe, Layers3]

  function navLinkClassName(active: boolean) {
    return `nav-link${active ? ' active' : ''}`
  }

  function toggleDropdown(name: Exclude<DropdownName, null>) {
    setOpenDropdown((current) => (current === name ? null : name))
  }

  return (
    <div className="site-shell">
      <TopProgress />
      <AnimatedBackground />
      <CursorGlow />

      <header className={headerClassName}>
        <div ref={headerRef} className="header-panel">
          <Link to="/" className="brand-lockup" aria-label={content.navigation.homeAria}>
            <Logo />
          </Link>

          <nav
            className={`site-nav${mobileMenuOpen ? ' site-nav--open' : ''}`}
            aria-label={content.navigation.primaryNavigation}
          >
            <div className="site-nav__main">
              <Link to="/" className={navLinkClassName(studioActive)}>
                {content.navigation.studio}
              </Link>

              <div
                className={`nav-dropdown${openDropdown === 'services' ? ' nav-dropdown--open' : ''}`}
              >
                <button
                  type="button"
                  className={navLinkClassName(servicesActive)}
                  aria-expanded={openDropdown === 'services'}
                  aria-haspopup="menu"
                  onClick={() => toggleDropdown('services')}
                >
                  {content.navigation.services}
                  <ChevronDown size={16} className="nav-link__chevron" />
                </button>

                <div
                  className="nav-submenu nav-submenu--wide"
                  role="menu"
                  aria-label={content.navigation.servicesMenuAria}
                >
                  <div className="nav-submenu__intro">
                    <span className="nav-submenu__eyebrow">
                      {content.navigation.servicesOverviewEyebrow}
                    </span>
                    <strong>{content.navigation.servicesOverviewTitle}</strong>
                    <span>{content.navigation.servicesOverviewBody}</span>
                  </div>

                  <div className="nav-submenu__grid">
                    {content.navigation.serviceMenuItems.map((item, index) => {
                      const Icon = serviceIcons[index]

                      return (
                        <Link key={item.title} to={item.href} className="nav-submenu__card" role="menuitem">
                          <span className="nav-submenu__icon">
                            <Icon size={18} />
                          </span>
                          <span className="nav-submenu__eyebrow">{item.eyebrow}</span>
                          <strong>{item.title}</strong>
                          <span>{item.body}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div
                className={`nav-dropdown${openDropdown === 'portfolio' ? ' nav-dropdown--open' : ''}`}
              >
                <button
                  type="button"
                  className={navLinkClassName(portfolioActive)}
                  aria-expanded={openDropdown === 'portfolio'}
                  aria-haspopup="menu"
                  onClick={() => toggleDropdown('portfolio')}
                >
                  {content.navigation.portfolio}
                  <ChevronDown size={16} className="nav-link__chevron" />
                </button>

                <div
                  className="nav-submenu nav-submenu--wide"
                  role="menu"
                  aria-label={content.navigation.portfolioMenuAria}
                >
                  <div className="nav-submenu__intro">
                    <span className="nav-submenu__eyebrow">
                      {content.navigation.portfolioOverviewEyebrow}
                    </span>
                    <strong>{content.navigation.portfolioOverviewTitle}</strong>
                    <span>{content.navigation.portfolioOverviewBody}</span>
                  </div>

                  <div className="nav-submenu__grid nav-submenu__grid--compact">
                    {content.navigation.portfolioMenuItems.map((item, index) => {
                      const Icon = portfolioIcons[index]

                      return (
                        <Link key={item.title} to={item.href} className="nav-submenu__card" role="menuitem">
                          <span className="nav-submenu__icon">
                            <Icon size={18} />
                          </span>
                          <span className="nav-submenu__eyebrow">{item.eyebrow}</span>
                          <strong>{item.title}</strong>
                          <span>{item.body}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>

              <Link to="/#contact" className={navLinkClassName(contactActive)}>
                {content.navigation.contact}
              </Link>
            </div>

            <div className="site-nav__mobile-actions">
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

            <div className="header-quick-actions">
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

          <button
            type="button"
            className="mobile-menu-button"
            aria-label={mobileMenuOpen ? content.navigation.closeMenu : content.navigation.openMenu}
            aria-expanded={mobileMenuOpen}
            onClick={() => {
              setMobileMenuOpen((current) => !current)
              setOpenDropdown(null)
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <RouteContextBar />

      <main className="site-main">{children}</main>
      <Footer />
    </div>
  )
}
