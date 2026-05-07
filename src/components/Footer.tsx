import { Link } from 'react-router-dom'
import { company } from '../data/site'
import { useLocale } from '../i18n'
import Logo from './Logo'

export default function Footer() {
  const { content } = useLocale()

  return (
    <footer className="site-footer">
      <div className="footer-panel">
        <div className="footer-brand">
          <Logo compact />
          <p>{content.footer.brandBody}</p>
        </div>

        <div className="footer-column">
          <span className="footer-title">{content.footer.explore}</span>
          <Link to="/">{content.footer.home}</Link>
          <Link to="/#services">{content.navigation.services}</Link>
          <Link to="/#portfolio">{content.navigation.portfolio}</Link>
          <Link to="/siteflow">SiteFlow Playbooks</Link>
          <Link to="/siteflow/pricing">{content.footer.pricing}</Link>
        </div>

        <div className="footer-column">
          <span className="footer-title">{content.footer.legal}</span>
          <Link to="/siteflow/legal">{content.footer.siteFlowLegal}</Link>
          <Link to="/legal">{content.footer.companyLegal}</Link>
          <a href={`mailto:${company.email}`} className="footer-detail footer-detail--link">
            <span className="footer-meta-label">{content.footer.email}</span>
            <span className="footer-meta-value">{company.email}</span>
          </a>
          <a href={`tel:${company.phone}`} className="footer-detail footer-detail--link">
            <span className="footer-meta-label">{content.footer.phone}</span>
            <span className="footer-meta-value">{company.phoneDisplay}</span>
          </a>
        </div>

        <div className="footer-column">
          <span className="footer-title">{content.footer.company}</span>
          <p className="footer-company-name">{company.legalName}</p>
          <div className="footer-detail">
            <span className="footer-meta-label">{content.footer.cui}</span>
            <span className="footer-meta-value">{company.cui}</span>
          </div>
          <div className="footer-detail">
            <span className="footer-meta-label">{content.footer.tradeRegister}</span>
            <span className="footer-meta-value">{company.tradeRegister}</span>
          </div>
          <div className="footer-detail">
            <span className="footer-meta-label">{content.footer.registeredOffice}</span>
            <span className="footer-meta-value">{company.registeredOffice}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
