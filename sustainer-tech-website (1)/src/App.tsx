import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppFloatingWidget } from './components/WhatsAppFloatingWidget.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { HeadMetadata } from './components/HeadMetadata.tsx';

import { HomePage } from './pages/HomePage.tsx';
import { SolutionsPage } from './pages/SolutionsPage.tsx';
import { CaseStudiesPage } from './pages/CaseStudiesPage.tsx';
import { PricingPage } from './pages/PricingPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  // Sync with browser hash if present (e.g. #pricing, #solutions)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const validTabs = ['home', 'solutions', 'case-studies', 'pricing', 'about', 'contact'];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans-body selection:bg-teal-500 selection:text-white bg-grid-pattern-light relative">
      {/* Dynamic SEO & Head Metadata Sync */}
      <HeadMetadata currentTab={currentTab} />

      {/* Subtle top architectural ambient aura */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-gradient-to-b from-teal-500/8 via-cyan-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Top Bar Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={handleTabChange}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <HomePage
            onOpenBooking={() => setIsBookingOpen(true)}
            setCurrentTab={handleTabChange}
          />
        )}
        {currentTab === 'solutions' && (
          <SolutionsPage onOpenBooking={() => setIsBookingOpen(true)} />
        )}
        {currentTab === 'case-studies' && (
          <CaseStudiesPage onOpenBooking={() => setIsBookingOpen(true)} />
        )}
        {currentTab === 'pricing' && (
          <PricingPage onOpenBooking={() => setIsBookingOpen(true)} />
        )}
        {currentTab === 'about' && (
          <AboutPage onOpenBooking={() => setIsBookingOpen(true)} />
        )}
        {currentTab === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        setCurrentTab={handleTabChange}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Floating Direct WhatsApp Widget */}
      <WhatsAppFloatingWidget />

      {/* Interactive Discovery Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
