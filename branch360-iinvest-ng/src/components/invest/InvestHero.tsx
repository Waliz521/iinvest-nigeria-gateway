import {
  INVEST_HERO,
  INVEST_HERO_FLOATING,
  INVEST_HERO_TRUST,
} from '../../content/investPageContent'
import { MY_ACCOUNT_URL } from '../../constants/site'
import { RaiseIcon } from '../raise/RaiseIcons'

const HERO_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=640&q=80',
    alt: 'Diverse investors collaborating',
    className: 'h-72',
    overlay: 'from-blue-900/30',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=640&q=80',
    alt: 'Modern commercial real estate',
    className: 'h-64',
    overlay: 'from-orange-900/40',
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=640&q=80',
    alt: 'Investment analytics dashboard',
    className: 'h-56',
    overlay: 'from-blue-900/30',
  },
  {
    src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=640&q=80',
    alt: 'Financial planning and growth',
    className: 'h-80',
    overlay: 'from-orange-900/40',
  },
] as const

function HeroBadgeIcon() {
  return (
    <svg className="h-4 w-4 shrink-0 text-white" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 2 3 4.5v4c0 3 2.2 5.8 5 6.5 2.8-.7 5-3.5 5-6.5v-4L8 2Z"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HeroImageCollage() {
  return (
    <div className="relative mx-auto w-full max-w-[700px] lg:mx-0">
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent blur-2xl" aria-hidden />

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          {HERO_IMAGES.slice(0, 2).map((img) => (
            <div
              key={img.alt}
              className={`relative overflow-hidden rounded-3xl shadow-2xl ring-2 ring-white/10 ${img.className}`}
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${img.overlay} via-transparent to-transparent`}
                aria-hidden
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 pt-8 sm:pt-16">
          {HERO_IMAGES.slice(2).map((img) => (
            <div
              key={img.alt}
              className={`relative overflow-hidden rounded-3xl shadow-2xl ring-2 ring-white/10 ${img.className}`}
            >
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${img.overlay} via-transparent to-transparent`}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute -left-2 bottom-8 z-10 w-52 rounded-2xl border border-white/40 bg-white/95 p-5 shadow-2xl sm:-left-6"
        aria-hidden
      >
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00487b] to-sky-600 text-white">
            <RaiseIcon name="chart" className="h-7 w-7" strokeWidth={2} />
          </span>
          <div>
            <p className="text-2xl font-bold leading-8 text-[#00487b]">{INVEST_HERO_FLOATING.portfolioValue.value}</p>
            <p className="text-xs font-medium leading-4 text-gray-600">{INVEST_HERO_FLOATING.portfolioValue.label}</p>
          </div>
        </div>
      </div>

      <div
        className="absolute -right-2 top-2 z-10 w-32 rounded-2xl border border-white/40 bg-white/95 px-4 py-4 shadow-2xl sm:-right-4"
        aria-hidden
      >
        <p className="text-center text-3xl font-bold leading-9 text-slate-900">{INVEST_HERO_FLOATING.averageReturn.value}</p>
        <p className="text-center text-xs font-medium leading-4 text-gray-600">
          {INVEST_HERO_FLOATING.averageReturn.label}
        </p>
      </div>

      <p className="sr-only">Illustrative statistics shown for design purposes only.</p>
    </div>
  )
}

export function InvestHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#00487b] via-sky-600 via-[35%] to-[#ff6d00]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255,255,255,0.1), transparent 50%)' }}
        />
        <div className="absolute -right-20 top-0 h-[min(900px,80vw)] w-[min(900px,80vw)] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -left-32 top-36 h-[min(700px,60vw)] w-[min(700px,60vw)] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-[12%] top-20 hidden size-40 rotate-12 rounded-3xl border border-white/10 bg-white/5 lg:block" />
        <div className="absolute left-[8%] top-[55%] hidden size-32 -rotate-6 rounded-2xl border border-white/10 bg-white/5 lg:block" />
        <div className="absolute left-1/2 top-[45%] hidden size-24 rounded-2xl border border-white/10 bg-white/5 lg:block" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-16">
          <div className="flex flex-col gap-8">
            <div className="inline-flex w-fit max-w-full items-center gap-3 rounded-full border border-white/20 bg-white/20 px-5 py-2.5 outline outline-1 outline-offset-[-1px] outline-white/20">
              <HeroBadgeIcon />
              <span className="text-sm font-semibold leading-5 text-white">{INVEST_HERO.badge}</span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-[1.1] lg:text-7xl lg:leading-[1.1]">
              <span className="block">{INVEST_HERO.titleLine1}</span>
              <span className="block text-white/95">{INVEST_HERO.titleLine2}</span>
            </h2>

            <p className="max-w-xl text-xl font-normal leading-10 text-white/95 sm:text-2xl">{INVEST_HERO.paragraph}</p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={MY_ACCOUNT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-16 min-w-[14rem] items-center justify-center gap-2 rounded-2xl bg-white px-10 text-lg font-semibold text-[#00487b] shadow-xl shadow-black/10 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {INVEST_HERO.primaryCta}
                <ArrowIcon className="h-6 w-6" />
              </a>
              <a
                href={INVEST_HERO.secondaryCtaHref}
                className="inline-flex h-16 min-w-[12rem] items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10 px-10 text-lg font-semibold text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {INVEST_HERO.secondaryCta}
              </a>
            </div>

            <ul className="flex flex-wrap gap-6 border-t border-white/10 pt-6 sm:gap-10">
              {INVEST_HERO_TRUST.map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/20 text-white shadow-lg shadow-black/10">
                    <RaiseIcon name={item.icon} className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-lg font-bold leading-6 text-white">{item.value}</p>
                    <p className="text-sm leading-5 text-white/80">{item.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <HeroImageCollage />
        </div>
      </div>
    </section>
  )
}
