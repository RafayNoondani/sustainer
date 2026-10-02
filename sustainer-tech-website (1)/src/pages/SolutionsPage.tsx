import React, { useState } from 'react';
import { SERVICES, AGENCY_CONFIG } from '../data/agencyData.ts';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';
import { 
  CheckCircle2, 
  ArrowRight, 
} from 'lucide-react';

interface SolutionsPageProps {
  onOpenBooking: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenBooking }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const selectedService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Page Header */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
          <span>Operations Architecture</span>
          <span aria-hidden="true">·</span>
          <span>End-To-End Automation</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mt-2 [text-wrap:balance]">
          Custom Operational Pipelines for Small Businesses.
        </h1>
        <p className="text-base text-slate-600 mt-4 leading-relaxed">
          Every business has unique manual bottlenecks. Sustainer Tech eliminates them with battle-tested automation infrastructure built on reliable modern cloud endpoints.
        </p>

        {/* Pricing Reminder */}
        <div className="mt-4 p-4 rounded-xl bg-teal-50/70 border border-teal-200 text-xs text-slate-800 flex flex-wrap items-center gap-3 shadow-2xs">
          <span className="font-bold text-slate-950">All solutions included under our flat model:</span>
          <span className="text-teal-800 font-bold">$2,000 Setup Sprint</span>
          <span aria-hidden="true" className="text-slate-400">·</span>
          <span className="text-cyan-800 font-bold">$250/mo Cloud Hosting & API Monitoring</span>
        </div>
      </div>

      {/* Interactive Solution Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Selector Tabs (Left 4 cols) */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-2">
            Select A Pipeline Solution
          </div>
          {SERVICES.map((srv, idx) => {
            const isSelected = srv.id === selectedServiceId;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`cursor-pointer w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start justify-between ${
                  isSelected
                    ? 'bg-white border-teal-500 shadow-md ring-1 ring-teal-500/20'
                    : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div>
                  <span className="text-[11px] font-mono font-bold text-teal-700">
                    0{idx + 1}. {srv.category}
                  </span>
                  <h3 className={`text-sm font-bold mt-1 ${isSelected ? 'text-slate-950' : 'text-slate-700'}`}>
                    {srv.title}
                  </h3>
                </div>
                {isSelected && (
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600 mt-2 shrink-0 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Deep Dive Panel (Right 8 cols) */}
        <div className="lg:col-span-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-teal-800">
                <span>{selectedService.category}</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span className="text-slate-500">Typical Sprint: {selectedService.typicalTimeframe}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-950 mt-1">
                {selectedService.title}
              </h2>
              <p className="text-sm font-semibold text-teal-700 mt-2">
                "{selectedService.headline}"
              </p>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {/* Concrete Business Outcomes */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Measurable Deliverables & Outcomes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrated Software Systems */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Common Integrations & APIs
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.commonIntegrations.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to action within solution */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 font-medium">Implementation Model</span>
                <div className="text-sm font-bold text-slate-950">
                  Included in $2,000 Setup Sprint
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={AGENCY_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-lg hover:bg-emerald-100 shadow-2xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>Ask about this on WhatsApp</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 rounded-lg transition-all shadow-xs"
                >
                  <span>Build This Pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Trust Grid */}
      <div className="border-t border-slate-200 pt-12">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-950">
            We Automate The Software You Already Rely On
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            No painful software migrations. We wire your current tools into an autonomous, synchronized system.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 text-center">
          {[
            { name: "Make.com", type: "Core Orchestrator" },
            { name: "WhatsApp Cloud", type: "Official Meta API" },
            { name: "QuickBooks", type: "Auto-Reconciliation" },
            { name: "Stripe", type: "Dynamic Billing" },
            { name: "HubSpot", type: "CRM Synchronization" },
            { name: "Airtable", type: "Master Database" },
            { name: "Google Workspace", type: "Drive, Sheets, Cal" },
            { name: "PostgreSQL", type: "Relational Storage" },
            { name: "Xero", type: "Accounting Automation" },
            { name: "Shopify", type: "E-Commerce Dispatch" },
            { name: "Twilio", type: "SMS & Telephony" },
            { name: "Custom REST", type: "Bespoke Webhooks" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-sm transition-all"
            >
              <div className="text-xs font-bold text-slate-950">{item.name}</div>
              <div className="text-[10px] text-slate-500 mt-0.5 font-medium">{item.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
