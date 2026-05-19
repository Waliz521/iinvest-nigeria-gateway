import { Link } from 'react-router-dom'
import { SITE_FOOTER } from '../content/investPageContent'
import { IINVEST_LOGO_SRC, ROUTES } from '../constants/site'

function SocialIcon({ type }: { type: 'linkedin' | 'mail' | 'twitter' | 'instagram' }) {
  const common = { className: 'h-5 w-5', fill: 'none', stroke: 'currentColor', strokeWidth: 1.67, 'aria-hidden': true as const }
  switch (type) {
    case 'linkedin':
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <rect x="2" y="2" width="16" height="16" rx="2" />
          <path d="M7 9v6M7 7v.01M11 15v-3a2 2 0 0 1 4 0v3" strokeLinecap="round" />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <path d="M3 5h14v10H3V5Z" strokeLinejoin="round" />
          <path d="M3 6l7 5 7-5" strokeLinecap="round" />
        </svg>
      )
    case 'twitter':
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <path d="M4 5h12M4 10h8M4 15h10" strokeLinecap="round" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 20 20" {...common}>
          <rect x="3" y="3" width="14" height="14" rx="4" />
          <circle cx="10" cy="10" r="3" />
        </svg>
      )
  }
}

const socialLinks = [
  { type: 'linkedin' as const, href: '#', label: 'LinkedIn', className: 'bg-sky-800/20 text-[#00487b]' },
  { type: 'mail' as const, href: 'mailto:hello@iinvest.ng', label: 'Email', className: 'bg-sky-800/20 text-[#00487b]' },
  { type: 'twitter' as const, href: '#', label: 'Twitter', className: 'bg-sky-800/20 text-[#00487b]' },
  { type: 'instagram' as const, href: '#', label: 'Instagram', className: 'bg-orange-500/20 text-[#ff6d00]' },
]

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 px-4 pt-16 text-slate-300 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 pb-12 lg:grid-cols-3 lg:gap-8">
          <div className="max-w-md">
            <Link to={ROUTES.home} className="inline-block rounded outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              <img
                src={IINVEST_LOGO_SRC}
                alt="iInvest"
                width={160}
                height={44}
                className="h-10 w-auto brightness-0 invert"
                decoding="async"
              />
            </Link>
            <p className="mt-4 text-base leading-6 text-gray-400">{SITE_FOOTER.tagline}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold leading-7 text-white">{SITE_FOOTER.quickLinksTitle}</h2>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer">
              <a href="#" className="text-base leading-6 text-gray-400 transition-colors hover:text-white">
                Legal
              </a>
              <Link to={ROUTES.invest} className="text-base leading-6 text-gray-400 transition-colors hover:text-white">
                Invest
              </Link>
              <Link
                to={ROUTES.raiseCapital}
                className="text-base leading-6 text-gray-400 transition-colors hover:text-white"
              >
                Raise Capital
              </Link>
            </nav>
          </div>

          <div>
            <h2 className="text-lg font-bold leading-7 text-white">{SITE_FOOTER.connectTitle}</h2>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex h-10 w-10 items-center justify-center rounded-[10px] transition-opacity hover:opacity-80 ${item.className}`}
                  aria-label={item.label}
                  {...(item.href.startsWith('http') || item.href.startsWith('mailto')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <SocialIcon type={item.type} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-8 text-center">
          <p className="text-sm leading-5 text-gray-400">{SITE_FOOTER.navLine}</p>
          <p className="mx-auto mt-4 max-w-3xl text-xs leading-5 text-gray-500">{SITE_FOOTER.disclaimer}</p>
        </div>
      </div>
    </footer>
  )
}
