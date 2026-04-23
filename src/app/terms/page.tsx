import { LegalPage } from '@/components/shared/legal-page'

export default function TermsPage() {
  return (
    <LegalPage
      current="Terms"
      eyebrow="Legal"
      title="Terms of"
      highlight="Service"
      description="The rules of the road for using Pixelwebio. Plain language, no hidden gotchas."
      updated="April 18, 2026"
      sections={[
        {
          id: 'agreement',
          heading: 'Agreement to terms',
          body: (
            <p>
              By creating an account or using Pixelwebio, you agree to these terms. If you do not
              agree, please do not use the service.
            </p>
          ),
        },
        {
          id: 'accounts',
          heading: 'Accounts',
          body: (
            <ul>
              <li>You must be at least 13 years old to use Pixelwebio.</li>
              <li>You are responsible for keeping your login credentials secure.</li>
              <li>You may not impersonate other people, brands, or organizations.</li>
            </ul>
          ),
        },
        {
          id: 'content',
          heading: 'Your content',
          body: (
            <>
              <p>
                You retain full ownership of all images, galleries, and profile content you upload
                to Pixelwebio. By posting, you grant us a limited license to host, display, and
                deliver your content as part of providing the service.
              </p>
              <p>You promise that:</p>
              <ul>
                <li>You own the content or have permission to upload it.</li>
                <li>Your content does not violate copyrights, privacy, or other rights.</li>
                <li>Your content follows our community guidelines.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'acceptable-use',
          heading: 'Acceptable use',
          body: (
            <ul>
              <li>No harassment, hate speech, or threats.</li>
              <li>No sexually explicit content involving minors.</li>
              <li>No spam, scraping, or automated abuse.</li>
              <li>No malware, phishing, or attempts to disrupt the service.</li>
            </ul>
          ),
        },
        {
          id: 'payments',
          heading: 'Payments & subscriptions',
          body: (
            <p>
              Pro plans are billed monthly or yearly. You can cancel anytime — your plan remains
              active until the end of the current billing period. Refunds are handled
              case-by-case; reach out at <a href="mailto:billing@pixelwebio.com">billing@pixelwebio.com</a>.
            </p>
          ),
        },
        {
          id: 'termination',
          heading: 'Termination',
          body: (
            <p>
              You can delete your account anytime. We may suspend or terminate accounts that
              violate these terms, with notice when reasonable.
            </p>
          ),
        },
        {
          id: 'liability',
          heading: 'Limitation of liability',
          body: (
            <p>
              Pixelwebio is provided &quot;as is&quot;. To the maximum extent permitted by law,
              we are not liable for indirect or consequential damages arising from your use of
              the service.
            </p>
          ),
        },
        {
          id: 'changes',
          heading: 'Changes to these terms',
          body: (
            <p>
              We may update these terms from time to time. If changes are material, we&apos;ll
              notify you by email or in-app notice at least 30 days in advance.
            </p>
          ),
        },
      ]}
    />
  )
}
