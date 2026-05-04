'use client'

export function TestimonialsSection() {
  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            What Our Users Say
          </h2>
          <p className="mt-2 text-muted-foreground">
            Trusted by thousands of creators and businesses
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">No testimonials yet</h3>
            <p className="text-muted-foreground">
              Share your experience and help others discover our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
