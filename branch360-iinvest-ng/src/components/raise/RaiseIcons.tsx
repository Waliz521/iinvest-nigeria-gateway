type RaiseIconName = 'users' | 'regulated' | 'fast' | 'secure' | 'growth' | 'chart'

export function RaiseIcon({
  name,
  className = 'h-7 w-7',
  strokeWidth = 2,
}: {
  name: RaiseIconName
  className?: string
  strokeWidth?: number
}) {
  const common = { className, fill: 'none', stroke: 'currentColor', strokeWidth, 'aria-hidden': true as const }

  switch (name) {
    case 'users':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <circle cx="10" cy="9" r="3.5" />
          <circle cx="19" cy="9" r="3.5" />
          <path strokeLinecap="round" d="M4 22c0-3.5 2.7-6 6-6M18 16c3.3 0 6 2.5 6 6" />
        </svg>
      )
    case 'regulated':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h14v10H5V10ZM17 10V7H11v3" />
        </svg>
      )
    case 'fast':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14v14H5V8ZM14 4v4M10 12h8" />
        </svg>
      )
    case 'secure':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 4 6 7.5v5.5c0 4.5 3.2 8.7 8 9.5 4.8-.8 8-5 8-9.5V7.5L14 4Z" />
        </svg>
      )
    case 'growth':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M18 20l-4-6 4-4" />
        </svg>
      )
    case 'chart':
      return (
        <svg viewBox="0 0 28 28" {...common}>
          <path strokeLinecap="round" d="M6 20V12M12 20V8M18 20V14M24 20V6" />
        </svg>
      )
  }
}
