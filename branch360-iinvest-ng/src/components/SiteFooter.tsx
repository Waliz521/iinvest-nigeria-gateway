import { Link } from 'react-router-dom'
import { ROUTES } from '../constants/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 px-4 py-8 text-slate-300 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-medium text-white">iInvest © 2026</span>
          <span className="text-slate-500" aria-hidden>
            |
          </span>
          <a href="#" className="hover:text-white">
            Legal
          </a>
          <span className="text-slate-500" aria-hidden>
            |
          </span>
          <Link to={ROUTES.invest} className="hover:text-white">
            Invest
          </Link>
          <span className="text-slate-500" aria-hidden>
            |
          </span>
          <Link to={ROUTES.raiseCapital} className="hover:text-white">
            Raise capital
          </Link>
        </div>
        <p className="max-w-3xl text-xs leading-relaxed text-slate-400">
          iInvest is an information gateway for investment opportunities in Nigeria. This site does not constitute
          financial advice. Opportunities carry risk; review all offering documents before investing or raising
          capital.
        </p>
      </div>
    </footer>
  )
}
