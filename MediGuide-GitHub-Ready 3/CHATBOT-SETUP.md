# MediGuide Chatbot — Gemini free-tier deployment

This release swaps the **OpenAI API** for the **Google Gemini Developer API**. No OpenAI key is needed. The browser still calls `/api/chat`; the server-side Cloudflare Pages Function verifies Clerk JWTs, reads the curated policy summaries, calls Gemini and returns the answer.

## Is Gemini free?

Google AI Studio / Gemini Developer API has offered a **free tier** for selected models including `gemini-2.5-flash-lite` (configured here as the default). Whether that specific model is available with a free quota *for your account, region, and at the time of use* must be checked in [Google AI Studio](https://aistudio.google.com/) and [Gemini API pricing](https://ai.google.dev/gemini-api/docs/pricing). Quotas and model lists can change. A free tier has limits, and billing-enabled accounts may incur charges. Do not assume unlimited free requests.

## Setup

1. Open [Google AI Studio — API keys](https://aistudio.google.com/apikey), select or create a Google Cloud project, and create a **Gemini API key**. Do not paste it into chat, `config.js`, or frontend code.
2. Cloudflare → **Workers & Pages** → MediGuide Pages project → **Settings** → **Variables and Secrets**. Add `GEMINI_API_KEY` as a **Secret** (production). Keep `CLERK_ISSUER` configured as before, with the **exact** Clerk JWT `iss` URL. Optionally add `GEMINI_MODEL` = `gemini-2.5-flash-lite`. If that model is unavailable, choose another currently supported free-tier model in Google AI Studio and set `GEMINI_MODEL` accordingly.
3. **Remove** unused `OPENAI_API_KEY` and `OPENAI_MODEL` from Cloudflare after migration.
4. Deploy using a **Git-connected Pages build** or **Wrangler** so the `functions/api/chat.js` server endpoint is included. **Dashboard ZIP/direct upload may not deploy Pages Functions.** From the unzipped project root run:

   ```bash
   npx wrangler login
   npx wrangler pages deploy . --project-name YOUR_PAGES_PROJECT
   ```

5. Redeploy once secrets are configured. Check `GET /api/chat` responds with JSON HTTP 405 (not your homepage / 404), then sign in and ask: “What does coinsurance mean?”

## Accuracy and privacy

The model uses plan summaries supplied in `functions/api/policy-data.json` (transcribed from **Data.pdf** and **More data.pdf**), not official live insurer policy verification. It is instructed to acknowledge unknowns, distinguish outpatient medication from inpatient cover, identify rider-only benefits, and avoid promising claims approval. Responses can still be wrong. For production, provide regularly updated, cited official primary documents and implement retrieval/verification and QA.

Only selected plan ID, age band and residency are automatically sent for context. The user's typed questions and the short conversation are sent to Google, so show a clear privacy notice and tell users not to share NRIC, full medical history, addresses, or identifying details. Google may use free-tier content for product improvement under applicable free-tier terms; review Google's current data-usage policy, local privacy obligations and user consent before deployment involving real health data. Frontend profiles are still browser-local. Add per-user rate limiting and abuse controls to avoid quotas being exhausted.

No model training is required. Prefer up-to-date documented policy retrieval and tested prompts.
