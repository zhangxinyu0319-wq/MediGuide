# MediGuide Plan better — policy-specific action engine (v2)

## Goal
Turn the selected plan and the user's stated profile into contract-led benefit explanations and actionable service-use guidance. This is not a claims adjudicator, doctor, broker, provider-panel lookup or promise that an insurer will pay.

## Evidence base used in this build

This version is grounded in the two policy-summary PDFs uploaded by the project owner:

- `Data.pdf` (18 pages): plan identity/tier, annual limits, ward benefits, surgery, deductible/co-insurance and premium schedule. Sections: MediShield Life (p.1); AIA (pp.2–3); Great Eastern (pp.4–5); Income Enhanced IncomeShield (pp.6–8); Prudential (pp.9–10); Singlife (pp.11–13); Raffles (pp.14–15); HSBC Life (pp.16–18).
- `More data.pdf` (7 pages): emergency pathways, inpatient/outpatient medication, CDL/non-CDL cancer-drug restrictions, specialist windows and condition-specific outpatient therapies. Sections: MediShield Life/CDMP (p.1); AIA (p.2); Great Eastern (pp.3–4); Income (p.4); Prudential and Singlife (pp.5–6); Raffles and HSBC (p.7).

These are owner-supplied summaries of policy terms, not complete policy contracts. No live online insurer-contract verification was performed for this update. The app must not label these as current/officially verified contracts. It labels them as terms transcribed from the supplied policy summaries.

## Inputs
- Selected plan ID and its tier, annual limit, deductible, co-insurance, six category summaries and supplemental emergency/medication/outpatient terms.
- Health conditions, age range, residency, medication names, visit frequency and stated preference.
- User-entered healthcare-use log (category, month, note and patient-paid amount). It is not insurer claims data and currently stays in browser storage.

## Recommendation logic

1. **Resolve the selected plan.** If no plan is selected, show a neutral prompt and no plan-specific claim statement.
2. **Resolve evidence per category.** Read the selected plan's plan-specific fields. A category without an explicit term is labelled “not established in the supplied summary”; no inference from another insurer's plan is allowed.
3. **Match profile to named benefit pathways.**
   - Cancer history → MOH Cancer Drug List / non-CDL rider conditions specific to the selected plan.
   - Heart attack/coronary history → Singlife specified major-illness benefit only if that plan is selected; otherwise explain that routine cardiology visits are not shown as a separate allowance.
   - Mental-health condition → AIA Gold Max A/B psychiatry caps only when the matching AIA plan is selected.
   - Kidney disease → MediShield Life dialysis cap or Income Preferred dialysis wording only where that exact plan is selected.
   - Chronic conditions on the supplied CDMP list → show MediSave/CDMP as a separate financing route, never as private IP reimbursement.
   - Medication strings → map medicine to a possible treatment class for navigation only. A match does not establish diagnosis, indication, or reimbursement.
4. **Generate concrete next steps.** Explain which ward tier, claim cap, deductible, co-insurance, time window, rider and provider pathway the supplied schedule describes. Recommend staying within the eligible ward tier where medically appropriate, using a listed panel/restructured route where the data explicitly gives better terms, and keeping dates/documents for eligible linked care.
5. **Calculate a bill illustration only when the source provides deductible and co-insurance.** For most IP base plans this build illustrates an S$10,000 fully eligible bill using the plan-tier deductible (normally S$3,500 for private/Class A, S$2,500 for B1, and S$2,000 for Singlife Plan 2 per source) plus 10% co-insurance. MediShield Life illustration uses its B2/C deductible choices and tiered 10%/5%/3% co-insurance bands. It explicitly assumes every dollar is eligible and does not model pro-rating, service sublimits, MediSave, subsidies, riders, age/ward exceptions or claim adjudication. It is not a quotation.
6. **Distinguish payable, excluded and not established.** “As charged” is not free; deductibles, co-insurance, annual limits, exclusions and benefit-specific caps remain. An item omitted from the supplied summary is not asserted to be covered or excluded unless the summary explicitly says so.
7. **Use usage records carefully.** Repeated recorded costs prompt a reconciliation against deductible, co-insurance, exclusion or timing. No local log entry is described as “not used”; it is described as “not recorded”.
8. **Preference changes prioritisation, not facts.** Cost-first emphasizes ward/tier fit, eligible panel use, patient-share formula and avoiding non-covered extras. Coverage-first surfaces defined high-limit/specialty/rider-dependent benefits. Balanced gives both.

## Specific documented examples encoded
- MediShield Life: annual limit S$200,000; B2/C daily ward caps and fixed surgery table; ambulance/evacuation exclusion; dialysis S$1,100/month; cancer services S$4,500/year (S$9,000 for multiple primary cancers) and CDL limits by drug/indication; CDMP/MediSave is distinct from insurance reimbursement.
- AIA Gold Max A/B: hospital tiers and annual limits; A has up to 13-month panel specialist window vs 100 days non-panel; B 100 days; psychiatry up to S$5,000 (A) / S$4,000 (B) per policy year; Plan B non-CDL cancer drug exclusion as stated in supplied summary.
- Great Eastern P Plus: 180/365-day panel vs 90/180-day non-panel pre/post windows; non-CDL cancer drug treatment rider-dependent. A Plus: public restructured Class A outpatient follow-up terms.
- Income Preferred: 180/365-day pre/post; CTGTP S$250,000/treatment; proton beam S$100,000/year; dialysis as charged in summary; non-CDL S$15,000/month is rider-dependent. Advantage/Basic CTGTP limits S$150,000/S$100,000 per treatment.
- PRUShield Premier/Plus: 180/365 days; Standard 90/180 days; non-CDL cancer drugs rider-dependent where stated.
- Singlife Plan 1/2: 180/365-day windows; specified major-illness benefit up to S$150,000/S$100,000 per year respectively (subject to definition); Plan 1 non-CDL S$10,000/month is rider-dependent.
- Raffles Private: panel/non-panel annual limit difference; 180-day panel pre / 365-day post window; non-CDL S$5,000/year rider-dependent.
- HSBC Life Shield A: panel/restructured vs non-panel limits and windows; outpatient dementia allowance S$500/year; non-CDL cancer drug S$30,000/month requires Enhanced Care II rider according to supplied summary.

## Safety constraints
- Do not recommend buying additional medicines, increasing quantities, changing doses or replacing a prescribed medicine. Cost-saving medication guidance is limited to discussing a clinician-approved generic equivalent.
- Do not name a hospital/clinic as “panel” unless a dated insurer directory for the exact plan confirms it. The current dataset has no live provider-panel feed.
- Do not say a user “does not need to pay” unless the policy terms explicitly establish zero patient share for that exact service; these summaries generally include deductibles/co-insurance.
- Pre-existing conditions do not automatically mean covered or excluded. Underwriting, exclusions and issue date are policy-specific.
- Do not infer that an unused benefit exists from absence of a usage log. The page says “potentially relevant”, not “unused”.
- The two PDFs have not been independently checked against insurer contracts as at 13 Nov 2026. Before production launch, obtain complete current policy contracts, product summaries, rider wordings and dated panel lists for every plan, then attach clause/page citations and effective dates to each fact.
