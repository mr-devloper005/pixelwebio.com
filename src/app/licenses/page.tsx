import { LegalPage } from '@/components/shared/legal-page'

export default function LicensesPage() {
  return (
    <LegalPage
      current="Licenses"
      eyebrow="Legal"
      title="Licenses &"
      highlight="Attributions"
      description="Open-source libraries, fonts, and assets that power Pixelwebio. Huge thanks to every maintainer."
      updated="April 18, 2026"
      sections={[
        {
          id: 'your-content',
          heading: 'Your content license',
          body: (
            <p>
              You retain full ownership of every image and profile detail you upload. By using
              Pixelwebio you grant us a limited, worldwide license to host and display your
              content as part of providing the service.
            </p>
          ),
        },
        {
          id: 'open-source',
          heading: 'Open-source libraries',
          body: (
            <ul>
              <li>Next.js — MIT License</li>
              <li>React — MIT License</li>
              <li>Tailwind CSS — MIT License</li>
              <li>Lucide Icons — ISC License</li>
              <li>Radix UI — MIT License</li>
              <li>shadcn/ui — MIT License</li>
              <li>TypeScript — Apache 2.0</li>
              <li>Zod — MIT License</li>
            </ul>
          ),
        },
        {
          id: 'fonts',
          heading: 'Typography',
          body: (
            <ul>
              <li>Inter — SIL Open Font License 1.1</li>
              <li>Geist — SIL Open Font License 1.1</li>
            </ul>
          ),
        },
        {
          id: 'images',
          heading: 'Sample imagery',
          body: (
            <p>
              Demo and marketing images are sourced from Unsplash and our internal photo team,
              and are used here under the Unsplash license or with explicit permission from the
              photographer.
            </p>
          ),
        },
        {
          id: 'trademarks',
          heading: 'Trademarks',
          body: (
            <p>
              &quot;Pixelwebio&quot; and the Pixelwebio logo are trademarks of Pixelwebio Inc.
              All other trademarks belong to their respective owners.
            </p>
          ),
        },
        {
          id: 'requests',
          heading: 'Attribution requests',
          body: (
            <p>
              If you maintain a library we use and don&apos;t see proper attribution, please
              email <a href="mailto:legal@pixelwebio.com">legal@pixelwebio.com</a> and
              we&apos;ll fix it promptly.
            </p>
          ),
        },
      ]}
    />
  )
}
