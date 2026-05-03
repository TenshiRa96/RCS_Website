import { ChevronRight, FileText, Layers3, ShieldCheck } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLocale } from '../i18n'

export default function RouteContextBar() {
  const location = useLocation()
  const { content } = useLocale()
  const isSiteFlowSection =
    location.pathname.startsWith('/siteflow') || location.pathname.startsWith('/storybook')
  const isCompanyLegal = location.pathname === '/legal'

  if (!isSiteFlowSection && !isCompanyLegal) {
    return null
  }

  if (isCompanyLegal) {
    return (
      <div className="route-context">
        <div className="route-context__panel route-context__panel--minimal">
          <div className="route-context__breadcrumbs">
            <span>{content.routeContext.studio}</span>
            <ChevronRight size={14} />
            <span>{content.routeContext.companyInformation}</span>
            <ChevronRight size={14} />
            <strong>{content.routeContext.legal}</strong>
          </div>
          <NavLink to="/" className="route-context__pill">
            {content.routeContext.backToStudio}
          </NavLink>
        </div>
      </div>
    )
  }

  const basePath = location.pathname.startsWith('/storybook') ? '/storybook' : '/siteflow'

  return (
    <div className="route-context">
      <div className="route-context__panel">
        <div className="route-context__cluster">
          <div className="route-context__breadcrumbs">
            <span>{content.routeContext.portfolio}</span>
            <ChevronRight size={14} />
            <span>{content.routeContext.chromeExtension}</span>
            <ChevronRight size={14} />
            <strong>SiteFlow Playbooks</strong>
          </div>

          <div className="route-context__tabs">
            <NavLink
              to={basePath}
              end
              className={({ isActive }) => `route-context__pill${isActive ? ' active' : ''}`}
            >
              <Layers3 size={15} />
              {content.routeContext.overview}
            </NavLink>
            <NavLink
              to={`${basePath}/pricing`}
              className={({ isActive }) => `route-context__pill${isActive ? ' active' : ''}`}
            >
              <FileText size={15} />
              {content.routeContext.pricing}
            </NavLink>
            <NavLink
              to={`${basePath}/legal`}
              className={({ isActive }) => `route-context__pill${isActive ? ' active' : ''}`}
            >
              <ShieldCheck size={15} />
              {content.routeContext.legal}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
