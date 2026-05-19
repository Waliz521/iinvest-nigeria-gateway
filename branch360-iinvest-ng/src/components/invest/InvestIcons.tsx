type IconName = 'shield' | 'sparkles' | 'bolt' | 'lock' | 'peace' | 'easy' | 'quick' | 'secure'

export function InvestIcon({
  name,
  className = 'h-6 w-6',
  strokeWidth = 1.75,
}: {
  name: IconName
  className?: string
  strokeWidth?: number
}) {
  const common = { className, fill: 'none', stroke: 'currentColor', strokeWidth, 'aria-hidden': true as const }
  switch (name) {
    case 'peace':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 4 6 7.5v5.5c0 4.5 3.2 8.7 8 9.5 4.8-.8 8-5 8-9.5V7.5L14 4Z"
          />
        </svg>
      )
    case 'easy':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <rect x="7" y="4" width="14" height="20" rx="2" />
          <path strokeLinecap="round" d="M11 9h6M11 14h6" />
        </svg>
      )
    case 'quick':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <rect x="5" y="5" width="18" height="18" rx="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 10v8M10 14h8" />
        </svg>
      )
    case 'secure':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <rect x="7" y="13" width="14" height="11" rx="2" />
          <path strokeLinecap="round" d="M10 13v-3a4 4 0 1 1 8 0v3" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3 4 7v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V7l-8-4Z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'sparkles':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M5 12H3m18 0h-2M7 7l-1.5-1.5M18.5 18.5 17 17M7 17l-1.5 1.5M18.5 5.5 17 7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8a4 4 0 1 0 4 4" />
        </svg>
      )
    case 'bolt':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
        </svg>
      )
    case 'lock':
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path strokeLinecap="round" d="M8 11V8a4 4 0 1 1 8 0v3" />
        </svg>
      )
  }
}
