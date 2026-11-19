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


## 2026-11-14 — Verified footer and more visible voice controls
- Confirmed the footer email is mediguide.healthcare@gmail.com and LinkedIn label/link are MediGuide Healthcare / https://www.linkedin.com/in/mediguide-healthcare-b54a45434.
- Reworked the chatbot controls into a visible voice panel: Speak your question, Read latest answer, Stop audio, and auto-read toggle.
- Kept per-answer Read aloud controls.
- Updated build marker to voice-footer-controls-v2-2026-11-14 for deployment verification.


## 2026-11-19 — Plan guidance, simplified mode, languages and speech
- Plan Better action lists are now shorter and plan-, condition-, medicine- and usage-specific. They avoid recommending extra medication or unverified providers.
- Simplified mode hides secondary policy-detail panels while retaining core actions and important limitations.
- Added English, Simplified Chinese and Tamil selectors and local UI translation dictionaries. Chat requests now pass the selected language so Gemini can answer in that language.
- Speech recognition follows the selected language. Speech synthesis selects the best matching installed system voice, favouring enhanced/natural voice names, and uses more conversational pacing.
- Removed decorative glyphs from the main navigation and category headings; improved navigation alignment and footer typography.


## 2026-11-19 — Personal recommendations and accessibility
- Replaced long generic Plan better action paragraphs with up to three concise actions for each category, conditioned on the chosen plan, ward tier, policy limits, health conditions, medication matches and usage records.
- Cost and complete-coverage preferences change the priority and wording of the top actions.
- Simplified mode hides technical fact panels and secondary evidence while retaining direct actions and cost warnings.
- Removed decorative symbols from navigation, home feature cards and coverage category headings; aligned text consistently.
- Added English / Simplified Chinese / Tamil selector. Common UI and selected action guidance are translated; exact policy wording is retained in English where no reviewed translation is available. Gemini chatbot answers follow selected language.
- Speech input recognition follows selected language; speech synthesis selects the best installed matching voice and uses conversational pacing.
- Footer uses larger dark-navy text.
