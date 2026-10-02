import React from 'react';
import { AGENCY_CONFIG, CASE_STUDIES, TESTIMONIALS } from '../data/agencyData.ts';
import { WorkflowSimulator } from '../components/WorkflowSimulator.tsx';
import { RoiCalculator } from '../components/RoiCalculator.tsx';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';
import heroWorkspaceImg from '../assets/images/hero_automation_workspace_1790922867708.jpg';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Database,
  Layers,
} from 'lucide-react';

interface HomePageProps {
  onOpenBooking: () => void;
  setCurrentTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, setCurrentTab }) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. Hero Section */}
      <section className="relative pt-8 sm:pt-14 lg:pt-18 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-teal-100/60 via-cyan-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Value kicker text without pills */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold tracking-wide text-teal-800 uppercase">
              <span>EUROPEAN AUTOMATION AGENCY</span>
              <span aria-hidden="true">·</span>
              <span>SMALL BUSINESS EFFICIENCY SPECIALISTS</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] [text-wrap:balance]">
              Scale Your Operations Without Adding Payroll.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Sustainer Tech engineers custom automated workflows that eliminate manual data entry, connect your fragmented software, and accelerate cash flow. Built in days, maintained for life.
            </p>

            {/* Price clarity lockup */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <strong className="text-slate-950 font-bold">$2,000</strong> Setup & Build
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <strong className="text-slate-950 font-bold">$250/mo</strong> Cloud Hosting & Upkeep
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5 text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                10-14 Day Turnaround
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 rounded-lg shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 transition-all active:scale-[0.98]"
              >
                <span>Book 20-Min Automation Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 rounded-lg transition-all shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Hero Marquee Image Card */}
          <div className="mt-12 sm:mt-16 relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl">
            <div className="aspect-[16/9] w-full relative">
              <img
                src={heroWorkspaceImg}
                alt="Sustainer Tech high performance automation workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              
              {/* Overlay Stat Proof Bar */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 p-4 sm:p-6 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold text-teal-800 tracking-wider">
                    Sustained Operations Engine
                  </span>
                  <div className="text-sm sm:text-base font-bold text-slate-900">
                    Zero manual transcription. 99.98% webhook delivery reliability.
                  </div>
                </div>
                <div className="flex items-center gap-6 text-xs text-slate-700">
                  <div>
                    <span className="block text-lg font-bold text-teal-700 tabular-nums font-mono">18 Days</span>
                    <span className="text-slate-500 font-medium">Avg. Payback Period</span>
                  </div>
                  <div className="border-l border-slate-200 pl-6">
                    <span className="block text-lg font-bold text-slate-900 tabular-nums font-mono">30+ hrs</span>
                    <span className="text-slate-500 font-medium">Weekly Time Saved</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Workflow Simulator Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <span>Live Mechanism</span>
            <span aria-hidden="true">·</span>
            <span>Zero Black Box</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
            Experience How Your Operations Run On Autopilot
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Click to run the simulated business pipeline below. Watch incoming customer inquiries automatically qualify, invoice, and notify your team in seconds.
          </p>
        </div>

        <WorkflowSimulator />
      </section>

      {/* 3. Core Solutions / Capabilities Bento Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Agency Capabilities
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
              Engineered To Remove Friction At Every Stage
            </h2>
          </div>
          <button
            onClick={() => setCurrentTab('solutions')}
            className="cursor-pointer inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
          >
            <span>Explore all 5 core modules</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-teal-400 hover:shadow-lg transition-all shadow-xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4 shadow-2xs">
                <WhatsAppIcon className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-xs font-mono font-bold text-teal-800">01. Direct Communication</span>
              <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                WhatsApp 24/7 Lead Capture & Dispatch
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Connect your business WhatsApp number with auto-quoting, appointment booking, and instant CRM updates. Never leave a client waiting on hold or overnight.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Meta WhatsApp Cloud API</span>
              <span className="text-teal-700 font-bold">Sub-minute reply</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-400 hover:shadow-lg transition-all shadow-xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 mb-4 shadow-2xs">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-800">02. Financial Flow</span>
              <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                Automated Invoicing & Stripe Reconciliation
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Automatically generate verified invoices in QuickBooks, Xero, or Stripe the exact moment work completes. Trigger gentle payment reminders and reconcile bank feeds.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>QuickBooks · Xero · Stripe</span>
              <span className="text-cyan-700 font-bold">Zero data entry</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-400 hover:shadow-lg transition-all shadow-xs">
            <div>
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 mb-4 shadow-2xs">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-teal-800">03. Operations & Inventory</span>
              <h3 className="font-display text-lg font-bold text-slate-900 mt-1">
                Multi-Channel Stock & Logistics Sync
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Synchronize Shopify, warehouse databases, and supplier purchase orders in real time. Trigger automatic supplier restocks when thresholds hit.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Shopify · Airtable · REST Webhooks</span>
              <span className="text-emerald-700 font-bold">100% sync rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Case Studies Snapshot */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Tangible Evidence
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
              Real Small Businesses. Measurable Outcomes.
            </h2>
          </div>
          <button
            onClick={() => setCurrentTab('case-studies')}
            className="cursor-pointer text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors inline-flex items-center gap-1.5"
          >
            <span>View all detailed case studies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.slice(0, 2).map((cs) => (
            <div
              key={cs.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between hover:border-teal-400 hover:shadow-xl transition-all shadow-sm"
            >
              <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-100">
                <img
                  src={cs.image}
                  alt={cs.client}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 text-xs font-bold text-teal-900 bg-white/95 px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                  {cs.badge}
                </div>
              </div>

              <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
                    <span className="font-bold text-slate-800">{cs.client}</span>
                    <span>{cs.location}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-950">
                    {cs.summary}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="block font-mono text-sm font-bold text-teal-700">{cs.metrics.hoursSaved}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Time Recovered</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="block font-mono text-sm font-bold text-cyan-700">{cs.metrics.roiPayback}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Payback Time</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="block font-mono text-sm font-bold text-emerald-700">{cs.metrics.throughputIncrease}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Efficiency</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Interactive ROI Calculator */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RoiCalculator onOpenBooking={onOpenBooking} />
      </section>

      {/* 6. Client Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Trust & Reputation
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
            Endorsed By European Business Operators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="text-xs font-mono text-teal-700 font-bold">
                  {t.metric}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-900">{t.name}</div>
                <div className="text-[11px] text-slate-500 font-medium">{t.role} · {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Final Conversion Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 via-cyan-50/50 to-white p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Fixed Transparent Terms</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Ready to automate your operations for $2,000?
            </h2>

            <p className="text-sm text-slate-700 leading-relaxed">
              We audit your manual bottlenecks, build your custom automated pipelines in 10-14 days, and sustain your cloud infrastructure for $250/month. No hidden fees.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenBooking}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 rounded-lg shadow-md transition-all active:scale-95"
              >
                <span>Schedule Free 20-Min Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-emerald-800 bg-emerald-100/80 border border-emerald-300 hover:bg-emerald-200/80 rounded-lg transition-colors shadow-2xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            <div className="text-xs text-slate-600 pt-2 font-medium">
              Direct Contact: <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-teal-700 font-bold hover:underline">{AGENCY_CONFIG.email}</a> · Phone: <span className="text-slate-900 font-semibold">{AGENCY_CONFIG.phoneFormatted}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
