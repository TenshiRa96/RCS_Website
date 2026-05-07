import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLocale } from '../i18n'
import PageTransition from '../components/PageTransition'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  const { content, locale } = useLocale()
  const seoDescription =
    locale === 'ro'
      ? 'Pagina cautata nu exista. Revino la website-ul Reality Computer Software.'
      : 'The page you were looking for does not exist. Return to the Reality Computer Software website.'

  return (
    <PageTransition>
      <Seo
        title={content.meta.notFoundTitle}
        description={seoDescription}
        path="/404"
        noindex
      />
      <section className="section not-found">
        <p className="eyebrow">{content.notFound.eyebrow}</p>
        <h1>{content.notFound.title}</h1>
        <p className="lede">{content.notFound.description}</p>
        <Link className="button button--primary" to="/">
          {content.notFound.cta}
          <ArrowRight size={18} />
        </Link>
      </section>
    </PageTransition>
  )
}
