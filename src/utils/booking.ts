/**
 * Utilities for Youbility booking validation and tax credit / grant eligibility.
 */

export interface ConsultationRequest {
  fullName: string;
  phone: string;
  email: string;
  gtaLocation: string;
  projectType: string;
  timeline: string;
  notes?: string;
  hasSeniorOrDisabilityTaxCredit?: boolean;
  estimatedBudgetTier?: 'modest' | 'standard' | 'extensive';
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface TaxCreditEstimate {
  ontarioSeniorCredit: number; // Max $2,500 (25% of up to $10,000)
  federalHatcCredit: number; // Max $3,000 (15% of up to $20,000)
  totalEstimatedSavings: number;
  eligibleNotes: string;
}

export const GTA_SERVICE_REGIONS = [
  'City of Toronto (Downtown, Midtown, North York, Etobicoke, Scarborough)',
  'York Region (Markham, Richmond Hill, Vaughan)',
  'Peel Region (Mississauga, Brampton)',
  'Halton Region (Oakville, Burlington)',
  'Durham Region (Pickering, Ajax, Whitby, Oshawa)',
] as const;

export function validateConsultationForm(data: Partial<ConsultationRequest>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  const phoneClean = (data.phone || '').replace(/[\s\-\(\)\.]/g, '');
  if (!phoneClean || phoneClean.length < 10) {
    errors.phone = 'Please provide a valid 10-digit Canadian phone number.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.gtaLocation || data.gtaLocation.trim().length < 2) {
    errors.gtaLocation = 'Please select or enter your Toronto / GTA municipality.';
  }

  if (!data.projectType) {
    errors.projectType = 'Please select your primary renovation need.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Calculates estimated Canadian and Ontario accessibility tax credit savings.
 * Ontario Senior Home Safety Tax Credit: 25% of up to $10,000 = max $2,500.
 * Federal Home Accessibility Tax Credit (HATC): 15% of up to $20,000 = max $3,000.
 */
export function calculateTaxCreditBenefits(estimatedExpense: number, isSeniorOrDisabled = true): TaxCreditEstimate {
  if (!isSeniorOrDisabled || estimatedExpense <= 0) {
    return {
      ontarioSeniorCredit: 0,
      federalHatcCredit: 0,
      totalEstimatedSavings: 0,
      eligibleNotes: 'Standard renovation deductions or medical expense tax credits may still apply.',
    };
  }

  const ontarioEligible = Math.min(estimatedExpense, 10000);
  const ontarioSeniorCredit = Math.round(ontarioEligible * 0.25);

  const federalEligible = Math.min(estimatedExpense, 20000);
  const federalHatcCredit = Math.round(federalEligible * 0.15);

  const totalEstimatedSavings = ontarioSeniorCredit + federalHatcCredit;

  return {
    ontarioSeniorCredit,
    federalHatcCredit,
    totalEstimatedSavings,
    eligibleNotes: 'Eligible for Ontario Senior Home Safety Tax Credit & Federal HATC.',
  };
}
