import { RAISE_VALUE_PROPOSITIONS } from '../../content/raisePageContent'
import { RaiseIcon } from './RaiseIcons'

export function RaiseValuePropositions() {
  return (
    <section className="bg-white px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {RAISE_VALUE_PROPOSITIONS.map((item) => {
            const isOrange = item.accent === 'orange'
            const iconBg = isOrange ? 'bg-orange-500/10 text-[#ff6d00]' : 'bg-sky-800/10 text-[#00487b]'
            return (
              <li
                key={item.title}
                className="flex min-h-[18rem] flex-col rounded-2xl border border-gray-200 bg-white p-8"
              >
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}>
                  <RaiseIcon name={item.icon} />
                </span>
                <h2 className="mt-6 text-xl font-bold leading-7 text-slate-900">{item.title}</h2>
                <p className="mt-4 text-base leading-6 text-gray-600">{item.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
