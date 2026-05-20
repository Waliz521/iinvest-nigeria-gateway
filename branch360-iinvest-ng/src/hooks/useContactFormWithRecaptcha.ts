import { useRef, useState, type FormEvent } from 'react'
import type ReCAPTCHA from 'react-google-recaptcha'
import { runContactFormSubmit } from '../lib/contactFormSubmit'

export function useContactFormWithRecaptcha() {
  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    const result = await runContactFormSubmit(e.currentTarget, recaptchaRef)
    setSubmitting(false)

    if (!result.ok) {
      if (!result.invalidForm && result.error) setError(result.error)
      return
    }

    setSubmitted(true)
  }

  function resetForm() {
    formRef.current?.reset()
    recaptchaRef.current?.reset()
    setSubmitted(false)
    setError('')
  }

  return {
    formRef,
    recaptchaRef,
    submitted,
    submitting,
    error,
    handleSubmit,
    resetForm,
  }
}
