import type { FormEvent } from 'react'
import { ArrowRight, ChevronDown, LoaderCircle, Mail } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { company } from '../data/site'
import { useLocale } from '../i18n'

type OfferRequestFormContent = {
  eyebrow: string
  title: string
  description: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  projectTypeLabel: string
  budgetLabel: string
  detailsLabel: string
  detailsPlaceholder: string
  projectTypeOptions: readonly string[]
  budgetOptions: readonly string[]
  submitIdle: string
  submitSending: string
  successMessage: string
  errorMessage: string
  privacyNote: string
  directEmail: string
  subject: string
}

type OfferRequestFormProps = {
  content: OfferRequestFormContent
  showIntro?: boolean
}

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

type OfferSelectProps = {
  label: string
  name: string
  options: readonly string[]
  value: string
  onChange: (value: string) => void
}

function OfferSelect({ label, name, options, value, onChange }: OfferSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const labelId = useId()
  const listboxId = useId()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <div
      ref={rootRef}
      className={`offer-field offer-field--select${isOpen ? ' offer-field--select-open' : ''}`}
    >
      <span id={labelId}>{label}</span>
      <input type="hidden" name={name} value={value} />

      <button
        type="button"
        className={`offer-select${isOpen ? ' offer-select--open' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={labelId}
        aria-controls={listboxId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="offer-select__value">{value}</span>
        <ChevronDown size={18} className="offer-select__chevron" />
      </button>

      {isOpen ? (
        <div className="offer-select__menu" role="listbox" id={listboxId} aria-labelledby={labelId}>
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={option === value}
              className={`offer-select__option${option === value ? ' is-selected' : ''}`}
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function OfferRequestForm({
  content,
  showIntro = true,
}: OfferRequestFormProps) {
  const { locale } = useLocale()
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [submitError, setSubmitError] = useState('')
  const [projectType, setProjectType] = useState(content.projectTypeOptions[0] ?? '')
  const [budget, setBudget] = useState(content.budgetOptions[0] ?? '')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      projectType,
      budget,
      message: String(formData.get('message') ?? ''),
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
      locale,
    }

    setSubmitState('sending')
    setSubmitError('')

    try {
      const response = await fetch('/api/offer-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        if (result && typeof result.error === 'string') {
          setSubmitError(result.error)
        }
        throw new Error('Offer request failed')
      }

      setSubmitState('success')
      setSubmitError('')
      form.reset()
      setProjectType(content.projectTypeOptions[0] ?? '')
      setBudget(content.budgetOptions[0] ?? '')
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <form className={`offer-form${showIntro ? '' : ' offer-form--compact'}`} onSubmit={handleSubmit}>
      {showIntro ? (
        <div className="offer-form__copy">
          <span className="offer-form__eyebrow">{content.eyebrow}</span>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </div>
      ) : null}

      <div className="offer-form__grid">
        <label className="offer-field">
          <span>{content.nameLabel}</span>
          <input
            type="text"
            name="name"
            placeholder={content.namePlaceholder}
            autoComplete="name"
            required
          />
        </label>

        <label className="offer-field">
          <span>{content.emailLabel}</span>
          <input
            type="email"
            name="email"
            placeholder={content.emailPlaceholder}
            autoComplete="email"
            required
          />
        </label>

        <label className="offer-field">
          <span>{content.phoneLabel}</span>
          <input
            type="tel"
            name="phone"
            placeholder={content.phonePlaceholder}
            autoComplete="tel"
          />
        </label>

        <OfferSelect
          label={content.projectTypeLabel}
          name="project_type"
          options={content.projectTypeOptions}
          value={projectType}
          onChange={setProjectType}
        />

        <div className="offer-field--full">
          <OfferSelect
            label={content.budgetLabel}
            name="budget"
            options={content.budgetOptions}
            value={budget}
            onChange={setBudget}
          />
        </div>

        <label className="offer-field offer-field--full">
          <span>{content.detailsLabel}</span>
          <textarea
            name="message"
            rows={5}
            placeholder={content.detailsPlaceholder}
            required
          />
        </label>
      </div>

      <input type="text" name="_honey" className="offer-form__honey" tabIndex={-1} autoComplete="off" />

      <div className="offer-form__actions">
        <button
          type="submit"
          className="button button--primary"
          disabled={submitState === 'sending'}
        >
          {submitState === 'sending' ? (
            <>
              <LoaderCircle size={18} className="spin-icon" />
              {content.submitSending}
            </>
          ) : (
            <>
              {content.submitIdle}
              <ArrowRight size={18} />
            </>
          )}
        </button>

        <a className="button button--ghost" href={`mailto:${company.email}`}>
          {content.directEmail}
          <Mail size={18} />
        </a>
      </div>

      <p className="offer-form__privacy">{content.privacyNote}</p>

      <div className="offer-form__status" aria-live="polite">
        {submitState === 'success' ? <p className="offer-form__success">{content.successMessage}</p> : null}
        {submitState === 'error' ? (
          <p className="offer-form__error">{submitError || content.errorMessage}</p>
        ) : null}
      </div>
    </form>
  )
}
