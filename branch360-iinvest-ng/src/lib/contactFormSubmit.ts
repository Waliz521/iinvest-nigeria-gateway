import type { RefObject } from 'react'
import type ReCAPTCHA from 'react-google-recaptcha'
import { verifyRecaptchaToken } from './verifyRecaptcha'

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; error: string; invalidForm?: boolean }

export async function runContactFormSubmit(
  form: HTMLFormElement,
  recaptchaRef: RefObject<ReCAPTCHA | null>,
): Promise<ContactSubmitResult> {
  if (!form.reportValidity()) {
    return { ok: false, error: '', invalidForm: true }
  }

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY
  if (!siteKey) {
    return {
      ok: false,
      error: 'reCAPTCHA is not configured. Add VITE_RECAPTCHA_SITE_KEY to your environment.',
    }
  }

  const token = recaptchaRef.current?.getValue()
  if (!token) {
    return { ok: false, error: 'Please complete the reCAPTCHA verification.' }
  }

  try {
    const verified = await verifyRecaptchaToken(token)
    if (!verified) {
      recaptchaRef.current?.reset()
      return { ok: false, error: 'reCAPTCHA verification failed. Please try again.' }
    }
    return { ok: true }
  } catch {
    recaptchaRef.current?.reset()
    return { ok: false, error: 'Unable to verify reCAPTCHA. Please try again later.' }
  }
}
