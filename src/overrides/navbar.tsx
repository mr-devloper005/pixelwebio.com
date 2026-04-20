'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ArrowRight, LogOut, User as UserIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'

export const NAVBAR_OVERRIDE_ENABLED = true

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Gallery', href: '/images' },
  { name: 'Creators', href: '/profile' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-100/70 bg-white/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/favicon.png"
            alt="Pixelwebio logo"
            className="h-10 w-10 rounded-xl object-contain shadow-md"
          />
          <span className="text-xl font-black tracking-tight text-slate-900">
            Pixel<span className="text-amber-500">webio</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                  isActive
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                )}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+14085550123"
            className="hidden items-center gap-2 text-sm font-semibold text-slate-700 md:flex"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-amber-600">
              <Phone className="h-4 w-4" />
            </span>
            <span className="hidden xl:inline">(408) 555-0123</span>
          </a>

          {isAuthenticated ? (
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                <UserIcon className="h-4 w-4" />
                <span className="max-w-[120px] truncate">{user?.name || 'Account'}</span>
              </Link>
              <button
                onClick={logout}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <LogOut className="h-4 w-4" /> Logout
              </button>
            </div>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/login"
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:opacity-90"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-amber-100 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-600"
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <button
                onClick={() => { logout(); setOpen(false) }}
                className="mt-2 block w-full rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-bold text-white"
              >
                Logout
              </button>
            ) : (
              <div className="mt-2 grid gap-2">
                <Link href="/login" onClick={() => setOpen(false)} className="block rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700">
                  Sign In
                </Link>
                <Link href="/register" onClick={() => setOpen(false)} className="block rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-3 text-center text-sm font-bold text-white">
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
