import { useEffect } from 'react'
import { company } from '../data/site'
import { useLocale } from '../i18n'
import heroImage from '../assets/hero.png'

type SeoProps = {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article' | 'product'
  image?: string
  schema?: Record<string, unknown> | Array<Record<string, unknown>>
  noindex?: boolean
}

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

function ensureLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector)

  if (!element) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

export default function Seo({
  title,
  description,
  path = '/',
  type = 'website',
  image,
  schema,
  noindex = false,
}: SeoProps) {
  const { locale } = useLocale()

  useEffect(() => {
    const canonicalUrl = new URL(path, company.siteUrl).toString()
    const imageUrl = image ?? new URL(heroImage, company.siteUrl).toString()

    document.title = title

    ensureMeta('meta[name="description"]', { name: 'description', content: description })
    ensureMeta('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex, nofollow' : 'index, follow',
    })
    ensureMeta('meta[property="og:type"]', { property: 'og:type', content: type })
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: title })
    ensureMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    ensureMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: company.name,
    })
    ensureMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: locale === 'ro' ? 'ro_RO' : 'en_US',
    })
    ensureMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    })
    ensureMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title })
    ensureMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    })
    ensureMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    })
    ensureLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl })

    let schemaElement = document.head.querySelector<HTMLScriptElement>('#seo-structured-data')

    if (schema) {
      if (!schemaElement) {
        schemaElement = document.createElement('script')
        schemaElement.id = 'seo-structured-data'
        schemaElement.type = 'application/ld+json'
        document.head.appendChild(schemaElement)
      }

      schemaElement.textContent = JSON.stringify(schema)
    } else if (schemaElement) {
      schemaElement.remove()
    }
  }, [description, image, locale, noindex, path, schema, title])

  return null
}
