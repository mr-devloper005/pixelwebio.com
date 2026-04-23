'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Camera, Mail, Lock, ArrowRight, CheckCircle2 } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }
    try {
      await login(email, password)
      setSuccess(true)
      setTimeout(() => router.push('/profile'), 800)
    } catch {
      setError('Login failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#fffaf2]">
      <NavbarShell />
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-stretch">
          {/* Left panel */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-400 to-orange-500 p-10 text-white shadow-xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <Camera className="h-6 w-6" />
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight">
                Welcome back to Pixelwebio
              </h1>
              <p className="mt-4 text-sm leading-7 text-white/90">
                Sign in to manage your gallery, update your creator profile,
                and continue building your visual story.
              </p>
              <ul className="mt-8 space-y-3">
                {['Manage your image gallery', 'Update your creator profile', 'Connect with other creators'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form panel */}
          <div className="rounded-[2rem] border border-amber-100 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-600">Sign In</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Access your account</h2>
            <p className="mt-2 text-sm text-slate-500">Enter your details to continue.</p>

            <form onSubmit={onSubmit} className="mt-8 space-y-4">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Email</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-amber-400 focus-within:bg-white">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-sm outline-none"
                    required
                  />
                </div>
              </label>

              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Password</span>
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-amber-400 focus-within:bg-white">
                  <Lock className="h-4 w-4 text-slate-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-transparent text-sm outline-none"
                    required
                  />
                </div>
              </label>

              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">{error}</p>
              )}
              {success && (
                <p className="rounded-lg bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                  Login successful! Redirecting…
                </p>
              )}

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded accent-amber-500" defaultChecked />
                  Remember me
                </label>
                <Link href="/forgot-password" className="font-semibold text-amber-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:opacity-90 disabled:opacity-60"
              >
                {isLoading ? 'Signing in…' : 'Sign In'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="font-bold text-amber-600 hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
