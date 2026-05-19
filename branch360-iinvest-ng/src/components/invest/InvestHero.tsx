import { INVEST_HERO, INVEST_HERO_TRUST } from '../../content/investPageContent'
import { MY_ACCOUNT_URL } from '../../constants/site'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1168&q=80'

const PORTFOLIO_BARS = [
  { height: 'h-10', color: 'from-[#00487b] to-sky-600' },
  { height: 'h-14', color: 'from-[#ff6d00] to-orange-400' },
  { height: 'h-12', color: 'from-[#00487b] to-sky-600' },
  { height: 'h-16', color: 'from-[#ff6d00] to-orange-400' },
  { height: 'h-12', color: 'from-[#00487b] to-sky-600' },
] as const

function TrustIcon({ variant }: { variant: (typeof INVEST_HERO_TRUST)[number]['icon'] }) {
  const stroke = variant === 'verified' ? '#ff6d00' : '#00487b'
  if (variant === 'verified') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="5" r="2.5" stroke={stroke} strokeWidth="1.33" />
        <path d="M5 9.5 6.5 11 11 7" stroke={stroke} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (variant === 'regulated') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M2 6h10M2 6v5h10V6M11 6V4H5v2" stroke={stroke} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 2 3 4.5v4c0 3 2.2 5.8 5 6.5 2.8-.7 5-3.5 5-6.5v-4L8 2Z"
        stroke={stroke}
        strokeWidth="1.33"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PortfolioGrowthCard() {
  return (
    <div
      className="absolute -left-4 -top-4 z-10 w-64 rounded-2xl border border-gray-100 bg-white/95 p-5 shadow-2xl sm:-left-6 sm:-top-6"
      aria-hidden
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-semibold text-gray-700">Portfolio Growth</span>
        <span className="text-sm font-bold text-green-600">+24.5%</span>
      </div>
      <p className="mt-2 text-3xl font-bold leading-9 text-[#00487b]">₦45.2M</p>
      <p className="text-xs text-gray-500">Total Value</p>
      <div className="mt-4 flex items-end gap-1">
        {PORTFOLIO_BARS.map((bar, i) => (
          <div
            key={i}
            className={`w-10 flex-1 rounded-t-sm bg-gradient-to-t ${bar.color} ${bar.height}`}
          />
        ))}
      </div>
    </div>
  )
}

function AverageReturnCard() {
  return (
    <div
      className="absolute -bottom-4 right-0 z-10 w-72 max-w-[calc(100%-1rem)] rounded-2xl border border-gray-100 bg-white/95 p-5 shadow-2xl sm:-bottom-6"
      aria-hidden
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm text-gray-500">Average Return</p>
          <p className="text-4xl font-bold leading-10 text-[#00487b]">22.4%</p>
        </div>
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
            <path
              d="M4 20h20M22 20l-4-6 4-4"
              stroke="currentColor"
              strokeWidth="2.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 border-t border-gray-100 pt-3">
        {[
          { label: 'Real Estate', value: '+15%' },
          { label: 'Tech', value: '+22%' },
          { label: 'Agri', value: '+18%' },
        ].map((row) => (
          <div key={row.label}>
            <p className="text-xs text-gray-500">{row.label}</p>
            <p className="text-sm font-bold text-gray-900">{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function InvestHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-100">
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[min(800px,90vw)] w-[min(800px,90vw)] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #00487b 0%, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-[180px] h-[min(600px,70vw)] w-[min(600px,70vw)] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #ff6d00 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1] lg:text-7xl lg:leading-[1.1]">
              {INVEST_HERO.title}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-gray-600 sm:text-xl">{INVEST_HERO.paragraph}</p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={MY_ACCOUNT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 min-w-[9rem] items-center justify-center rounded-[10px] bg-[#00487b] px-8 text-base font-semibold text-white shadow-lg shadow-black/10 transition-colors hover:bg-[#003a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00487b]/40"
              >
                {INVEST_HERO.primaryCta}
              </a>
              <a
                href={INVEST_HERO.secondaryCtaHref}
                className="inline-flex h-14 min-w-[10rem] items-center justify-center rounded-[10px] border-2 border-slate-200 bg-white px-8 text-base font-semibold text-[#00487b] transition-colors hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00487b]/30"
              >
                {INVEST_HERO.secondaryCta}
              </a>
            </div>

            <ul className="grid gap-4 border-t border-gray-200 pt-6 sm:grid-cols-2">
              {INVEST_HERO_TRUST.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] px-2 ${
                        item.color === 'orange' ? 'bg-orange-500/10' : 'bg-sky-800/10'
                      }`}
                    >
                      <TrustIcon variant={item.icon} />
                    </span>
                    <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[584px] pb-8 pt-8 lg:mx-0 lg:justify-self-end lg:pb-12 lg:pt-4">
            <div className="relative aspect-[584/500] overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={HERO_IMAGE}
                alt="Diverse investors and business professionals"
                className="h-full w-full object-cover"
                width={584}
                height={500}
                loading="eager"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/10"
                aria-hidden
              />
            </div>
            <PortfolioGrowthCard />
            <AverageReturnCard />
            <p className="sr-only">Illustrative portfolio statistics shown for design purposes only.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
