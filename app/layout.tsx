// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from '@/components/Header'
import '@/app/globals.css'

const geistSans = Geist({ subsets:['latin'], variable:'--font-geist-sans' })
const geistMono = Geist_Mono({ subsets:['latin'], variable:'--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Business Idea Blueprints',
  description: 'Actionable business ideas with real numbers.',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: '#F5F6F7' }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-800`}
      >
        <Header />
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-10 shadow-sm sm:p-14">
          {children}
        </div>
      </body>
    </html>
  )
}
