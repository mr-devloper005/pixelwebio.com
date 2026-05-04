'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function FeaturedArticles() {
  return (
    <section className="relative overflow-hidden border-b border-border py-16">
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,180,120,0.25),_transparent_65%)]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,_rgba(120,170,255,0.2),_transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 text-accent" />
              Editor's Desk
            </div>
            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              Featured Articles
            </h2>
            <p className="mt-2 text-muted-foreground">
              Curated narratives, high-signal insights, and standout community work.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/articles">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">No featured articles yet</h3>
            <p className="text-muted-foreground">
              Start creating and publishing articles to see them featured here.
            </p>
            <Button asChild>
              <Link href="/dashboard/articles/new">
                Create First Article
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
