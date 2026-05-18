import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/site'

function TickList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm text-gray-700 sm:text-base">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700" aria-hidden>
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

function CtaBlock({
  title,
  paragraph,
  items,
  buttonLabel,
  to,
  variant,
}: {
  title: string
  paragraph: string
  items: string[]
  buttonLabel: string
  to: string
  variant: 'invest' | 'raise'
}) {
  const bg = variant === 'invest' ? 'bg-white' : 'bg-slate-50'
  return (
    <section className={`${bg} px-4 py-12 sm:px-6 sm:py-16 lg:px-8`}>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
        <p className="mt-3 text-gray-600">{paragraph}</p>
        <TickList items={items} />
        <Link
          to={to}
          className="mt-8 inline-flex items-center rounded-xl bg-sky-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/40"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}

export function HomeCtaSections() {
  return (
    <div className="border-t border-gray-200">
      <CtaBlock
        variant="invest"
        title="To Invest"
        paragraph="iInvest connects retail and diaspora investors to vetted Nigerian opportunities across real estate, SME debt, equities, and more—with transparent reporting and mobile-first access."
        items={[
          'Low entry minimums',
          'Mobile-first portfolios',
          'Transparent reporting',
          'Nigeria market exposure',
          'Diaspora-friendly onboarding',
          'Compliance and security built in',
        ]}
        buttonLabel="Learn more"
        to={ROUTES.invest}
      />
      <CtaBlock
        variant="raise"
        title="To raise capital"
        paragraph="Raise funding for your business through iInvest—connecting SMEs to retail and diaspora investors with SEC-aligned compliance and built-in investor reach."
        items={[
          'Lower fundraising costs',
          'Debt and equity offerings',
          'Mobile-first fundraising tools',
          'Transparent investor reporting',
          'Access to diaspora capital',
          'Compliance-aligned workflows',
        ]}
        buttonLabel="Learn more"
        to={ROUTES.raiseCapital}
      />
    </div>
  )
}
