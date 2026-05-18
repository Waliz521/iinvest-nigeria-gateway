import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const p = path.join(__dirname, '..', 'src', 'components', 'TerritoryModal.tsx')
let c = fs.readFileSync(p, 'utf8')

const replacement = `            <section>
              <h3 className="font-medium text-gray-800">Funding opportunities</h3>
              {territory.fundingProjects.length ? (
                <motion />
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
                        <tr key={\`\${p.name}-\${i}\`} className="border-b border-gray-100 text-gray-700">
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
                <h3 className="font-medium text-gray-800">Custom data</h3>`

const re =
  /            <section>\s*<h3 className="font-medium text-gray-800">Issues<\/h3>[\s\S]*?<h3 className="font-medium text-gray-800">Additional data<\/h3>/

if (!re.test(c)) {
  console.error('Pattern not found')
  process.exit(1)
}

c = c.replace(re, replacement.replace('<motion />\n                ', ''))
fs.writeFileSync(p, c)
console.log('Patched TerritoryModal')
