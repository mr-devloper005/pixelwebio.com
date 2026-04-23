import Link from 'next/link'
import { MapPin, Clock, Briefcase, Heart, Coffee, Globe2, Sparkles, ArrowRight } from 'lucide-react'
import { AmberPage, AmberSection, AmberCard } from '@/components/shared/amber-page'

const perks = [
  { icon: Globe2, title: 'Fully remote', text: 'Work from anywhere with flexible hours and async-first culture.' },
  { icon: Heart, title: 'Health covered', text: 'Comprehensive medical, dental, and mental wellness coverage.' },
  { icon: Coffee, title: 'Learning budget', text: '$1,500 / year to spend on courses, books, and conferences.' },
  { icon: Sparkles, title: 'Real ownership', text: 'Equity, transparent salaries, and a real say in the roadmap.' },
]

const openings = [
  { title: 'Senior Frontend Engineer', team: 'Engineering', location: 'Remote · Worldwide', type: 'Full-time' },
  { title: 'Product Designer (Galleries)', team: 'Design', location: 'Remote · Europe', type: 'Full-time' },
  { title: 'Creator Success Manager', team: 'Community', location: 'Remote · Americas', type: 'Full-time' },
  { title: 'Backend Engineer (Node / Postgres)', team: 'Engineering', location: 'Remote · Worldwide', type: 'Full-time' },
  { title: 'Brand & Content Designer', team: 'Marketing', location: 'Remote · Worldwide', type: 'Contract' },
  { title: 'QA Engineer', team: 'Engineering', location: 'Remote · APAC', type: 'Full-time' },
]

export default function CareersPage() {
  return (
    <AmberPage
      eyebrow="Careers"
      title="Build the future of"
      highlight="visual storytelling"
      description="Help us shape a platform where every creator feels seen. We're a small team that ships fast and cares deeply about craft."
      actions={
        <a
          href="#openings"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90"
        >
          See open roles <ArrowRight className="h-4 w-4" />
        </a>
      }
    >
      <AmberSection>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
            alt="Team collaborating"
            className="h-[400px] w-full rounded-2xl object-cover shadow-lg"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Why Pixelwebio</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-900">
              A workplace built like our product — clean, fast, human.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              We believe small teams move best when given trust, context, and real ownership.
              No bloated processes, no surprise roadmaps — just thoughtful work shipped together.
            </p>
          </div>
        </div>
      </AmberSection>

      <section className="bg-[#fff5e3]">
        <AmberSection>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Perks &amp; benefits</p>
            <h2 className="mt-3 text-4xl font-black text-slate-900">Things we offer</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <AmberCard key={p.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{p.text}</p>
              </AmberCard>
            ))}
          </div>
        </AmberSection>
      </section>

      <AmberSection className="scroll-mt-24" >
        <div id="openings" />
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Open roles</p>
          <h2 className="mt-3 text-4xl font-black text-slate-900">Find your next role</h2>
        </div>
        <div className="mt-10 space-y-4">
          {openings.map((job) => (
            <div key={job.title} className="flex flex-col gap-4 rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="inline-block rounded-full bg-amber-50 px-3 py-0.5 text-xs font-bold text-amber-600">
                  {job.team}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{job.title}</h3>
                <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {job.type}</span>
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-3 w-3" /> Senior</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-800"
              >
                Apply <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </AmberSection>
    </AmberPage>
  )
}
