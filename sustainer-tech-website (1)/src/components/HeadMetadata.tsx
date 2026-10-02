import React, { useEffect } from 'react';
import { AGENCY_CONFIG } from '../data/agencyData.ts';

export interface PageMetadataConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
  canonicalPath: string;
  structuredData?: Record<string, any>;
}

export const TAB_METADATA_MAP: Record<string, PageMetadataConfig> = {
  home: {
    title: "Sustainer Tech - Small Business Operations Automation Agency",
    description: "Scale your operations without adding payroll. Sustainer Tech delivers custom small business automation builds for $2,000 and 24/7 cloud hosting for $250/mo.",
    keywords: "business automation agency, small business automation, make.com workflows, zapier agency, CRM automation, whatsapp business automation, Netherlands automation agency",
    canonicalPath: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Sustainer Tech",
      "description": "Small business operations automation agency providing custom pipeline engineering and 24/7 sustained cloud hosting.",
      "url": "https://sustainertech.eu",
      "email": AGENCY_CONFIG.email,
      "telephone": AGENCY_CONFIG.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Amsterdam",
        "addressCountry": "NL"
      },
      "priceRange": "$$$",
      "offers": {
        "@type": "Offer",
        "name": "Small Business Automation Sprint",
        "price": "2000",
        "priceCurrency": "USD",
        "description": "Complete operations automation build for $2,000 and $250/month ongoing cloud maintenance."
      }
    }
  },
  solutions: {
    title: "Operations Automation Solutions | Sustainer Tech",
    description: "Explore custom workflows for lead-to-CRM sync, QuickBooks and Stripe auto-invoicing, WhatsApp customer dispatch, and multi-channel inventory pipelines.",
    keywords: "lead qualification automation, stripe invoicing automation, quickbooks webhook, whatsapp business dispatch, inventory synchronization",
    canonicalPath: "/#solutions",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Business Process Automation",
      "provider": {
        "@type": "Organization",
        "name": "Sustainer Tech"
      },
      "areaServed": "Global",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Automation Pipelines",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lead & CRM Pipeline" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Invoicing & Payment Sync" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp Multi-Channel Dispatch" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inventory & Logistics Sync" } }
        ]
      }
    }
  },
  "case-studies": {
    title: "Case Studies & Automation ROI Proof | Sustainer Tech",
    description: "See how European small businesses saved 30+ hours weekly and reached payback in under 3 weeks with Sustainer Tech automated pipelines.",
    keywords: "automation case studies, small business ROI, clinic booking automation, logistics OCR parsing, solar lead qualification",
    canonicalPath: "/#case-studies"
  },
  pricing: {
    title: "Transparent Pricing: $2,000 Setup + $250/mo | Sustainer Tech",
    description: "No unpredictable agency hourly rates. Complete small business operations build for $2,000 and ongoing 24/7 cloud hosting and monitoring for $250/month.",
    keywords: "automation agency pricing, small business automation cost, fixed price workflow automation, monthly maintenance plan",
    canonicalPath: "/#pricing",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "PriceSpecification",
      "price": "2000",
      "priceCurrency": "USD",
      "description": "Fixed $2,000 one-time setup sprint plus $250 per month cloud hosting and maintenance."
    }
  },
  about: {
    title: "About Us & 4-Stage Sprint Methodology | Sustainer Tech",
    description: "Learn how Sustainer Tech helps small businesses run like modern tech enterprises with European GDPR compliance and our 14-day deployment sprint.",
    keywords: "about sustainer tech, European automation consultancy, 14-day automation sprint, GDPR compliant automation",
    canonicalPath: "/#about"
  },
  contact: {
    title: "Contact Sustainer Tech | Free 20-Min Automation Audit",
    description: "Chat directly on WhatsApp at +31 970 1026 7490 or email contact@sustainertech.eu to schedule your free small business operations review.",
    keywords: "contact sustainer tech, whatsapp automation consultation, free business automation audit, Amsterdam automation agency",
    canonicalPath: "/#contact",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Sustainer Tech",
      "url": "https://sustainertech.eu/#contact",
      "mainEntity": {
        "@type": "Organization",
        "name": "Sustainer Tech",
        "email": AGENCY_CONFIG.email,
        "telephone": AGENCY_CONFIG.phone
      }
    }
  }
};

/**
 * Helper function to dynamically update or create a meta tag by name or property
 */
export function updateMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

/**
 * Helper function to dynamically update or create canonical link tag
 */
export function updateCanonicalUrl(url: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

/**
 * Helper function to inject or update JSON-LD Schema structured data
 */
export function updateStructuredData(schemaData?: Record<string, any>) {
  const SCRIPT_ID = 'sustainer-structured-data';
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;

  if (!schemaData) {
    if (script) {
      script.remove();
    }
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaData);
}

/**
 * Core helper that executes all document head mutations for a given tab
 */
export function setDocumentMetadataForTab(tabKey: string) {
  const config = TAB_METADATA_MAP[tabKey] || TAB_METADATA_MAP.home;

  // 1. Update Document Title
  document.title = config.title;

  // 2. Standard Search Metadata
  updateMetaTag('name', 'description', config.description);
  if (config.keywords) {
    updateMetaTag('name', 'keywords', config.keywords);
  }

  // 3. OpenGraph Social Tags
  updateMetaTag('property', 'og:title', config.ogTitle || config.title);
  updateMetaTag('property', 'og:description', config.ogDescription || config.description);
  updateMetaTag('property', 'og:type', 'website');
  updateMetaTag('property', 'og:site_name', 'Sustainer Tech');

  // Compute canonical & OG URL
  const origin = window.location.origin;
  const canonicalUrl = `${origin}${config.canonicalPath}`;
  updateMetaTag('property', 'og:url', canonicalUrl);
  updateCanonicalUrl(canonicalUrl);

  // 4. Twitter / X Social Cards
  updateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateMetaTag('name', 'twitter:title', config.ogTitle || config.title);
  updateMetaTag('name', 'twitter:description', config.ogDescription || config.description);

  // 5. Schema.org JSON-LD Structured Data
  updateStructuredData(config.structuredData);
}

/**
 * React Component that listens to currentTab changes and automatically updates document head
 */
export const HeadMetadata: React.FC<{ currentTab: string }> = ({ currentTab }) => {
  useEffect(() => {
    setDocumentMetadataForTab(currentTab);
  }, [currentTab]);

  return null;
};
