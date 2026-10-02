import React from 'react';
import { AGENCY_CONFIG } from '../data/agencyData.ts';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';
import { 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Cpu, 
} from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: "01",
      title: "The Friction & Process Audit",
      time: "Days 1–3",
      desc: "We analyze your team's day-to-day operations: where repetitive typing occurs, which software tools fail to communicate, and where deals get dropped. We produce an exact architecture blueprint before writing a single line of webhook logic."
    },
    {
      num: "02",
      title: "Custom Pipeline Engineering",
      time: "Days 4–10",
      desc: "Our senior developers wire your tools (WhatsApp, QuickBooks, CRM, Stripe, Google Workspace) with custom APIs, retry logic, and fallback catches so bad user inputs never break the system."
    },
    {
      num: "03",
      title: "Stress Testing & Staff Hand-Off",
      time: "Days 11–14",
      desc: "We simulate heavy edge-case loads and record personalized Loom video documentation for your staff. We ensure every team member feels confident and supported before live traffic switches over."
    },
    {
      num: "04",
      title: "The 24/7 Sustain Protocol",
      time: "Ongoing",
      desc: "For $250/month, our dedicated cloud servers monitor every webhook payload, heal API discrepancies automatically when third parties update, and provide you direct senior engineer emergency support on WhatsApp."
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
          <span>Our Ethos & Engineering</span>
          <span aria-hidden="true">·</span>
          <span>Sustainer Tech</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mt-2 [text-wrap:balance]">
          We Believe Small Businesses Should Run Like Modern Tech Enterprises.
        </h1>
        <p className="text-base text-slate-600 mt-4 leading-relaxed">
          Large corporations spend millions on enterprise automation departments. Small businesses get stuck with manual spreadsheets, missed follow-ups, and repetitive data re-entry. Sustainer Tech was founded in the Netherlands to level the playing field.
        </p>
      </div>

      {/* Core Principles Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-xs hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700 shadow-2xs">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-slate-950">
            Built For Tangible ROI
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We don't build vanity automations. Every workflow we architect is designed to pay for its $2,000 setup cost in payroll savings or accelerated closed revenue within 30 days.
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-xs hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 shadow-2xs">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-slate-950">
            EU GDPR & Bank-Grade Security
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Operating from the Netherlands, our systems comply with strict European data sovereignty laws. All webhook payloads use 256-bit TLS encryption, with zero unapproved credential storage.
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-xs hover:shadow-md transition-shadow">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-2xs">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-slate-950">
            The "Sustained" Promise
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Traditional agencies hand off a fragile Zap and vanish. Sustainer Tech actively hosts and monitors your cloud architecture for $250/mo, catching API updates before they cause issues.
          </p>
        </div>
      </div>

      {/* The 4-Stage Sprint Methodology */}
      <div className="space-y-8">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Sprint Methodology
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950 mt-1">
            How We Take You From Manual Friction To Autopilot
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200 bg-white flex flex-col justify-between shadow-xs hover:border-teal-400 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono font-extrabold text-teal-700 text-sm">{st.num}.</span>
                  <span className="font-mono font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                    {st.time}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-slate-950">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-teal-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero client downtime</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership & Direct WhatsApp Desk */}
      <div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 via-cyan-50/40 to-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
            Direct Communication
          </span>
          <h3 className="font-display text-2xl font-bold text-slate-950">
            Speak Directly With A Lead Engineer
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            We don't pass you between account managers and outsourced contractors. When you contact Sustainer Tech, you communicate directly with senior automation architects who write the code and design your pipelines.
          </p>
          <div className="pt-1 text-xs text-slate-600 space-y-1">
            <div>Email: <a href={`mailto:${AGENCY_CONFIG.email}`} className="text-teal-700 font-bold hover:underline">{AGENCY_CONFIG.email}</a></div>
            <div>WhatsApp: <span className="text-slate-900 font-bold font-mono">{AGENCY_CONFIG.phoneFormatted}</span></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-300 rounded-lg hover:bg-emerald-200/90 shadow-2xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="cursor-pointer inline-flex items-center gap-1.5 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 rounded-lg transition-all shadow-md"
          >
            <span>Book 20-Min Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
