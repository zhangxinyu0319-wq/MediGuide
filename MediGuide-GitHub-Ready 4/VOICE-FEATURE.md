# MediGuide voice controls

The Chatbot page shows a dedicated voice control panel: **Speak your question**, **Read latest answer**, **Stop audio**, and **Read new replies aloud**. Each assistant answer also has its own **Read aloud** control.

## Dictate a question
1. Open MediGuide over HTTPS and sign in.
2. Open Chatbot and press **Speak your question**.
3. Allow microphone access. Speak in English (Singapore).
4. Review and edit the transcript in the question box, then press **Send**. Dictation is never submitted automatically.

Speech recognition relies on the browser Web Speech API and is not supported in every browser/version. If Safari does not expose `SpeechRecognition` or `webkitSpeechRecognition`, the button remains visible and explains that typed input or a supported Chrome browser can be used.

## Hear an answer
- Press **Read aloud** on an individual assistant answer, or **Read latest answer** in the voice panel.
- Enable **Read new replies aloud** to speak subsequent assistant answers automatically.
- Use **Stop audio** to cancel speech. Speech synthesis uses the device/browser voice engine.

Voice recognition may use the browser vendor's speech service. MediGuide submits only the recognized text after the user presses Send. Do not dictate NRIC, names or unnecessary sensitive medical details.
