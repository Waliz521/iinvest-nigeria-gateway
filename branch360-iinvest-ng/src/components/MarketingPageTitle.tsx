/** Page heading shown above the hero on Invest / Raise marketing pages */
export function MarketingPageTitle({ children }: { children: string }) {
  return (
    <div className="border-b border-gray-100 bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <h1 className="mx-auto max-w-6xl text-center text-3xl font-bold leading-tight tracking-tight text-[#00487b] sm:text-4xl sm:leading-[1.15] lg:text-[2.5rem]">
        {children}
      </h1>
    </div>
  )
}
