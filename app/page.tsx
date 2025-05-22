// app/page.tsx
import Link from 'next/link'
import { getAllIdeas } from '@/lib/getIdeas'
import NewsletterForm from '@/components/NewsletterForm'
import Calculator from '@/components/Calculator'

export default async function Home() {
  const ideas = (await getAllIdeas()).slice(0, 3)

  return (
    <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
      {/* Left column */}
      <div className="space-y-14">
        <section>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Actionable business ideas,<br/>backed by real numbers.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Weekly breakdowns of build costs, revenue models, and time-to-profit—
            delivered every Sunday.
          </p>
          <div className="mt-6"><NewsletterForm /></div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Latest breakdowns</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {ideas.map(idea => (
              <Link
                key={idea.slug}
                href={`/ideas/${idea.slug}`}
                className="rounded-lg border p-5 transition hover:shadow-md"
              >
                <h3 className="font-medium">{idea.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{idea.summary}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Startup €{idea.startupCost.toLocaleString()} · BE {idea.breakEvenMonths} mo
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/ideas"
              className="text-brand underline underline-offset-4 hover:text-brand-dark"
            >
              Browse all ideas →
            </Link>
          </div>
        </section>
      </div>

      {/* Right column */}
      <div className="flex flex-col justify-between gap-10">
        <Calculator />
        <figure className="text-center italic">
          “Your breakdowns helped me pick a profitable idea in one weekend!”
          <figcaption className="mt-3 not-italic">Mira, Vienna</figcaption>
        </figure>
        <footer className="border-t pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} Business Idea Blueprints •{' '}
          <a href="/privacy">Privacy</a> • <a href="/terms">Terms</a> •{' '}
          <a href="/contact">Contact</a>
        </footer>
      </div>
    </div>
  )
}
