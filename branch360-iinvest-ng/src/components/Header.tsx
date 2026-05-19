import { useState, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as Select from '@radix-ui/react-select'
import * as Dialog from '@radix-ui/react-dialog'
import { useMapContext } from '../context/MapContext'
import { useTerritoryData } from '../context/DataContext'
import { SearchableSelect } from './SearchableSelect'
import { IINVEST_LOGO_SRC, MY_ACCOUNT_URL, ROUTES, SITE_TITLE } from '../constants/site'
import { STATUS_LABELS } from '../data/statusColors'
import type { InvestStatus } from '../types'

const ALL_VALUE = '__all__'

const STATUS_OPTIONS: { value: InvestStatus | typeof ALL_VALUE; label: string }[] = [
  { value: ALL_VALUE, label: 'All statuses' },
  { value: 'green', label: STATUS_LABELS.green },
  { value: 'amber', label: STATUS_LABELS.amber },
  { value: 'red', label: STATUS_LABELS.red },
]

const navLinkClass = (active: boolean) =>
  `rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors ${
    active
      ? 'bg-sky-100 text-sky-900'
      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
  }`

const filterTriggerClass =
  'inline-flex h-8 min-h-8 w-full items-center justify-between gap-1 overflow-hidden rounded-md border border-slate-200 bg-white px-2 py-1 text-sm text-slate-800 shadow-sm hover:border-slate-300 focus:border-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-600/25 [&>span]:min-w-0 [&>span]:truncate'

const filterTriggerBarClass = `${filterTriggerClass} min-w-[7.25rem] max-w-[9.5rem]`

const contentClass =
  'z-[3000] max-h-[min(280px,50dvh)] overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)] max-w-[min(calc(100vw-2rem),20rem)]'

const itemClass =
  'relative flex cursor-pointer select-none items-center px-3 py-2 text-sm outline-none data-[highlighted]:bg-sky-50 data-[highlighted]:text-sky-900'

function FilterDropdowns({ layout }: { layout: 'bar' | 'stack' }) {
  const { filters, setFilters } = useMapContext()
  const { stateTerritoryFilterOptions, cityTerritoryFilterOptions } = useTerritoryData()

  const territoryOptions = useMemo(
    () => [
      { value: ALL_VALUE, label: 'All states' },
      ...stateTerritoryFilterOptions.map(({ id, label }) => ({ value: id, label })),
    ],
    [stateTerritoryFilterOptions],
  )

  const cityOptions = useMemo(
    () => [
      { value: ALL_VALUE, label: 'All substates' },
      ...cityTerritoryFilterOptions.map(({ id, label }) => ({ value: id, label })),
    ],
    [cityTerritoryFilterOptions],
  )

  const isBar = layout === 'bar'

  return (
    <div
      className={
        isBar
          ? 'flex flex-wrap items-end gap-x-3 gap-y-2 sm:gap-x-4'
          : 'flex w-full flex-col gap-4'
      }
    >
      <div className={isBar ? 'flex items-center gap-1.5' : 'flex w-full flex-col gap-1.5'}>
        <label className={`shrink-0 font-medium text-slate-100 ${isBar ? 'text-xs' : 'text-sm'}`}>
          Territory
        </label>
        <SearchableSelect
          wide={!isBar}
          fullWidth={!isBar}
          value={filters.territoryId || ALL_VALUE}
          onValueChange={(v) => {
            const territoryId = v === ALL_VALUE ? '' : v
            setFilters((prev) => ({
              ...prev,
              territoryId,
              cityTerritoryId: territoryId ? '' : prev.cityTerritoryId,
            }))
          }}
          options={territoryOptions}
          placeholder="All states"
          searchPlaceholder="Search states..."
          ariaLabel="Filter by state"
          className={isBar ? 'min-w-[7.25rem] max-w-[9.5rem]' : 'w-full'}
        />
      </div>
      {cityTerritoryFilterOptions.length > 0 ? (
        <div className={isBar ? 'flex items-center gap-1.5' : 'flex w-full flex-col gap-1.5'}>
          <label className={`shrink-0 font-medium text-slate-100 ${isBar ? 'text-xs' : 'text-sm'}`}>
            Substates
          </label>
          <SearchableSelect
            fullWidth={!isBar}
            value={filters.cityTerritoryId || ALL_VALUE}
            onValueChange={(v) => {
              const cityTerritoryId = v === ALL_VALUE ? '' : v
              setFilters((prev) => ({
                ...prev,
                cityTerritoryId,
                territoryId: cityTerritoryId ? '' : prev.territoryId,
              }))
            }}
            options={cityOptions}
            placeholder="All substates"
            searchPlaceholder="Search substates..."
            ariaLabel="Filter by substate"
            className={isBar ? 'min-w-[7.25rem] max-w-[9.5rem]' : 'w-full'}
          />
        </div>
      ) : null}
      <div className={isBar ? 'flex items-center gap-1.5' : 'flex w-full flex-col gap-1.5'}>
        <label className={`shrink-0 font-medium text-slate-100 ${isBar ? 'text-xs' : 'text-sm'}`}>
          Status
        </label>
        <Select.Root
          value={filters.status || ALL_VALUE}
          onValueChange={(v) =>
            setFilters((prev) => ({
              ...prev,
              status: (v === ALL_VALUE ? '' : v) as InvestStatus | '',
            }))
          }
        >
          <Select.Trigger
            className={isBar ? filterTriggerBarClass : filterTriggerClass}
            aria-label="Filter by status"
          >
            <Select.Value placeholder="All statuses" />
            <Select.Icon className="ml-auto shrink-0 text-slate-400">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className={contentClass} position="popper" sideOffset={4}>
              <Select.Viewport>
                {STATUS_OPTIONS.map(({ value, label }) => (
                  <Select.Item key={value} value={value} className={itemClass}>
                    <Select.ItemText>{label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
    </div>
  )
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function Header({ showFilters = true }: { showFilters?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="shrink-0 border-b border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-2 px-3 py-2 sm:gap-x-3 sm:px-4 lg:flex-nowrap lg:py-2.5">
        <Link
          to={ROUTES.home}
          className="shrink-0 rounded outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
        >
          <img
            src={IINVEST_LOGO_SRC}
            alt="iInvest"
            width={160}
            height={44}
            className="h-8 w-auto max-w-[8.5rem] object-contain object-left sm:h-9 sm:max-w-[9.5rem]"
            decoding="async"
          />
        </Link>

        <h1 className="hidden min-w-0 max-w-[9rem] truncate text-sm font-semibold text-slate-800 xl:block 2xl:max-w-[13rem]">
          {SITE_TITLE}
        </h1>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
          <Link to={ROUTES.home} className={navLinkClass(location.pathname === ROUTES.home)}>
            Home
          </Link>
          <Link to={ROUTES.invest} className={navLinkClass(location.pathname === ROUTES.invest)}>
            Invest
          </Link>
          <Link
            to={ROUTES.raiseCapital}
            className={navLinkClass(location.pathname === ROUTES.raiseCapital)}
          >
            Raise capital
          </Link>
        </nav>

        <a
          href={MY_ACCOUNT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-lg px-2.5 py-1.5 text-sm font-bold text-sky-800 hover:bg-sky-50 hover:underline lg:inline-flex"
        >
          My Account
        </a>

        <div className="ml-auto flex shrink-0 lg:hidden">
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                className="flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                aria-label="Open menu"
              >
                <HamburgerIcon />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-[2000] bg-black/40" />
              <Dialog.Content className="fixed right-0 top-0 z-[2001] flex h-full w-full max-w-sm flex-col bg-white shadow-xl focus:outline-none sm:max-w-md">
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                  <span className="text-lg font-semibold text-slate-900">Menu</span>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
                      aria-label="Close menu"
                    >
                      <CloseIcon />
                    </button>
                  </Dialog.Close>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col gap-1 border-b border-slate-100 p-4" aria-label="Mobile main">
                    <Link
                      to={ROUTES.home}
                      className="rounded-lg px-3 py-2.5 text-slate-800 hover:bg-slate-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      to={ROUTES.invest}
                      className="rounded-lg px-3 py-2.5 text-slate-800 hover:bg-slate-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Invest
                    </Link>
                    <Link
                      to={ROUTES.raiseCapital}
                      className="rounded-lg px-3 py-2.5 text-slate-800 hover:bg-slate-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Raise capital
                    </Link>
                    <a
                      href={MY_ACCOUNT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg px-3 py-2.5 font-bold text-sky-800 hover:bg-sky-50"
                    >
                      My Account
                    </a>
                  </nav>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>

      {showFilters ? (
        <div className="border-t border-[#003a63] bg-[#00487b] px-3 py-2.5 sm:px-4">
          <div className="hidden sm:block">
            <FilterDropdowns layout="bar" />
          </div>
          <div className="sm:hidden">
            <FilterDropdowns layout="stack" />
          </div>
        </div>
      ) : null}
    </header>
  )
}
