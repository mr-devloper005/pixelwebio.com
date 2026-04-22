import Link from 'next/link'
import { ArrowRight, Camera, Image as ImageIcon, Users, Sparkles, Star, CheckCircle2, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const services = [
  'Portrait photography',
  'Event coverage',
  'Product shoots',
  'Creator profiles',
  'Portfolio building',
  'Brand identity',
]

const steps = [
  { n: '01', title: 'Brief & Concept', desc: 'Share your vision. We capture the brief and align on mood, references, and timelines.' },
  { n: '02', title: 'Plan & Shoot', desc: 'Within 24 hours we plan the session, scout locations, and start the production.' },
  { n: '03', title: 'Editing & Curation', desc: 'Our team edits, color-grades, and curates the strongest visuals from the shoot.' },
  { n: '04', title: 'Delivery & Profile', desc: 'You receive the final gallery and a polished profile ready to publish.' },
]

const reviews = [
  {
    name: 'Ronald Richards',
    role: 'Brand Designer',
    text: 'Pixelwebio captured our brand story beautifully. The gallery and profile they delivered exceeded every expectation we had.',
  },
  {
    name: 'Wade Warren',
    role: 'Creator',
    text: 'The way they shoot, the way they edit, the way they listen — everything was easy and the final images felt deeply personal.',
  },
  {
    name: 'Ariana Plummer',
    role: 'Founder',
    text: 'A team that truly understands creators. My profile finally looks the way I always imagined it would. Highly recommended.',
  },
]

export async function HomePageOverride() {
  return (
    <div className="min-h-screen bg-[#fffaf2] text-slate-900">
      <NavbarShell />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-[#fff7e8] to-[#fffaf2]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-amber-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-[0_30px_80px_rgba(202,138,4,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=900&q=80"
                alt="Photographer at work"
                className="h-[460px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white px-5 py-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Camera className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Trusted by</p>
                  <p className="text-sm font-bold text-slate-900">2,400+ creators</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
              We have extensive experience in visuals
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              Your Story <br />
              <span className="text-amber-500">Our Lens</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              Pixelwebio is an image &amp; profile platform helping creators, brands, and businesses
              showcase their identity with stunning galleries and curated profiles.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-l-4 border-amber-500 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Image Gallery</p>
                <p className="mt-1 text-xs text-slate-500">Showcase</p>
                <p className="mt-3 text-lg font-bold text-amber-600">From $120 / shoot</p>
              </div>
              <div className="rounded-2xl border-l-4 border-amber-500 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Creator Profile</p>
                <p className="mt-1 text-xs text-slate-500">Branding</p>
                <p className="mt-3 text-lg font-bold text-amber-600">From $360 / profile</p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 p-1 shadow-lg">
              <div className="flex flex-col gap-3 rounded-[1.1rem] bg-amber-400/95 p-4 sm:flex-row sm:items-center">
                <div className="flex-1 px-2">
                  <p className="text-sm font-bold text-white">Free consultation for your project</p>
                  <p className="text-xs text-white/80">Leave your phone number and we&apos;ll call you back.</p>
                </div>
                <div className="flex flex-1 items-center gap-2 rounded-xl bg-white px-3 py-2">
                  <Phone className="h-4 w-4 text-amber-500" />
                  <input
                    type="tel"
                    placeholder="(408) 555-0123"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
                <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
                  Call Me Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-6 w-6 border-l-4 border-t-4 border-amber-500" />
            <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b-4 border-r-4 border-amber-500" />
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80"
              alt="Creative work"
              className="h-[380px] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">What you can expect</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-900">
              Comprehensive image &amp; profile services for every creator
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Distinguished by the quality of our team and a relentless pursuit of strong visuals,
              we align our craftsmanship with the goals of our clients to ensure long-lasting impact.
            </p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              The core of our company is held by our values — ethics, quality, respect, and care
              for every creator we work with.
            </p>
            <Link
              href="/images"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#fff5e3]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Our services</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-slate-900">
              Here&apos;s what we can do
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              From a single creator portrait to a fully built brand profile, we cover every stage
              of building a polished, professional visual identity. Our experience spans more than
              10 years across creators and brands.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-500 text-white">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-6 w-6 border-l-4 border-t-4 border-amber-500" />
            <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b-4 border-r-4 border-amber-500" />
            <img
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80"
              alt="Photographer working"
              className="h-[420px] w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Our process</p>
          <h2 className="mt-3 text-4xl font-black text-slate-900">How we work</h2>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-amber-200 lg:block" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={s.n} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                <div className="relative lg:[direction:ltr]">
                  <p className="text-3xl font-black text-amber-500">{s.n}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">{s.desc}</p>
                </div>
                <div className="lg:[direction:ltr]">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      ['1554048612-b6a482bc67e5','1556761175-5973dc0f32e7','1542038784456-1ea8e935640e','1560066984-138dadb4c035'][i]
                    }?auto=format&fit=crop&w=800&q=80`}
                    alt={s.title}
                    className="h-56 w-full rounded-2xl object-cover shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#fff5e3]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Testimonials</p>
            <h2 className="mt-3 text-4xl font-black text-slate-900">Customer Reviews</h2>
            <p className="mt-3 text-sm text-slate-600">
              Real feedback from creators and brands we&apos;ve worked with.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-600">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.role}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 p-1 shadow-lg">
          <div className="flex flex-col gap-4 rounded-[1.1rem] bg-amber-400/95 p-6 sm:flex-row sm:items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-white">You Still Have a Question?</h3>
              <p className="mt-1 text-sm text-white/85">
                Leave your number and our team will get back to you within 24 hours.
              </p>
            </div>
            <div className="flex flex-1 items-center gap-2 rounded-xl bg-white px-3 py-2">
              <Phone className="h-4 w-4 text-amber-500" />
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white hover:bg-slate-800">
              Call Me Back
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
