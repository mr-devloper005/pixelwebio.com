import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export function AmberPage({
  eyebrow,
  title,
  highlight,
  description,
  actions,
  children,
}: {
  eyebrow?: string
  title: string
  highlight?: string
  description?: string
  actions?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-[#fff7e8] to-[#fffaf2]">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            {eyebrow ? (
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-3 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              {title}{' '}
              {highlight ? <span className="text-amber-500">{highlight}</span> : null}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                {description}
              </p>
            ) : null}
            {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export function AmberSection({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  )
}

export function AmberCard({
  className = '',
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={`rounded-2xl border border-amber-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  )
}
