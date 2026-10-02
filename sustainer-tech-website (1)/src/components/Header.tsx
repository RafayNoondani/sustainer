import React, { useState } from 'react';
import { SustainerLogo } from './SustainerLogo.tsx';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { AGENCY_CONFIG } from '../data/agencyData.ts';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Overview' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'pricing', label: 'Pricing & ROI' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single Brand Wordmark Element */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left cursor-pointer transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 rounded-md"
          aria-label="Sustainer Tech Home"
        >
          <SustainerLogo size={34} />
        </button>

        {/* Zone 2: 4–6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`cursor-pointer transition-colors relative py-1 text-sm tracking-normal ${
                  isActive
                    ? 'text-teal-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action Zone (WhatsApp direct + Book Audit) */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Direct WhatsApp Action Link */}
          <a
            href={AGENCY_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-semibold text-emerald-800 bg-emerald-50/90 border border-emerald-300 hover:bg-emerald-100 hover:border-emerald-400 rounded-lg transition-all shadow-xs"
            title="Chat directly on WhatsApp: +31 970 1026 7490"
          >
            <WhatsAppIcon className="w-4 h-4 text-emerald-600 shrink-0" size={16} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Primary CTA: Schedule Audit */}
          <button
            onClick={onOpenBooking}
            className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 rounded-lg shadow-sm hover:shadow-teal-600/20 transition-all active:scale-[0.98] whitespace-nowrap"
          >
            <span>Book Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentTab === link.id
                    ? 'bg-teal-50 text-teal-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href={AGENCY_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 rounded-lg"
            >
              <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Direct: {AGENCY_CONFIG.phoneFormatted}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-cyan-700 rounded-lg text-center shadow-sm"
            >
              Schedule 20-Min Free Audit
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
