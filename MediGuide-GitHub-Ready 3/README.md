# MediGuide — GitHub / Cloudflare Pages package

This is the current browser-based MediGuide application. It preserves Clerk authentication, the six-category coverage view, plan comparison, cost estimator, Gemini chatbot Pages Function, and user-local profile/usage history.

## Latest change: Plan better v2

The **Plan better** page has been rebuilt as a plan-specific benefits navigator. It shows the selected plan's tier, annual claim limit, deductible and co-insurance; a worked S$10,000 eligible-bill example where the supplied schedule supports it; exact plan-specific emergency/medication/specialist/outpatient terms; condition-linked benefits; and concrete use actions. It distinguishes benefits described in the supplied summaries from unknown terms and from separate public healthcare financing routes.

The page now uses the user's cost-vs-coverage preference to prioritise category actions and uses the self-reported usage log when available. Missing usage records are not interpreted as unused benefits.

## Evidence and important limitation

The policy details are transcribed from the project owner's two PDFs: `Data.pdf` (18 pages) and `More data.pdf` (7 pages). They are policy summaries, not complete insurer contracts. No live online insurer-contract or provider-panel verification was performed in this update. See `PLAN-BETTER-METHODOLOGY.md` for plan-by-plan evidence pages, algorithms, assumptions and safety boundaries.

The examples are not claim quotes. “As charged” remains subject to deductible, co-insurance, annual limits, sublimits, ward/provider rules, exclusions, riders and insurer adjudication. This site cannot say a claim is approved or an item is guaranteed free.

## Deploy to the existing GitHub + Cloudflare Pages project

1. Extract the ZIP. It contains this folder named `MediGuide-GitHub-Ready 2/`.
2. In the existing GitHub repository, replace the **contents** of the existing `MediGuide-GitHub-Ready 2/` folder with the files in this folder. Do not create a second nested folder.
3. Commit to `main`. Cloudflare should automatically deploy.
4. Keep the existing Cloudflare root directory `MediGuide-GitHub-Ready 2`, no build command, and build output directory `.`.
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


## November 19, 2026 — UX, language and speech update

- Plan better now prioritises up to three short actions per category based on the selected plan, benefit terms, health conditions, medication names, cost/coverage preference and user-entered use logs.
- Simplified mode reduces detail on the Plan better and coverage pages while retaining the key next actions and important cost warnings.
- Decorative glyphs were removed from the primary navigation, home feature cards and coverage category headings; text alignment is now consistent and uses the navy theme. Footer typography is larger and navy.
- Added English, Simplified Chinese and Tamil selection in the top bar. Common interface text and Plan better actions have bundled translations; insurer wording is kept in English where a checked translation is not available. Gemini chatbot replies follow the selected language.
- Speech recognition follows the selected language. Text-to-speech chooses the best matching installed browser/OS voice (preferring enhanced/natural voice names) and uses slower, more conversational pacing. Voice quality still depends on the device's installed voices.

See `PLAN-BETTER-ACTION-RULES.md` and `LANGUAGE-AND-SPEECH.md` for rules and limits.


### Language selector

The language selector switches user-facing interface copy among English, Simplified Chinese and Tamil. It covers navigation, questionnaire labels and options, health-condition names, plan and coverage descriptions, cost explanations, status labels, recommendation text, chatbot controls, and footer copy. Formal insurer/product names, generic medicine names, necessary policy abbreviations and currency figures may remain in their recognised form for accurate identification; surrounding explanatory content is translated. User-entered medication names and notes are not rewritten.

### Complete language selection

The selected language applies to user-facing interface text, questionnaire conditions/options, plan and coverage explanations, costs, statuses, recommendations, help content, voice controls, and chatbot replies. English, Simplified Chinese and Tamil are supported. Formal insurer/product names, generic medicine names, necessary policy abbreviations and figures may remain in their recognised form for accurate identification; surrounding explanation is translated. User-entered medicine names and personal notes are not altered. Translations are explanatory and are not certified legal translations.


## Dynamic full-sentence localisation (v9)

English, Simplified Chinese and Tamil are supported. For Chinese and Tamil, the app first applies its reviewed local glossary and then sends remaining user-visible English text fragments in small authenticated batches to the server-side `/api/translate` Cloudflare Pages Function. The function verifies the signed-in Clerk session and uses the existing `GEMINI_API_KEY` Pages secret; the key is never exposed to the browser. The translator preserves insurer/product names, generic medicine names, necessary Singapore healthcare abbreviations, dates, figures and currency amounts while translating the surrounding sentences. Translation results are cached in memory for the current page session. If the translation service is unavailable or rate-limited, glossary translations remain, and some untranslated text may remain until retry/reload.

The translation endpoint processes visible text fragments, which can include health-profile selections and user-entered usage notes currently shown on screen. This processing is performed by the configured Gemini API account. Do not enter information you do not want processed by that service.
