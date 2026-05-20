import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')

function recaptchaVerifyDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'recaptcha-verify-dev',
    configureServer(server) {
      server.middlewares.use('/api/verify-recaptcha', (req, res, next) => {
        if (req.method !== 'POST') {
          next()
          return
        }

        let body = ''
        req.on('data', (chunk: Buffer) => {
          body += chunk.toString()
        })
        req.on('end', async () => {
          try {
            const { token } = JSON.parse(body) as { token?: string }
            const secret = env.RECAPTCHA_SECRET_KEY

            if (!secret) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: false, error: 'RECAPTCHA_SECRET_KEY not set' }))
              return
            }

            if (!token) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: false, error: 'Missing token' }))
              return
            }

            const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams({ secret, response: token }),
            })
            const data = (await verifyRes.json()) as { success?: boolean }

            res.statusCode = data.success ? 200 : 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: !!data.success }))
          } catch {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ success: false }))
          }
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const appEnv = loadEnv(mode, __dirname, '')
  const rootEnv = loadEnv(mode, repoRoot, '')
  const env = { ...rootEnv, ...appEnv }

  return {
    envDir: repoRoot,
    plugins: [react(), tailwindcss(), recaptchaVerifyDevPlugin(env)],
    build: {
      sourcemap: false,
    },
  }
})
