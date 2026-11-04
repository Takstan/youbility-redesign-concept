/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustStrip } from './components/TrustStrip.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { BeforeAfterSlider } from './components/BeforeAfterSlider.tsx';
import { BenefitsSection } from './components/BenefitsSection.tsx';
import { ProcessTimeline } from './components/ProcessTimeline.tsx';
import { TaxCreditCalculator } from './components/TaxCreditCalculator.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ConsultationBooking } from './components/ConsultationBooking.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const scrollToBooking = useCallback(() => {
    const el = document.getElementById('consultation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Focus on first form input after scroll
      setTimeout(() => {
        const input = el.querySelector('input') as HTMLInputElement | null;
        if (input) {
          input.focus();
        }
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C201D] font-sans selection:bg-[#1B3B2B] selection:text-[#FAF8F5]">
      {/* Navigation Header */}
      <Navbar onOpenBooking={scrollToBooking} />

      <main className="flex-1">
        {/* 1. Hero Section (60/40 Split, 15+ years badge, line-by-line reveal) */}
        <Hero onOpenBooking={scrollToBooking} />

        {/* 2. Trust Strip (Animated counter, WSIB, Insurance, OBC compliance) */}
        <TrustStrip />

        {/* 3. About Section (Homes built around people, overlapping card) */}
        <AboutSection onOpenBooking={scrollToBooking} />

        {/* 4. Services Section (Accessible Modifications, Residential, Commercial AODA) */}
        <ServicesSection onOpenBooking={scrollToBooking} />

        {/* 5. Before & After Transformation Slider (Interactive draggable comparison) */}
        <BeforeAfterSlider />

        {/* 6. Benefits Section (Small changes, life-changing differences) */}
        <BenefitsSection />

        {/* 7. Process Timeline (4-step progressive timeline with filled progress line) */}
        <ProcessTimeline onOpenBooking={scrollToBooking} />

        {/* 8. Ontario Senior Home Safety & Federal HATC Tax Credit Estimator */}
        <TaxCreditCalculator onOpenBooking={scrollToBooking} />

        {/* 9. Testimonials (Real People. Meaningful Transformations.) */}
        <TestimonialsSection />

        {/* 10. FAQ Section (Accordion with common concerns & tax credit guidance) */}
        <FaqSection />

        {/* 11. Final Consultation & Booking Lead Capture */}
        <ConsultationBooking />
      </main>

      {/* 12. Footer (GTA coverage, license, WSIB, hours, emergency contact) */}
      <Footer />
    </div>
  );
}
