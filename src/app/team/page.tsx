import Link from 'next/link'
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react'
import { AmberPage, AmberSection } from '@/components/shared/amber-page'

export const revalidate = 3

const leadership = [
  {
    name: 'Aditya Sharma',
    role: 'Founder & CEO',
    bio: 'Photographer turned product builder. Obsessed with helping creators look professional online.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Priya Mehta',
    role: 'Head of Design',
    bio: 'Leads the visual language of Pixelwebio — from typography to gallery layouts.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Marcus Chen',
    role: 'Engineering Lead',
    bio: 'Keeps the platform fast, reliable, and creator-friendly behind the scenes.',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
]

const team = [
  { name: 'Sara Lopez', role: 'Creator Success', city: 'Madrid', photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80' },
  { name: 'Daniel Park', role: 'Product Designer', city: 'Seoul', photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80' },
  { name: 'Olivia Brown', role: 'Frontend Engineer', city: 'London', photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Yuki Tanaka', role: 'Brand Lead', city: 'Tokyo', photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Ahmed Khan', role: 'Backend Engineer', city: 'Dubai', photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Emma Wilson', role: 'Community Manager', city: 'New York', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80' },
  { name: 'Jonas Berg', role: 'Growth Lead', city: 'Berlin', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { name: 'Aria Patel', role: 'Content Strategist', city: 'Mumbai', photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80' },
]

export default function TeamPage() {
  return (
    <AmberPage
      eyebrow="Our team"
      title="The people behind"
      highlight="Pixelwebio"
      description="A small, distributed crew of designers, engineers, and storytellers helping creators look their best online."
      actions={
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90"
        >
          Join the team <ArrowRight className="h-4 w-4" />
        </Link>
      }
    >
      <AmberSection>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Leadership</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Meet our leads</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {leadership.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative">
                <img src={p.photo} alt={p.name} className="h-72 w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <p className="text-lg font-bold text-white">{p.name}</p>
                  <p className="text-xs font-semibold text-amber-300">{p.role}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-7 text-slate-600">{p.bio}</p>
                <div className="mt-4 flex items-center gap-2">
                  {[Linkedin, Twitter, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-600 hover:bg-amber-500 hover:text-white">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </AmberSection>

      <section className="bg-[#fff5e3]">
        <AmberSection>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">The whole crew</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Distributed across the world</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.map((p) => (
              <div key={p.name} className="rounded-2xl bg-white p-5 text-center shadow-sm">
                <img src={p.photo} alt={p.name} className="mx-auto h-20 w-20 rounded-full border-4 border-amber-100 object-cover" />
                <p className="mt-3 font-bold text-slate-900">{p.name}</p>
                <p className="text-xs text-amber-600">{p.role}</p>
                <p className="mt-1 text-xs text-slate-500">{p.city}</p>
              </div>
            ))}
          </div>
        </AmberSection>
      </section>

      <AmberSection>
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 p-8 text-white shadow-lg sm:p-12">
          <h3 className="text-3xl font-black">We&apos;re hiring across the board</h3>
          <p className="mt-3 max-w-2xl text-white/90">
            Engineers, designers, content creators — if you care about visual quality and
            creator experience, we&apos;d love to hear from you.
          </p>
          <Link
            href="/careers"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-amber-600 shadow hover:bg-slate-50"
          >
            View open roles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </AmberSection>
    </AmberPage>
  )
}
