# Sanskrit Sarathi (संस्कृत सारथि) - Project Specifications

## 🚀 Project Vision
Sanskrit Sarathi is an AI-powered pedagogical platform designed to master the "Science of Sound" (Shiksha). It aims to bridge the gap between ancient Vedic phonetics and modern AI, providing a personal "Charioteer" that listens, corrects, and guides students toward phonetic perfection by focusing on precise mouth placements (Sthana) and effort (Prayatna).

## ✨ Key Features by Phase

### 🎯 Phase 1: The Foundation (MVP)
**Focus:** Phonetic Accuracy & Basic Literacy
*   **The Varna Matrix:**
    *   Interactive chart of all 50+ Sanskrit characters.
    *   **AI Feedback:** Instant "Match Score" for individual sounds.
    *   **Mouth Mechanic Guides:** Simple diagrams showing tongue placement (e.g., Kanthya vs. Dantya) and effort (Prayatna).
*   **Syllable-Level Scoring:** Visual "Traffic Light" feedback (Green/Yellow/Red) for individual letters within a word, with a focus on prosody and meter (Hrasva/Dirgha duration).
*   **Transliteration Engine:** One-tap toggle between Devanagari, IAST (Romanized), and ITRANS.
*   **Essential Shloka Library:** 10 foundational verses (e.g., Shanti Mantras) with Slow-Mo playback (0.5x, 0.75x) for guided practice.

### 📈 Phase 2: The Journey (Intermediate)
**Focus:** Flow, Connection, and Retention
*   **Sandhi-Viccheda Tool:** Automated breaking of complex, long compound words into readable, individual parts for easier chanting (Contextual Breaking).
*   **Anusvara & Visarga Tracker:** Specialized AI detection for the subtle nasal and breathy endings.
*   **Progress Dashboard:** A data-driven view visualizing "Accuracy Growth" and "Mastered Varnas" over time, along with "Fluency Growth."
*   **Chanting Streaks:** Gamified daily reminders and leaderboards to encourage daily Sadhana (practice) and build a practice habit.

### 🔮 Phase 3: Future Horizons (Advanced)
**Focus:** Deep Mastery & Digital Preservation
*   **Deep Grammar Analysis:** Contextual breakdown of word roots ($Dhatus$) and morphology (Vyakaran), including case endings ($Vibhakti$) using LLM logic.
*   **Manuscript OCR:** Use the camera to scan ancient texts/manuscripts and hear the AI pronounce them instantly.
*   **Heritage Mode (Voice Cloning):** Allow users to upload a recording of a specific Guru or elder to serve as the "Target Voice" for the AI to compare against.
*   **Real-time Human Tutoring:** An integrated marketplace to connect with live Sanskrit experts for advanced certification.

## 🛠️ Technical Stack
*   **Frontend:** React Native / Next.js
*   **Backend:** Python (FastAPI)
*   **AI Models:**
    *   **ASR (Automatic Speech Recognition):** Bhashini Unified API / Fine-tuned OpenAI Whisper
    *   **Logic (Corrective Phonetic Feedback):** Gemini 1.5 Flash, utilizing a phonetic distance algorithm for scoring.
*   **Audio Processing:** 16kHz Mono PCM processing

## 📖 How It Works
1.  **Listen:** Hear the "Golden Standard" recording of a Varna or Shloka.
2.  **Speak:** Record your voice directly in the app.
3.  **Analyze:** The AI compares your audio against the target phonemes.
4.  **Correct:** Receive instant tips on tongue placement (e.g., "Touch your tongue to your teeth for this Dantya sound").

## 🎨 UI/Aesthetic Guidelines
*   Clean, distraction-free interface.
*   "Saffron/Traditional" aesthetic.

## 🚧 Out-of-Scope (Initial Phases)
*   Real-time Human Tutoring (initially, the goal is purely AI-driven "Sarathi").
*   Complete Vocabulary Mastery (focus is primarily on Shiksha (Phonetics) rather than broad lexical acquisition).
