import { INVEST_WHY } from '../../content/investPageContent'

type WhyIcon = (typeof INVEST_WHY.items)[number]['icon']

function WhyFeatureIcon({ icon }: { icon: WhyIcon }) {
  const common = { className: 'h-8 w-8', fill: 'none', stroke: 'white', strokeWidth: 2.67, 'aria-hidden': true as const }

  switch (icon) {
    case 'minimums':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinecap="round" d="M16 4v24M8 12h12M8 20h8" />
        </svg>
      )
    case 'mobile':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="9" y="4" width="14" height="24" rx="2" />
          <path strokeLinecap="round" d="M13 24h6" />
        </svg>
      )
    case 'reporting':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinejoin="round" d="M8 6h12l4 4v18H8V6Z" />
          <path strokeLinecap="round" d="M12 14h8M12 18h8M12 22h5" />
        </svg>
      )
    case 'market':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 22l6-8 5 5 9-12" />
          <path strokeLinecap="round" d="M4 26h24" />
        </svg>
      )
    case 'diaspora':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <circle cx="16" cy="16" r="10" />
          <path strokeLinecap="round" d="M6 16h20M16 6v20" />
        </svg>
      )
    case 'compliance':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinejoin="round" d="M16 5 8 8v7c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V8l-8-3Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m12 16 3 3 6-6" />
        </svg>
      )
  }
}

export function InvestWhyInvest() {
  return (
    <section id="why-invest" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-[48px]">
            {INVEST_WHY.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 sm:text-xl">{INVEST_WHY.subtitle}</p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INVEST_WHY.items.map((item) => {
            const gradient =
              item.accent === 'orange'
                ? 'from-[#ff6d00] to-orange-400'
                : 'from-[#00487b] to-sky-600'
            return (
              <li
                key={item.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8"
              >
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
