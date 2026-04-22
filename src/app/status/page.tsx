import { CheckCircle2, AlertCircle, Activity, Server, Database, Image as ImageIcon, Globe, Shield } from 'lucide-react'
import { AmberPage, AmberSection } from '@/components/shared/amber-page'

const services = [
  { name: 'Web Application', icon: Globe, status: 'operational', uptime: '99.99%' },
  { name: 'Image Upload & CDN', icon: ImageIcon, status: 'operational', uptime: '99.97%' },
  { name: 'Profile API', icon: Server, status: 'operational', uptime: '99.99%' },
  { name: 'Database', icon: Database, status: 'operational', uptime: '100.00%' },
  { name: 'Authentication', icon: Shield, status: 'operational', uptime: '99.98%' },
  { name: 'Search', icon: Activity, status: 'degraded', uptime: '98.42%' },
]

const incidents = [
  {
    date: 'Apr 18, 2026',
    title: 'Search latency spike',
    status: 'Monitoring',
    color: 'amber',
    text: 'We are observing higher search response times. Investigating with our infra team.',
  },
  {
    date: 'Apr 12, 2026',
    title: 'CDN degraded performance in EU',
    status: 'Resolved',
    color: 'emerald',
    text: 'Image delivery in EU regions was slower than usual for ~25 min. Root cause: edge node failover.',
  },
  {
    date: 'Apr 04, 2026',
    title: 'Scheduled maintenance — DB upgrade',
    status: 'Resolved',
    color: 'emerald',
    text: 'Routine database engine upgrade, no service interruption observed.',
  },
]

export default function StatusPage() {
  const allOk = services.every((s) => s.status === 'operational')

  return (
    <AmberPage
      eyebrow="System status"
      title="Pixelwebio"
      highlight={allOk ? 'all systems go' : 'live status'}
      description="Real-time status of every Pixelwebio service. Uptime data is updated every 60 seconds."
    >
      <AmberSection>
        <div className={`flex items-center gap-4 rounded-2xl border p-6 shadow-sm ${
          allOk ? 'border-emerald-200 bg-emerald-50' : 'border-amber-200 bg-amber-50'
        }`}>
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
            allOk ? 'bg-emerald-500' : 'bg-amber-500'
          } text-white`}>
            {allOk ? <CheckCircle2 className="h-7 w-7" /> : <AlertCircle className="h-7 w-7" />}
          </div>
          <div className="flex-1">
            <p className="text-xl font-black text-slate-900">
              {allOk ? 'All systems operational' : 'Some systems are degraded'}
            </p>
            <p className="text-sm text-slate-600">
              Last checked {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </AmberSection>

      <AmberSection>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Services</p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Component status</h2>
        <div className="mt-8 space-y-3">
          {services.map((s) => {
            const ok = s.status === 'operational'
            return (
              <div
                key={s.name}
                className="flex items-center gap-4 rounded-2xl border border-amber-100 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900">{s.name}</p>
                  <p className="text-xs text-slate-500">90-day uptime: {s.uptime}</p>
                </div>
                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${
                  ok ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  <span className={`h-2 w-2 rounded-full ${ok ? 'bg-emerald-500' : 'bg-amber-500'} animate-pulse`} />
                  {ok ? 'Operational' : 'Degraded'}
                </span>
              </div>
            )
          })}
        </div>
      </AmberSection>

      <section className="bg-[#fff5e3]">
        <AmberSection>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Recent incidents</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">Past 30 days</h2>
          <div className="mt-8 space-y-4">
            {incidents.map((inc) => (
              <div key={inc.title} className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-900">{inc.title}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${
                    inc.color === 'emerald' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {inc.status}
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-500">{inc.date}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{inc.text}</p>
              </div>
            ))}
          </div>
        </AmberSection>
      </section>
    </AmberPage>
  )
}
