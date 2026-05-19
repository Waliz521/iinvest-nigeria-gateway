import { RAISE_GROWTH_CARD, RAISE_INTRO } from '../../content/raisePageContent'

function SegmentIcon({ label, accent }: { label: string; accent: 'sky' | 'orange' }) {
  const color = accent === 'orange' ? '#ff6d00' : '#00487b'
  const bg = accent === 'orange' ? 'bg-orange-500/5' : 'bg-sky-800/5'

  return (
    <div className={`flex flex-1 flex-col items-center rounded-2xl px-4 py-4 ${bg}`}>
      <span className="mb-3 flex h-8 w-8 items-center justify-center" aria-hidden>
        {label === 'SMEs' ? (
          <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
            <path
              d="M10 8h12v16H10V8ZM14 4h4v4h-4V4"
              stroke={color}
              strokeWidth="2.67"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : label === 'Startups' ? (
          <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
            <circle cx="12" cy="10" r="4" stroke={color} strokeWidth="2.67" />
            <path d="M6 24c0-4 2.7-6 6-6M20 18c3.3 0 6 2.5 6 6" stroke={color} strokeWidth="2.67" strokeLinecap="round" />
          </svg>
        ) : (
          <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none">
            <rect x="6" y="6" width="20" height="20" rx="2" stroke={color} strokeWidth="2.67" />
            <path d="M12 22V14M16 22V10M20 22V16" stroke={color} strokeWidth="2.67" strokeLinecap="round" />
          </svg>
        )}
      </span>
      <span className="text-center text-sm font-semibold text-slate-900">{label}</span>
    </div>
  )
}

function BusinessGrowthCard() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-bold leading-7 text-slate-900">{RAISE_GROWTH_CARD.title}</h3>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm leading-5 text-green-700">
            {RAISE_GROWTH_CARD.badge}
          </span>
        </div>

        <div
          className="mt-6 flex items-end justify-between gap-3 rounded-2xl bg-gradient-to-br from-sky-800/5 to-orange-500/5 p-4"
          aria-hidden
        >
          {RAISE_GROWTH_CARD.bars.map((bar) => (
            <div key={bar.label} className="flex flex-1 flex-col items-center gap-2">
              <div className={`w-full max-w-[7rem] rounded-t-[10px] bg-gradient-to-t ${bar.gradient} ${bar.heightClass}`} />
              <span className="text-xs text-gray-500">{bar.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {RAISE_GROWTH_CARD.segments.map((segment) => (
            <SegmentIcon key={segment.label} label={segment.label} accent={segment.accent} />
          ))}
        </div>
      </div>
      <div
        className="pointer-events-none absolute -bottom-6 -right-4 h-32 w-32 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 opacity-20 blur-xl"
        aria-hidden
      />
    </div>
  )
}

export function RaiseIntroductionSection() {
  return (
    <section id="intro" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <BusinessGrowthCard />
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-[48px]">
            {RAISE_INTRO.title}
          </h2>
          <div className="flex flex-col gap-4">
            {RAISE_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-lg leading-7 text-gray-600">
                {paragraph}
              </p>
            ))}
            <p className="text-lg font-semibold leading-7 text-slate-900">{RAISE_INTRO.closing}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
