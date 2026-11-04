import React from 'react';
import { ArrowRight, Compass, ShieldAlert, Sparkles, Check } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large rounded image with overlapping card (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[3/4] shadow-2xl border border-[#E8E2D5] bg-[#F3EFE7] group">
                <img
                  src="./images/about_accessible_living_1793373401539.jpg"
                  alt="Bright sunlit Toronto home with wide barrier-free doorways and level hardwood flooring"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12281D]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Small overlapping card reading "Designed for Every Stage of Life" with upward hover float */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md border border-[#E8E2D5] rounded-2xl p-5 shadow-2xl max-w-[260px] transition-transform duration-300 hover:-translate-y-3 cursor-default">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C27D53] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C27D53]" />
                  <span>Universal Living</span>
                </div>
                <h3 className="font-heading text-base font-bold text-[#1C201D] leading-snug">
                  Designed for Every Stage of Life.
                </h3>
                <p className="text-xs text-[#57645B] mt-1.5 leading-relaxed">
                  Seamless transitions, zero trip edges, and timeless architectural materials.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Content with ample negative space (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 lg:pl-6">
            
            <div className="text-xs font-bold uppercase tracking-widest text-[#C27D53] mb-3">
              MORE THAN RENOVATION
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C201D] tracking-tight leading-[1.15] mb-6">
              A Home That Works for You, Today and Tomorrow.
            </h2>

            <p className="text-base sm:text-lg text-[#3C463F] leading-relaxed mb-6 font-medium">
              Your home should adapt to your life, not the other way around. At Youbility, 
              we combine thoughtful accessibility solutions with quality craftsmanship to create 
              spaces where everyone feels comfortable, confident, and independent.
            </p>

            <p className="text-sm sm:text-base text-[#57645B] leading-relaxed mb-8">
              Too often, accessibility modifications feel clinical, sterile, or like an afterthought. 
              We believe safety and elegance belong together. From curbless Italian-tiled showers and 
              discreet architectural handrails to gently graded garden ramps and widened doorways, 
              we build environments that feel like luxury interior design while delivering total freedom of movement.
            </p>

            {/* Three key pillars */}
            <div className="space-y-3.5 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-sm text-[#1C201D]">Preserve Independence & Dignity: </span>
                  <span className="text-sm text-[#57645B]">Perform daily routines safely without relying on constant assistance.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-sm text-[#1C201D]">Turnkey General Contracting: </span>
                  <span className="text-sm text-[#57645B]">Architectural drawings, Ontario Building Code permits, plumbing, electrical, and finishing trades under one roof.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1B3B2B]/10 text-[#1B3B2B] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-sm text-[#1C201D]">Ontario Tax Credit & Grant Optimization: </span>
                  <span className="text-sm text-[#57645B]">We itemize every receipt so you can claim the full Ontario Senior Safety and Federal HATC credits.</span>
                </div>
              </div>
            </div>

            {/* CTA: Meet Youbility */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#FAF8F5] bg-[#1B3B2B] hover:bg-[#12281D] rounded-md transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Meet Youbility & Consult Our Team</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#services"
                className="text-sm font-semibold text-[#C27D53] hover:text-[#A8643C] underline underline-offset-4 transition-colors"
              >
                Explore All Services →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
