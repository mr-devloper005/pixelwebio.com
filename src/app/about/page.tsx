import Link from 'next/link'
import { Camera, Heart, Sparkles, Users, Globe2, Award, ArrowRight } from 'lucide-react'
import { AmberPage, AmberSection, AmberCard } from '@/components/shared/amber-page'

const stats = [
  { label: 'Creators on board', value: '12,400+' },
  { label: 'Galleries published', value: '38,500' },
  { label: 'Countries reached', value: '64' },
  { label: 'Average rating', value: '4.9 / 5' },
]

const values = [
  { icon: Heart, title: 'Creator first', text: 'Every decision starts with what helps creators tell better visual stories.' },
  { icon: Sparkles, title: 'Quality over quantity', text: 'We curate, edit, and polish — never flood feeds with noise.' },
  { icon: Users, title: 'Built together', text: 'Our roadmap is shaped by the community, not by closed-door meetings.' },
  { icon: Globe2, title: 'Open to the world', text: 'Profiles and galleries that travel beautifully across the open web.' },
]

const milestones = [
  { year: '2019', title: 'Founded', text: 'Pixelwebio started as a tiny gallery tool for indie photographers.' },
  { year: '2021', title: 'Profiles launched', text: 'We added creator profiles, opening the door to brand collaborations.' },
  { year: '2023', title: 'Global community', text: 'Crossed 10,000 creators across 50+ countries.' },
  { year: '2026', title: 'New era', text: 'Rebuilt the platform around image + profile as a single, polished experience.' },
]

export default function AboutPage() {
  return (
    <AmberPage
      eyebrow="About Pixelwebio"
      title="A home for"
      highlight="visual storytellers"
      description="We help creators, brands, and communities turn images into identity. Pixelwebio is part gallery, part profile, and 100% built for people who care about how their work is seen."
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50"
          >
            Meet the team
          </Link>
        </>
      }
    >
      {/* Stats */}
      <AmberSection>
        <div className="grid gap-4 rounded-3xl bg-white p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4 lg:p-8">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border-l-4 border-amber-500 bg-amber-50/60 p-5">
              <p className="text-3xl font-black text-slate-900">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </AmberSection>

      {/* Story */}
      <AmberSection>
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-6 w-6 border-l-4 border-t-4 border-amber-500" />
            <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b-4 border-r-4 border-amber-500" />
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80"
              alt="Our team at work"
              className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Our story</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-900">
              From a small gallery tool to a creator platform
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Pixelwebio was born out of frustration with messy portfolio sites and
              templated profile pages. We wanted a place where every image and every
              creator could feel deliberate, polished, and easy to share.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Today we serve thousands of photographers, designers, and brands who use
              Pixelwebio as their public-facing visual home.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-700">
              <Award className="h-4 w-4" /> Awwwards SOTD finalist 2025
            </div>
          </div>
        </div>
      </AmberSection>

      {/* Values */}
      <section className="bg-[#fff5e3]">
        <AmberSection>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Our values</p>
            <h2 className="mt-3 text-4xl font-black text-slate-900">What we believe</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <AmberCard key={v.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{v.text}</p>
              </AmberCard>
            ))}
          </div>
        </AmberSection>
      </section>

      {/* Timeline */}
      <AmberSection>
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Milestones</p>
          <h2 className="mt-3 text-4xl font-black text-slate-900">Our journey so far</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((m) => (
            <div key={m.year} className="relative rounded-2xl bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
                <Camera className="h-3 w-3" /> {m.year}
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{m.text}</p>
            </div>
          ))}
        </div>
      </AmberSection>
    </AmberPage>
  )
}
