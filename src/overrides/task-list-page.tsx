import Link from 'next/link'
import { Camera, Image as ImageIcon, User, MapPin, Sparkles, ArrowRight, Users, Star, Filter, Grid3x3, Heart, Eye } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts, buildPostUrl } from '@/lib/task-data'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

function getImage(post: SitePost) {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaUrl = media.find((m) => typeof m?.url === 'string' && m.url)?.url
  const content = (post.content && typeof post.content === 'object' ? post.content : {}) as Record<string, any>
  const contentImage = Array.isArray(content.images)
    ? content.images.find((u: unknown) => typeof u === 'string' && u)
    : null
  const logo = typeof content.logo === 'string' ? content.logo : null
  const avatar = typeof content.avatar === 'string' ? content.avatar : null
  return mediaUrl || contentImage || avatar || logo || '/placeholder.svg?height=900&width=1400'
}

function getMeta(post: SitePost) {
  const content = (post.content && typeof post.content === 'object' ? post.content : {}) as Record<string, any>
  return {
    location: typeof content.address === 'string' ? content.address : typeof content.location === 'string' ? content.location : '',
    category: typeof content.category === 'string' ? content.category : Array.isArray(post.tags) && typeof post.tags[0] === 'string' ? post.tags[0] : '',
    role: typeof content.role === 'string' ? content.role : typeof content.title === 'string' ? content.title : '',
  }
}

const fallbackImages = [
  'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=900&q=80',
]

function pickImage(post: SitePost | undefined, index: number) {
  if (post) {
    const real = getImage(post)
    if (real && !real.includes('placeholder')) return real
  }
  return fallbackImages[index % fallbackImages.length]
}

const galleryFallbacks = [
  { title: 'Golden Hour Portrait', category: 'Portrait', author: 'Sara Lopez', likes: '2.4k' },
  { title: 'Urban Architecture', category: 'Architecture', author: 'Marcus Chen', likes: '1.8k' },
  { title: 'Mountain Serenity', category: 'Landscape', author: 'Yuki Tanaka', likes: '3.1k' },
  { title: 'Brand Product Shoot', category: 'Product', author: 'Priya Mehta', likes: '1.2k' },
  { title: 'Street Stories', category: 'Street', author: 'Daniel Park', likes: '2.9k' },
  { title: 'Wedding Moments', category: 'Event', author: 'Emma Wilson', likes: '4.5k' },
  { title: 'Studio Light Study', category: 'Studio', author: 'Ahmed Khan', likes: '1.6k' },
  { title: 'Travel Diaries', category: 'Travel', author: 'Olivia Brown', likes: '2.2k' },
  { title: 'Fashion Editorial', category: 'Fashion', author: 'Aria Patel', likes: '3.8k' },
  { title: 'Food Storytelling', category: 'Food', author: 'Jonas Berg', likes: '1.9k' },
  { title: 'Nature Macro', category: 'Nature', author: 'Sara Lopez', likes: '2.7k' },
  { title: 'Black & White Series', category: 'Mono', author: 'Marcus Chen', likes: '3.3k' },
]

const creatorFallbacks = [
  { name: 'Sara Lopez', role: 'Portrait Photographer', location: 'Madrid, Spain', followers: '12.4k', shoots: '186', specialty: 'Portrait · Editorial' },
  { name: 'Marcus Chen', role: 'Architecture Photographer', location: 'Singapore', followers: '8.9k', shoots: '142', specialty: 'Urban · Real Estate' },
  { name: 'Yuki Tanaka', role: 'Landscape Photographer', location: 'Tokyo, Japan', followers: '15.2k', shoots: '210', specialty: 'Travel · Nature' },
  { name: 'Priya Mehta', role: 'Brand Designer & Photographer', location: 'Mumbai, India', followers: '9.7k', shoots: '98', specialty: 'Product · Brand' },
  { name: 'Daniel Park', role: 'Street Photographer', location: 'Seoul, Korea', followers: '11.8k', shoots: '224', specialty: 'Street · Documentary' },
  { name: 'Emma Wilson', role: 'Wedding & Event Specialist', location: 'New York, USA', followers: '18.5k', shoots: '312', specialty: 'Wedding · Events' },
  { name: 'Ahmed Khan', role: 'Studio Photographer', location: 'Dubai, UAE', followers: '7.6k', shoots: '156', specialty: 'Studio · Fashion' },
  { name: 'Olivia Brown', role: 'Travel Photographer', location: 'London, UK', followers: '14.3k', shoots: '198', specialty: 'Travel · Lifestyle' },
  { name: 'Aria Patel', role: 'Fashion Photographer', location: 'Paris, France', followers: '21.7k', shoots: '267', specialty: 'Fashion · Editorial' },
  { name: 'Jonas Berg', role: 'Food Stylist & Photographer', location: 'Berlin, Germany', followers: '6.4k', shoots: '134', specialty: 'Food · Lifestyle' },
]

export async function TaskListPageOverride({ task, category }: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts(task, 30, { allowMockFallback: false }).catch(() => [])

  if (task === 'image') return <GalleryView posts={posts} category={category} />
  if (task === 'profile') return <CreatorsView posts={posts} category={category} />
  return null
}

/* ---------- GALLERY (Images) ---------- */

function GalleryView({ posts, category }: { posts: SitePost[]; category?: string }) {
  const total = Math.max(posts.length, 12)
  const items = Array.from({ length: total }).map((_, i) => {
    const post = posts[i]
    const meta = post ? getMeta(post) : { location: '', category: '', role: '' }
    const fb = galleryFallbacks[i % galleryFallbacks.length]
    return {
      key: post?.id || `g-${i}`,
      href: post ? buildPostUrl('image', post.slug) : '#',
      image: pickImage(post, i),
      title: post?.title || fb.title,
      category: meta.category || fb.category,
      author: fb.author,
      likes: fb.likes,
    }
  })

  const categories = ['All', 'Portrait', 'Landscape', 'Architecture', 'Street', 'Product', 'Fashion', 'Nature', 'Travel', 'Mono']

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <NavbarShell />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-[#fff7e8] to-[#fffaf2]">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <Camera className="h-3 w-3" /> Curated Gallery
                </p>
                <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
                  Stunning <span className="text-amber-500">images</span>{' '}
                  <br className="hidden sm:block" />
                  from real creators
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                  Browse {total}+ hand-picked galleries from photographers around the world.
                  Every image tells a story — find one that speaks to yours.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/create/image"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90"
                  >
                    Submit your work <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/profile"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50"
                  >
                    Meet creators
                  </Link>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { v: `${total}+`, l: 'Galleries' },
                    { v: '24', l: 'Categories' },
                    { v: '4.9★', l: 'Avg rating' },
                  ].map((s) => (
                    <div key={s.l} className="rounded-xl border border-amber-100 bg-white p-3 text-center shadow-sm">
                      <p className="text-xl font-black text-slate-900">{s.v}</p>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {items.slice(0, 6).map((it, i) => (
                  <div
                    key={it.key}
                    className={`relative overflow-hidden rounded-2xl border-2 border-white shadow-lg ${
                      i === 0 ? 'col-span-2 row-span-2 h-full' : 'h-32'
                    }`}
                  >
                    <ContentImage src={it.image} alt={it.title} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="sticky top-20 z-30 border-y border-amber-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
            <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Filter className="h-3 w-3" /> Filter:
            </span>
            {categories.map((c) => {
              const active = (category || 'all').toLowerCase() === c.toLowerCase()
              const href = c === 'All' ? '/images' : `/images?category=${c.toLowerCase()}`
              return (
                <Link
                  key={c}
                  href={href}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                    active
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow'
                      : 'border border-amber-200 bg-white text-slate-700 hover:bg-amber-50'
                  }`}
                >
                  {c}
                </Link>
              )
            })}
            <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-500">
              <Grid3x3 className="h-3 w-3" /> {items.length} results
            </span>
          </div>
        </section>

        {/* MASONRY GRID */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {items.map((it, i) => (
              <Link
                key={it.key}
                href={it.href}
                className="group relative mb-5 block break-inside-avoid overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative">
                  <img
                    src={it.image}
                    alt={it.title}
                    className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                      i % 4 === 0 ? 'h-96' : i % 3 === 0 ? 'h-64' : 'h-80'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase text-amber-600 backdrop-blur">
                    {it.category}
                  </span>
                  <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-base font-black text-white drop-shadow">{it.title}</p>
                    <div className="mt-1 flex items-center justify-between text-xs text-white/90">
                      <span className="inline-flex items-center gap-1">
                        <User className="h-3 w-3" /> {it.author}
                      </span>
                      <span className="inline-flex items-center gap-3">
                        <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3" /> {it.likes}</span>
                        <span className="inline-flex items-center gap-1"><Eye className="h-3 w-3" /> view</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 p-8 text-white shadow-lg sm:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-black sm:text-4xl">Have a story to tell?</h3>
                <p className="mt-2 max-w-2xl text-white/90">
                  Join thousands of creators publishing their work on Pixelwebio. Free profile,
                  unlimited gallery uploads, and a global audience.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/create/image" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-amber-600 shadow hover:bg-slate-50">
                  Create your gallery <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

/* ---------- CREATORS (Profiles) ---------- */

function CreatorsView({ posts, category }: { posts: SitePost[]; category?: string }) {
  const total = Math.max(posts.length, 10)
  const items = Array.from({ length: total }).map((_, i) => {
    const post = posts[i]
    const meta = post ? getMeta(post) : { location: '', category: '', role: '' }
    const fb = creatorFallbacks[i % creatorFallbacks.length]
    return {
      key: post?.id || `c-${i}`,
      href: post ? buildPostUrl('profile', post.slug) : '#',
      image: pickImage(post, i),
      coverImage: pickImage(posts[(i + 3) % Math.max(posts.length, 1)], i + 5),
      name: post?.title || fb.name,
      role: meta.role || fb.role,
      location: meta.location || fb.location,
      followers: fb.followers,
      shoots: fb.shoots,
      specialty: fb.specialty,
    }
  })

  const featured = items.slice(0, 3)
  const others = items.slice(3)
  const specialties = ['All', 'Portrait', 'Wedding', 'Fashion', 'Travel', 'Product', 'Street', 'Architecture', 'Food']

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <NavbarShell />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-[#fff7e8] to-[#fffaf2]">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                  <Users className="h-3 w-3" /> Creator Network
                </p>
                <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
                  Meet the <span className="text-amber-500">creators</span>{' '}
                  <br className="hidden sm:block" />
                  behind the lens
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                  Discover {total}+ talented photographers, designers, and visual storytellers.
                  Connect, collaborate, or hire — your next creative partner is here.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/create/profile"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90"
                  >
                    Become a creator <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/images"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-bold text-slate-800 hover:bg-amber-50"
                  >
                    Browse galleries
                  </Link>
                </div>
              </div>

              <div className="relative h-[420px]">
                {featured.map((c, i) => (
                  <div
                    key={c.key}
                    className={`absolute overflow-hidden rounded-2xl border-4 border-white shadow-2xl ${
                      i === 0
                        ? 'left-0 top-0 h-72 w-56 rotate-[-6deg]'
                        : i === 1
                        ? 'right-0 top-8 h-80 w-60 rotate-[5deg]'
                        : 'bottom-0 left-1/2 h-64 w-52 -translate-x-1/2 rotate-[-2deg]'
                    }`}
                  >
                    <img src={c.image} alt={c.name} className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                      <p className="text-sm font-bold text-white">{c.name}</p>
                      <p className="text-[10px] text-amber-300">{c.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FILTERS */}
        <section className="sticky top-20 z-30 border-y border-amber-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
            <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Filter className="h-3 w-3" /> Specialty:
            </span>
            {specialties.map((c) => {
              const active = (category || 'all').toLowerCase() === c.toLowerCase()
              const href = c === 'All' ? '/profile' : `/profile?category=${c.toLowerCase()}`
              return (
                <Link
                  key={c}
                  href={href}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                    active
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow'
                      : 'border border-amber-200 bg-white text-slate-700 hover:bg-amber-50'
                  }`}
                >
                  {c}
                </Link>
              )
            })}
            <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-slate-500">
              <Users className="h-3 w-3" /> {items.length} creators
            </span>
          </div>
        </section>

        {/* FEATURED CREATORS */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Featured creators</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((c) => (
              <Link
                key={c.key}
                href={c.href}
                className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-32 overflow-hidden">
                  <img src={c.coverImage} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/40 to-transparent" />
                </div>
                <div className="relative px-6 pb-6">
                  <img
                    src={c.image}
                    alt={c.name}
                    className="-mt-10 h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-md"
                  />
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-black text-slate-900">{c.name}</h3>
                      <p className="text-xs font-semibold text-amber-600">{c.role}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-[10px] font-bold text-amber-600">
                      <Star className="h-3 w-3 fill-current" /> Pro
                    </span>
                  </div>
                  <p className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" /> {c.location}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-slate-600">{c.specialty}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-amber-100 pt-4 text-xs">
                    <div>
                      <p className="font-black text-slate-900">{c.followers}</p>
                      <p className="text-slate-500">Followers</p>
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{c.shoots}</p>
                      <p className="text-slate-500">Shoots</p>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1.5 text-[10px] font-bold text-white">
                      View <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ALL CREATORS GRID */}
        <section className="bg-[#fff5e3]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">All creators</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900">Browse the network</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {others.map((c) => (
                <Link
                  key={c.key}
                  href={c.href}
                  className="group rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-14 w-14 rounded-xl border-2 border-amber-100 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate font-bold text-slate-900">{c.name}</h3>
                      <p className="truncate text-xs font-semibold text-amber-600">{c.role}</p>
                    </div>
                  </div>
                  <p className="mt-3 inline-flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="h-3 w-3" /> {c.location}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{c.specialty}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-amber-100 pt-3 text-[11px]">
                    <span className="font-bold text-slate-700">
                      {c.followers} <span className="font-normal text-slate-500">followers</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-amber-600 group-hover:underline">
                      View <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 p-8 text-white shadow-lg sm:p-12">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-black sm:text-4xl">Are you a creator?</h3>
                <p className="mt-2 max-w-2xl text-white/90">
                  Build a polished profile, showcase your galleries, and get discovered by clients
                  and brands worldwide. Free forever.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link href="/create/profile" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-amber-600 shadow hover:bg-slate-50">
                  Create profile <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/help" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
