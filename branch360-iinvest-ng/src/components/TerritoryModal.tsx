import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useRef, useState } from 'react'
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip as ChartTooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { TerritoryRecord } from '../types'
import { STATUS_COLORS, STATUS_LABELS } from '../data/statusColors'

function sectorList(raw: string): string[] {
  return raw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
}

const MONTH_LABELS = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7']

function chartData(t: TerritoryRecord) {
  return MONTH_LABELS.map((label, i) => ({
    month: label,
    value: t[`fundingMonth${i + 1}` as keyof TerritoryRecord] as number,
  }))
}

function projectUrl(url: string) {
  if (!url) return ''
  if (/^https?:\/\//i.test(url)) return url
  return `https://${url}`
}

interface TerritoryModalProps {
  territory: TerritoryRecord | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TerritoryModal({ territory, open, onOpenChange }: TerritoryModalProps) {
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const dragRef = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null)
  const dragHandleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) setDragOffset({ x: 0, y: 0 })
  }, [open])

  if (!territory) return null

  const sectors = sectorList(territory.sectors)
  const lineData = chartData(territory)
  const statusColor = STATUS_COLORS[territory.status]

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[2000] bg-black/45" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[2001] max-h-[min(90dvh,720px)] w-[min(calc(100vw-1rem),560px)] overflow-y-auto rounded-2xl bg-white p-4 shadow-xl sm:p-5"
          style={{
            transform: `translate(calc(-50% + ${dragOffset.x}px), calc(-50% + ${dragOffset.y}px))`,
          }}
        >
          <div
            ref={dragHandleRef}
            className="cursor-grab select-none active:cursor-grabbing"
            onPointerDown={(e) => {
              if (e.button !== 0) return
              dragHandleRef.current?.setPointerCapture(e.pointerId)
              dragRef.current = {
                px: e.clientX,
                py: e.clientY,
                ox: dragOffset.x,
                oy: dragOffset.y,
              }
            }}
            onPointerMove={(e) => {
              const d = dragRef.current
              if (!d) return
              setDragOffset({
                x: d.ox + (e.clientX - d.px),
                y: d.oy + (e.clientY - d.py),
              })
            }}
            onPointerUp={(e) => {
              dragRef.current = null
              try {
                dragHandleRef.current?.releasePointerCapture(e.pointerId)
              } catch {
                /* ignore */
              }
            }}
            onPointerCancel={() => {
              dragRef.current = null
            }}
          >
            <Dialog.Title className="pr-8 text-xl font-semibold text-gray-900">
              {territory.territoryLabel}
            </Dialog.Title>
          </div>
          <Dialog.Description className="sr-only">
            Investment status, demographics, and funding for this territory.
          </Dialog.Description>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span
              className="inline-flex rounded-full px-3 py-1 text-sm font-medium text-white"
              style={{ backgroundColor: statusColor }}
            >
              {STATUS_LABELS[territory.status]}
            </span>
          </div>

          <div className="mt-4 space-y-4 text-sm">
            <section>
              <h3 className="font-medium text-gray-800">Investment sectors</h3>
              {sectors.length ? (
                <ul className="mt-1 list-inside list-disc text-gray-700">
                  {sectors.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">—</p>
              )}
            </section>

            <section>
              <h3 className="font-medium text-gray-800">Areas covered</h3>
              <p className="mt-1 whitespace-pre-line text-gray-700">{territory.areas || '—'}</p>
            </section>

            <section>
              
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-medium text-gray-800">Funding KPI</h3>
                <span className="text-gray-600">{territory.kpi}%</span>
              </div>
              <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${territory.kpi}%`,
                    backgroundColor: statusColor,
                  }}
                />
              </div>
            </section>

            <section>
              <h3 className="mb-2 font-medium text-gray-800">Demographics</h3>
              <dl className="mb-4 grid grid-cols-2 gap-3 text-gray-700">
                <div>
                  <dt className="text-xs text-gray-500">Population</dt>
                  <dd className="mt-0.5">
                    {territory.population ? territory.population.toLocaleString() : '—'}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">Households</dt>
                  <dd className="mt-0.5">
                    {territory.households ? territory.households.toLocaleString() : '—'}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">Projects active</dt>
                  <dd className="mt-0.5">{territory.projectsActive || '—'}</dd>
                </div>
                <div>
                  <dt className="text-xs text-gray-500">Projects completed</dt>
                  <dd className="mt-0.5">{territory.projectsCompleted || '—'}</dd>
                </div>
              </dl>
              <h3 className="font-medium text-gray-800">Funding (last 7 months, $M)</h3>
              <div className="mt-2 h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 10 }}
                      interval={0}
                      angle={-25}
                      textAnchor="end"
                      height={50}
                    />
                    <YAxis tick={{ fontSize: 11 }} width={32} />
                    <ChartTooltip formatter={(v) => [`$${v}M`, 'Funding']} />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={statusColor}
                      strokeWidth={2}
                      dot={{ r: 3, fill: statusColor }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            <section>
              <h3 className="font-medium text-gray-800">Funding opportunities</h3>
              {territory.fundingProjects.length ? (
                <div className="mt-2 overflow-x-auto">
                  <table className="w-full min-w-[420px] border-collapse text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-gray-200 text-gray-500">
                        <th className="py-2 pr-2 font-medium">Project</th>
                        <th className="py-2 pr-2 font-medium">Sector</th>
                        <th className="py-2 pr-2 font-medium">Amount</th>
                        <th className="py-2 pr-2 font-medium">Status</th>
                        <th className="py-2 font-medium">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {territory.fundingProjects.map((p, i) => (
                        <tr key={`${p.name}-${i}`} className="border-b border-gray-100 text-gray-700">
                          <td className="py-2 pr-2">{p.name || '—'}</td>
                          <td className="py-2 pr-2">{p.sector || '—'}</td>
                          <td className="py-2 pr-2">{p.amount || '—'}</td>
                          <td className="py-2 pr-2">{p.status || '—'}</td>
                          <td className="py-2">
                            {p.url ? (
                              <a
                                href={projectUrl(p.url)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-sky-700 underline hover:text-sky-900"
                              >
                                View
                              </a>
                            ) : (
                              '—'
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="mt-1 text-gray-500">No funding opportunities listed.</p>
              )}
            </section>

            {territory.customData.length ? (
              <section>
                <h3 className="font-medium text-gray-800">Custom data</h3>
                <ul className="mt-1 space-y-1 text-gray-700">
                  {territory.customData.map((e) => (
                    <li key={e.key}>
                      <span className="font-medium text-gray-600">{e.key}:</span> {e.value}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </div>

          <Dialog.Close asChild>
            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-gray-100 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200"
            >
              Close
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
