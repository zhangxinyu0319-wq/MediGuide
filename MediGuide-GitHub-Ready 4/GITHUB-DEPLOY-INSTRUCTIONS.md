# Update the existing MediGuide GitHub + Cloudflare Pages project

1. Extract this ZIP. It contains `MediGuide-GitHub-Ready/`.
2. In the existing GitHub repository, open the existing `MediGuide-GitHub-Ready/` folder.
3. Upload and replace the **contents** of that folder with the contents of this package folder. Do not create a nested second `MediGuide-GitHub-Ready/`.
4. Commit changes to `main`.
5. Cloudflare Pages should automatically deploy. Keep the existing Root directory `MediGuide-GitHub-Ready`, no build command, and output directory `.`.
6. After deployment, view page source and confirm the `mediguide-build` meta tag is `voice-footer-controls-v2-2026-11-14`.
7. Sign in, scroll to the footer and confirm `mediguide.healthcare@gmail.com` and LinkedIn `MediGuide Healthcare`. Open Chatbot and confirm the voice panel shows **Speak your question**, **Read latest answer** (disabled until an assistant has replied), and **Stop audio**.

Do not change Clerk or Gemini secrets for these frontend changes.
