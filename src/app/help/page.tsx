import Link from 'next/link'
import { Search, BookOpen, MessageCircle, Mail, ChevronRight, HelpCircle, Image as ImageIcon, User, Shield, CreditCard } from 'lucide-react'
import { AmberPage, AmberSection, AmberCard } from '@/components/shared/amber-page'

const topics = [
  { icon: User, title: 'Account & Profile', count: 18, desc: 'Setting up, editing, and managing your creator profile.' },
  { icon: ImageIcon, title: 'Galleries & Uploads', count: 24, desc: 'Image limits, formats, organizing, and publishing.' },
  { icon: CreditCard, title: 'Billing & Plans', count: 12, desc: 'Subscriptions, invoices, refunds, and payment methods.' },
  { icon: Shield, title: 'Privacy & Security', count: 9, desc: 'Two-factor auth, data exports, and account deletion.' },
  { icon: MessageCircle, title: 'Community Guidelines', count: 7, desc: 'What is okay, what is not, and how moderation works.' },
  { icon: BookOpen, title: 'Getting Started', count: 15, desc: 'Onboarding, your first gallery, and finding your audience.' },
]

const faqs = [
  { q: 'How do I create a creator profile?', a: 'Sign up for a free account, then visit your dashboard and click "Edit profile". You can add a bio, cover image, social links, and curated galleries.' },
  { q: 'What image formats are supported?', a: 'We support JPG, PNG, WEBP, and HEIC. Maximum upload size is 25 MB per image, with automatic optimization for web display.' },
  { q: 'Is Pixelwebio free to use?', a: 'Yes — creating an account, profile, and uploading galleries is completely free. We offer optional Pro features for advanced creators.' },
  { q: 'How do I delete my account?', a: 'Go to Settings → Account → Delete Account. We will export your data first and permanently remove everything within 30 days.' },
  { q: 'Can I use my own domain?', a: 'Pro accounts can connect a custom domain (yourname.com) to their Pixelwebio profile via simple DNS records.' },
  { q: 'How do I report inappropriate content?', a: 'Every gallery and profile has a "Report" link. Our moderation team reviews reports within 24 hours.' },
]

export default function HelpPage() {
  return (
    <AmberPage
      eyebrow="Help center"
      title="How can we"
      highlight="help you?"
      description="Search our knowledge base, browse popular topics, or reach out to our support team."
    >
      <AmberSection>
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-lg">
            <div className="flex flex-1 items-center gap-3 px-4">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                placeholder="Search help articles…"
                className="h-12 w-full bg-transparent text-sm outline-none"
              />
            </div>
            <button className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-bold text-white shadow hover:opacity-90">
              Search
            </button>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            Popular searches: account, password, upload, billing, profile
          </p>
        </div>
      </AmberSection>

      <AmberSection>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Browse topics</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Pick a category</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <AmberCard key={t.title}>
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white">
                  <t.icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-600">
                  {t.count} articles
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{t.desc}</p>
              <Link href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-amber-600 hover:underline">
                Browse <ChevronRight className="h-4 w-4" />
              </Link>
            </AmberCard>
          ))}
        </div>
      </AmberSection>

      <section className="bg-[#fff5e3]">
        <AmberSection>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Frequently asked</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
                  <span className="flex items-center gap-3 font-bold text-slate-900">
                    <HelpCircle className="h-5 w-5 text-amber-500" />
                    {f.q}
                  </span>
                  <ChevronRight className="h-5 w-5 text-amber-500 transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 pl-8 text-sm leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </AmberSection>
      </section>

      <AmberSection>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-2xl font-black text-slate-900">Live chat</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Talk to our support team in real time. Available Mon–Fri, 9am–6pm PT.
            </p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-800">
              Start chat
            </button>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 p-8 text-white shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-2xl font-black">Email support</h3>
            <p className="mt-2 text-sm leading-7 text-white/90">
              Send us a detailed message and we&apos;ll reply within 24 hours.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-amber-600 shadow hover:bg-slate-50"
            >
              Contact us
            </Link>
          </div>
        </div>
      </AmberSection>
    </AmberPage>
  )
}
