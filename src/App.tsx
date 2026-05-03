import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import CompanyLegalPage from './pages/CompanyLegalPage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import SiteFlowLegalPage from './pages/SiteFlowLegalPage'
import SiteFlowPage from './pages/SiteFlowPage'
import SiteFlowPricingPage from './pages/SiteFlowPricingPage'

export default function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={`${location.pathname}${location.hash}`}>
            <Route path="/" element={<HomePage />} />
            <Route path="/siteflow" element={<SiteFlowPage />} />
            <Route path="/storybook" element={<SiteFlowPage />} />
            <Route path="/siteflow/pricing" element={<SiteFlowPricingPage />} />
            <Route path="/storybook/pricing" element={<SiteFlowPricingPage />} />
            <Route path="/siteflow/legal" element={<SiteFlowLegalPage />} />
            <Route path="/storybook/legal" element={<SiteFlowLegalPage />} />
            <Route path="/legal" element={<CompanyLegalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}
