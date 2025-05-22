// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="mx-auto mt-16 max-w-6xl border-t py-6 text-center text-xs text-slate-500">
      © {new Date().getFullYear()} Business Idea Blueprints •{' '}
      <a href="/contact">Contact</a>
    </footer>
  )
}
