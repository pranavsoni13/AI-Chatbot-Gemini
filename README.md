# 🤖 AI Chatbot (React + FastAPI + Gemini API)

A full-stack AI chatbot with a modern ChatGPT-style interface, powered by **React (frontend)**, **FastAPI (backend)**, and **Google Gemini API** for intelligent responses.

---

## 🌐 Live Demo

* 🔗 **Frontend (Vercel):** https://ai-chatbot-gemini-pied.vercel.app
* ⚡ **Backend (Render):** https://chatbot-backend-072q.onrender.com

> ⚠️ Note: Backend may take a few seconds to wake up (free tier).

---

## 🚀 Features

* 💬 Clean ChatGPT-style UI
* 🤖 Real-time AI responses using Gemini
* ⚡ FastAPI backend with REST API
* 🔐 Secure API key handling via environment variables
* 🌐 Fully deployed (Vercel + Render)
* 🎯 Smooth UX with auto-scroll and loading animation

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Axios
* Custom CSS (modern UI)

### Backend

* FastAPI
* Python
* Google Generative AI (Gemini API)
* Uvicorn

---

## 📁 Project Structure

```
chatbot-gemini/
│
├── backend/
│   ├── main.py
│   ├── gemini_service.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│
└── README.md
```

---

## ⚙️ Local Setup

### 🔹 1. Clone Repository

```
git clone https://github.com/your-username/ai-chatbot-gemini.git
cd ai-chatbot-gemini
```

---

### 🔹 2. Backend Setup

```
cd backend
pip install -r requirements.txt
```

Create `.env` file:

```
GEMINI_API_KEY=your_api_key_here
```

Run backend:

```
uvicorn main:app --reload
```

Backend runs on:

```
http://127.0.0.1:8000
```

---

### 🔹 3. Frontend Setup

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoint

### POST `/chat`

**Request:**

```
{
  "message": "Hello"
}
```

**Response:**

```
{
  "response": "Hi! How can I help you?"
}
```

---

## 🧠 How It Works

1. User sends a message via React UI
2. Request is sent to FastAPI backend
3. Backend calls Gemini API
4. AI response is generated
5. Response is sent back and displayed

---

## 🔒 Environment Variables

| Variable       | Description         |
| -------------- | ------------------- |
| GEMINI_API_KEY | Your Gemini API Key |

---

## 🚀 Deployment

* **Frontend:** Vercel
* **Backend:** Render

> Make sure to update API URL in `frontend/src/api.js` after deployment.

---

## 📌 Future Improvements

* 🧠 Context-aware chatbot (memory)
* 🎤 Voice input integration
* 📄 PDF-based chatbot
* 🌙 Dark/Light mode toggle
* 💾 Chat history storage

---

## 👨‍💻 Author

**Pranav**
B.Tech AI & DS Student

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
