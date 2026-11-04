import React, { useState } from 'react';
import { Phone, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark in Space Grotesk */}
        <a 
          href="#" 
          className="font-heading text-2xl font-bold tracking-tight text-[#1B3B2B] hover:text-[#26523C] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          aria-label="Youbility Inc. Home"
        >
          <span className="w-3 h-3 rounded-sm bg-[#C27D53] inline-block" />
          <span>YOUBILITY</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#29302B]">
          <a href="#about" className="hover:text-[#1B3B2B] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            About
          </a>
          <a href="#services" className="hover:text-[#1B3B2B] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Services
          </a>
          <a href="#transformations" className="hover:text-[#1B3B2B] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Transformations
          </a>
          <a href="#process" className="hover:text-[#1B3B2B] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Process
          </a>
          <a href="#testimonials" className="hover:text-[#1B3B2B] hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Testimonials
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <a 
            href="tel:4168004740" 
            className="flex items-center gap-2 text-xs font-semibold text-[#1B3B2B] hover:text-[#C27D53] transition-colors whitespace-nowrap"
            aria-label="Call Youbility at 416-800-4740"
          >
            <Phone className="w-3.5 h-3.5 text-[#C27D53]" />
            <span>(416) 800-4740</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold tracking-wide text-[#FAF8F5] bg-[#1B3B2B] rounded-md hover:bg-[#12281D] hover:shadow-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Book Assessment</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold text-[#FAF8F5] bg-[#1B3B2B] rounded-md whitespace-nowrap"
          >
            Consultation
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C201D] hover:text-[#1B3B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D5] px-6 py-6 shadow-xl transition-all">
          <div className="flex flex-col gap-4 text-base font-medium text-[#1C201D]">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8E2D5]/60 hover:text-[#1B3B2B]"
            >
              About Youbility
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8E2D5]/60 hover:text-[#1B3B2B]"
            >
              Services & Modifications
            </a>
            <a 
              href="#transformations" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8E2D5]/60 hover:text-[#1B3B2B]"
            >
              Before & After Gallery
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8E2D5]/60 hover:text-[#1B3B2B]"
            >
              Our 4-Step Process
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#E8E2D5]/60 hover:text-[#1B3B2B]"
            >
              Client Reviews
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <a 
                href="tel:4168004740" 
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#1B3B2B] bg-[#F3EFE7] rounded-md"
              >
                <Phone className="w-4 h-4 text-[#C27D53]" />
                <span>Call (416) 800-4740</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-sm font-semibold text-[#FAF8F5] bg-[#1B3B2B] rounded-md text-center hover:bg-[#12281D]"
              >
                Book Free In-Home Assessment
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
