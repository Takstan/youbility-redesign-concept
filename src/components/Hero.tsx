import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#E8E2D5]">
      {/* Subtle architectural grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1B3B2B 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (58% desktop split - 7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C27D53] mb-4">
              <span>Toronto & GTA Specialists</span>
              <span aria-hidden="true">·</span>
              <span>Accessible Architecture</span>
              <span aria-hidden="true">·</span>
              <span>15+ Years</span>
            </div>

            {/* Main Headline revealing line by line with Space Grotesk */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1C201D] tracking-tight leading-[1.12] mb-6">
              <span className="block animate-[fadeInUp_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                Spaces Designed for
              </span>
              <span className="block text-[#1B3B2B] animate-[fadeInUp_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                Living Without Limits.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#3C463F] leading-relaxed max-w-2xl mb-8">
              Youbility transforms homes across Toronto and the Greater Toronto Area into 
              safe, beautiful, and fully barrier-free spaces. We blend master craftsmanship with 
              thoughtful accessibility, empowering you to live confidently, comfortably, and independently.
            </p>

            {/* Action Buttons & Micro-guarantee */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold tracking-wide text-[#FAF8F5] bg-[#1B3B2B] hover:bg-[#12281D] rounded-md shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Book Free In-Home Assessment</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#transformations"
                className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-[#1B3B2B] hover:text-[#C27D53] border border-[#D8CEAF] hover:border-[#C27D53] rounded-md bg-[#FAF8F5] transition-colors duration-200 text-center"
              >
                View Real Transformations
              </a>
            </div>

            {/* Regional Trust markers */}
            <div className="pt-6 border-t border-[#E8E2D5] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#57645B]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C27D53]" />
                <span>$5M Commercial Liability & WSIB Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1B3B2B]" />
                <span>Ontario Building Code & AODA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C27D53]" />
                <span>Serving all 25 GTA Municipalities</span>
              </div>
            </div>

          </div>

          {/* Right Column (42% desktop split - 5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Visual Container with subtle scale on entrance */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[5/4] shadow-xl border border-[#E8E2D5] bg-[#F3EFE7] group">
                <img
                  src="/src/assets/images/hero_accessible_interior_1793373399971.jpg"
                  alt="Luxury barrier-free accessible bathroom with curbless shower and warm oak vanity in Toronto home"
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* Small overlapping badge featuring 15+ years of expertise */}
              <div className="absolute -bottom-6 -left-6 sm:-left-8 bg-[#FAF8F5] border border-[#E8E2D5] rounded-xl p-4 shadow-xl flex items-center gap-3 max-w-[240px] animate-[fadeIn_0.9s_ease-out_forwards]">
                <div className="w-12 h-12 rounded-lg bg-[#1B3B2B] text-[#FAF8F5] flex flex-col items-center justify-center font-heading font-bold shrink-0">
                  <span className="text-lg leading-none">15+</span>
                  <span className="text-[9px] uppercase tracking-wider text-[#DDA37D]">Years</span>
                </div>
                <div>
                  <h2 className="text-xs font-bold text-[#1C201D] font-heading">Trusted Expertise</h2>
                  <p className="text-[11px] text-[#57645B] leading-tight mt-0.5">
                    Over 450+ barrier-free projects across the GTA
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Thin scroll indicator gently moving downward */}
        <div className="mt-16 flex justify-center">
          <a
            href="#trust"
            className="flex flex-col items-center gap-1.5 text-xs font-medium text-[#76867B] hover:text-[#1B3B2B] transition-colors focus:outline-none"
            aria-label="Scroll to trust credentials"
          >
            <span>Explore Credentials</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#C27D53]" />
          </a>
        </div>

      </div>
    </section>
  );
};
