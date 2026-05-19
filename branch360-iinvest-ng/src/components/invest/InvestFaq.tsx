import { useId, useState } from 'react'
import { INVEST_FAQS } from '../../content/investPageContent'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-6 w-6 shrink-0 text-[#00487b] transition-transform ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function InvestFaq() {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-[48px]">
            {INVEST_FAQS.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 sm:text-xl">{INVEST_FAQS.subtitle}</p>
        </div>

        <div className="mt-16 flex flex-col gap-4">
          {INVEST_FAQS.items.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `${baseId}-panel-${index}`
            const buttonId = `${baseId}-button-${index}`

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00487b]/30"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-lg font-semibold leading-7 text-slate-900">{item.question}</span>
                    <ChevronIcon open={isOpen} />
                  </button>
                </h3>
                {isOpen ? (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-gray-100 px-6 pb-6 pt-2"
                  >
                    <p className="text-base leading-6 text-gray-600">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
