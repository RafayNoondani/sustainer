import caseStudyFirmImg from '../assets/images/casestudy_firm_1790922897911.jpg';
import caseStudyDistributionImg from '../assets/images/casestudy_distribution_1790922886853.jpg';
import heroWorkspaceImg from '../assets/images/hero_automation_workspace_1790922867708.jpg';

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  location: string;
  badge: string;
  summary: string;
  metrics: {
    hoursSaved: string;
    roiPayback: string;
    throughputIncrease: string;
  };
  challenge: string;
  solution: string;
  techStack: string[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  outcomes: string[];
  commonIntegrations: string[];
  typicalTimeframe: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const AGENCY_CONFIG = {
  name: "Sustainer Tech",
  tagline: "Small Business Operations Automation Agency",
  email: "contact@sustainertech.eu",
  phone: "+3197010267490",
  phoneFormatted: "+31 970 1026 7490",
  whatsappUrl: "https://wa.me/3197010267490?text=Hi%20Sustainer%20Tech%20team%2C%20I%20would%20like%20to%20automate%20my%20small%20business%20operations.%20Can%20we%20schedule%20an%20audit%3F",
  location: "Amsterdam, Netherlands / Serving Clients Across Europe & Globally",
  pricing: {
    setupPrice: "$2,000",
    setupPriceNumber: 2000,
    monthlyPrice: "$250",
    monthlyPriceNumber: 250,
    deliverables: [
      "Full Operations & Bottleneck Audit",
      "Custom Workflow Architecture & Logic",
      "Lead, CRM, and Invoicing Pipeline Build",
      "WhatsApp & Email Automated Dispatch",
      "Error-Handling & Redundant Webhook Fallbacks",
      "Team Onboarding & Video Documentation",
      "Go-Live Stress Testing & Data Verification"
    ],
    monthlyDeliverables: [
      "Dedicated High-Availability Cloud Hosting",
      "24/7 Live Webhook & API Health Monitoring",
      "Proactive Third-Party API Version Updates",
      "Up to 2 Ongoing Workflow Iterations per month",
      "Priority WhatsApp & Email Emergency Support",
      "Zero Downtime Guarantee on Active Pipelines"
    ]
  }
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "apex-medical",
    client: "Apex Medical & Physio Clinics",
    industry: "Healthcare & Patient Services",
    location: "Utrecht, Netherlands",
    badge: "Patient Scheduling & Intake",
    summary: "Automated WhatsApp patient reminders, intake form parsing, and calendar synchronization across 3 clinic locations.",
    metrics: {
      hoursSaved: "32 hrs / week",
      roiPayback: "18 days",
      throughputIncrease: "+84% intake speed"
    },
    challenge: "Clinic staff spent 4+ hours daily manually messaging patients, confirming bookings, chasing missing insurance documentation, and re-entering data into their electronic health records.",
    solution: "Sustainer Tech engineered an end-to-end automated intake pipeline linking WhatsApp Business API, encrypted intake forms, and automated doctor calendar slot allocation with SMS failover.",
    techStack: ["WhatsApp Business API", "Make.com", "Airtable", "Google Calendar", "Encrypted Form Webhooks"],
    quote: {
      text: "Our front desk staff went from drowning in booking phone calls to focusing 100% on patients walking through our doors. The $2,000 investment paid for itself before our first month was over.",
      author: "Dr. Marlene van Dijk",
      role: "Operations Director, Apex Medical Group"
    },
    image: caseStudyFirmImg
  },
  {
    id: "vanguard-logistics",
    client: "Vanguard Regional Freight BV",
    industry: "Supply Chain & Distribution",
    location: "Rotterdam, Netherlands",
    badge: "Manifest & Customs Parsing",
    summary: "Replaced manual PDF customs invoice entry with an automated OCR and dispatch pipeline for international shipments.",
    metrics: {
      hoursSaved: "45 hrs / week",
      roiPayback: "14 days",
      throughputIncrease: "99.8% error reduction"
    },
    challenge: "Freight coordinators were manually transcribing multi-page PDF bill of ladings into their internal warehouse management database, leading to frequent shipping errors and customs hold-ups.",
    solution: "We architected an autonomous parsing engine that extracts bill of lading line items, cross-checks VAT/EORI codes, alerts drivers via automated WhatsApp dispatch, and posts invoices to QuickBooks.",
    techStack: ["OCR Engine", "Zapier Enterprise", "QuickBooks Online", "Twilio WhatsApp", "PostgreSQL"],
    quote: {
      text: "We eliminated customs delays completely. What previously required two full-time clerks typing manifests now runs silently in under 6 seconds per shipment.",
      author: "Lars Lindqvist",
      role: "Head of Logistics, Vanguard Freight"
    },
    image: caseStudyDistributionImg
  },
  {
    id: "solaris-hvac",
    client: "Solaris Clean Energy & HVAC",
    industry: "Home Services & Contracting",
    location: "Eindhoven, Netherlands",
    badge: "Lead-to-Quote Automation",
    summary: "Instant lead qualification, automated quote calculation, and instant technician dispatch via WhatsApp within 45 seconds of website inquiry.",
    metrics: {
      hoursSaved: "28 hrs / week",
      roiPayback: "21 days",
      throughputIncrease: "+125% quote acceptance"
    },
    challenge: "Contractors lost 40% of residential solar leads because response times averaged 9 hours. Inquiries piled up overnight and weekend quotes were delayed until Monday afternoon.",
    solution: "Engineered an instant quote qualification bot on WhatsApp that asks 4 qualifying homeowner questions, computes an initial estimates formula, and schedules a technician visit directly in Google Calendar.",
    techStack: ["WhatsApp API", "Stripe Invoicing", "HubSpot CRM", "Make.com", "Typeform"],
    quote: {
      text: "Closing deals in contracting comes down to speed to lead. Sustainer Tech got our response time under one minute, 24/7. Our close rate skyrocketed.",
      author: "Bram Teunissen",
      role: "Managing Director, Solaris Clean Energy"
    },
    image: heroWorkspaceImg
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "lead-crm",
    title: "Lead Qualification & Automated CRM Pipeline",
    category: "Revenue & Sales Acceleration",
    headline: "Respond to every inbound customer within 60 seconds without lifting a finger.",
    description: "Capture inquiries from web forms, WhatsApp, Facebook, or email, enrich lead details with company data, score purchase intent, and route high-value deals directly to sales reps.",
    outcomes: [
      "Sub-minute response times 24/7/365",
      "Automatic lead deduplication & data enrichment",
      "Instant calendar booking links sent via WhatsApp & SMS",
      "Zero dropped leads during weekends or peak hours"
    ],
    commonIntegrations: ["HubSpot", "Pipedrive", "WhatsApp Business", "Calendly", "Typeform", "Make.com"],
    typicalTimeframe: "7–10 days"
  },
  {
    id: "invoicing-finance",
    title: "Invoicing, Payments & Bookkeeping Automation",
    category: "Financial Operations & Cash Flow",
    headline: "Get paid faster and eliminate hours spent on manual receipt entry and reconciliation.",
    description: "When a contract or milestone completes, generate verified invoices in QuickBooks or Xero, process deposits via Stripe, trigger payment reminder sequences, and reconcile bank feeds automatically.",
    outcomes: [
      "Zero manual invoice drafting or data re-entry",
      "Automatic gentle payment reminders via WhatsApp & Email",
      "Automated bank feed and expense categorizations",
      "Real-time cash flow synchronization across accounting tools"
    ],
    commonIntegrations: ["QuickBooks", "Xero", "Stripe", "DocuSign", "PandaDoc", "Airtable"],
    typicalTimeframe: "6–9 days"
  },
  {
    id: "whatsapp-dispatch",
    title: "WhatsApp Multi-Channel Customer Dispatch",
    category: "Customer Support & Direct Messaging",
    headline: "Turn WhatsApp into your business's highest-converting operational channel.",
    description: "Connect your official WhatsApp Business number directly to your internal operations. Provide automated appointment scheduling, order updates, document sharing, and smart FAQ resolution.",
    outcomes: [
      "Direct WhatsApp communication routed to the right team member",
      "Instant transactional receipt & booking confirmations",
      "Pre-filled interactive inquiry flows for quick answers",
      "Direct escalations to staff for VIP conversations"
    ],
    commonIntegrations: ["Meta WhatsApp Cloud API", "Zendesk", "Slack", "Google Sheets", "Twilio"],
    typicalTimeframe: "5–8 days"
  },
  {
    id: "ops-inventory",
    title: "Operations, Inventory & Vendor Sync",
    category: "Logistics & Supply Chain",
    headline: "Unify your inventory, order fulfillment, and supplier purchase orders across all channels.",
    description: "Keep stock counts, Shopify stores, ERP systems, and warehouse sheets perfectly in sync. Trigger automatic low-stock notifications and supplier reorders without human errors.",
    outcomes: [
      "Real-time synchronization across all sales channels",
      "Automated supplier purchase order generation upon threshold",
      "Automated shipping tracking updates sent to end clients",
      "Centralized master inventory database with zero duplicate entries"
    ],
    commonIntegrations: ["Shopify", "WooCommerce", "ShipStation", "Airtable", "Google Workspace"],
    typicalTimeframe: "8–12 days"
  },
  {
    id: "custom-api-webhooks",
    title: "Custom API & Legacy Software Bridges",
    category: "Custom Engineering",
    headline: "Connect legacy software, proprietary databases, and modern cloud applications.",
    description: "Many small businesses rely on legacy ERPs or industry-specific desktop software. We engineer resilient webhook microservices and API bridges so your systems communicate in real time.",
    outcomes: [
      "Bi-directional data flow between legacy systems and modern cloud",
      "Automated data extraction and daily backup routines",
      "Robust error-catching with automated retry mechanisms",
      "Secure encrypted endpoints compliant with European GDPR"
    ],
    commonIntegrations: ["Custom REST APIs", "Webhooks", "PostgreSQL", "n8n", "AWS Lambda", "Python"],
    typicalTimeframe: "10–14 days"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "Pricing & Scope",
    question: "What is included in the $2,000 setup fee?",
    answer: "The $2,000 package is an end-to-end implementation for your small business. It covers our initial operations audit, architecture design, complete development of your custom workflows (CRM sync, invoicing, WhatsApp dispatch, or inventory), rigorous testing, error-handling fail-safes, and 1-on-1 team training with recorded documentation."
  },
  {
    category: "Pricing & Scope",
    question: "What does the $250 monthly fee cover?",
    answer: "The $250/month fee keeps your automated operations running smoothly. It includes dedicated cloud server hosting, 24/7 uptime and webhook monitoring, proactive maintenance when third-party services update their APIs (like Meta or Stripe), minor adjustments as your business shifts, and direct emergency WhatsApp support with our senior automation engineers."
  },
  {
    category: "Implementation",
    question: "How long does a typical automation project take to go live?",
    answer: "Most small business implementations are fully built, tested, and live within 10 to 14 business days. We operate in structured sprints so your daily operations experience zero downtime during the transition."
  },
  {
    category: "Security & Compliance",
    question: "Is our client and business data safe and GDPR compliant?",
    answer: "Yes, 100%. Sustainer Tech is based in the European Union (Netherlands). We follow strict GDPR standards, employ bank-grade SSL/TLS 256-bit encryption for all webhook payloads, and never store your sensitive customer credentials or proprietary records on unapproved third-party servers."
  },
  {
    category: "Software Compatibility",
    question: "Do we have to abandon our existing tools like QuickBooks, HubSpot, or Gmail?",
    answer: "No. Our philosophy is to automate the tools you and your team already know and trust. We seamlessly connect your existing software stack (Gmail, WhatsApp, QuickBooks, Xero, HubSpot, Excel, Shopify, Stripe) so everything works together automatically."
  },
  {
    category: "Support & Changes",
    question: "What happens if one of our software providers changes their API?",
    answer: "This is exactly why our $250/month maintenance plan exists. APIs frequently update or deprecate endpoints. Our monitoring system catches discrepancies immediately, and our team patches your workflows before your daily operations ever experience a delay."
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Marlene van Dijk",
    company: "Apex Medical & Physio",
    role: "Director of Operations",
    quote: "Before Sustainer Tech, our clinic spent 30+ hours every week calling patients and chasing intake paperwork. Today, everything happens autonomously on WhatsApp. It has completely transformed our practice.",
    metric: "32 hrs saved/wk"
  },
  {
    name: "Lars Lindqvist",
    company: "Vanguard Regional Freight",
    role: "Head of Logistics",
    quote: "Transcribing shipping manifests manually was our biggest bottleneck. Sustainer Tech deployed an automated OCR and dispatch pipeline in under two weeks. Our error rate went to almost zero.",
    metric: "99.8% accuracy"
  },
  {
    name: "Bram Teunissen",
    company: "Solaris Clean Energy",
    role: "Managing Director",
    quote: "Our speed-to-lead dropped from 9 hours to under 45 seconds on WhatsApp. We closed an additional €42,000 in contracts in our first 60 days following launch.",
    metric: "+125% closing rate"
  }
];
