# 🚀 Monday.com Business Intelligence Agent

> **AI-powered Business Intelligence Assistant** that transforms live Monday.com data into actionable business insights using **Google Gemini AI**.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?style=for-the-badge&logo=google)
![Monday.com](https://img.shields.io/badge/Monday.com-API-FF3D57?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Overview

This project is an AI-powered Business Intelligence Assistant that enables users to ask business-related questions in natural language. The application fetches live data from multiple Monday.com boards and leverages Google Gemini to generate intelligent, context-aware insights and executive recommendations.

---

## 🎯 Key Features

- 🤖 AI-powered business insights
- 📊 Live Monday.com data integration
- 💬 Natural language question answering
- 📈 Executive summaries & recommendations
- ⚡ Fast React-based chat interface
- 📝 Markdown-supported AI responses
- 🔒 Secure API key management using `.env`

---

## 🛠 Tech Stack

### Frontend
- ⚛️ React
- ⚡ Vite
- 🎨 CSS
- 📝 React Markdown

### Backend
- 🟢 Node.js
- 🚀 Express.js
- 📡 Monday.com GraphQL API
- 🤖 Google Gemini API
- 🔐 dotenv
- 🌐 CORS

---

## 📂 Project Structure

```text
Monday-BI-Agent/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file

```env
MONDAY_API_TOKEN=your_token
DEALS_BOARD_ID=your_board_id
WORK_BOARD_ID=your_board_id
GEMINI_API_KEY=your_api_key
```

Run the server

```bash
npm start
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 💡 Example Questions

- Which deals are currently delayed?
- Give me an executive summary.
- Which projects require immediate attention?
- Which work orders are at risk?
- Show high-priority ongoing work.

---

## 🔄 Workflow

```text
User Question
      │
      ▼
React Frontend
      │
      ▼
Express Backend
      │
      ▼
Monday.com API
      │
      ▼
Google Gemini AI
      │
      ▼
Business Insights
      │
      ▼
Response to User
```

---

## 🔐 Security

- API Keys stored securely in `.env`
- Sensitive credentials are **never committed** to GitHub.

---

## 🚀 Future Improvements

- 📊 Interactive Dashboard
- 📈 Charts & Analytics
- 📄 Export Reports
- 🔐 User Authentication
- 🎤 Voice Input
- 🌍 Multi-board Support

---

## 👨‍💻 Author

**Sujal Ramnani**

Final Assignment – **Monday.com Business Intelligence Agent**

---

### ⭐ If you found this project interesting, consider giving it a star!
