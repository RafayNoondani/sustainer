import React, { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppIcon.tsx';
import { AGENCY_CONFIG } from '../data/agencyData.ts';
import { X, Send, ArrowRight } from 'lucide-react';

export const WhatsAppFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    "Hi Sustainer Tech, I'd like to automate our small business operations.",
    "Can you explain what's included in the $2,000 setup package?",
    "We need WhatsApp lead booking & CRM sync for our team.",
  ];

  const handleSend = (text: string) => {
    const encoded = encodeURIComponent(text || "Hi Sustainer Tech, I would like to learn more about small business automation.");
    const url = `https://wa.me/3197010267490?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl border border-slate-200 bg-white shadow-2xl p-4 text-slate-800 animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-700" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">Sustainer Tech</h4>
                <p className="text-xs text-emerald-700 font-semibold">Direct WhatsApp Desk · Active Now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-md transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message */}
          <div className="my-3 space-y-2 text-xs">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-slate-700">
              <p className="font-semibold text-slate-900 mb-1">
                Welcome to Sustainer Tech! 👋
              </p>
              <p>
                Have questions about automating your manual processes, our <strong className="text-slate-950 font-bold">$2,000 setup</strong>, or <strong className="text-slate-950 font-bold">$250/mo hosting</strong>? Chat directly with an engineer on WhatsApp.
              </p>
            </div>

            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pt-1">
              Select a quick question:
            </p>

            <div className="space-y-1.5">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="w-full text-left p-2.5 rounded-lg bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 hover:border-emerald-400 text-xs text-slate-800 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate pr-2 font-medium">{prompt}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* Custom Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(customMsg);
            }}
            className="flex items-center gap-2 pt-2 border-t border-slate-100"
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
            />
            <button
              type="submit"
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors cursor-pointer shadow-xs"
              title="Open WhatsApp chat"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-2 text-center text-[11px] text-slate-500 font-medium">
            Direct Line: {AGENCY_CONFIG.phoneFormatted}
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-medium text-sm rounded-full shadow-xl shadow-emerald-950/20 hover:shadow-emerald-600/30 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white cursor-pointer"
        aria-label="Direct WhatsApp Contact with Sustainer Tech"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <WhatsAppIcon className="w-5 h-5 text-white" size={20} />
        <span className="hidden sm:inline font-bold">Chat on WhatsApp</span>
      </button>
    </div>
  );
};
