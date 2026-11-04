import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Phone, MapPin, Calendar, Clock, AlertCircle } from 'lucide-react';
import { validateConsultationForm, GTA_SERVICE_REGIONS, ConsultationRequest } from '../utils/booking.ts';

export const ConsultationBooking: React.FC = () => {
  const [formData, setFormData] = useState<Partial<ConsultationRequest>>({
    fullName: '',
    phone: '',
    email: '',
    gtaLocation: '',
    projectType: 'accessible-bathroom',
    timeline: '1-3-months',
    notes: '',
    hasSeniorOrDisabilityTaxCredit: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateConsultationForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="consultation" className="py-20 lg:py-28 bg-[#12281D] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle background glow */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C27D53 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Value Proposition & Reassurance */}
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-widest text-[#DDA37D] mb-3">
              START YOUR TRANSFORMATION
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
              Let's Build a Home Where You Can Move Freely.
            </h2>

            <p className="text-sm sm:text-base text-[#D8CEAF] leading-relaxed mb-8">
              Book a complimentary in-home or virtual assessment. Our accessibility specialists will evaluate 
              your space, listen to your routines, and deliver an exact, transparent renovation blueprint with zero sales pressure.
            </p>

            {/* Direct Reassurances */}
            <div className="space-y-4 mb-10 text-xs sm:text-sm text-white/90">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C27D53] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Zero Obligation, Fixed-Price Quotes: </strong>
                  Every proposal is fully itemized with no hidden surprises or mid-project price spikes.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C27D53] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Tax Credit & Grant Review: </strong>
                  We review your eligibility for up to $5,500 in Ontario & Federal safety tax credits during your assessment.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C27D53] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Rapid Response for Urgent Care: </strong>
                  If a loved one is being discharged from the hospital, let us know for expedited priority scheduling.
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#DDA37D]">
                Prefer to speak directly with our team?
              </div>
              <a
                href="tel:4168004740"
                className="flex items-center gap-3 text-lg font-bold font-heading text-white hover:text-[#DDA37D] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#1B3B2B] flex items-center justify-center text-[#DDA37D]">
                  <Phone className="w-4 h-4" />
                </div>
                <span>(416) 800-4740</span>
              </a>
              <div className="text-xs text-white/60">
                Mon - Fri: 8:00 AM – 6:00 PM EST · Weekend Emergency Assessments Available
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C201D] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
              
              {isSubmitted ? (
                <div className="text-center py-8 animate-[fadeIn_0.3s_ease-out]">
                  <div className="w-16 h-16 rounded-full bg-[#1B3B2B] text-[#DDA37D] border border-[#26523C] flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                    Assessment Request Received!
                  </h3>
                  <p className="text-sm text-[#D8CEAF] max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. A Youbility accessibility 
                    specialist will contact you at <strong className="text-white">{formData.phone}</strong> within 1 business day 
                    to confirm your preferred time and review your project specifications.
                  </p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs text-white/80 space-y-1.5 mb-8">
                    <div><span className="text-white/50">Location:</span> {formData.gtaLocation}</div>
                    <div><span className="text-white/50">Requested Scope:</span> {formData.projectType}</div>
                    <div><span className="text-white/50">Timeline:</span> {formData.timeline}</div>
                    <div><span className="text-white/50">Estimated Tax Credit:</span> Eligible for Ontario Seniors Safety Package</div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        gtaLocation: '',
                        projectType: 'accessible-bathroom',
                        timeline: '1-3-months',
                        notes: '',
                        hasSeniorOrDisabilityTaxCredit: true,
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                      Request Your Free In-Home Assessment
                    </h3>
                    <p className="text-xs text-[#D8CEAF]/80 mt-1">
                      Serving Toronto, North York, Markham, Mississauga, Etobicoke, and all GTA regions.
                    </p>
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                      Primary Renovation Need *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'accessible-bathroom', label: 'Curbless Roll-In Shower / Bath' },
                        { id: 'ramps-lifts', label: 'Exterior Ramp or Porch Lift' },
                        { id: 'doorways-flooring', label: 'Door Widening & Level Floors' },
                        { id: 'barrier-free-kitchen', label: 'Accessible Kitchen Remodel' },
                        { id: 'full-home-reno', label: 'Full Barrier-Free Home Renovation' },
                        { id: 'commercial-aoda', label: 'Commercial AODA Upgrade' },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className={`p-3 rounded-lg border flex items-center gap-2 cursor-pointer transition-colors ${
                            formData.projectType === item.id
                              ? 'bg-[#1B3B2B] border-[#C27D53] text-white font-semibold'
                              : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={item.id}
                            checked={formData.projectType === item.id}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="sr-only"
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Contact Fields Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Margaret Henderson"
                        value={formData.fullName || ''}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C27D53] ${
                          errors.fullName ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. (416) 555-0144"
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C27D53] ${
                          errors.phone ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. margaret@example.ca"
                        value={formData.email || ''}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C27D53] ${
                          errors.email ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/90 mb-1.5">
                        GTA Municipality or Postal Code *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. North York, M2N or Etobicoke"
                        value={formData.gtaLocation || ''}
                        onChange={(e) => setFormData({ ...formData, gtaLocation: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-white/5 border text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C27D53] ${
                          errors.gtaLocation ? 'border-red-500' : 'border-white/15'
                        }`}
                      />
                      {errors.gtaLocation && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.gtaLocation}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1.5">
                      Estimated Project Urgency / Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#29302B] border border-white/15 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#C27D53]"
                    >
                      <option value="immediate">Immediate Safety Concern / Hospital Discharge (Within 2 Weeks)</option>
                      <option value="1-3-months">Next 1 to 3 Months</option>
                      <option value="3-6-months">3 to 6 Months</option>
                      <option value="planning">Initial Budget Planning & Information</option>
                    </select>
                  </div>

                  {/* Notes / Specific Needs */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-1.5">
                      Specific Mobility Needs or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Wheelchair user needs 36-inch clearance, or need grab bars and curbless shower before winter..."
                      value={formData.notes || ''}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/15 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#C27D53]"
                    />
                  </div>

                  {/* Tax Credit Checkbox */}
                  <label className="flex items-center gap-3 text-xs text-[#D8CEAF] cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={formData.hasSeniorOrDisabilityTaxCredit}
                      onChange={(e) => setFormData({ ...formData, hasSeniorOrDisabilityTaxCredit: e.target.checked })}
                      className="w-4 h-4 rounded text-[#1B3B2B] focus:ring-[#C27D53] bg-[#29302B] border-white/20"
                    />
                    <span>Please include free eligibility calculation for Ontario Seniors Safety & Federal HATC tax credits</span>
                  </label>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-lg bg-[#C27D53] hover:bg-[#A8643C] text-white font-heading font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Submitting Details...' : 'Request Free In-Home Assessment'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-white/50 text-center pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#DDA37D]" />
                    <span>Your privacy is 100% protected. No high-pressure sales calls, ever.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
