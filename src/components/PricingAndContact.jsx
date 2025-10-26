import { useState } from 'react';
import { Check, Mail, MapPin, Phone } from 'lucide-react';

export default function PricingAndContact() {
  const [yearly, setYearly] = useState(true);

  const tiers = [
    {
      name: 'Starter',
      price: yearly ? 19 : 24,
      desc: 'For personal sites and early projects',
      features: ['1 website', 'Basic Knowledgebase', 'Community support'],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Growth',
      price: yearly ? 49 : 59,
      desc: 'For growing teams with more traffic',
      features: ['5 websites', 'Advanced Knowledgebase', 'Live Chat', 'Email support'],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Scale',
      price: yearly ? 99 : 119,
      desc: 'For scale-ups and robust routing',
      features: ['Unlimited websites', 'Live Agent handoff', 'Help Desk automations', 'Priority support'],
      cta: 'Start Free Trial',
      highlighted: false,
    },
  ];

  return (
    <div className="relative">
      {/* Pricing */}
      <section id="pricing" className="relative w-[92vw] max-w-6xl mx-auto py-20 md:py-28">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Simple pricing</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Switch to yearly and save 20%.</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className={!yearly ? 'font-semibold text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-300'}>Monthly</span>
            <button
              onClick={() => setYearly((v) => !v)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-neutral-200 dark:bg-neutral-800 transition"
              aria-label="Toggle billing"
            >
              <span className={`inline-block h-6 w-6 rounded-full bg-white dark:bg-neutral-700 shadow transform transition ${yearly ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
            <span className={yearly ? 'font-semibold text-neutral-900 dark:text-white' : 'text-neutral-600 dark:text-neutral-300'}>Yearly</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border border-white/50 dark:border-white/10 backdrop-blur p-6 bg-white/60 dark:bg-white/5 ${
                t.highlighted ? 'ring-2 ring-violet-400/60' : ''
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{t.name}</h3>
                <span className="text-sm text-violet-600 dark:text-violet-300">{t.highlighted ? 'Most popular' : ''}</span>
              </div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-bold text-neutral-900 dark:text-white">${t.price}</span>
                <span className="text-sm text-neutral-500">/mo</span>
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-200">
                    <Check className="h-4 w-4 text-emerald-500 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-4 py-2.5 text-sm font-semibold text-white shadow hover:opacity-95"
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative w-[92vw] max-w-6xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Contact us</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Tell us about your use case—we’ll get back within one business day.
            </p>
            <form className="mt-4 space-y-3">
              <input type="text" placeholder="Full name" className="w-full rounded-xl bg-white dark:bg-neutral-800/80 px-4 py-3 text-sm border border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 outline-none" />
              <input type="email" placeholder="Work email" className="w-full rounded-xl bg-white dark:bg-neutral-800/80 px-4 py-3 text-sm border border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 outline-none" />
              <textarea placeholder="What are you looking to build?" rows={4} className="w-full rounded-xl bg-white dark:bg-neutral-800/80 px-4 py-3 text-sm border border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 outline-none" />
              <button type="button" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-95">
                Send message
              </button>
            </form>
          </div>

          <div className="grid gap-4 content-start">
            <div className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
              <h4 className="font-semibold text-neutral-900 dark:text-white">Reach us</h4>
              <div className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@novachat.ai</div>
                <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 012-3456</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> San Francisco, CA</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-0 overflow-hidden">
              <div className="aspect-video w-full bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700 grid place-items-center text-neutral-600 dark:text-neutral-300 text-sm">
                Map / Location Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-[92vw] max-w-6xl mx-auto pb-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} NovaChat, Inc. All rights reserved.
      </footer>
    </div>
  );
}
