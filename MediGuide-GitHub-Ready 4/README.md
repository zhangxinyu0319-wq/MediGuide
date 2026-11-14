# MediGuide — GitHub / Cloudflare Pages package

This is the current browser-based MediGuide application. It preserves Clerk authentication, the six-category coverage view, plan comparison, cost estimator, Gemini chatbot Pages Function, and user-local profile/usage history.

## Latest change: Plan better v2

The **Plan better** page has been rebuilt as a plan-specific benefits navigator. It shows the selected plan's tier, annual claim limit, deductible and co-insurance; a worked S$10,000 eligible-bill example where the supplied schedule supports it; exact plan-specific emergency/medication/specialist/outpatient terms; condition-linked benefits; and concrete use actions. It distinguishes benefits described in the supplied summaries from unknown terms and from separate public healthcare financing routes.

The page now uses the user's cost-vs-coverage preference to prioritise category actions and uses the self-reported usage log when available. Missing usage records are not interpreted as unused benefits.

## Evidence and important limitation

The policy details are transcribed from the project owner's two PDFs: `Data.pdf` (18 pages) and `More data.pdf` (7 pages). They are policy summaries, not complete insurer contracts. No live online insurer-contract or provider-panel verification was performed in this update. See `PLAN-BETTER-METHODOLOGY.md` for plan-by-plan evidence pages, algorithms, assumptions and safety boundaries.

The examples are not claim quotes. “As charged” remains subject to deductible, co-insurance, annual limits, sublimits, ward/provider rules, exclusions, riders and insurer adjudication. This site cannot say a claim is approved or an item is guaranteed free.

## Deploy to the existing GitHub + Cloudflare Pages project

1. Extract the ZIP. It contains this folder named `MediGuide-GitHub-Ready/`.
2. In the existing GitHub repository, replace the **contents** of the existing `MediGuide-GitHub-Ready/` folder with the files in this folder. Do not create a second nested folder.
3. Commit to `main`. Cloudflare should automatically deploy.
4. Keep the existing Cloudflare root directory `MediGuide-GitHub-Ready`, no build command, and build output directory `.`.
5. The `functions/api/chat.js` file must stay under `functions/api/` for the Gemini chatbot. Keep `GEMINI_API_KEY` as a Cloudflare secret, and keep `CLERK_ISSUER` configured.

No Gemini key, Clerk setting or domain change is required for the Plan better page update.

## Data / privacy

Clerk manages sign-in. Questionnaire profiles and usage logs in this edition are stored in browser local storage, associated with the signed-in Clerk user ID; they do not automatically sync across devices. The chatbot sends user-typed messages and limited selected-plan context to Gemini. Do not enter NRIC or unnecessary identifying medical details.

### Chatbot voice controls (added 14 Nov 2026)
- Use **Speak** beside the chatbot message box to dictate a question. Review/edit the recognized transcript, then press **Send**; speech recognition never submits automatically.
- Use **Read aloud** on any assistant answer, or enable **Read new replies aloud** to speak new answers automatically.
- Voice input uses the browser Web Speech Recognition API where supported. Browser support varies; if unavailable or microphone permission is denied, users can continue typing.
- Speech recognition may be processed by the browser's speech service. MediGuide sends only the final text question to its chat endpoint after the user presses Send. Read-aloud uses the device/browser speech synthesis engine.
- The app is served over HTTPS, which is required by modern browsers for microphone permissions. Users must allow microphone access.
