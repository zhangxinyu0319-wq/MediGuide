# MediGuide localisation release v8 — 19 November 2026

## Deployment alignment

This archive is packaged with the exact project directory name configured in the connected Cloudflare Pages project: `MediGuide-GitHub-Ready 2`. Keep that root directory setting unchanged. The build command remains blank and the output directory remains `.`.

## Localisation behaviour

- Supported interface languages: English, Simplified Chinese (`zh-CN`) and Tamil (`ta-IN`).
- The app applies bundled language dictionaries after each render to visible text and common accessibility/placeholder attributes. The dictionaries cover navigation, questionnaire content, profile fields, coverage categories, plan/benefit terminology, assessment labels, comparisons, cost scenarios, Plan Better content, chatbot controls and help content.
- Plan and policy source records remain in their source-data form; the UI translation layer translates matching rendered text. Official insurer/product names, medicine generic names, recognised abbreviations and amounts may remain in their recognised form.
- Gemini chatbot instructions request a complete response in the selected language, preserving only recognised names, abbreviations and amounts. Generated model output cannot be guaranteed word-for-word, so it should be checked before production release.

## Important validation limitation

This release has been checked for archive integrity and JavaScript syntax. It has not been browser-tested across every possible profile, insurer, policy version, dynamic response or device. Some newly introduced or data-specific wording may still require additional translation entries. Contractual policy wording must be checked against the current insurer contract; this educational app must not be treated as an insurer confirmation or claim decision.

## Files

The archive contains the complete Pages project folder. Upload/replace the contents of `MediGuide-GitHub-Ready 2/` in the existing repository; do not add another nested folder.
