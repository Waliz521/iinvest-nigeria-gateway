/**
 * Reads Data/NigeriaInvest.xlsx → src/data/territoriesParsed.json
 * Run from branch360-iinvest-ng: npm run data:import
 */
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'
import XLSX from 'xlsx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const DEFAULT_XLSX = path.join(root, '..', 'Data', 'NigeriaInvest.xlsx')
const xlsxPath = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_XLSX
const outPath = path.join(root, 'src', 'data', 'territoriesParsed.json')

function normalizeStatus(raw) {
  const s = String(raw ?? '')
    .trim()
    .toLowerCase()
  if (s === 'green' || s === 'geen') return 'green'
  if (s === 'amber') return 'amber'
  if (s === 'red') return 'red'
  return 'amber'
}

function parseCustomData(raw) {
  if (!raw?.trim()) return []
  const entries = []
  const text = String(raw).replace(/\r\n/g, '\n')
  for (const block of text.split(/\n+/).map((s) => s.trim()).filter(Boolean)) {
    for (const part of block.split(';').map((s) => s.trim()).filter(Boolean)) {
      const idx = part.indexOf(':')
      if (idx > 0) {
        entries.push({
          key: part.slice(0, idx).trim(),
          value: part.slice(idx + 1).trim(),
        })
      }
    }
  }
  return entries
}

function parseFundingProjects(raw) {
  if (!raw?.trim()) return []
  const projects = []
  const text = String(raw).replace(/\r\n/g, '\n')
  for (const block of text.split(';').map((s) => s.trim()).filter(Boolean)) {
    const fields = {}
    const normalized = block.replace(/\s+status:/gi, ', status:')
    for (const segment of normalized.split(',').map((s) => s.trim())) {
      const idx = segment.indexOf(':')
      if (idx > 0) {
        const key = segment.slice(0, idx).trim().toLowerCase()
        const value = segment.slice(idx + 1).trim()
        fields[key] = value
      }
    }
    if (fields.project || fields.name) {
      projects.push({
        name: fields.project || fields.name || '',
        sector: fields.sector || '',
        amount: fields.amount || '',
        status: fields.status || '',
        url: fields.url || '',
      })
    }
  }
  return projects
}

function num(v, fallback = 0) {
  if (typeof v === 'number' && !Number.isNaN(v)) return v
  const n = Number(String(v).replace(/,/g, '').trim())
  return Number.isFinite(n) ? n : fallback
}

if (!fs.existsSync(xlsxPath)) {
  console.error('Missing workbook:', xlsxPath)
  process.exit(1)
}

const wb = XLSX.readFile(xlsxPath)
const sheetName = wb.SheetNames[0]
const sheet = wb.Sheets[sheetName]
const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' })

const snOccurrence = new Map()
const territories = rows.map((row) => {
  const sn = num(row['s/n'], 0)
  const occ = (snOccurrence.get(sn) ?? 0) + 1
  snOccurrence.set(sn, occ)
  const id = occ === 1 ? String(sn) : `${sn}_${occ}`
  const territory = String(row['Territory'] ?? '').trim()
  const territoryLabel =
    territory || (sn ? `Territory ${sn}` : 'Unknown territory')

  const fundingMonths = [1, 2, 3, 4, 5, 6, 7].map((m) =>
    num(row[`InestsMonth${m}`], 0),
  )

  return {
    id,
    sn,
    territory,
    territoryLabel,
    developerNotes: String(row['DeveloperNotes'] ?? '').trim(),
    areas: String(row['Areas'] ?? '').trim(),
    population: num(row['Population'], 0),
    households: num(row['Households'], 0),
    kpi: Math.min(100, Math.max(0, num(row['KPI'], 0))),
    sectors: String(row['Sectors'] ?? '').trim(),
    status: normalizeStatus(row['Status']),
    projectsActive: String(row['ProjectsActive'] ?? '').trim(),
    projectsCompleted: String(row['ProjectsCompleted'] ?? '').trim(),
    fundingMonth1: fundingMonths[0],
    fundingMonth2: fundingMonths[1],
    fundingMonth3: fundingMonths[2],
    fundingMonth4: fundingMonths[3],
    fundingMonth5: fundingMonths[4],
    fundingMonth6: fundingMonths[5],
    fundingMonth7: fundingMonths[6],
    fundingProjects: parseFundingProjects(row['Projects']),
    customData: parseCustomData(row['CustomData']),
  }
})

const payload = {
  generatedAt: new Date().toISOString(),
  sourceSheet: sheetName,
  sourceFile: path.basename(xlsxPath),
  territories,
}

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(payload, null, 2), 'utf8')
console.log('Wrote', territories.length, 'territories →', outPath)
