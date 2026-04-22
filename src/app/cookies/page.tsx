import { LegalPage } from '@/components/shared/legal-page'

export default function CookiesPage() {
  return (
    <LegalPage
      current="Cookies"
      eyebrow="Legal"
      title="Cookies"
      highlight="Policy"
      description="How and why Pixelwebio uses cookies and similar technologies on our platform."
      updated="April 18, 2026"
      sections={[
        {
          id: 'what-are-cookies',
          heading: 'What are cookies?',
          body: (
            <p>
              Cookies are small text files stored on your device when you visit a website. They
              help sites remember your preferences, keep you signed in, and understand how the
              service is used.
            </p>
          ),
        },
        {
          id: 'types',
          heading: 'Types of cookies we use',
          body: (
            <ul>
              <li>
                <strong>Essential cookies</strong> — required to log in, keep you signed in, and
                run the core features of Pixelwebio.
              </li>
              <li>
                <strong>Preference cookies</strong> — remember your theme, language, and layout
                choices.
              </li>
              <li>
                <strong>Analytics cookies</strong> — help us understand which features are useful
                so we can improve them. Aggregated and anonymous.
              </li>
              <li>
                <strong>Performance cookies</strong> — measure load times and errors so we can
                fix slow pages.
              </li>
            </ul>
          ),
        },
        {
          id: 'third-party',
          heading: 'Third-party cookies',
          body: (
            <p>
              We use a small number of trusted services (such as analytics and payment
              processors) that may set their own cookies. These vendors are bound by privacy
              contracts and only receive the data they need.
            </p>
          ),
        },
        {
          id: 'managing',
          heading: 'Managing cookies',
          body: (
            <ul>
              <li>You can disable non-essential cookies in your account settings.</li>
              <li>Most browsers let you block or delete cookies from their preferences.</li>
              <li>Disabling essential cookies may break features like sign-in.</li>
            </ul>
          ),
        },
        {
          id: 'updates',
          heading: 'Updates',
          body: (
            <p>
              When we make important changes to this cookie policy we&apos;ll update the date at
              the top of this page and notify you in-app.
            </p>
          ),
        },
      ]}
    />
  )
}
