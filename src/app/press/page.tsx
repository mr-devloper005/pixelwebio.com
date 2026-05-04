'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)

  return (
    <PageShell
      title="Press"
      description="Media resources, brand assets, and press coverage."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-border bg-card">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-lg font-semibold text-foreground">Press Kit</h2>
            <p className="text-sm text-muted-foreground">
              Download logos, product screenshots, and brand guidelines for media use.
            </p>
            <div className="grid gap-2">
              <div className="rounded-lg border border-border bg-secondary/40 px-4 py-8 text-center text-sm text-muted-foreground">
                No press assets available yet.
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <div className="rounded-lg border border-border bg-secondary/40 px-4 py-8 text-center text-sm text-muted-foreground">
            No press coverage available yet.
          </div>
        </div>
      </div>
    </PageShell>
  )
}
