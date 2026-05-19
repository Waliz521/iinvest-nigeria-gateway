import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/site'

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

function TickList({ items, accent }: { items: string[]; accent: 'navy' | 'orange' }) {
  const iconClass =
    accent === 'navy'
      ? 'bg-[#00487b]/10 text-[#00487b]'
      : 'bg-[#ff6d00]/10 text-[#ff6d00]'
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-snug text-gray-600 sm:text-[15px]">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${iconClass}`}
            aria-hidden
          >
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function TeaserCard({
  eyebrow,
  title,
  paragraph,
  items,
  buttonLabel,
  to,
  accent,
}: {
  eyebrow: string
  title: string
  paragraph: string
  items: string[]
  buttonLabel: string
  to: string
  accent: 'navy' | 'orange'
}) {
  const borderTop = accent === 'navy' ? 'border-t-4 border-t-[#00487b]' : 'border-t-4 border-t-[#ff6d00]'
  const btnClass =
    accent === 'navy'
      ? 'bg-[#00487b] text-white hover:bg-[#003a63] focus-visible:ring-[#00487b]/40'
      : 'bg-[#ff6d00] text-white hover:bg-[#e56200] focus-visible:ring-[#ff6d00]/40'

  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 ${borderTop}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.65rem]">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-gray-600">{paragraph}</p>
      <TickList items={items} accent={accent} />
      <Link
        to={to}
        className={`mt-8 inline-flex h-12 items-center justify-center gap-2 self-start rounded-[10px] px-6 text-sm font-semibold shadow-md transition-colors focus:outline-none focus-visible:ring-2 ${btnClass}`}
      >
        {buttonLabel}
        <ArrowIcon />
      </Link>
    </article>
  )
}

/** Short home-page teasers — full content on /invest and /raise-capital */
export function HomeCtaSections() {
  return (
    <section className="border-t border-gray-200 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Who is iInvest for?</h2>
          <p className="mt-3 text-base text-gray-600">
            Explore the map above, then learn more about investing or raising capital on iInvest.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <TeaserCard
            eyebrow="For investors"
            accent="navy"
            title="Invest"
            paragraph="Connect to vetted Nigerian opportunities with transparent reporting and mobile-first access."
            items={[
              'Low entry minimums',
              'Transparent reporting',
              'Nigeria market exposure',
              'Diaspora-friendly onboarding',
            ]}
            buttonLabel="Learn more"
            to={ROUTES.invest}
          />
          <TeaserCard
            eyebrow="For businesses"
            accent="orange"
            title="Raise capital"
            paragraph="Raise funding through iInvest with SEC-aligned workflows and access to retail and diaspora investors."
            items={[
              'Lower fundraising costs',
              'Debt and equity offerings',
              'Mobile-first tools',
              'Compliance-aligned workflows',
            ]}
            buttonLabel="Learn more"
            to={ROUTES.raiseCapital}
          />
        </div>
      </div>
    </section>
  )
}
