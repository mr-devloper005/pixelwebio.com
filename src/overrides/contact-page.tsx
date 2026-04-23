'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, MessageSquare, Send, Camera, Users } from 'lucide-react'
import { AmberPage, AmberSection, AmberCard } from '@/components/shared/amber-page'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

const channels = [
  { icon: Mail, title: 'Email us', text: 'hello@pixelwebio.com', meta: 'Replies within 24 hours' },
  { icon: Phone, title: 'Call us', text: '+1 (408) 555-0123', meta: 'Mon–Fri, 9am to 6pm PT' },
  { icon: MapPin, title: 'Visit us', text: '123 Market St, San Francisco', meta: 'By appointment only' },
]

const reasons = [
  { icon: Camera, title: 'Book a shoot', text: 'Talk to our team about portraits, events, and brand sessions.' },
  { icon: Users, title: 'Creator partnerships', text: 'Collaborate on features, campaigns, and gallery launches.' },
  { icon: MessageSquare, title: 'Support &amp; help', text: 'Account, billing, gallery, or profile questions — we&apos;re here.' },
]

export function ContactPageOverride() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <AmberPage
      eyebrow="Get in touch"
      title="Let's create"
      highlight="something together"
      description="Whether you want to book a shoot, partner with us, or just say hello — we'd love to hear from you. Fill the form below or use one of the channels."
    >
      <AmberSection>
        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c) => (
            <AmberCard key={c.title}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 font-semibold text-amber-600">{c.text}</p>
              <p className="mt-1 text-xs text-slate-500">{c.meta}</p>
            </AmberCard>
          ))}
        </div>
      </AmberSection>

      <AmberSection>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">How we can help</p>
            <h2 className="mt-3 text-3xl font-black text-slate-900">Reach out about</h2>
            <div className="mt-6 space-y-4">
              {reasons.map((r) => (
                <div key={r.title} className="flex items-start gap-4 rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{r.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-slate-600" dangerouslySetInnerHTML={{ __html: r.text }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=San+Francisco&output=embed"
                className="h-56 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Send us a message</h2>
            <p className="mt-1 text-sm text-slate-500">We typically respond within one business day.</p>
            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required placeholder="First name" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-amber-400 focus:bg-white" />
                <input required placeholder="Last name" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-amber-400 focus:bg-white" />
              </div>
              <input required type="email" placeholder="Email address" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-amber-400 focus:bg-white" />
              <input placeholder="What is this about?" className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-amber-400 focus:bg-white" />
              <textarea required placeholder="Tell us a bit more…" rows={5} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:bg-white" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:opacity-90">
                Send message <Send className="h-4 w-4" />
              </button>
              {sent && (
                <p className="rounded-lg bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                  Thanks! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </AmberSection>
    </AmberPage>
  )
}
