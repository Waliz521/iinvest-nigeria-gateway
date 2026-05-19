import { INVEST_FEATURED } from '../../content/investPageContent'
import { MY_ACCOUNT_URL } from '../../constants/site'

function ChevronRightIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TrendIcon() {
  return (
    <svg className="h-4 w-4 text-green-600" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 11l4-4 3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function InvestFeaturedOpportunities() {
  return (
    <section id="opportunities" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-[48px]">
            {INVEST_FEATURED.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 sm:text-xl">{INVEST_FEATURED.subtitle}</p>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {INVEST_FEATURED.items.map((item) => {
            const barGradient =
              item.accent === 'orange'
                ? 'from-[#ff6d00] to-orange-400'
                : 'from-[#00487b] to-sky-600'
            const iconColor = item.accent === 'orange' ? 'text-[#ff6d00]' : 'text-[#00487b]'

            return (
              <li
                key={item.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white"
              >
                <div className="relative h-48 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-[10px] bg-white/90">
                    <span className={`text-lg font-bold ${iconColor}`}>{item.title.charAt(0)}</span>
                  </span>
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1">
                    <TrendIcon />
                    <span className="text-sm font-semibold text-green-600">{item.roi}</span>
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="text-xl font-bold leading-7 text-slate-900">{item.title}</h3>
                    <p className="text-sm leading-5 text-gray-500">{item.sector}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Investment Size</p>
                    <p className="text-base font-bold leading-6 text-slate-900">{item.investmentSize}</p>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-gray-600">Funded</span>
                      <span className="font-semibold text-slate-900">{item.fundedPercent}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-gray-200">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${barGradient}`}
                        style={{ width: `${item.fundedPercent}%` }}
                      />
                    </div>
                  </div>

                  <a
                    href={MY_ACCOUNT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-[10px] bg-[#00487b] text-base font-medium text-white transition-colors hover:bg-[#003a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00487b]/40"
                  >
                    Invest Now
                    <ChevronRightIcon />
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
