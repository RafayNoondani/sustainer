import React, { useState } from 'react';
import { AGENCY_CONFIG } from '../data/agencyData.ts';
import { WhatsAppIcon } from '../components/WhatsAppIcon.tsx';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Calendar 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    bottleneck: '',
    preferredChannel: 'WhatsApp',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Sustainer Tech!\nMy name is ${formData.name || 'Business Owner'} from ${formData.company || 'our company'}.\nWe are interested in your $2,000 business automation setup.\nBottleneck: ${formData.bottleneck || 'Operations & invoicing sync'}`
    );
    window.open(`https://wa.me/3197010267490?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800">
          <span>Direct Contact Desk</span>
          <span aria-hidden="true">·</span>
          <span>Sustainer Tech</span>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight mt-2 [text-wrap:balance]">
          Let's Eliminate Your Business Bottlenecks.
        </h1>
        <p className="text-base text-slate-600 mt-4 leading-relaxed">
          Reach out directly via WhatsApp for fast responses, or fill out the operational discovery form below to schedule your free 20-minute audit call.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Contact Info & WhatsApp Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* High-Intent WhatsApp Hero Card */}
          <div className="rounded-2xl border-2 border-emerald-400/50 bg-gradient-to-br from-emerald-50 via-white to-teal-50/60 p-6 sm:p-7 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-2xs">
                <WhatsAppIcon className="w-7 h-7 text-emerald-600" size={28} />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-slate-950">
                  Fastest Response via WhatsApp
                </h3>
                <span className="text-xs text-emerald-700 font-bold">
                  Direct Line: {AGENCY_CONFIG.phoneFormatted}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Skip back-and-forth emails. Message our engineering team directly on WhatsApp to discuss your tools, pricing details, or project timeline.
            </p>

            <button
              onClick={handleDirectWhatsApp}
              className="cursor-pointer w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-md transition-all active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp Now</span>
            </button>
          </div>

          {/* Contact Details List */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-5 text-xs text-slate-600 shadow-sm">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Official Agency Email
              </span>
              <a
                href={`mailto:${AGENCY_CONFIG.email}`}
                className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-teal-700 transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-600" />
                <span>{AGENCY_CONFIG.email}</span>
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                WhatsApp & Phone
              </span>
              <a
                href={AGENCY_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{AGENCY_CONFIG.phoneFormatted}</span>
              </a>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                European Headquarters
              </span>
              <div className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Amsterdam, Netherlands (EU) — Serving clients across Europe, UK, and worldwide.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Response SLA
              </span>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>Under 2 hours during EU business hours (08:00 - 18:00 CET).</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Intake Form (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Free Operational Audit</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-950 mt-1">
                  Tell Us About Your Business
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  We'll inspect your workflow friction and prepare an actionable automation architecture plan.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company Name / Website
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rostova Logistics BV"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@rostovalogistics.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp or Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+31 970 1026 7490"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Contact Channel
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['WhatsApp (Fastest)', 'Email'].map((channel) => (
                    <label
                      key={channel}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer text-xs transition-colors ${
                        formData.preferredChannel === channel
                          ? 'bg-teal-50 border-teal-500 text-teal-900 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredChannel"
                        checked={formData.preferredChannel === channel}
                        onChange={() => setFormData({ ...formData, preferredChannel: channel })}
                        className="accent-teal-600"
                      />
                      <span>{channel}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Which repetitive manual tasks waste the most time?
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your current manual workflow: e.g. 'We spend 15 hours each week taking orders from WhatsApp, typing them into QuickBooks, and messaging our warehouse on Slack.'"
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full rounded-lg bg-slate-50 border border-slate-300 px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>NDA & strict European GDPR privacy guaranteed.</span>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 shadow-md transition-all active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Operational Inquiry</span>
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-teal-100 border border-teal-300 rounded-full flex items-center justify-center mx-auto text-teal-700">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-950">
                Inquiry Dispatched Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900 font-bold">{formData.name}</strong>. Our lead automation architect has received your details and is reviewing your operational bottleneck.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 max-w-md mx-auto font-medium">
                Expect an email at <span className="text-teal-700 font-bold">{formData.email}</span> or a message on WhatsApp at <span className="text-emerald-700 font-bold">{formData.phone}</span> within 2 hours.
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleDirectWhatsApp}
                  className="cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-2xs"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Open WhatsApp Direct Chat</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="cursor-pointer px-4 py-2 text-xs text-slate-500 hover:text-slate-800"
                >
                  Send another message
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
