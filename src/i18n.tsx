import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { siteContent, type Locale } from './data/site'

type LocaleContextValue = {
  locale: Locale
  setLocale: Dispatch<SetStateAction<Locale>>
  content: (typeof siteContent)[Locale]
}

const LocaleContext = createContext<LocaleContextValue | null>(null)
const storageKey = 'rcs-locale'

type LocaleProviderProps = {
  children: ReactNode
}

function resolveInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const storedLocale = window.localStorage.getItem(storageKey)
  if (storedLocale === 'en' || storedLocale === 'ro') {
    return storedLocale
  }

  const browserLocale = window.navigator.language.toLowerCase()
  return browserLocale.startsWith('ro') ? 'ro' : 'en'
}

export function LocaleProvider({ children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(resolveInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(storageKey, locale)
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, content: siteContent[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used inside LocaleProvider.')
  }

  return context
}
