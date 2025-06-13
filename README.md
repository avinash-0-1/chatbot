# 🧘‍♂️ Baba Ji – AI Chatbot Web App

**Baba Ji** is a modern, AI-powered web application designed to deliver intelligent, conversational answers and spiritual guidance. Built with cutting-edge technologies like Google’s Gemini API, it blends advanced AI with a calming, accessible user experience.

#STATIC PAGE LINK:- https://avinash-0-1.github.io/chatbot/

---

## 🚀 Project Overview

Baba Ji offers:
- Smart, conversational answers to user input
- Support for image and PDF uploads for AI-powered analysis
- A clean, responsive interface with dark mode and spiritual theming

This project demonstrates the synergy of spiritual design and modern AI technologies.

---

## 🛠️ Tech Stack

| Category         | Technology                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Frontend**      | React 19 (functional components + hooks)                                   |
| **Build Tool**    | Vite (lightning-fast development & optimized builds)                       |
| **Routing**       | React Router DOM v7                                                        |
| **Styling**       | Tailwind CSS 4 + custom CSS (dark mode, responsiveness)                    |
| **AI Integration**| Google Generative AI (Gemini API) via `@google/genai` & `@google/generative-ai` |
| **State Management** | React Context API                                                       |
| **Linting**       | ESLint with React + Hooks plugins                                          |
| **File Handling** | Supports image and PDF uploads, previews, and AI analysis                  |

---

## 🧩 Key Features

### 💬 Conversational AI
- Integrates with **Google Gemini (Generative AI)** to offer smart, context-aware responses.
- Supports **text and file input** (images and PDFs).

### 🎨 Modern UI/UX
- Responsive design across all screen sizes
- Dark mode toggle
- Animated typing effect for AI responses
- File preview before sending (image/PDF)
- Sidebar with recent prompts and navigation

### 🧱 Component Architecture
- `Front.jsx`: Landing page with quotes, app overview, and features
- `Main.jsx`: Core chat interface (chat input, file upload, responses)
- `Sidebar.jsx`: Chat history, settings, help, and navigation
- `Context.jsx`: Global state management for chat, files, and UI
- `gemini.js`: Communication layer with Google Gemini API

### 🔀 Routing
| Route      | Component        | Description                  |
|------------|------------------|------------------------------|
| `/`        | `Front.jsx`      | Landing page                 |
| `/Main.jsx`| `Main.jsx`       | Main chatbot interface       |

---

## 📐 Best Practices Followed

- Separation of concerns: UI, state, and API logic are modular
- Use of **React Hooks**: `useState`, `useEffect`, `useContext`
- Scalable and clean state handling with Context API
- Linting and code consistency using ESLint

---

## 🌟 What Makes It Special?

- **Spiritual + AI**: A unique fusion of calming UI and cutting-edge tech
- **File-Aware Chat**: Not just text – the AI understands images and PDFs
- **Delightful UX**: From animations to accessibility, it’s designed to feel good

---



## 📦 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/baba-ji-chatbot.git
cd baba-ji-chatbot

# 2. Install dependencies
npm install

# 3. Add your Google Gemini API Key
# Create a .env file with:
VITE_GEMINI_API_KEY=your_google_gemini_api_key_here

# 4. Start the development server
npm run dev
