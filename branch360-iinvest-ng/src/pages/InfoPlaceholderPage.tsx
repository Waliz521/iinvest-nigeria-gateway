import { Header } from '../components/Header'
import { SiteFooter } from '../components/SiteFooter'

export function InfoPlaceholderPage({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header showFilters={false} />
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h1>
        <p className="mt-4 max-w-lg text-gray-600">{description}</p>
        <p className="mt-6 text-sm text-gray-500">Full page content — Milestone 2 (due May 22).</p>
      </main>
      <SiteFooter />
    </div>
  )
}
