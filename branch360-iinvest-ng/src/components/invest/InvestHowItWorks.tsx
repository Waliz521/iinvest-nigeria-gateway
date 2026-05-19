import { INVEST_HOW_IT_WORKS } from '../../content/investPageContent'

type StepIcon = (typeof INVEST_HOW_IT_WORKS.steps)[number]['icon']

function StepFeatureIcon({ icon, accent }: { icon: StepIcon; accent: 'sky' | 'orange' }) {
  const stroke = accent === 'orange' ? '#ff6d00' : '#00487b'
  const common = { className: 'h-8 w-8', fill: 'none', stroke, strokeWidth: 2.67, 'aria-hidden': true as const }

  switch (icon) {
    case 'register':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinejoin="round" d="M6 24h20M10 8h8l4 4v12H10V8Z" />
          <path strokeLinecap="round" d="M14 14h6" />
        </svg>
      )
    case 'verify':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinejoin="round" d="M16 5 9 8v7c0 4.5 3 8.5 7 9.5 4-.9 7-5 7-9.5V8l-7-3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 15 3 3 6-6" />
        </svg>
      )
    case 'review':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <circle cx="16" cy="12" r="5" />
          <path strokeLinejoin="round" d="M8 26c0-4.5 3.5-8 8-8s8 3.5 8 8" />
          <path strokeLinecap="round" d="M22 10l2 2 4-4" />
        </svg>
      )
    case 'access':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="6" y="8" width="20" height="18" rx="2" />
          <path strokeLinecap="round" d="M12 16h8M16 12v8" />
        </svg>
      )
  }
}

export function InvestHowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-[48px]">
            {INVEST_HOW_IT_WORKS.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 sm:text-xl">{INVEST_HOW_IT_WORKS.subtitle}</p>
        </div>

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {INVEST_HOW_IT_WORKS.steps.map((step, index) => {
            const badgeGradient =
              step.accent === 'orange'
                ? 'from-[#ff6d00] to-orange-400'
                : 'from-[#00487b] to-sky-600'
            const iconBg = step.accent === 'orange' ? 'bg-orange-500/10' : 'bg-sky-800/10'
            const showConnector = index < INVEST_HOW_IT_WORKS.steps.length - 1

            return (
              <li key={step.number} className="relative list-none">
                {showConnector ? (
                  <span
                    className="absolute -right-3 top-16 z-0 hidden h-0.5 w-6 bg-gradient-to-r from-gray-300 to-gray-200 lg:block xl:-right-4 xl:w-10"
                    aria-hidden
                  />
                ) : null}
                <div className="relative rounded-2xl border border-gray-100 bg-white px-6 pb-8 pt-10 shadow-lg">
                  <span
                    className={`absolute -right-2 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${badgeGradient} text-lg font-bold text-white shadow-lg`}
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <span
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg}`}
                  >
                    <StepFeatureIcon icon={step.icon} accent={step.accent} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold leading-8 text-slate-900">{step.title}</h3>
                  <p className="mt-4 text-base leading-6 text-gray-600">{step.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
