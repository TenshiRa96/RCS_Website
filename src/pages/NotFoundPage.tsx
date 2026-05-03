import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocale } from '../i18n'
import PageTransition from '../components/PageTransition'

export default function NotFoundPage() {
  const { content } = useLocale()

  useEffect(() => {
    document.title = content.meta.notFoundTitle
  }, [content.meta.notFoundTitle])

  return (
    <PageTransition>
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
