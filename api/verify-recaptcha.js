/**
 * Verifies Google reCAPTCHA v2 token server-side.
 * Set RECAPTCHA_SECRET_KEY in Vercel project env (Settings → Environment Variables).
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  const { token } = req.body ?? {}
  const secret = process.env.RECAPTCHA_SECRET_KEY

  if (!secret) {
    console.error('RECAPTCHA_SECRET_KEY is not set')
    return res.status(500).json({ success: false, error: 'Server misconfigured' })
  }

  if (!token || typeof token !== 'string') {
    return res.status(400).json({ success: false, error: 'Missing token' })
  }

  try {
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    })
    const data = await verifyRes.json()

    if (!data.success) {
      return res.status(400).json({ success: false })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('reCAPTCHA verify error:', err)
    return res.status(500).json({ success: false, error: 'Verification failed' })
  }
}
