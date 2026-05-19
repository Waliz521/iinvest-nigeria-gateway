import { INVEST_READY } from '../../content/investPageContent'
import { MY_ACCOUNT_URL } from '../../constants/site'

function ArrowIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M5 10h10M11 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function InvestReadyToInvest() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#00487b] via-sky-600 to-[#ff6d00] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-orange-400/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-8 top-8 h-32 w-32 rotate-12 rounded-2xl bg-white/5"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-8 left-4 h-24 w-24 -rotate-12 rounded-2xl bg-white/5"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-[60px]">
          {INVEST_READY.title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
          {INVEST_READY.paragraph}
        </p>

        <a
          href={MY_ACCOUNT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-[10px] bg-white px-8 text-base font-medium text-[#00487b] shadow-xl transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          {INVEST_READY.ctaLabel}
          <ArrowIcon />
        </a>

        <div className="mt-12 flex flex-wrap items-center justify-center border-t border-white/20 pt-10">
          {INVEST_READY.stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center">
              {index > 0 ? (
                <span className="mx-6 hidden h-12 w-px bg-white/20 sm:mx-10 sm:block" aria-hidden />
              ) : null}
              <div className="min-w-[5.5rem] px-4 text-center sm:px-6">
                <p className="text-3xl font-bold leading-9 text-white/90">{stat.value}</p>
                <p className="mt-1 text-sm leading-5 text-white/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
