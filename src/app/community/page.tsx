import Link from 'next/link'
import { Users, MessageCircle, Calendar, Trophy, ArrowRight, Hash } from 'lucide-react'
import { AmberPage, AmberSection, AmberCard } from '@/components/shared/amber-page'

export const revalidate = 3

const channels = [
  { name: '#showcase', members: '4.2k', desc: 'Share your latest work and get feedback from peers.' },
  { name: '#critique', members: '2.1k', desc: 'Constructive feedback on portraits, products, and edits.' },
  { name: '#gear-talk', members: '3.4k', desc: 'Cameras, lenses, lighting — what you use, what you love.' },
  { name: '#editing', members: '2.8k', desc: 'Lightroom, Capture One, Photoshop tips and presets.' },
  { name: '#business', members: '1.9k', desc: 'Pricing, contracts, client work, and freelancing advice.' },
  { name: '#challenges', members: '5.1k', desc: 'Weekly photo challenges with themes voted by the community.' },
]

const events = [
  { date: 'Apr 28', title: 'Portrait Lighting Masterclass', host: 'with Priya Mehta' },
  { date: 'May 04', title: 'Building a Profile that Books Clients', host: 'with Marcus Chen' },
  { date: 'May 12', title: 'Live Critique Hour', host: 'Open mic — bring your work' },
]

const top = [
  { name: 'Sara Lopez', points: '12,840', badge: 'Top Mentor' },
  { name: 'Ahmed Khan', points: '9,210', badge: 'Critique Pro' },
  { name: 'Yuki Tanaka', points: '7,930', badge: 'Rising Star' },
]

export default function CommunityPage() {
  return (
    <AmberPage
      eyebrow="Community"
      title="Where creators"
      highlight="grow together"
      description="A friendly home for photographers, designers, and visual storytellers. Share work, get feedback, and learn from people doing it every day."
      actions={
        <Link
          href="/register"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90"
        >
          Join free <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <AmberSection>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, label: 'Active members', value: '24,500+' },
            { icon: MessageCircle, label: 'Posts this month', value: '8,940' },
            { icon: Calendar, label: 'Events per year', value: '120+' },
            { icon: Trophy, label: 'Challenges run', value: '36' },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border-l-4 border-amber-500 bg-white p-5 shadow-sm">
              <s.icon className="h-5 w-5 text-amber-500" />
              <p className="mt-3 text-2xl font-black text-slate-900">{s.value}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </AmberSection>

      <AmberSection>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Channels</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Find your corner</h2>
          </div>
          <Link href="/register" className="text-sm font-bold text-amber-600 hover:underline">
            Browse all →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {channels.map((c) => (
            <AmberCard key={c.name}>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-sm font-bold text-amber-600">
                  <Hash className="h-3 w-3" />
                  {c.name.replace('#', '')}
                </span>
                <span className="text-xs font-semibold text-slate-500">{c.members} members</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{c.desc}</p>
            </AmberCard>
          ))}
        </div>
      </AmberSection>

      <section className="bg-[#fff5e3]">
        <AmberSection>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Upcoming events</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">Live workshops & meetups</h2>
              <div className="mt-6 space-y-3">
                {events.map((e) => (
                  <div key={e.title} className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                    <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                      <span className="text-xs font-bold uppercase">{e.date.split(' ')[0]}</span>
                      <span className="text-lg font-black leading-none">{e.date.split(' ')[1]}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">{e.title}</p>
                      <p className="text-xs text-slate-500">{e.host}</p>
                    </div>
                    <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-slate-800">
                      RSVP
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">This month</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">Top members</h2>
              <div className="mt-6 space-y-3">
                {top.map((m, i) => (
                  <div key={m.name} className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg font-black text-amber-600">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900">{m.name}</p>
                      <span className="inline-block rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-600">
                        {m.badge}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-amber-600">{m.points} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AmberSection>
      </section>
    </AmberPage>
  )
}
