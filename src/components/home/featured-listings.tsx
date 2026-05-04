'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ListingCard } from '@/components/shared/cards'

export function FeaturedListings() {
  const featuredListings: any[] = []

  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Featured Listings
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover top-rated businesses and services
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/listings">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">No featured listings yet</h3>
            <p className="text-muted-foreground">
              Start creating listings to see them featured here.
            </p>
            <Button asChild>
              <Link href="/dashboard/listings/new">
                Create First Listing
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
