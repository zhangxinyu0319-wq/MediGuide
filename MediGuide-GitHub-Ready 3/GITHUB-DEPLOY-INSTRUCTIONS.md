# GitHub + Cloudflare Pages deployment

1. Extract the ZIP. The project folder is `MediGuide-GitHub-Ready/`.
2. Open your existing GitHub repository and open its current `MediGuide-GitHub-Ready/` folder.
3. Upload/replace the **contents** of that folder with the extracted folder's contents. Do not create `MediGuide-GitHub-Ready/MediGuide-GitHub-Ready/`.
4. Commit to `main`.
5. In Cloudflare Pages keep Root directory `MediGuide-GitHub-Ready`, Framework preset `None`, build command blank, and build output directory `.`.
6. Confirm the production deployment succeeds. `index.html` must be at the root of the configured Root directory and `functions/api/chat.js` must be present.
7. Test Google sign-in, all six Plan better sections, current premium display, Compare, `/api/chat` POST via the chatbot UI, and mobile navigation.

This Plan better update does not require changing `CLERK_ISSUER`, `GEMINI_API_KEY` or `GEMINI_MODEL`. Keep Gemini API keys server-side as Cloudflare Secrets.

## Troubleshooting
- If the site returns 404 after Google sign-in, inspect Pages redirects/SPA fallback and verify the index file is at the configured root.
- If `/api/chat` is missing, verify the Functions directory is under the configured root.
- A direct browser GET to `/api/chat` may return 405 because the endpoint expects POST; test by sending a question in the chatbot UI.
