import { RAISE_SUCCESS_STORIES } from '../../content/raisePageContent'

function TrendIcon() {
  return (
    <svg className="h-4 w-4 text-green-600" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 11l4-4 3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function RaiseSuccessStories() {
  return (
    <section id="success-stories" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl sm:leading-[48px]">
            {RAISE_SUCCESS_STORIES.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600 sm:text-xl">{RAISE_SUCCESS_STORIES.subtitle}</p>
        </div>

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {RAISE_SUCCESS_STORIES.items.map((story) => (
            <li
              key={story.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="relative h-48 overflow-hidden bg-slate-200">
                <img
                  src={story.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1">
                  <TrendIcon />
                  <span className="text-sm font-semibold leading-5 text-green-600">{story.growth}</span>
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-bold leading-7 text-slate-900">{story.name}</h3>
                  <p className="text-sm leading-5 text-gray-500">{story.sector}</p>
                </div>

                <div className="rounded-[10px] bg-slate-50 px-4 py-3">
                  <p className="text-sm leading-5 text-gray-500">Amount Raised</p>
                  <p className="text-xl font-bold leading-7 text-[#00487b]">{story.amountRaised}</p>
                </div>

                <p className="text-base leading-6 text-gray-700">{story.summary}</p>

                <blockquote className="mt-auto border-t border-gray-200 pt-4">
                  <p className="text-sm leading-6 text-gray-600">&ldquo;{story.quote}&rdquo;</p>
                </blockquote>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
