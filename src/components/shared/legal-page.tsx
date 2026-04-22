import type { ReactNode } from 'react'
import Link from 'next/link'
import { FileText, Shield, Cookie, Scale, ArrowRight } from 'lucide-react'
import { AmberPage, AmberSection } from '@/components/shared/amber-page'

const legalNav = [
  { name: 'Privacy', href: '/privacy', icon: Shield },
  { name: 'Terms', href: '/terms', icon: FileText },
  { name: 'Cookies', href: '/cookies', icon: Cookie },
  { name: 'Licenses', href: '/licenses', icon: Scale },
]

export function LegalPage({
  current,
  eyebrow,
  title,
  highlight,
  description,
  updated,
  sections,
}: {
  current: string
  eyebrow: string
  title: string
  highlight: string
  description: string
  updated: string
  sections: { id: string; heading: string; body: ReactNode }[]
}) {
  return (
    <AmberPage eyebrow={eyebrow} title={title} highlight={highlight} description={description}>
      <AmberSection>
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
              <p className="px-3 text-xs font-bold uppercase tracking-wider text-amber-600">
                Legal
              </p>
              <nav className="mt-2 space-y-1">
                {legalNav.map((l) => {
                  const active = l.name === current
                  return (
                    <Link
                      key={l.name}
                      href={l.href}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                        active
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow'
                          : 'text-slate-600 hover:bg-amber-50 hover:text-amber-600'
                      }`}
                    >
                      <l.icon className="h-4 w-4" />
                      {l.name}
                    </Link>
                  )
                })}
              </nav>
              <div className="mt-4 rounded-xl bg-amber-50 p-4 text-xs text-slate-600">
                Last updated <span className="font-bold text-slate-900">{updated}</span>
              </div>
            </div>
          </aside>

          <div className="rounded-3xl border border-amber-100 bg-white p-8 shadow-sm sm:p-10">
            {/* On-page TOC */}
            <div className="mb-8 rounded-2xl bg-amber-50/60 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                On this page
              </p>
              <ul className="mt-3 grid gap-1 text-sm sm:grid-cols-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="inline-flex items-center gap-1 text-slate-700 hover:text-amber-600">
                      <ArrowRight className="h-3 w-3" />
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    Section {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-slate-900">{s.heading}</h2>
                  <div className="prose prose-slate mt-4 max-w-none text-sm leading-7 text-slate-600 [&_a]:font-semibold [&_a]:text-amber-600 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mt-1">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </AmberSection>
    </AmberPage>
  )
}
