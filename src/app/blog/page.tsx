import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import { AmberPage, AmberSection } from '@/components/shared/amber-page'

export const revalidate = 3

const featured = {
  title: 'How a clean profile can double your booking rate',
  excerpt:
    'We analyzed 1,200 creator profiles to understand what actually convinces clients to book. The patterns might surprise you.',
  category: 'Creator Tips',
  date: 'Apr 14, 2026',
  read: '8 min',
  image: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=80',
}

const posts = [
  {
    title: '7 lighting setups every portrait photographer should know',
    excerpt: 'From classic Rembrandt to modern beauty dish techniques, master the lights that flatter every face.',
    category: 'Tutorial',
    date: 'Apr 10, 2026',
    read: '12 min',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Building a brand identity through consistent imagery',
    excerpt: 'How successful brands use color, mood, and composition to create instantly recognizable visual styles.',
    category: 'Branding',
    date: 'Apr 06, 2026',
    read: '6 min',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'The freelance contract template every photographer needs',
    excerpt: 'Protect your work, your rates, and your sanity with these contract clauses we wish we knew earlier.',
    category: 'Business',
    date: 'Mar 30, 2026',
    read: '5 min',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Why slower editing makes for stronger galleries',
    excerpt: 'A counterintuitive case for taking longer with your edit and shipping fewer, better images.',
    category: 'Editing',
    date: 'Mar 22, 2026',
    read: '7 min',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Pricing your work without underselling yourself',
    excerpt: 'A practical framework for figuring out what to charge — and how to talk about it with clients.',
    category: 'Business',
    date: 'Mar 15, 2026',
    read: '9 min',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'A simple checklist for shooting your first event',
    excerpt: 'Equipment, prep, communication, and the small things that separate okay coverage from great coverage.',
    category: 'Tutorial',
    date: 'Mar 08, 2026',
    read: '10 min',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
  },
]

const categories = ['All', 'Tutorial', 'Branding', 'Business', 'Editing', 'Creator Tips', 'Inspiration']

export default function BlogPage() {
  return (
    <AmberPage
      eyebrow="Pixelwebio Blog"
      title="Stories, tips &"
      highlight="creator wisdom"
      description="Practical advice on photography, profile-building, branding, and the business side of being a visual creator."
    >
      <AmberSection>
        <div className="flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                i === 0
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-md'
                  : 'border border-amber-200 bg-white text-slate-700 hover:bg-amber-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <article className="mt-8 grid overflow-hidden rounded-3xl border border-amber-100 bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
          <img src={featured.image} alt={featured.title} className="h-72 w-full object-cover lg:h-full" />
          <div className="p-8 lg:p-10">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-white">
              <Tag className="h-3 w-3" /> Featured · {featured.category}
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{featured.excerpt}</p>
            <div className="mt-6 flex items-center gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {featured.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {featured.read}</span>
            </div>
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:opacity-90"
            >
              Read article <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </AmberSection>

      <AmberSection>
        <h2 className="text-3xl font-black text-slate-900">Latest posts</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase text-amber-600 backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold leading-snug text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {p.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-amber-400 to-orange-500 p-8 text-white shadow-lg sm:p-12">
          <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-black">Get our weekly newsletter</h3>
              <p className="mt-2 text-white/90">
                A short email every Friday with our best new posts, tips, and creator features.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 flex-1 rounded-xl bg-white px-4 text-sm text-slate-900 outline-none"
              />
              <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </AmberSection>
    </AmberPage>
  )
}
