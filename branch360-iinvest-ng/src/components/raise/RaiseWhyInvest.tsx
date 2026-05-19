import { RAISE_WHY } from '../../content/raisePageContent'

type WhyIcon = (typeof RAISE_WHY.items)[number]['icon']

function WhyFeatureIcon({ icon }: { icon: WhyIcon }) {
  const common = { className: 'h-8 w-8', fill: 'none', stroke: 'white', strokeWidth: 2.67, 'aria-hidden': true as const }

  switch (icon) {
    case 'global':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <circle cx="16" cy="16" r="10" />
          <path strokeLinecap="round" d="M6 16h20M16 6v20" />
          <circle cx="22" cy="10" r="2.5" />
        </svg>
      )
    case 'digital':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="8" y="4" width="16" height="24" rx="2" />
          <path strokeLinecap="round" d="M12 10h8M12 16h6" />
        </svg>
      )
    case 'verification':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinejoin="round" d="M16 5 9 8v7c0 4.5 3 8.5 7 9.5 4-.9 7-5 7-9.5V8l-7-3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 15 3 3 6-6" />
        </svg>
      )
    case 'secure':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="6" y="14" width="20" height="14" rx="2" />
          <path strokeLinecap="round" d="M10 14v-4a6 6 0 1 1 12 0v4" />
        </svg>
      )
    case 'exposure':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinecap="round" d="M4 16s4-8 12-8 12 8 12 8-4 8-12 8-12-8-12-8Z" />
          <circle cx="16" cy="16" r="4" />
        </svg>
      )
    case 'growth':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 22l6-8 5 5 9-12" />
          <path strokeLinecap="round" d="M4 26h24" />
        </svg>
      )
  }
}

export function RaiseWhyInvest() {
  return (
    <section id="why-raise" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-[48px]">
            {RAISE_WHY.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 sm:text-xl">{RAISE_WHY.subtitle}</p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RAISE_WHY.items.map((item) => {
            const gradient =
              item.accent === 'orange' ? 'from-[#ff6d00] to-orange-400' : 'from-[#00487b] to-sky-600'
            return (
              <li key={item.title} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8">
                <span
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
                >
                  <WhyFeatureIcon icon={item.icon} />
                </span>
                <h3 className="mt-6 text-xl font-bold leading-7 text-slate-900">{item.title}</h3>
                <p className="mt-4 text-base leading-6 text-gray-600">{item.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
