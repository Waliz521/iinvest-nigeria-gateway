import { INVEST_PARTNERS } from '../../content/investPageContent'

function PartnerCard({
  name,
  href,
  logoSrc,
}: {
  name: string
  href: string
  logoSrc: string
}) {
  const className =
    'flex h-36 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-4 py-6 transition-colors hover:border-[#00487b]/30'

  const logo = (
    <img
      src={logoSrc}
      alt={name}
      width={120}
      height={48}
      className="max-h-14 w-full max-w-[8.5rem] object-contain object-center"
      loading="lazy"
      decoding="async"
    />
  )

  if (href && href !== '#') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {logo}
      </a>
    )
  }

  return <div className={className}>{logo}</div>
}

export function InvestPartnersSection() {
  return (
    <section id="partners" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-10 text-slate-900 sm:text-4xl">{INVEST_PARTNERS.title}</h2>
          <p className="mt-4 text-base leading-6 text-gray-600">{INVEST_PARTNERS.subtitle}</p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {INVEST_PARTNERS.partners.map((partner) => (
            <li key={partner.name}>
              <PartnerCard name={partner.name} href={partner.href} logoSrc={partner.logoSrc} />
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-gray-300 pt-8">
          {INVEST_PARTNERS.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-[10px] border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
