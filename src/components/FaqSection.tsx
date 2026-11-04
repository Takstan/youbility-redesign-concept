import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What government grants or tax credits are available for accessible renovations in Ontario?",
      answer: "In Ontario, homeowners and family caregivers can leverage two major programs: (1) The Ontario Seniors Home Safety Tax Credit, which provides a 25% tax credit on eligible expenses up to $10,000 (maximum $2,500 benefit), and (2) The Federal Home Accessibility Tax Credit (HATC), providing 15% on up to $20,000 (maximum $3,000 benefit). Depending on your project, you may also qualify for the March of Dimes Home and Vehicle Modification Program (HVMP) or Easter Seals grants. Youbility provides an itemized compliance receipt package specifically designed for your accountant."
    },
    {
      question: "How long does an accessible bathroom or roll-in shower renovation take?",
      answer: "A complete curbless roll-in bathroom renovation typically takes between 8 and 14 business days from demolition to final sealant. We maintain a strict project schedule and order all plumbing fixtures, linear trench drains, and custom glass partitions before demolition begins so work proceeds without mid-project delays."
    },
    {
      question: "Can my family remain living in the home during construction?",
      answer: "Yes, in the vast majority of residential projects, our clients remain comfortably at home. We implement commercial-grade dust barriers with zippered magnetic doors, floor protection throughout all traffic areas, and negative-air HEPA scrubbers to keep dust and noise contained to the work area. We also perform a thorough cleanup at the end of every work day."
    },
    {
      question: "Will accessible modifications make my home look clinical or lower resale value?",
      answer: "Quite the opposite. Youbility specializes in universal architectural design—we use high-end Italian porcelain, concealed structural grab rails that double as luxury towel bars, floating white oak vanities, and recessed LED niche lighting. Contemporary buyers and real estate appraisers view barrier-free curbless showers and zero-threshold transitions as premium architectural upgrades that appeal to every generation."
    },
    {
      question: "Do you handle City of Toronto building permits and architectural drawings?",
      answer: "Yes. Youbility is a full-service general contractor. When your project requires structural alterations (such as widening doorways through load-bearing walls or building exterior ramps and porch additions), our architectural design team prepares the code-compliant drawings, submits them to the local municipal building department, and schedules all official inspections."
    },
    {
      question: "What licenses and insurance coverage does Youbility hold?",
      answer: "Youbility carries comprehensive $5,000,000 commercial general liability insurance and is fully registered in good standing with the Workplace Safety and Insurance Board (WSIB). All our trade partners (master plumbers, licensed 309A electricians, and HVAC technicians) are certified in Ontario."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-[#C27D53] mb-3">
            CLEAR ANSWERS BEFORE YOU BEGIN
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C201D] tracking-tight leading-[1.15] mb-4">
            Questions? We've Got Answers.
          </h2>
          <p className="text-base text-[#57645B] leading-relaxed">
            Everything you need to know about accessible contracting, timelines, permits, and tax relief in Toronto & the GTA.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#E8E2D5] transition-colors shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 hover:bg-[#FAF8F5]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B3B2B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#1C201D]">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#F3EFE7] text-[#1B3B2B] flex items-center justify-center shrink-0 transition-transform duration-200">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-sm text-[#57645B] leading-relaxed border-t border-[#F3EFE7] animate-[fadeIn_0.2s_ease-out]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help notice */}
        <div className="mt-10 p-5 rounded-xl bg-[#F3EFE7] border border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#C27D53] shrink-0" />
            <span className="text-xs sm:text-sm text-[#3C463F] font-medium">
              Have a unique question regarding a specific medical equipment requirement or grant?
            </span>
          </div>
          <a
            href="tel:4168004740"
            className="text-xs font-bold text-[#1B3B2B] hover:text-[#C27D53] underline whitespace-nowrap"
          >
            Call our team: (416) 800-4740
          </a>
        </div>

      </div>
    </section>
  );
};
