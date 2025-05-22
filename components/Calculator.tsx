// components/Calculator.tsx
'use client'
import { useState } from 'react'

export default function Calculator() {
  const [budget, setBudget] = useState('')
  const [goal, setGoal] = useState('')
  const months = Number(goal) > 0 ? (Number(budget) / Number(goal)).toFixed(1) : '–'

  return (
    <div className="w-full rounded-lg border p-6 shadow-sm bg-white">
      <h3 className="text-lg font-semibold">Startup Cost Calculator</h3>
      <label className="mt-4 block text-sm">
        Budget (€)
        <input
          type="number"
          inputMode="decimal"
          value={budget}
          onChange={e => setBudget(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </label>
      <label className="mt-4 block text-sm">
        Monthly revenue goal (€)
        <input
          type="number"
          inputMode="decimal"
          value={goal}
          onChange={e => setGoal(e.target.value)}
          className="mt-1 w-full rounded border px-3 py-2"
        />
      </label>
      <button
        onClick={() => {}}
        className="mt-6 w-full rounded bg-brand px-5 py-2 font-medium text-white hover:bg-brand-dark"
      >
        Calculate
      </button>
      <p className="mt-4 text-center text-sm">
        ≈ <strong>{months}</strong> months to break even
      </p>
    </div>
  )
}
