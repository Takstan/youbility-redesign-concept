import React from 'react';
import { Home, ShieldCheck, TrendingUp, HeartHandshake } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      step: '01',
      title: 'Aging in Place with Dignity',
      icon: Home,
      description: 'Stay comfortably in the home and neighborhood you love for decades to come, avoiding the high cost and emotional disruption of moving to an assisted facility.',
      stat: '90% of Seniors',
      statLabel: 'prefer to stay in their own home as they age'
    },
    {
      step: '02',
      title: 'Everyday Safety & Fall Prevention',
      icon: ShieldCheck,
      description: 'Over 80% of senior home injuries occur in standard bathrooms or entry stairs. Curbless entries, reinforced walls, and textured surfaces remove hidden danger.',
      stat: 'Zero Step-Overs',
      statLabel: 'eliminating the leading cause of residential falls'
    },
    {
      step: '03',
      title: 'Architectural Beauty & Resale Value',
      icon: TrendingUp,
      description: 'Universal design does not mean clinical aesthetics. We integrate warm oak, brushed bronze, and premium porcelain that elevate your home’s market appraisal.',
      stat: '100% Integrated',
      statLabel: 'luxury aesthetic with zero medical look'
    },
    {
      step: '04',
      title: 'Family Independence & Freedom',
      icon: HeartHandshake,
      description: 'Restore the confidence to bathe, cook, and move independently without having to ask for assistance, giving peace of mind to children and caregivers.',
      stat: 'Total Privacy',
      statLabel: 'regained personal freedom in daily routines'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C27D53] mb-3">
            WHY ACCESSIBLE RENOVATION MATTERS
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C201D] tracking-tight leading-[1.15] mb-5">
            Small Changes. Life-Changing Differences.
          </h2>
          <p className="text-base sm:text-lg text-[#57645B] leading-relaxed">
            An accessible home is more than a renovation. It's an investment in comfort, independence, and the freedom to enjoy everyday moments.
          </p>
        </div>

        {/* 4 Cards with subtle lift and connected visual rhythm */}
        <div className="relative">
          {/* Subtle connecting line across desktop */}
          <div 
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#E8E2D5] -translate-y-12 z-0" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 border border-[#E8E2D5] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header with step & icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#F3EFE7] group-hover:bg-[#1B3B2B] text-[#1B3B2B] group-hover:text-white transition-colors flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-heading text-sm font-bold text-[#C27D53]">
                        {benefit.step}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-[#1C201D] mb-3 group-hover:text-[#1B3B2B] transition-colors leading-snug">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#57645B] leading-relaxed mb-6">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Quantitative proof stat */}
                  <div className="pt-4 border-t border-[#F3EFE7]">
                    <div className="text-sm font-extrabold text-[#1B3B2B] font-heading">
                      {benefit.stat}
                    </div>
                    <div className="text-[11px] text-[#76867B] leading-tight mt-0.5">
                      {benefit.statLabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
