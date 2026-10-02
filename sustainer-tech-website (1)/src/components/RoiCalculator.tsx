import React, { useState } from 'react';
import { Calculator, ArrowRight, Clock, DollarSign, Check } from 'lucide-react';
import { AGENCY_CONFIG } from '../data/agencyData.ts';

interface RoiCalculatorProps {
  onOpenBooking: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenBooking }) => {
  const [teamSize, setTeamSize] = useState<number>(3);
  const [hourlyRate, setHourlyRate] = useState<number>(35);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8);

  // Calculations
  const weeklyHoursLost = teamSize * hoursPerWeek;
  const annualHoursLost = weeklyHoursLost * 50;
  const annualCostOfToil = annualHoursLost * hourlyRate;

  // Sustainer Tech Year 1 cost: $2,000 setup + ($250 * 12) = $5,000
  const sustainerYear1Cost = AGENCY_CONFIG.pricing.setupPriceNumber + (AGENCY_CONFIG.pricing.monthlyPriceNumber * 12);
  const estimatedHoursSavedRatio = 0.80; // 80% automated
  const annualValueSaved = annualCostOfToil * estimatedHoursSavedRatio;
  const netYear1Savings = Math.max(0, annualValueSaved - sustainerYear1Cost);

  // Payback period in weeks
  const weeklyValueSaved = (annualCostOfToil * estimatedHoursSavedRatio) / 52;
  const paybackWeeks = weeklyValueSaved > 0 
    ? (AGENCY_CONFIG.pricing.setupPriceNumber / weeklyValueSaved).toFixed(1) 
    : '2.5';

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
            <Calculator className="w-4 h-4" />
            <span>Interactive Operational ROI Calculator</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Calculate How Much Manual Work Is Costing Your Business
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Compare your current payroll friction against Sustainer Tech's fixed $2,000 setup + $250/mo plan.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Slider 1: Team Size */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="font-semibold text-slate-700">
                Team members doing administrative work
              </label>
              <span className="font-mono font-bold text-teal-700 text-base">
                {teamSize} {teamSize === 1 ? 'person' : 'people'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>1 person</span>
              <span>10 people</span>
              <span>20 people</span>
            </div>
          </div>

          {/* Slider 2: Average Hourly Rate */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="font-semibold text-slate-700">
                Average internal hourly cost (salary + overhead)
              </label>
              <span className="font-mono font-bold text-teal-700 text-base">
                ${hourlyRate} / hour
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>$20/hr</span>
              <span>$60/hr</span>
              <span>$100/hr</span>
            </div>
          </div>

          {/* Slider 3: Hours Wasted Per Person */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <label className="font-semibold text-slate-700">
                Weekly manual toil per person (data entry, emails, invoices)
              </label>
              <span className="font-mono font-bold text-teal-700 text-base">
                {hoursPerWeek} hrs / week
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="25"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>2 hrs/wk</span>
              <span>12 hrs/wk</span>
              <span>25 hrs/wk</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Check className="w-4 h-4 text-teal-600" />
              <span>Fixed Sustainer Tech Agency Economics:</span>
            </div>
            <div className="flex items-center justify-between text-slate-700 pt-1">
              <span>One-Time Custom Architecture Sprint:</span>
              <span className="font-mono font-bold text-slate-950">$2,000</span>
            </div>
            <div className="flex items-center justify-between text-slate-700">
              <span>24/7 Cloud Uptime & API Maintenance:</span>
              <span className="font-mono font-bold text-slate-950">$250 / month</span>
            </div>
          </div>
        </div>

        {/* Output Metrics Column */}
        <div className="lg:col-span-6">
          <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50/70 via-cyan-50/40 to-white p-6 sm:p-7 shadow-lg">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Your Projected Operational Impact
            </h4>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-teal-600" />
                  <span>Annual Hours Lost</span>
                </div>
                <div className="mt-1 font-mono text-2xl font-bold text-slate-900">
                  {annualHoursLost.toLocaleString()} hrs
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  {(annualHoursLost * 0.8).toFixed(0)} hrs recoverable
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <DollarSign className="w-3.5 h-3.5 text-rose-600" />
                  <span>Current Cost of Toil</span>
                </div>
                <div className="mt-1 font-mono text-2xl font-bold text-rose-600">
                  ${annualCostOfToil.toLocaleString()}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
                  Wasted payroll per year
                </div>
              </div>
            </div>

            {/* Marquee Metric: Net Savings */}
            <div className="mt-5 p-5 rounded-xl bg-white border-2 border-teal-500/40 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wide text-teal-700">
                  Estimated Year 1 Net Profit Gain
                </span>
                <div className="font-mono text-3xl sm:text-4xl font-extrabold text-teal-800 tracking-tight">
                  +${netYear1Savings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 font-medium">Break-even in</span>
                <div className="font-mono text-xl font-bold text-slate-900">
                  ~{paybackWeeks} weeks
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-600 leading-relaxed">
              Based on eliminating 80% of repetitive data entry, scheduling phone tag, and manual invoicing across your {teamSize}-person team.
            </p>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full cursor-pointer flex items-center justify-center gap-2 py-3.5 px-5 text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 rounded-lg shadow-md transition-all active:scale-[0.99]"
            >
              <span>Schedule 20-Min Automation Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
