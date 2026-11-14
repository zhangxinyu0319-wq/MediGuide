# MediGuide chatbot voice feature

## Dictate a question
1. Open Chatbot on the HTTPS MediGuide domain.
2. Press **Speak** and allow microphone access when the browser asks.
3. Speak in English (Singapore). The recognized words are inserted into the question box.
4. Review and edit the transcript, then press **Send** to submit it.

The app does not auto-submit dictated speech. Speech recognition support depends on the browser. If unsupported, the app displays a message and typing remains available.

## Hear an answer
- Press **Read aloud** on an assistant message to hear that answer.
- Enable **Read new replies aloud** to have new assistant replies spoken automatically for the current page session.
- The browser/device speech engine reads the response in English (Singapore). If unavailable, the text answer remains visible.

## Privacy and compatibility
- Speech recognition uses the browser's Web Speech Recognition API. Depending on browser implementation, audio may be processed by the browser vendor's speech service; this is separate from the MediGuide Gemini API.
- Only the recognized text is sent to `/api/chat`, and only after the user presses Send.
- Voice input requires microphone permission and a secure HTTPS origin. Browser support varies; desktop Chrome-based browsers generally have broader recognition support than Safari. MediGuide gracefully falls back to typed chat.
- Do not dictate NRIC numbers, names, full medical records or other sensitive identifiers into the chatbot.
