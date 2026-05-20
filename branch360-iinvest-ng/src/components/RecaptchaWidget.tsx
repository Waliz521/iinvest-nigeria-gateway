import { forwardRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

export const RecaptchaWidget = forwardRef<ReCAPTCHA>(function RecaptchaWidget(_, ref) {
  if (!siteKey) {
    return (
      <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        reCAPTCHA is not configured. Set <code className="font-mono text-xs">VITE_RECAPTCHA_SITE_KEY</code>{' '}
        in your environment (and <code className="font-mono text-xs">RECAPTCHA_SECRET_KEY</code> on Vercel).
      </p>
    )
  }

  return (
    <div className="overflow-hidden rounded">
      <ReCAPTCHA ref={ref} sitekey={siteKey} theme="light" />
    </div>
  )
})
