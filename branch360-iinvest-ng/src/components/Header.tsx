import { useState, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as Select from '@radix-ui/react-select'
import * as Dialog from '@radix-ui/react-dialog'
import { useMapContext } from '../context/MapContext'
import { useTerritoryData } from '../context/DataContext'
import { SearchableSelect } from './SearchableSelect'
import { IINVEST_LOGO_SRC, MY_ACCOUNT_URL, ROUTES } from '../constants/site'
import { STATUS_LABELS } from '../data/statusColors'
import type { InvestStatus } from '../types'

const ALL_VALUE = '__all__'

const STATUS_OPTIONS: { value: InvestStatus | typeof ALL_VALUE; label: string }[] = [
  { value: ALL_VALUE, label: 'All statuses' },
  { value: 'green', label: STATUS_LABELS.green },
  { value: 'amber', label: STATUS_LABELS.amber },
  { value: 'red', label: STATUS_LABELS.red },
]

const marketingNavLinkClass = (active: boolean) =>
  `text-base leading-6 transition-colors ${
    active ? 'font-semibold text-[#00487b]' : 'font-normal text-gray-700 hover:text-[#00487b]'
  }`

const accountButtonClass =
  'inline-flex h-11 shrink-0 items-center justify-center rounded-[10px] bg-[#00487b] px-6 text-base font-medium text-white shadow-sm transition-colors hover:bg-[#003a63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00487b]/40'

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

function MobileNavMenu({
  open,
  onOpenChange,
  location,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  location: { pathname: string }
}) {
  const linkClass = (active: boolean) =>
    `rounded-lg px-3 py-2.5 text-base ${
      active ? 'font-semibold text-[#00487b]' : 'text-gray-700 hover:bg-slate-50'
    }`

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
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
          <div className="flex flex-1 flex-col overflow-y-auto p-4">
            <nav className="flex flex-col gap-1" aria-label="Mobile main">
              <Link
                to={ROUTES.home}
                className={linkClass(location.pathname === ROUTES.home)}
                onClick={() => onOpenChange(false)}
              >
                Home
              </Link>
              <Link
                to={ROUTES.invest}
                className={linkClass(location.pathname === ROUTES.invest)}
                onClick={() => onOpenChange(false)}
              >
                Invest
              </Link>
              <Link
                to={ROUTES.raiseCapital}
                className={linkClass(location.pathname === ROUTES.raiseCapital)}
                onClick={() => onOpenChange(false)}
              >
                Raise Funds
              </Link>
            </nav>
            <a
              href={MY_ACCOUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 ${accountButtonClass} w-full`}
            >
              My Account
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function Header({ showFilters = true }: { showFilters?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="shrink-0 bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.10),0px_1px_3px_0px_rgba(0,0,0,0.10)]">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          to={ROUTES.home}
          className="shrink-0 rounded outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40"
        >
          <img
            src={IINVEST_LOGO_SRC}
            alt="iInvest"
            width={144}
            height={40}
            className="h-10 w-auto max-w-[9rem] object-contain object-left"
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-12 lg:flex" aria-label="Main">
          <Link to={ROUTES.home} className={marketingNavLinkClass(location.pathname === ROUTES.home)}>
            Home
          </Link>
          <Link to={ROUTES.invest} className={marketingNavLinkClass(location.pathname === ROUTES.invest)}>
            Invest
          </Link>
          <Link
            to={ROUTES.raiseCapital}
            className={marketingNavLinkClass(location.pathname === ROUTES.raiseCapital)}
          >
            Raise Funds
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={MY_ACCOUNT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${accountButtonClass} hidden lg:inline-flex`}
          >
            My Account
          </a>
          <div className="lg:hidden">
            <MobileNavMenu
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
              location={location}
            />
          </div>
        </div>
      </div>

      {showFilters ? (
        <div className="border-t border-[#003a63] bg-[#00487b]">
          <div className="mx-auto max-w-[1280px] px-4 py-2.5 sm:px-6">
            <div className="hidden sm:block">
              <FilterDropdowns layout="bar" />
            </div>
            <div className="sm:hidden">
              <FilterDropdowns layout="stack" />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
