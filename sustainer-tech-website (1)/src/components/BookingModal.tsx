import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, ShieldCheck, Send } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { AGENCY_CONFIG } from '../data/agencyData.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    biggestBottleneck: '',
    preferredDay: 'This Week',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hi Sustainer Tech! I would like to book a 20-min Automation Audit.\nName: ${formData.name || 'Business Owner'}\nCompany: ${formData.businessType || 'Small Business'}\nBottleneck: ${formData.biggestBottleneck || 'Manual invoicing & lead response'}`
    );
    window.open(`https://wa.me/3197010267490?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl border border-slate-200 bg-white shadow-2xl p-6 sm:p-8 text-slate-800 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
              <Calendar className="w-4 h-4" />
              <span>Zero-Pressure Operational Review</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              Schedule Your 20-Min Automation Audit
            </h3>
            <p className="text-sm text-slate-600 mt-1.5">
              We'll review your manual bottlenecks and outline the exact architecture for your <strong className="text-slate-900 font-bold">$2,000 setup</strong>.
            </p>

            {/* Quick WhatsApp Alternative */}
            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-slate-800 font-medium">
                <WhatsAppIcon className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Prefer to chat on WhatsApp immediately?</span>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="cursor-pointer px-3 py-1.5 rounded-md font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shrink-0 shadow-2xs"
              >
                Open WhatsApp
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Thomas Bakker"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="thomas@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp or Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+31 6 12345678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Industry / Business Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Clinic, Contracting, Logistics, Law"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  What repetitive manual tasks take the most time?
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Re-typing leads from website into our CRM, creating invoices in QuickBooks, messaging clients on WhatsApp..."
                  value={formData.biggestBottleneck}
                  onChange={(e) => setFormData({ ...formData, biggestBottleneck: e.target.value })}
                  className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>We respect your privacy. No spam, NDA guaranteed under EU GDPR.</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Request 20-Min Audit Call</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-teal-100 border border-teal-300 rounded-full flex items-center justify-center mx-auto text-teal-700">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Audit Request Received!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900 font-bold">{formData.name}</strong>. A senior automation engineer from Sustainer Tech will review your operational bottleneck and reach out via email (<span className="text-teal-700 font-semibold">{formData.email}</span>) or WhatsApp within 2 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-2xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Message on WhatsApp Now</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="cursor-pointer w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
