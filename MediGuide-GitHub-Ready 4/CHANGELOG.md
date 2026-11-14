# MediGuide changelog

## 2026-11-13 — Plan better v2 (policy-specific)
- Rebuilt Plan better as a policy-specific benefits navigator across hospital stays, surgery, specialist visits, emergency care, medication, and outpatient/chronic care.
- Displays selected-plan annual limits, ward tier, deductible and co-insurance, plus plan-specific emergency, medicine and specialist-window terms.
- Adds illustrative S$10,000 eligible-bill patient/plan share calculations from the supplied deductible/co-insurance schedules, including MediShield Life's tiered deductible/co-insurance example and older-age thresholds where the PDF specifies them.
- Adds condition-specific benefit opportunities for cancer/CDL, heart-attack major-illness wording on Singlife, AIA psychiatry caps, kidney dialysis and CDMP/MediSave pathways, with eligibility caveats.
- Maps entered medicine names to likely treatment categories but does not claim the medicine is reimbursed; no advice to buy or change medication.
- Uses cost-first, coverage-first or balanced preference to add category-specific actions.
- Makes panel/non-panel distinctions explicit where the supplied summary states different limits/windows (including Raffles Private and HSBC Life Shield A).
- Adds per-plan source page references to Data.pdf and More data.pdf.
- Added Chronic kidney disease as a selectable health need for dialysis personalisation.
- Preserved Clerk, Gemini endpoint, current plan selection, profile storage, usage log and footer.

## Evidence limitation
The two PDFs supplied by the project owner are summary documents, not full policy contracts. This update does not claim live online insurer-contract or panel-directory verification. Do not treat illustrative patient shares as claims quotes or generalize them beyond their assumptions.

## 2026-11-14 — Footer and chatbot voice controls
- Updated the official contact email to mediguide.healthcare@gmail.com.
- Linked LinkedIn label “MediGuide Healthcare” to the supplied profile URL.
- Added browser speech recognition for dictating a question into the chatbot composer. Recognized words remain editable and are not sent until the user presses Send.
- Added per-answer read-aloud controls and an optional automatic read-aloud preference for new chatbot replies.
- Added graceful handling for unsupported browsers, denied microphone access, missing microphones, no-speech and speech-service/network errors.
