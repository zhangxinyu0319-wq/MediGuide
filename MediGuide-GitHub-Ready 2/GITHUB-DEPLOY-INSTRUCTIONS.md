# Update the existing MediGuide GitHub + Cloudflare Pages project

1. Extract this ZIP. It contains `MediGuide-GitHub-Ready/`.
2. In the existing GitHub repository, open the existing `MediGuide-GitHub-Ready/` folder.
3. Upload and replace the **contents** of that folder with the contents of this package folder. Do not create a nested second `MediGuide-GitHub-Ready/`.
4. Commit changes to `main`.
5. Cloudflare Pages should automatically deploy. Keep the existing Root directory `MediGuide-GitHub-Ready`, no build command, and output directory `.`.
6. After deployment, view page source and confirm the `mediguide-build` meta tag is `multilingual-simplified-planbetter-tts-v4-2026-11-19`.
7. Test Standard/Simplified mode, switch language (English / 简体中文 / தமிழ்), open Plan better and test chatbot voice input/read-aloud.

Do not change Clerk or Gemini secrets for these UI changes. The chatbot Function now receives a `language` value and instructs Gemini to reply in the selected language.
