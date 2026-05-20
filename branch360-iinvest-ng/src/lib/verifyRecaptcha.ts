export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const res = await fetch('/api/verify-recaptcha', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  })

  if (!res.ok) return false

  try {
    const data = (await res.json()) as { success?: boolean }
    return data.success === true
  } catch {
    return false
  }
}
