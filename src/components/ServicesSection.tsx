import React, { useState } from 'react';
import { ArrowUpRight, Check, X, Shield, Clock, Ruler, Sparkles } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: () => void;
}

interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  ctaText: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  details: string[];
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const services: ServiceDetail[] = [
    {
      id: 'accessibility',
      number: '01',
      title: 'Accessible Home Modifications',
      headline: 'Barrier-Free Living Tailored to Your Physical Needs',
      description: 'Wheelchair-accessible bathrooms, roll-in showers, doorway widening, ramps, porch lifts, and accessible kitchens.',
      ctaText: 'Explore Accessibility Solutions',
      image: '/src/assets/images/hero_accessible_interior_1793373399971.jpg',
      features: [
        'Curbless roll-in showers with linear trench drains',
        'Reinforced backing for 350+ lb grab bars & teak fold-down seats',
        'Doorway widening (32" to 36" clear openings & pocket doors)',
        'Low-incline architectural exterior ramps & vertical platform lifts',
        'Wheelchair-accessible kitchens with roll-under sinks & pull-down cabinetry'
      ],
      specs: [
        { label: 'Typical Timeline', value: '7 to 18 Business Days' },
        { label: 'OBC Standard', value: 'Barrier-Free Section 3.8 & OBC 9.5' },
        { label: 'Tax Credit', value: '100% Eligible (Up to $5,500 rebate)' }
      ],
      details: [
        'We measure turning radiuses (60" turning diameter for wheelchairs and walkers) to guarantee seamless mobility.',
        'Thermostatic anti-scald digital shower valves ensure constant safe water temperatures.',
        'Non-slip textured porcelain floor tiles (DCOF > 0.42 wet rating) prevent slips and falls.'
      ]
    },
    {
      id: 'residential',
      number: '02',
      title: 'Residential Construction',
      headline: 'Custom Home Renovations, Additions & Remodeling',
      description: 'Home renovations, additions, basement remodeling, and improvements tailored to each household.',
      ctaText: 'View Residential Services',
      image: '/src/assets/images/about_accessible_living_1793373401539.jpg',
      features: [
        'Open-concept main floor layouts eliminating tight pinch points',
        'In-law suite & ground floor primary bedroom conversions',
        'Custom architectural carpentry & seamless floor transitions',
        'Basement finishing & legal secondary suite additions',
        'Full structural beam installations & load-bearing wall removals'
      ],
      specs: [
        { label: 'Typical Timeline', value: '3 to 8 Weeks' },
        { label: 'Permits', value: 'Complete City of Toronto Drawings & Permits' },
        { label: 'Warranty', value: '5-Year Structural & Workmanship Warranty' }
      ],
      details: [
        'End-to-end design and build: from 3D architectural renderings to final paint and hardware.',
        'Dedicated dust-control barriers, HEPA air scrubbers, and daily cleanups so you can live at home comfortably during construction.',
        'High-end materials chosen for long-term durability, luxury appearance, and low maintenance.'
      ]
    },
    {
      id: 'commercial',
      number: '03',
      title: 'Commercial Accessibility Solutions',
      headline: 'AODA Compliance for Offices, Clinics & Retail Spaces',
      description: 'Accessibility upgrades and construction solutions for offices, retail spaces, and other commercial properties.',
      ctaText: 'Explore Commercial Solutions',
      image: '/src/assets/images/service_exterior_ramp_1793373402669.jpg',
      features: [
        'AODA-compliant commercial washroom retrofits & automatic door operators',
        'Exterior commercial concrete & steel access ramps with dual handrails',
        'Elevator & vertical platform lift enclosures for multi-level buildings',
        'Accessible customer service counters & tactile walking surface indicators',
        'Medical clinic, dental office & physical therapy clinic fit-outs'
      ],
      specs: [
        { label: 'Compliance', value: 'AODA & Ontario Building Code Part 3' },
        { label: 'Schedule', value: 'After-hours / Weekend scheduling available' },
        { label: 'Insurance', value: '$5,000,000 Commercial Liability & WSIB' }
      ],
      details: [
        'Avoid costly compliance penalties and open your doors to all customers and employees with full AODA certification.',
        'Off-peak and overnight scheduling to prevent any disruption to your active business hours.',
        'Direct coordination with city inspectors and accessibility compliance officers.'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C27D53] mb-3">
            WHAT YOUBILITY CAN TRANSFORM
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C201D] tracking-tight leading-[1.15] mb-5">
            Spaces Designed for Living Without Limits.
          </h2>
          <p className="text-base sm:text-lg text-[#57645B] leading-relaxed">
            From small accessibility improvements to complete renovations, we create solutions that make everyday living easier, safer, and more comfortable.
          </p>
        </div>

        {/* 3 Service Cards in Asymmetric / Stacked Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-[#E8E2D5] hover:border-[#C27D53] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
            >
              <div>
                {/* Image with slight zoom on hover */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F3EFE7]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Clean numerical index badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#1B3B2B] font-heading font-bold text-xs px-2.5 py-1 rounded shadow-sm">
                    {service.number}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-heading text-2xl font-bold text-[#1C201D] group-hover:text-[#1B3B2B] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#57645B] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2.5 text-xs text-[#3C463F] border-t border-[#F3EFE7] pt-5">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C27D53] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action link */}
              <div className="px-7 pb-7 pt-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-3 px-4 rounded-lg bg-[#FAF8F5] group-hover:bg-[#1B3B2B] text-[#1B3B2B] group-hover:text-white border border-[#E8E2D5] group-hover:border-[#1B3B2B] text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer"
                >
                  <span>{service.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-[fadeIn_0.2s_ease-out]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative bg-[#FAF8F5] rounded-2xl max-w-2xl w-full border border-[#E8E2D5] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#57645B] hover:text-[#1C201D] hover:bg-[#F3EFE7] transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold uppercase tracking-wider text-[#C27D53] mb-1">
              Service Overview · {selectedService.number}
            </div>

            <h3 id="modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-[#1C201D] mb-3">
              {selectedService.title}
            </h3>

            <p className="text-sm sm:text-base text-[#3C463F] leading-relaxed mb-6 font-medium">
              {selectedService.headline}
            </p>

            <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 border border-[#E8E2D5]">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 bg-white p-4 rounded-xl border border-[#E8E2D5]">
              {selectedService.specs.map((spec, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-[11px] uppercase tracking-wider text-[#76867B] font-medium">{spec.label}</div>
                  <div className="text-xs font-bold text-[#1B3B2B] mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Detailed Capabilities */}
            <div className="mb-6">
              <h4 className="font-heading text-sm font-bold text-[#1C201D] uppercase tracking-wider mb-3">
                Key Deliverables & Specifications
              </h4>
              <ul className="space-y-2 text-sm text-[#3C463F]">
                {selectedService.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C27D53] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering considerations */}
            <div className="mb-8 p-4 rounded-xl bg-[#F3EFE7] border border-[#E8E2D5] space-y-2 text-xs text-[#57645B]">
              {selectedService.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#1B3B2B] font-bold">·</span>
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenBooking();
                }}
                className="flex-1 py-3 px-6 text-sm font-semibold text-white bg-[#1B3B2B] hover:bg-[#12281D] rounded-lg transition-colors text-center cursor-pointer"
              >
                Request Free Quote for this Service
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-6 text-sm font-semibold text-[#57645B] hover:text-[#1C201D] border border-[#D8CEAF] rounded-lg text-center"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
