// components/Header.tsx
'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-extrabold leading-tight text-brand">
          BUSINESS IDEA<br/>BLUEPRINTS.COM
        </Link>
        <ul className="hidden gap-8 text-sm font-medium sm:flex">
          <li><Link href="/ideas">Ideas</Link></li>
          <li><Link href="/newsletter">Newsletter</Link></li>
          <li><Link href="/tools">Tools</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/pricing">Pricing</Link></li>
        </ul>
        <Link
          href="/newsletter"
          className="rounded bg-brand px-5 py-2 text-sm font-medium text-white hover:bg-brand-dark"
        >
          Subscribe
        </Link>
      </nav>
    </header>
  )
}
