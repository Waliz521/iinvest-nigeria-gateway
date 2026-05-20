type ContactFormSuccessProps = {
  title: string
  message: string
  onSendAnother: () => void
  sendAnotherLabel?: string
}

export function ContactFormSuccess({
  title,
  message,
  onSendAnother,
  sendAnotherLabel = 'Send another message',
}: ContactFormSuccessProps) {
  return (
    <div
      className="flex min-h-[28rem] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg"
      role="status"
      aria-live="polite"
    >
      <span
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00487b]/10 text-[#00487b]"
        aria-hidden
      >
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12l5 5L20 7"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <p className="mt-3 max-w-sm text-base leading-relaxed text-gray-600">{message}</p>
      <button
        type="button"
        onClick={onSendAnother}
        className="mt-8 text-base font-semibold text-[#00487b] underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00487b]/40"
      >
        {sendAnotherLabel}
      </button>
    </div>
  )
}
