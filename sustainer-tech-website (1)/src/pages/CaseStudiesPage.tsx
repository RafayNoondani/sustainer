import React from 'react';
import { CASE_STUDIES, AGENCY_CONFIG } from '../data/agencyData.ts';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';
import { 
  ArrowRight, 
  Quote, 
  MapPin 
} from 'lucide-react';

interface CaseStudiesPageProps {
  onOpenBooking: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
          <span>Client Proof & ROI</span>
          <span aria-hidden="true">·</span>
          <span>Verified Operational Audits</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mt-2 [text-wrap:balance]">
          Real Automations. Unforgiving Results.
        </h1>
        <p className="text-base text-slate-600 mt-4 leading-relaxed">
          See how small businesses across Europe eliminated manual administrative friction, accelerated response times, and recovered tens of thousands in wasted payroll.
        </p>
      </div>

      {/* Case Studies Detailed List */}
      <div className="space-y-12">
        {CASE_STUDIES.map((cs) => (
          <div
            key={cs.id}
            className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image & Key Stats Column (5 cols) */}
              <div className="lg:col-span-5 relative bg-slate-50 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.client}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 text-xs font-bold text-teal-900 bg-white/95 px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                    {cs.badge}
                  </div>
                </div>

                {/* Metrics Pill Grid */}
                <div className="p-4 sm:p-6 bg-white border-t border-slate-200 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="block font-mono text-xs sm:text-sm font-bold text-teal-700">{cs.metrics.hoursSaved}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Time Saved</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="block font-mono text-xs sm:text-sm font-bold text-cyan-700">{cs.metrics.roiPayback}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Full Payback</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <span className="block font-mono text-xs sm:text-sm font-bold text-emerald-700">{cs.metrics.throughputIncrease}</span>
                    <span className="text-[10px] text-slate-500 font-medium">Impact</span>
                  </div>
                </div>
              </div>

              {/* Editorial Breakdown Column (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium mb-2">
                    <span className="font-bold text-slate-900">{cs.client}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span>{cs.industry}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {cs.location}
                    </span>
                  </div>

                  <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-950">
                    {cs.summary}
                  </h2>

                  {/* Challenge & Solution Grid */}
                  <div className="mt-5 space-y-3.5">
                    <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5 mb-1.5">
                        <span>The Operational Bottleneck</span>
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5 mb-1.5">
                        <span>The Sustainer Tech Architecture</span>
                      </h4>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Verified Tech Stack */}
                  <div className="mt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block mb-2">
                      Connected Ecosystem
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono font-semibold text-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Attributable Quote */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-teal-600 shrink-0 mt-1" />
                    <div>
                      <p className="text-xs text-slate-800 italic leading-relaxed">
                        "{cs.quote.text}"
                      </p>
                      <div className="mt-2 text-xs font-bold text-slate-950">
                        {cs.quote.author} <span className="text-slate-500 font-medium">· {cs.quote.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center space-y-4 shadow-lg">
        <h3 className="font-display text-2xl font-bold text-slate-950">
          Want similar operational metrics for your business?
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          We guarantee your custom automation pipeline goes live within 10–14 days for a fixed $2,000 setup fee.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenBooking}
            className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 rounded-lg shadow-sm transition-all"
          >
            <span>Request Operational Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 rounded-lg shadow-xs"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
            <span>Chat on WhatsApp: {AGENCY_CONFIG.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
