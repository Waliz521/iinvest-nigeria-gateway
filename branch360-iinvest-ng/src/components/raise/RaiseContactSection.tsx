import { useId, useRef, useState, type FormEvent } from 'react'
import { CaptchaField } from '../CaptchaField'
import { ContactFormSuccess } from '../ContactFormSuccess'
import { RAISE_CONTACT } from '../../content/raisePageContent'

function ContactChannelIcon({ label }: { label: string }) {
  const stroke = label === 'Phone' ? '#ff6d00' : '#00487b'
  if (label === 'Phone') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M6 4h12v16H6V4Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 17h6" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (label === 'Office Address') {
    return (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke={stroke} strokeWidth="2" />
        <circle cx="12" cy="10" r="2.5" stroke={stroke} strokeWidth="2" />
      </svg>
    )
  }
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6h16v12H4V6Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const inputClass =
  'block w-full rounded-[10px] border border-gray-300 px-4 py-3 text-base text-slate-900 placeholder:text-neutral-950/50 focus:border-[#00487b] focus:outline-none focus:ring-2 focus:ring-[#00487b]/25'

export function RaiseContactSection() {
  const captchaId = useId()
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-[48px]">
            {RAISE_CONTACT.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600">{RAISE_CONTACT.paragraph}</p>

          <ul className="mt-8 flex flex-col gap-6">
            {RAISE_CONTACT.channels.map((channel) => {
              const iconBg = channel.accent === 'orange' ? 'bg-orange-500/10' : 'bg-sky-800/10'
              const content = (
                <>
                  <p className="text-base font-semibold leading-6 text-slate-900">{channel.label}</p>
                  <p className="text-base leading-6 text-gray-600">{channel.value}</p>
                </>
              )
              return (
                <li key={channel.label} className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] ${iconBg}`}
                  >
                    <ContactChannelIcon label={channel.label} />
                  </span>
                  {'href' in channel && channel.href ? (
                    <a href={channel.href} className="hover:text-[#00487b]">
                      {content}
                    </a>
                  ) : (
                    <div>{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {submitted ? (
          <ContactFormSuccess
            title={RAISE_CONTACT.form.success.title}
            message={RAISE_CONTACT.form.success.message}
            sendAnotherLabel={RAISE_CONTACT.form.success.sendAnother}
            onSendAnother={() => {
              formRef.current?.reset()
              setSubmitted(false)
            }}
          />
        ) : (
          <form
            ref={formRef}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
            onSubmit={handleSubmit}
            aria-label="Raise capital contact form"
          >
            <div className="flex flex-col gap-6">
              <div>
                <label htmlFor="raise-business-name" className="text-sm font-semibold text-slate-900">
                  {RAISE_CONTACT.form.businessName.label}
                </label>
                <input
                  id="raise-business-name"
                  name="businessName"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder={RAISE_CONTACT.form.businessName.placeholder}
                  className={`mt-2 ${inputClass}`}
                />
              </div>
              <div>
                <label htmlFor="raise-contact-person" className="text-sm font-semibold text-slate-900">
                  {RAISE_CONTACT.form.contactPerson.label}
                </label>
                <input
                  id="raise-contact-person"
                  name="contactPerson"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={RAISE_CONTACT.form.contactPerson.placeholder}
                  className={`mt-2 ${inputClass}`}
                />
              </div>
              <div>
                <label htmlFor="raise-mobile-number" className="text-sm font-semibold text-slate-900">
                  {RAISE_CONTACT.form.mobile.label}
                </label>
                <input
                  id="raise-mobile-number"
                  name="mobile"
                  type="tel"
                  autoComplete="tel"
                  placeholder={RAISE_CONTACT.form.mobile.placeholder}
                  className={`mt-2 ${inputClass}`}
                />
              </div>
              <div>
                <label htmlFor="raise-email-address" className="text-sm font-semibold text-slate-900">
                  {RAISE_CONTACT.form.email.label}
                </label>
                <input
                  id="raise-email-address"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={RAISE_CONTACT.form.email.placeholder}
                  className={`mt-2 ${inputClass}`}
                />
              </div>
              <div>
                <label htmlFor="raise-message-body" className="text-sm font-semibold text-slate-900">
                  {RAISE_CONTACT.form.message.label}
                </label>
                <textarea
                  id="raise-message-body"
                  name="message"
                  rows={5}
                  placeholder={RAISE_CONTACT.form.message.placeholder}
                  className={`mt-2 ${inputClass} resize-y`}
                />
              </div>
              <CaptchaField id={captchaId} label={RAISE_CONTACT.form.captcha} />
              <button
                type="submit"
                className="h-14 w-full rounded-[10px] bg-[#00487b] text-base font-medium text-white shadow-lg transition-colors hover:bg-[#003a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00487b]/40"
              >
                {RAISE_CONTACT.form.submit}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
