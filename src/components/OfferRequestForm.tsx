import type { FormEvent } from 'react'
import { ArrowRight, LoaderCircle, Mail } from 'lucide-react'
import { useState } from 'react'
import { company } from '../data/site'

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
}

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

export default function OfferRequestForm({ content }: OfferRequestFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append('_subject', content.subject)
    formData.append('_template', 'table')

    const replyTo = formData.get('email')

    if (typeof replyTo === 'string' && replyTo.length > 0) {
      formData.append('_replyto', replyTo)
    }

    setSubmitState('sending')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Offer request failed')
      }

      setSubmitState('success')
      form.reset()
    } catch {
      setSubmitState('error')
    }
  }

  return (
    <form className="offer-form" onSubmit={handleSubmit}>
      <div className="offer-form__copy">
        <span className="offer-form__eyebrow">{content.eyebrow}</span>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </div>

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

        <label className="offer-field">
          <span>{content.projectTypeLabel}</span>
          <select name="project_type" defaultValue={content.projectTypeOptions[0]} required>
            {content.projectTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="offer-field offer-field--full">
          <span>{content.budgetLabel}</span>
          <select name="budget" defaultValue={content.budgetOptions[0]} required>
            {content.budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

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
        {submitState === 'error' ? <p className="offer-form__error">{content.errorMessage}</p> : null}
      </div>
    </form>
  )
}
