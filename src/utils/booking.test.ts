import test from 'node:test';
import assert from 'node:assert/strict';
import { validateConsultationForm, calculateTaxCreditBenefits } from './booking.ts';

test('validateConsultationForm catches empty or incomplete submissions', () => {
  const result = validateConsultationForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.email);
  assert.ok(result.errors.gtaLocation);
  assert.ok(result.errors.projectType);
});

test('validateConsultationForm accepts valid Canadian GTA submissions', () => {
  const validData = {
    fullName: 'Eleanor Vance',
    phone: '(416) 555-0199',
    email: 'eleanor.vance@example.ca',
    gtaLocation: 'North York, ON',
    projectType: 'roll-in-shower',
    timeline: 'immediate',
  };
  const result = validateConsultationForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('calculateTaxCreditBenefits computes correct maximums for Ontario and Federal HATC credits', () => {
  // Test with $25,000 renovation:
  // Ontario cap: $10,000 * 25% = $2,500
  // Federal cap: $20,000 * 15% = $3,000
  // Total: $5,500
  const maxResult = calculateTaxCreditBenefits(25000, true);
  assert.equal(maxResult.ontarioSeniorCredit, 2500);
  assert.equal(maxResult.federalHatcCredit, 3000);
  assert.equal(maxResult.totalEstimatedSavings, 5500);

  // Test with modest $6,000 renovation:
  // Ontario: $6,000 * 25% = $1,500
  // Federal: $6,000 * 15% = $900
  // Total: $2,400
  const modestResult = calculateTaxCreditBenefits(6000, true);
  assert.equal(modestResult.ontarioSeniorCredit, 1500);
  assert.equal(modestResult.federalHatcCredit, 900);
  assert.equal(modestResult.totalEstimatedSavings, 2400);

  // Ineligible test
  const ineligible = calculateTaxCreditBenefits(15000, false);
  assert.equal(ineligible.totalEstimatedSavings, 0);
});
