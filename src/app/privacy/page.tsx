import { LegalPage } from '@/components/shared/legal-page'

export default function PrivacyPage() {
  return (
    <LegalPage
      current="Privacy"
      eyebrow="Legal"
      title="Privacy"
      highlight="Policy"
      description="How Pixelwebio collects, uses, and protects your personal information when you use our image and profile platform."
      updated="April 18, 2026"
      sections={[
        {
          id: 'overview',
          heading: 'Overview',
          body: (
            <p>
              At Pixelwebio we believe privacy is a feature, not a footnote. This policy explains
              what information we collect, why we collect it, and the choices you have. If you have
              questions, email <a href="mailto:privacy@pixelwebio.com">privacy@pixelwebio.com</a>.
            </p>
          ),
        },
        {
          id: 'information-we-collect',
          heading: 'Information we collect',
          body: (
            <>
              <p>We collect only what we need to provide our services:</p>
              <ul>
                <li>Account info — name, email, password (hashed), and profile details you choose to share.</li>
                <li>Content — galleries, images, captions, and profile media you upload.</li>
                <li>Usage data — pages visited, features used, and basic device/browser info.</li>
                <li>Cookies — see our <a href="/cookies">Cookies policy</a> for details.</li>
              </ul>
            </>
          ),
        },
        {
          id: 'how-we-use',
          heading: 'How we use your information',
          body: (
            <ul>
              <li>To run, maintain, and improve the Pixelwebio service.</li>
              <li>To display your public profile and galleries to other users.</li>
              <li>To send essential service emails (account, billing, security).</li>
              <li>To detect and prevent fraud, abuse, and policy violations.</li>
            </ul>
          ),
        },
        {
          id: 'sharing',
          heading: 'Sharing & disclosure',
          body: (
            <p>
              We do not sell your personal data. We share information only with trusted processors
              who help us run the platform (hosting, analytics, payments) under strict contracts,
              and only when required by law.
            </p>
          ),
        },
        {
          id: 'your-rights',
          heading: 'Your rights',
          body: (
            <ul>
              <li>Access — request a copy of your data anytime.</li>
              <li>Correct — update inaccurate information.</li>
              <li>Delete — permanently remove your account and content.</li>
              <li>Export — download your galleries and profile data.</li>
            </ul>
          ),
        },
        {
          id: 'security',
          heading: 'Security',
          body: (
            <p>
              We use encryption in transit (TLS) and at rest, run regular security reviews, and
              follow industry best practices. No system is perfectly secure — but we treat your
              data like our own.
            </p>
          ),
        },
        {
          id: 'contact',
          heading: 'Contact us',
          body: (
            <p>
              Questions about privacy? Reach our team at{' '}
              <a href="mailto:privacy@pixelwebio.com">privacy@pixelwebio.com</a> or through our{' '}
              <a href="/contact">contact page</a>.
            </p>
          ),
        },
      ]}
    />
  )
}
