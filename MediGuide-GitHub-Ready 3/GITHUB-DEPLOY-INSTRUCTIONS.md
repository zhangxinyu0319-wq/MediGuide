# MediGuide — GitHub + Cloudflare Pages deployment

1. This ZIP is for extraction before uploading to GitHub. Do NOT upload just the ZIP file into the GitHub repository.
2. In GitHub, delete the old `MediGuide-Gemini-Free-Tier.zip` file from repository main branch (delete this file and commit).
3. Use Add file > Upload files on the repository root. Drag all extracted files and directories, including `index.html`, `app.js`, `config.js`, `assets`, `functions`, and `_routes.json`. Commit directly to `main`.
4. In Cloudflare Pages -> mediguide-7pb -> Settings -> Builds & deployments, check: framework preset None, build command blank, build output directory `.` (repository root). Cloudflare should run Pages Functions from the root-level `functions/` directory. If the UI requires a build command, use `exit 0`.
5. In Cloudflare Pages -> Settings -> Variables and Secrets (production), configure GEMINI_API_KEY as Secret, GEMINI_MODEL=gemini-2.5-flash-lite, CLERK_ISSUER matching Clerk session token issuer. Create a new deployment after changes.
6. Check /api/chat in a browser: 405 for GET is expected. Test a POST from signed-in chatbot, and check browser Network and Cloudflare Functions logs if it fails.
7. Test Google sign-in and the return to https://mediguide-7pb.pages.dev/.

CAUTION: This is a GitHub deployment packaging fix, not a verified repair of all live Clerk/Gemini API issues. If the front-end reports errors after deployment, inspect browser Console and the POST /api/chat status. The policy data is not independently verified against latest insurer schedules.


## 13 November 2026 update
- Set Cloudflare Pages production variable `GEMINI_MODEL` to `gemini-3.5-flash` (Text).
- The chat Function tries that model first and retries `gemini-3.8-flash` only if Google returns HTTP 404 for the configured 3.5 model. Confirm actual model access and quotas in Google AI Studio.
- New navigation page: `How to use my plan better`; it uses profile answers, plan reference summaries and optional user-entered usage records.
- New usage records are stored in the browser-local profile only. They are self-reported, not insurer claim data.
