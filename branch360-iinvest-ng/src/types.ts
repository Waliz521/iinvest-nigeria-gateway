export type InvestStatus = 'green' | 'amber' | 'red'

export interface CustomDataEntry {
  key: string
  value: string
}

export interface FundingProject {
  name: string
  sector: string
  amount: string
  status: string
  url: string
}

export interface TerritoryRecord {
  /** Unique key for filters/map (duplicate Excel s/n → "6_2", …) */
  id: string
  sn: number
  territory: string
  territoryLabel: string
  developerNotes: string
  areas: string
  population: number
  households: number
  kpi: number
  sectors: string
  status: InvestStatus
  projectsActive: string
  projectsCompleted: string
  fundingMonth1: number
  fundingMonth2: number
  fundingMonth3: number
  fundingMonth4: number
  fundingMonth5: number
  fundingMonth6: number
  fundingMonth7: number
  fundingProjects: FundingProject[]
  customData: CustomDataEntry[]
}

export interface TerritoriesPayload {
  generatedAt: string
  sourceSheet: string
  sourceFile: string
  territories: TerritoryRecord[]
}
