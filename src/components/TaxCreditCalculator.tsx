import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, CheckCircle, Info } from 'lucide-react';
import { calculateTaxCreditBenefits } from '../utils/booking.ts';

interface TaxCreditProps {
  onOpenBooking: () => void;
}

export const TaxCreditCalculator: React.FC<TaxCreditProps> = ({ onOpenBooking }) => {
  const [budget, setBudget] = useState(15000);
  const [isSeniorOrDisabled, setIsSeniorOrDisabled] = useState(true);
  const budgetInputId = useId();

  const estimate = calculateTaxCreditBenefits(budget, isSeniorOrDisabled);
  const netEstimatedCost = Math.max(0, budget - estimate.totalEstimatedSavings);

  return (
    <section className="py-16 lg:py-20 bg-[#12281D] text-[#FAF8F5] border-b border-[#26523C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#DDA37D] mb-3">
              <Calculator className="w-4 h-4 text-[#C27D53]" />
              <span>Government Grant & Tax Credit Guidance</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.2] mb-4">
              Save Up to $5,500 on Your Accessible Home Renovation.
            </h2>

            <p className="text-sm sm:text-base text-[#D8CEAF] leading-relaxed mb-6">
              Both the Ontario Provincial Government and the Canadian Federal Government offer dedicated, 
              non-refundable tax credits to help seniors (65+) and individuals living with disabilities 
              make their homes safer and more accessible.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-white/90 mb-8">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle className="w-4 h-4 text-[#C27D53] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Ontario Seniors Home Safety Tax Credit: </strong>
                  Claim 25% of eligible renovation expenses up to $10,000 (maximum benefit of $2,500).
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle className="w-4 h-4 text-[#C27D53] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Federal Home Accessibility Tax Credit (HATC): </strong>
                  Claim 15% of eligible expenses up to $20,000 (maximum benefit of $3,000).
                </div>
              </div>
            </div>

            <p className="text-xs text-white/60 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>Youbility provides itemized compliance documentation to make tax filing seamless.</span>
            </p>
          </div>

          {/* Right Column: Interactive Slider Widget */}
          <div className="lg:col-span-6">
            <div className="bg-[#1C201D] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between mb-4">
                <label htmlFor={budgetInputId} className="text-xs font-semibold uppercase tracking-wider text-[#DDA37D]">
                  Estimated Renovation Budget
                </label>
                <span className="font-heading text-2xl font-bold text-white tabular-nums">
                  ${budget.toLocaleString()} CAD
                </span>
              </div>

              {/* Slider Input */}
              <input
                id={budgetInputId}
                type="range"
                min={3000}
                max={40000}
                step={1000}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-[#26523C] rounded-lg appearance-none cursor-pointer accent-[#C27D53] mb-6"
              />

              {/* Toggle eligibility checkbox */}
              <label className="flex items-center gap-3 text-xs text-white/90 mb-6 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={isSeniorOrDisabled}
                  onChange={(e) => setIsSeniorOrDisabled(e.target.checked)}
                  className="w-4 h-4 rounded text-[#1B3B2B] focus:ring-[#C27D53] bg-[#29302B] border-white/20"
                />
                <span>Homeowner or resident is age 65+ or eligible for Disability Tax Credit</span>
              </label>

              {/* Results Breakdown */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white/5 border border-white/10 mb-6 text-center">
                <div>
                  <div className="text-[11px] text-white/60 uppercase tracking-wide">Ontario Credit</div>
                  <div className="text-lg font-bold font-heading text-[#DDA37D] tabular-nums mt-0.5">
                    +${estimate.ontarioSeniorCredit.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] text-white/60 uppercase tracking-wide">Federal HATC</div>
                  <div className="text-lg font-bold font-heading text-[#DDA37D] tabular-nums mt-0.5">
                    +${estimate.federalHatcCredit.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Big Total Savings & Net Outlay */}
              <div className="p-4 rounded-xl bg-[#1B3B2B] border border-[#26523C] flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-semibold text-white/80 uppercase">Total Estimated Savings</div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white tabular-nums">
                    ${estimate.totalEstimatedSavings.toLocaleString()} CAD
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-white/60 uppercase">Net Estimated Cost</div>
                  <div className="text-sm sm:text-base font-bold text-[#FAF8F5] tabular-nums">
                    ~${netEstimatedCost.toLocaleString()} CAD
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 px-6 rounded-lg bg-[#C27D53] hover:bg-[#A8643C] text-white text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Custom Quote & Grant Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
