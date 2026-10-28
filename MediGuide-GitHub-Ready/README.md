

### October profile upgrade
- Onboarding remains one question at a time. Once an age-range answer exists, Profile is a summary with direct editing.
- Clerk sign-in/sign-up redirects to the site root after completion.
- **Clerk organization setup cannot be disabled from frontend code alone.** In Clerk Dashboard, open your MediGuide application, then Organizations settings and disable organization creation/organization onboarding for this personal-consumer app. If your dashboard uses a different layout, find the setting controlling organizations and invitations. No organization is necessary for an individual MediGuide account.
- Insurance coverage and numeric premium data remain unverified. Do not publish fabricated prices or eligibility statements. Current comparisons are informational only.
- No encrypted or remote profile database is included; user profiles are local to the browser.

## Cost estimation
Open **Estimate my costs** after selecting an age band and a named policy. `cost-engine.js` provides source-reported ranges from Data.pdf, with no invented illness-related premium loading. See `COST-METHODOLOGY.md` for important conditions and limitations. These are browser-side calculations; no private backend is included.


## Gemini chatbot
This edition replaces the chatbot OpenAI backend with Google Gemini Developer API. See **CHATBOT-SETUP.md**. Deploy via Wrangler or Git-connected Pages so Functions are included.
