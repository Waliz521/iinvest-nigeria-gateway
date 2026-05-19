import { RAISE_FUNDING_CATEGORIES } from '../../content/raisePageContent'

type CategoryIcon = (typeof RAISE_FUNDING_CATEGORIES.items)[number]['icon']

function CategoryFeatureIcon({ icon }: { icon: CategoryIcon }) {
  const common = { className: 'h-8 w-8', fill: 'none', stroke: 'white', strokeWidth: 2.67, 'aria-hidden': true as const }

  switch (icon) {
    case 'oil':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinecap="round" d="M10 26h12M12 26V14l4-8 4 8v12" />
          <path strokeLinecap="round" d="M14 10h4" />
        </svg>
      )
    case 'agriculture':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinejoin="round" d="M16 6c-4 4-6 8-6 12a6 6 0 0 0 12 0c0-4-2-8-6-12Z" />
          <path strokeLinecap="round" d="M16 18v8" />
        </svg>
      )
    case 'logistics':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="4" y="10" width="16" height="12" rx="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 14h6l2 4v4h-8v-8Z" />
          <circle cx="10" cy="24" r="2" />
          <circle cx="24" cy="24" r="2" />
        </svg>
      )
    case 'manufacturing':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinejoin="round" d="M6 26V12l6-4 4 3 6-4v19H6Z" />
          <path strokeLinecap="round" d="M12 18h4M12 14h4" />
        </svg>
      )
    case 'realestate':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinejoin="round" d="M16 5 6 14v13h20V14L16 5Z" />
          <path strokeLinecap="round" d="M13 20h6v7h-6v-7Z" />
        </svg>
      )
    case 'healthcare':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="6" y="8" width="20" height="18" rx="2" />
          <path strokeLinecap="round" d="M16 13v8M12 17h8" />
        </svg>
      )
    case 'technology':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="6" y="8" width="20" height="14" rx="2" />
          <path strokeLinecap="round" d="M10 26h12" />
        </svg>
      )
    case 'education':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinejoin="round" d="M16 6 4 12l12 6 12-6-12-6Z" />
          <path strokeLinecap="round" d="M8 14v6c0 2.2 3.6 4 8 4s8-1.8 8-4v-6" />
        </svg>
      )
    case 'energy':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 4 10 18h8l-2 10 10-18h-8l2-6Z" />
        </svg>
      )
    case 'others':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <rect x="6" y="8" width="20" height="16" rx="2" />
          <path strokeLinecap="round" d="M10 14h12M10 18h8" />
        </svg>
      )
  }
}

export function RaiseFundingCategories() {
  return (
    <section id="funding-categories" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-[48px]">
            {RAISE_FUNDING_CATEGORIES.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 sm:text-xl">{RAISE_FUNDING_CATEGORIES.subtitle}</p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {RAISE_FUNDING_CATEGORIES.items.map((item) => {
            const gradient =
              item.accent === 'orange' ? 'from-[#ff6d00] to-orange-400' : 'from-[#00487b] to-sky-600'
            return (
              <li
                key={item.title}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8"
              >
                <span
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg`}
                >
                  <CategoryFeatureIcon icon={item.icon} />
                </span>
                <h3 className="mt-6 text-2xl font-bold leading-8 text-slate-900">{item.title}</h3>
                <p className="mt-4 text-base leading-6 text-gray-600">{item.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
