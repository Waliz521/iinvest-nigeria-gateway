import type { ReactNode } from 'react'

export function InvestSection({
  id,
  children,
  className = '',
  innerClassName = 'max-w-6xl',
}: {
  id?: string
  children: ReactNode
  className?: string
  innerClassName?: string
}) {
  return (
    <section id={id} className={`px-4 py-14 sm:px-6 sm:py-16 lg:px-8 ${className}`}>
      <div className={`mx-auto ${innerClassName}`}>{children}</div>
    </section>
  )
}
