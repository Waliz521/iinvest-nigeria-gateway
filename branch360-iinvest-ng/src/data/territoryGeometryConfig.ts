/**
 * Maps each imported row (`TerritoryRecord.id`) to Nigeria state names as in
 * `public/geojson/nigeria-states.geojson` → Feature.properties.name
 */
export type GeometryKind = 'polygon' | 'point'

export interface TerritoryGeometryRule {
  states: string[]
  kind: GeometryKind
  offset?: [number, number]
}

/** Key = `TerritoryRecord.id` from NigeriaInvest.xlsx import */
export const TERRITORY_GEOMETRY: Record<string, TerritoryGeometryRule> = {
  '1': { states: ['Delta'], kind: 'polygon' },
  '2': { states: ['Ekiti'], kind: 'polygon' },
  '3': { states: ['Gombe'], kind: 'polygon' },
  '4': { states: ['Imo'], kind: 'polygon' },
  '5': { states: ['Kaduna'], kind: 'polygon' },
  '6': { states: ['Kano'], kind: 'polygon' },
  '7': { states: ['Katsina'], kind: 'polygon' },
  '8': { states: ['Plateau'], kind: 'polygon' },
  '9': { states: ['Lagos'], kind: 'polygon' },
}
