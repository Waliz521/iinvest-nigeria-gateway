import type { InvestStatus } from '../types'

export const STATUS_COLORS: Record<InvestStatus, string> = {
  green: '#16a34a',
  amber: '#d97706',
  red: '#dc2626',
}

export const STATUS_LABELS: Record<InvestStatus, string> = {
  green: 'Active opportunities',
  amber: 'Limited opportunities',
  red: 'No opportunities',
}

export function statusStyleColor(status: InvestStatus): string {
  return STATUS_COLORS[status] ?? STATUS_COLORS.amber
}
