import { createContext, useContext } from 'react'
import type { InvestStatus } from '../types'

export interface MapFilters {
  territoryId: string
  cityTerritoryId: string
  status: InvestStatus | ''
}

export interface MapContextValue {
  filters: MapFilters
  setFilters: (filters: MapFilters | ((prev: MapFilters) => MapFilters)) => void
}

export const MapContext = createContext<MapContextValue | null>(null)

export function useMapContext() {
  const ctx = useContext(MapContext)
  if (!ctx) throw new Error('useMapContext must be used within MapContext.Provider')
  return ctx
}
