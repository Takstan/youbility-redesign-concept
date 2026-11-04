import React, { useState } from 'react';
import { ClipboardCheck, PencilRuler, HardHat, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProcessProps {
  onOpenBooking: () => void;
}

export const ProcessTimeline: React.FC<ProcessProps> = ({ onOpenBooking }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Free In-Home or Virtual Assessment',
      icon: ClipboardCheck,
      headline: 'We listen to your daily challenges and measure your space',
      description: 'An accessibility specialist visits your GTA home (or meets virtually) to assess physical mobility needs, evaluate doorway widths, calculate wheelchair turning radiuses, and review specific safety priorities.',
      deliverables: [
        'Detailed on-site spatial measurement',
        'Physical hazard & trip risk audit',
        'Preliminary scope & timeline review',
        'Discussion of government grants & tax credits'
      ]
    },
    {
      step: '02',
      title: 'Architectural Accessibility Plan & 3D Review',
      icon: PencilRuler,
      headline: 'Custom blueprints that fuse luxury design with barrier-free compliance',
      description: 'Our design team prepares architectural drawings, selects materials (curbless drains, slip-resistant Italian porcelain, designer grab bars), and submits all necessary City of Toronto building permits.',
      deliverables: [
        '3D photorealistic renderings of your new space',
        'Exact Ontario Building Code compliance review',
        'Itemized fixed-price quotation with zero hidden fees',
        'Itemized tax-credit receipt structure'
      ]
    },
    {
      step: '03',
      title: 'Clean & Respectful Construction',
      icon: HardHat,
      headline: 'Experienced trades who treat your home with utmost care',
      description: 'Our certified builders, licensed plumbers, and electricians execute the renovation with sealed dust containment barriers, HEPA filtration, and daily end-of-day cleanups to keep your household running smoothly.',
      deliverables: [
        'Full floor and furniture dust protection',
        'Structural backing installation rated for 350+ lbs',
        'Licensed trade sign-offs (plumbing & electrical)',
        'Weekly project milestones and personal manager contact'
      ]
    },
    {
      step: '04',
      title: 'Final Walkthrough & Equipment Handover',
      icon: Sparkles,
      headline: 'Thorough safety testing and ongoing peace of mind',
      description: 'We test every feature together with you and your family—checking water temperature regulators, grab bar firmness, and ramp slopes—ensuring you feel 100% confident, safe, and comfortable.',
      deliverables: [
        'Hands-on demonstration of all mobility features',
        'Official City of Toronto final inspection sign-off',
        '5-Year Youbility Craftsmanship Warranty documentation',
        'Completed tax credit documentation package'
      ]
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C27D53] mb-3">
            HOW IT WORKS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C201D] tracking-tight leading-[1.15] mb-5">
            Your Renovation Journey, Made Simple.
          </h2>
          <p className="text-base sm:text-lg text-[#57645B] leading-relaxed">
            From your first conversation to the finished space, we're here to make your renovation experience clear, comfortable, and stress-free.
          </p>
        </div>

        {/* Timeline with vertical progress line */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical progress line */}
          <div 
            className="absolute left-6 sm:left-8 top-8 bottom-8 w-1 bg-[#E8E2D5] -translate-x-1/2 z-0"
            aria-hidden="true"
          >
            <div 
              className="w-full bg-[#1B3B2B] transition-all duration-500 ease-out"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="space-y-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isCurrent = activeStep === index;
              const isPassed = activeStep >= index;

              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`relative pl-14 sm:pl-20 p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? 'bg-white border-[#1B3B2B] shadow-xl ring-1 ring-[#1B3B2B]/20'
                      : 'bg-white/60 hover:bg-white border-[#E8E2D5] shadow-sm'
                  }`}
                >
                  {/* Step Circle Marker */}
                  <div 
                    className={`absolute left-6 sm:left-8 top-8 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-[#FAF8F5] flex items-center justify-center font-heading font-bold text-xs sm:text-sm transition-colors ${
                      isPassed ? 'bg-[#1B3B2B] text-white shadow-md' : 'bg-[#E8E2D5] text-[#57645B]'
                    }`}
                  >
                    {item.step}
                  </div>

                  {/* Step Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1C201D]">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#F3EFE7] text-[#C27D53]">
                      Stage {item.step}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#1B3B2B] mb-3">
                    {item.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#57645B] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Deliverables tags */}
                  <div className="pt-4 border-t border-[#F3EFE7] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3C463F]">
                    {item.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C27D53] shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Action beneath process */}
          <div className="mt-12 text-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-[#1B3B2B] hover:bg-[#12281D] rounded-md shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Schedule Step 1: Free In-Home Assessment</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
