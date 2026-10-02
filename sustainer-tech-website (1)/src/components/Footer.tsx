import React from 'react';
import { SustainerLogo } from './SustainerLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { AGENCY_CONFIG } from '../data/agencyData.ts';
import { Mail, ShieldCheck, MapPin, ArrowUpRight, Download } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onOpenBooking }) => {
  const handleNav = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      {/* Top Banner / Call to Action Strip */}
      <div className="border-b border-slate-200 bg-gradient-to-r from-teal-50 via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl text-slate-900 font-bold tracking-tight">
              Ready to eliminate repetitive busywork from your business?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Get an end-to-end small business automation architecture for $2,000 and 24/7 sustained uptime for $250/mo.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-100/80 border border-emerald-300 hover:bg-emerald-200/80 rounded-lg transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-700" />
              <span>WhatsApp Direct</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="cursor-pointer inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 rounded-lg shadow-sm transition-all"
            >
              <span>Schedule Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none cursor-pointer"
            >
              <SustainerLogo size={32} />
            </button>
            <p className="text-sm text-slate-600 leading-relaxed">
              We design, build, and sustain custom workflow automations that scale small business capacity, eliminate manual data entry, and expand profit margins.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-teal-800 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0 text-teal-600" />
              <span>EU GDPR Compliant & Bank-Grade Webhook Security</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Agency Directory
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-teal-700 transition-colors cursor-pointer text-slate-600"
                >
                  Overview & ROI
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('solutions')}
                  className="hover:text-teal-700 transition-colors cursor-pointer text-slate-600"
                >
                  Automation Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('case-studies')}
                  className="hover:text-teal-700 transition-colors cursor-pointer text-slate-600"
                >
                  Verified Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('pricing')}
                  className="hover:text-teal-700 transition-colors cursor-pointer text-slate-600"
                >
                  Pricing ($2k + $250/mo)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-teal-700 transition-colors cursor-pointer text-slate-600"
                >
                  Our Sprint Methodology
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Focus */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Operations Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>Lead-to-CRM Auto-Enrichment</li>
              <li>QuickBooks & Stripe Auto-Invoicing</li>
              <li>WhatsApp Direct Client Booking</li>
              <li>Multi-Channel Inventory Sync</li>
              <li>Custom Webhook & API Bridges</li>
              <li>24/7 Pipeline Monitoring & Failover</li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="flex items-center gap-2.5 text-slate-700 hover:text-teal-700 transition-colors group font-medium"
              >
                <Mail className="w-4 h-4 text-teal-600 shrink-0" />
                <span className="truncate">{AGENCY_CONFIG.email}</span>
              </a>

              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-700 hover:text-emerald-700 transition-colors group font-medium"
              >
                <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{AGENCY_CONFIG.phoneFormatted} (WhatsApp)</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-600 text-xs pt-1">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Netherlands, European Union — Serving global clients across EU, UK & US</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Sustainer Tech. All rights reserved. Registered European automation consultancy.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-slate-600">
            <span>Transparent Pricing: $2,000 setup · $250/mo hosting & upkeep</span>
            <span aria-hidden="true">·</span>
            <a
              href="/sustainer-tech-website.zip"
              download="sustainer-tech-website.zip"
              className="inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-900 font-bold hover:underline cursor-pointer"
              title="Download full project source code and production build"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Website (.ZIP)</span>
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNav('contact')}
              className="text-teal-700 hover:underline font-medium cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
