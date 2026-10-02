import React, { useState } from 'react';
import { Play, RotateCcw, CheckCircle2, Zap, MessageSquare, Database, CreditCard, CalendarCheck } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  inquiry: string;
  steps: {
    title: string;
    description: string;
    tool: string;
    icon: any;
    delay: number;
    log: string;
  }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 'lead-booking',
    name: 'High-Ticket Service Lead & Auto-Quote',
    inquiry: 'New website lead: "Solaris Solar - 12kW system request for industrial roof, contact info verified"',
    steps: [
      {
        title: 'Instant Lead Capture & Webhook Trigger',
        description: 'Captured via web form and parsed through Make.com secure endpoint in 120ms.',
        tool: 'Make.com Webhook',
        icon: Zap,
        delay: 600,
        log: 'HTTP 200: Lead payload ingested with clean JSON structure.'
      },
      {
        title: 'CRM Record & Intent Qualification',
        description: 'Lead profile created in HubSpot; intent scored as High Priority based on kilowatt requirement.',
        tool: 'HubSpot CRM',
        icon: Database,
        delay: 1100,
        log: 'Record created #L-4819. Probability calculated at 88%.'
      },
      {
        title: 'Instant Automated Estimate & Deposit Link',
        description: 'Standardized rate sheet applied; Stripe checkout quote generated dynamically.',
        tool: 'Stripe Billing API',
        icon: CreditCard,
        delay: 1700,
        log: 'Invoice #INV-2041 generated with deposit payment link.'
      },
      {
        title: 'WhatsApp Direct Confirmation to Client',
        description: 'Homeowner receives customized WhatsApp with meeting booking link and quote PDF.',
        tool: 'WhatsApp Business API',
        icon: MessageSquare,
        delay: 2400,
        log: 'Dispatched to +31 970 1026 7490 with verified delivery stamp.'
      },
      {
        title: 'Technician Calendar Slot Reserved',
        description: 'Google Calendar synchronized with drive-time buffer; sales team alerted on Slack.',
        tool: 'Google Calendar / Slack',
        icon: CalendarCheck,
        delay: 3100,
        log: 'Meeting reserved Thursday 14:00 CET. Zero human effort.'
      }
    ]
  },
  {
    id: 'clinic-intake',
    name: 'Medical Clinic Patient Intake & SMS Sync',
    inquiry: 'Patient booking via WhatsApp: "Need urgent sports physio consultation tomorrow afternoon"',
    steps: [
      {
        title: 'Inbound WhatsApp Inquiry & Bot Triage',
        description: 'WhatsApp API detects consultation request and asks for insurance & injury type.',
        tool: 'WhatsApp API',
        icon: MessageSquare,
        delay: 600,
        log: 'Inbound message categorized under Orthopedic Assessment.'
      },
      {
        title: 'Encrypted Patient Intake Form Sent',
        description: 'Single-use secure GDPR-compliant medical intake link sent to patient.',
        tool: 'Encrypted Webhook',
        icon: Zap,
        delay: 1200,
        log: 'GDPR audit token registered. Form completed on mobile.'
      },
      {
        title: 'Electronic Health Record Updated',
        description: 'Patient ID and history parsed into clinic management software automatically.',
        tool: 'EHR / Database',
        icon: Database,
        delay: 1900,
        log: 'Patient chart created. No manual retyping required.'
      },
      {
        title: 'Slot Locked & SMS Reminder Scheduled',
        description: 'Doctor diary updated; automated reminder queued for 2 hours before appointment.',
        tool: 'Calendar & SMS Dispatch',
        icon: CalendarCheck,
        delay: 2600,
        log: 'Appointment confirmed with zero front-desk phone calls.'
      }
    ]
  }
];

export const WorkflowSimulator: React.FC = () => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [executionLogs, setExecutionLogs] = useState<string[]>([]);

  const scenario = SCENARIOS[activeScenarioIndex];

  const runSimulation = () => {
    setIsRunning(true);
    setCurrentStep(0);
    setExecutionLogs([`[0.00s] Initializing pipeline trigger: "${scenario.inquiry.substring(0, 42)}..."`]);

    scenario.steps.forEach((step, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        setExecutionLogs((prev) => [
          ...prev,
          `[+${(step.delay / 1000).toFixed(2)}s] ${step.tool}: ${step.log}`
        ]);

        if (index === scenario.steps.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
            setExecutionLogs((prev) => [
              ...prev,
              `[SUCCESS] Entire workflow finished in ${(step.delay / 1000).toFixed(2)}s. Total manual effort avoided: ~25 mins.`
            ]);
          }, 600);
        }
      }, step.delay);
    });
  };

  const resetSimulation = () => {
    setCurrentStep(-1);
    setIsRunning(false);
    setExecutionLogs([]);
  };

  const handleScenarioChange = (idx: number) => {
    setActiveScenarioIndex(idx);
    setCurrentStep(-1);
    setIsRunning(false);
    setExecutionLogs([]);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Operational Simulator</span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-1">
            See How Sustainer Tech Automates Your Core Pipeline
          </h3>
        </div>

        {/* Scenario Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start sm:self-auto">
          {SCENARIOS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => handleScenarioChange(idx)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                activeScenarioIndex === idx
                  ? 'bg-white text-teal-800 font-bold shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {idx === 0 ? 'Lead & Invoicing' : 'Clinic Patient Intake'}
            </button>
          ))}
        </div>
      </div>

      {/* Simulator Controls & Trigger State */}
      <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="text-xs text-slate-700 font-mono flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-pulse" />
          <span className="text-slate-500 font-medium">Simulated Trigger:</span>
          <span className="text-slate-900 font-semibold truncate max-w-md">
            {scenario.inquiry}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-700 hover:to-cyan-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>{isRunning ? 'Running Pipeline...' : 'Test This Workflow'}</span>
          </button>

          {currentStep >= 0 && (
            <button
              onClick={resetSimulation}
              disabled={isRunning}
              className="p-2 text-slate-600 hover:text-slate-900 bg-white rounded-lg transition-colors border border-slate-200 shadow-2xs cursor-pointer"
              title="Reset Simulator"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Pipeline Steps Visualizer */}
      <div className="mt-6 space-y-3">
        {scenario.steps.map((step, idx) => {
          const isCompleted = currentStep > idx;
          const isCurrent = currentStep === idx;

          return (
            <div
              key={idx}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 ${
                isCurrent
                  ? 'bg-teal-50/90 border-teal-500 shadow-md scale-[1.01]'
                  : isCompleted
                  ? 'bg-slate-50 border-slate-200 text-slate-700'
                  : 'bg-white border-slate-200 text-slate-400 opacity-60'
              }`}
            >
              <div className="flex items-start sm:items-center justify-between gap-3">
                <div className="flex items-start sm:items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                        : isCurrent
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4" />
                    ) : (
                      <step.icon className="w-4 h-4" />
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-medium text-slate-500">Step 0{idx + 1}</span>
                      <span className="text-xs text-slate-300">·</span>
                      <h4 className="text-sm font-bold text-slate-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-right">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-teal-800 shadow-2xs">
                    {step.tool}
                  </span>
                  <div className="text-[10px] text-slate-500 mt-1 font-medium">
                    {isCompleted ? '✓ Instant 0ms' : isCurrent ? '⚡ Processing...' : 'Queued'}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Execution Console Logs */}
      {executionLogs.length > 0 && (
        <div className="mt-5 p-3.5 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs max-h-36 overflow-y-auto shadow-inner border border-slate-800">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
            Real-Time Pipeline Execution Log
          </div>
          <div className="space-y-1">
            {executionLogs.map((log, index) => (
              <div
                key={index}
                className={
                  log.includes('SUCCESS')
                    ? 'text-emerald-400 font-semibold'
                    : log.includes('HTTP 200')
                    ? 'text-cyan-300'
                    : 'text-slate-300'
                }
              >
                {log}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
