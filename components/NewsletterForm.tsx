// components/NewsletterForm.tsx
'use client'
import { useState, FormEvent } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // TODO: integrate real email API
    setSent(true)
  }

  if (sent) {
    return (
      <p className="mt-4 text-sm text-green-700">
        ✅ Thanks! Check your inbox.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md gap-2 rounded border p-2 shadow-sm">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-1 rounded px-3 py-2 outline-none"
      />
      <button
        type="submit"
        className="rounded bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark"
      >
        Subscribe
      </button>
    </form>
  )
}
