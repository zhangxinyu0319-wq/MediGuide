# Language and speech behavior — full single-language update (2026-11-19)

The header language selector offers English, Simplified Chinese and Tamil. The same selected language is applied across the page rather than mixing language for the user-facing interface. The bundled dictionaries cover navigation, page headings, questionnaire prompts and options, health-condition names, plan descriptions, coverage categories, policy-summary explanations, costs, suitability statuses, recommendations, profile fields, help content, chatbot controls, voice prompts, footer text, and relevant accessibility labels.

The page is re-rendered before translation, and text nodes plus placeholder/title/aria-label/alt attributes are translated from their original source text. This avoids translating a previously translated string repeatedly when the user switches languages.

Official insurer names, legal product names, generic medicine names, necessary abbreviations (for example MOH CDL, CDMP and MediSave) and currency/claim figures may remain in their recognised form so users can identify the exact insurance product, medicine or policy term. The surrounding explanatory content is translated. Free-text medication names and user-entered notes are preserved as entered; the app does not rewrite personal data.

The Gemini chatbot receives the selected language and is instructed to answer entirely in that language, without mixing English sentences into Chinese or Tamil answers. It retains official insurer/product/medicine names, necessary abbreviations and amounts in recognised form, and translates the surrounding explanation.

Speech recognition uses `en-SG`, `zh-CN` or `ta-IN` according to the selected language. Speech synthesis chooses an installed voice for the selected language, preferring voices whose names suggest enhanced/natural quality and uses slower pacing. Actual voice quality depends on browser and operating-system voices; the website cannot install a voice or guarantee natural voice availability.

Speech recognition may be processed by the browser vendor's speech service. The transcript is shown to the user and is not sent to Gemini until the user presses Send.

**Translation quality and insurance limitation:** These are application translations, not certified legal translations. The supplied policy PDFs are summaries, not the complete current insurance contracts. For actual claims, eligibility, exclusions and benefit disputes, the controlling insurer contract and its official language version remain authoritative. A professional insurance-language review is recommended before using these translations as contractual wording.
