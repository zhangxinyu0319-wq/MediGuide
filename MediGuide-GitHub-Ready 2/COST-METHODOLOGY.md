# MediGuide cost methodology (prototype)

## Source and scope
Premium tables in `cost-engine.js` are transcribed from user-provided `Data.pdf` (18 pp.). They have **not** been independently verified with insurers. Web lookup was unavailable. These are illustrative annual **base-plan** amounts as shown in the source, often including MediShield Life; they must not be added to MediShield Life a second time. Some figures are ranges or approximations in the source. Neither riders, subsidies, applicable MediSave payments, taxes nor cash portion are computed.

## Inputs and calculation
The questionnaire records age in a band, not exact age next birthday. The estimator selects all published premium age brackets intersecting that band. The minimum and maximum published amounts form the displayed interval. If part of the selected user age band is not in the source tables, display **incomplete age range**; never extrapolate premiums to unsupported ages. Annual premium / 12 yields a monthly **equivalent**, not a confirmed billing frequency. For Singapore citizenship and PRs, MediShield Life may be relevant; for non-residents, national-plan eligibility is flagged. No numeric residency subsidy is applied.

## Health conditions / underwriting
No premium is multiplied by a condition-based factor. Actual insurer acceptance, pre-existing condition exclusions, underwriting and rider eligibility cannot be inferred. Users need individual insurer confirmation; an existing plan may differ from today's new-business terms.

## Hospital-bill what-if
A user enters an eligible hospital bill and the correct deductible (mandatory before computation), and co-insurance share. The calculation assumes all charges are eligible and applies `min((bill - deductible) * (1 - coinsurance), annualClaimLimit)` to estimate payment, with the remainder as patient share. This is *not* a real claim simulation: it does not model claim sub-limits, pro-ration, panel restrictions, riders, exclusions, deductibles already met, policy-specific tiered co-insurance, MediShield Life coordination or out-of-pocket caps. MediShield Life's tiered co-insurance especially cannot be modeled using the generic 10% default. Use it only as an educational scenario.

## Current infrastructure
This is still a static Cloudflare Pages website with Clerk authentication and browser-local profile storage. There is **no backend** calculating or persisting medical cost data. `cost-engine.js` is a separate auditable JavaScript calculation module in the browser. Production deployment with sensitive health data requires a secured backend, database, access controls and privacy review.
