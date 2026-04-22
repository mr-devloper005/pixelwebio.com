import Link from 'next/link'
import { Camera, Instagram, Twitter, Linkedin, Mail } from 'lucide-react'

export const FOOTER_OVERRIDE_ENABLED = true

const navGroups = [
  {
    title: 'Platform',
    links: [
      { name: 'Image Gallery', href: '/images' },
      { name: 'Creator Profiles', href: '/profile' },
      { name: 'Search', href: '/search' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Blog', href: '/blog' },
      { name: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'Licenses', href: '/licenses' },
    ],
  },
]

export function FooterOverride() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/favicon.png"
                alt="Pixelwebio logo"
                className="h-10 w-10 rounded-xl bg-white object-contain p-1 shadow"
              />
              <span className="text-xl font-black text-white">
                Pixel<span className="text-amber-400">webio</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              Image &amp; profile platform for creators, brands, and businesses
              ready to showcase their visual identity.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition hover:bg-amber-500 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {navGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  {group.title}
                </p>
                <ul className="mt-4 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-400 transition hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Camera className="h-4 w-4 text-amber-400" />
            <span>© {new Date().getFullYear()} Pixelwebio. Crafted for creators.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
