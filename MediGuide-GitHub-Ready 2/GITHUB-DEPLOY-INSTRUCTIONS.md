# Deploy to your EXISTING MediGuide GitHub repository

Your repository currently has a directory named `MediGuide-GitHub-Ready`. This package uses that exact folder name so existing GitHub file paths are preserved.

## Browser-only update
1. Extract this ZIP on your computer (do not upload the ZIP itself).
2. Open https://github.com/zhangxinyu0319-wq/MediGuide and select `main`.
3. Choose **Add file > Upload files** from the repository ROOT (click `MediGuide` in the breadcrumb, not inside the existing `MediGuide-GitHub-Ready` directory).
4. Drag the extracted `MediGuide-GitHub-Ready` folder itself into the upload area. GitHub should display paths beginning `MediGuide-GitHub-Ready/index.html`, `MediGuide-GitHub-Ready/app.js`, and `MediGuide-GitHub-Ready/functions/api/chat.js`.
5. Confirm you are REPLACING the existing paths, not making `MediGuide-GitHub-Ready/MediGuide-GitHub-Ready/...`. Commit directly to `main`.
6. In Cloudflare Pages > Settings > Builds & deployments, set **Root directory** = `MediGuide-GitHub-Ready` (if this is already set, leave it), **Build command** blank, **Output directory** = `.`. Watch the new automatic production deployment.
7. Keep `GEMINI_API_KEY` as a Cloudflare production Secret; `GEMINI_MODEL` and `CLERK_ISSUER` as production variables. Don't put the Gemini key in GitHub.
8. Test Clerk Google sign-in, a complete new-user questionnaire, the home premium, recommendations, and a signed-in chatbot POST.

Note: GitHub web upload may not support dragging directories in every browser. If it flattens or fails to preserve paths, enter the existing `MediGuide-GitHub-Ready` directory and upload the CONTENTS of the extracted folder, then check that `functions/api/chat.js` is present at the intended path. Never upload the zip as a single file.

A 405 from GET /api/chat is expected; the chatbot POST must succeed separately. Gemini access and quota cannot be guaranteed by repackaging.
