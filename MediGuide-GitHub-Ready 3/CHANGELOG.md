# MediGuide — residency and comparison update

## Changes
- Added an initial question, "Are you a Singapore citizen or Permanent Resident?" (Citizens / PRs / No), also directly editable from Profile.
- Added MediShield Life to the existing insurance catalogue; shown as the national basic health insurance scheme, not an ordinary private Integrated Shield Plan.
- Replaced "Select as my plan" actions with "See comparison" without changing your subscribed plan.
- Added a read-only two-column coverage comparison: selected plan on the light blue left and current subscribed plan on the darker blue right, across all six coverage categories.
- Preserved Clerk authentication and browser-local profile storage.

## Limitations
Plan coverage values remain unverified unless the underlying data contains verified benefits. Comparison rows intentionally say "Needs verification" where policy information is unavailable. This is not a validated insurer benefits comparison or claim determination.

## Deploy
Extract the ZIP. Deploy its contents to Cloudflare Pages with index.html at the root. Keep your existing Clerk publishable key in config.js and configure the site's domain in your Clerk dashboard. Your previous browser-local answers are retained on the same website origin and browser if you deploy over the existing project.


## 2026-10-28 — Personalization revision
- Nine new age bands and ten additional/selectable condition and care categories.
- Optional medication names input and class-to-condition interpretation (not drug reimbursement assertion).
- Emergency, medicine and outpatient wording from More data.pdf added for all listed plans, distinguishing base vs rider.
- Aligned plan comparison rows across the two colored columns.
- Existing Clerk sign-in and local-only profile storage retained.

## 2026-11-13
- Added personalised `How to use my plan better` page with category-level guidance for hospital stays, surgery, specialists, emergency care, medication and outpatient care.
- Added optional self-reported usage log to personalise follow-up suggestions; records are local to the current browser profile.
- Replaced footer with founder and contact information supplied by the user.
- Gemini chat now defaults to `gemini-3.5-flash` and retries `gemini-3.8-flash` only when the first model returns 404.
