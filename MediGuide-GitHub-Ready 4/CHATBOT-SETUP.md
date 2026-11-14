# MediGuide Gemini chatbot configuration

The existing chatbot calls `/api/chat` through the Cloudflare Pages Function at `functions/api/chat.js`. The function validates the Clerk session and calls Google's Gemini Developer API.

Cloudflare production variables/secrets:
- `GEMINI_API_KEY` — Secret
- `GEMINI_MODEL` — Text; the current code defaults to `gemini-3.5-flash` and, on a 404 for that model only, attempts `gemini-3.8-flash` as the configured fallback path
- `CLERK_ISSUER` — Text; exact Clerk JWT issuer URL

The current model names are retained from the existing project configuration. Model availability, account access and free quota are controlled by Google and can change; confirm your AI Studio project supports the selected model. The Plan better page update does not require a new Gemini API key or model change.

Deploy through Git-connected Cloudflare Pages with the `functions/` directory included. Keep `functions/api/chat.js` at this exact path. A direct static ZIP upload may omit Pages Functions.

The chatbot uses the supplied policy summaries rather than live contract retrieval. Responses may be wrong; do not enter NRIC or unnecessary identifiers.
