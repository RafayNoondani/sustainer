import React, { useState } from 'react';
import { AGENCY_CONFIG, FAQS } from '../data/agencyData.ts';
import { RoiCalculator } from '../components/RoiCalculator.tsx';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';
import { 
  Check, 
  HelpCircle, 
  ArrowRight, 
  ChevronDown,
} from 'lucide-react';

interface PricingPageProps {
  onOpenBooking: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
          <span>Radical Transparency</span>
          <span aria-hidden="true">·</span>
          <span>Zero Retainer Surprises</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight [text-wrap:balance]">
          Simple, Predictable Agency Pricing.
        </h1>
        <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We don't bill endless agency hourly rates. We engineer your operational workflows for a fixed setup fee and maintain continuous uptime for a predictable monthly cost.
        </p>
      </div>

      {/* Main Pricing Matrix Card */}
      <div className="max-w-4xl mx-auto rounded-3xl border-2 border-teal-500/30 bg-white p-6 sm:p-10 shadow-2xl relative">
        <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
          Complete Small Business Suite
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Part A: $2,000 Setup Sprint */}
          <div className="space-y-6 md:pr-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-800">
                Phase 1 · One-Time Architecture
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
                  {AGENCY_CONFIG.pricing.setupPrice}
                </span>
                <span className="text-xs text-slate-500 font-medium">one-time investment</span>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Custom workflow architecture, API connectors, automated dispatch, and full team onboarding sprint.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                What's Included In Your Build:
              </span>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {AGENCY_CONFIG.pricing.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Part B: $250/mo Ongoing Sustain & Cloud */}
          <div className="space-y-6 pt-8 md:pt-0 md:pl-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-800">
                Phase 2 · Ongoing Cloud & Reliability
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight">
                  {AGENCY_CONFIG.pricing.monthlyPrice}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ month</span>
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Dedicated cloud hosting, automated error-recovery, API upgrade protection, and priority support.
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                What's Included Every Month:
              </span>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {AGENCY_CONFIG.pricing.monthlyDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action strip */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            <span className="font-bold text-slate-900">Guaranteed Delivery:</span> Ready for production in 10-14 days.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-lg hover:bg-emerald-100 transition-colors shadow-2xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Inquiry</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="cursor-pointer flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 rounded-lg shadow-sm transition-all"
            >
              <span>Schedule 20-Min Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Comparison: Full-Time Hire vs Freelancers vs Sustainer Tech */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-slate-950">
            How The Numbers Compare
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Why small businesses choose Sustainer Tech over traditional hires or unvetted freelancers.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-md">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600 uppercase text-[11px] font-mono bg-slate-50">
                <th className="py-3.5 px-5 font-bold">Evaluation Criteria</th>
                <th className="py-3.5 px-5 font-bold">In-House Operations Hire</th>
                <th className="py-3.5 px-5 font-bold">Ad-Hoc Freelancer</th>
                <th className="py-3.5 px-5 text-teal-800 font-extrabold bg-teal-50">
                  Sustainer Tech
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-4 px-5 font-bold text-slate-900">Annual Cost</td>
                <td className="py-4 px-5 font-mono text-slate-600">$60,000 - $85,000 + benefits</td>
                <td className="py-4 px-5 font-mono text-slate-600">$80 - $150 / hr (unpredictable)</td>
                <td className="py-4 px-5 font-mono font-extrabold text-teal-800 bg-teal-50/70">
                  $5,000 Year 1 ($2k + $250/mo)
                </td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-bold text-slate-900">Speed to Deploy</td>
                <td className="py-4 px-5 text-slate-600">2-3 months recruiting + training</td>
                <td className="py-4 px-5 text-slate-600">4-8 weeks with frequent delays</td>
                <td className="py-4 px-5 font-bold text-teal-800 bg-teal-50/70">
                  10 - 14 Days Guaranteed
                </td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-bold text-slate-900">24/7 Monitoring & Fixes</td>
                <td className="py-4 px-5 text-slate-600">Only during working hours</td>
                <td className="py-4 px-5 text-slate-600">Disappears after hand-off</td>
                <td className="py-4 px-5 font-bold text-teal-800 bg-teal-50/70">
                  Included 24/7 in $250/mo Plan
                </td>
              </tr>
              <tr>
                <td className="py-4 px-5 font-bold text-slate-900">GDPR & Security Rigor</td>
                <td className="py-4 px-5 text-slate-600">Depends on individual experience</td>
                <td className="py-4 px-5 text-slate-600">Often overlooked</td>
                <td className="py-4 px-5 font-bold text-teal-800 bg-teal-50/70">
                  EU GDPR Bank-Grade Encryption
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ROI Calculator Embedded */}
      <RoiCalculator onOpenBooking={onOpenBooking} />

      {/* Frequently Asked Questions */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Operational FAQ</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-950">
            Common Questions About Our Automation Sprints
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-2xs hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full cursor-pointer px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-teal-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
