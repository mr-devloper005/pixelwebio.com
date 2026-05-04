'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClassifiedAdCard } from '@/components/shared/cards'

export function FeaturedAds() {
  const featuredAds: any[] = []

  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Featured Classifieds
            </h2>
            <p className="mt-2 text-muted-foreground">
              Great deals from our community marketplace
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/classifieds">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">No featured classifieds yet</h3>
            <p className="text-muted-foreground">
              Start creating classified ads to see them featured here.
            </p>
            <Button asChild>
              <Link href="/dashboard/ads/new">
                Create First Ad
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
