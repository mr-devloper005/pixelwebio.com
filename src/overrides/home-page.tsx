import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Camera, Image as ImageIcon, Users, Sparkles, Star, CheckCircle2, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { SitePost } from '@/lib/site-connector'

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
  // Fetch latest images from database
  const latestPosts = await fetchTaskPosts('image', 8);
  
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
                src="/images/hero-1.svg"
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

      {/* LATEST IMAGES SECTION */}
      <section className="bg-gradient-to-b from-amber-50 via-[#fff7e8] to-[#fffaf2] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2">
              <Camera className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-bold text-amber-700">Latest Gallery</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl">
              Fresh <span className="text-amber-500">creations</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Discover the newest works from our talented community
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {latestPosts.map((post, i) => {
              const imageUrl = (post.media?.[0]?.url as string) || (post.content?.logo as string) || '/placeholder.svg?height=400&width=400';
              const category = (post.content?.category as string) || 'Photography';
              const likes = Math.floor(Math.random() * 500) + 100;
              
              return (
                <Link
                  key={post.id}
                  href={`/images/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:shadow-lg"
                >
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
                    <img
                      src={imageUrl}
                      alt={post.title || 'Latest image'}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-1 text-[10px] font-bold text-amber-700">
                        {category}
                      </span>
                      <span className="text-xs text-slate-500">♥ {likes}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1 line-clamp-2">{post.title || 'Untitled Work'}</h3>
                    <p className="text-xs text-slate-600">{post.authorName || 'Creative Creator'}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/images"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3 text-sm font-bold text-white shadow-md hover:opacity-90 transition"
            >
              View All Images <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
