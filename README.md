<h1 align="center">
🚀 Monday.com Business Intelligence Agent
</h1>

<p align="center">
AI-powered Business Intelligence Assistant built with <b>React</b>, <b>Node.js</b>, <b>Monday.com GraphQL API</b> and <b>Google Gemini AI</b>.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)

![NodeJS](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)

![Gemini](https://img.shields.io/badge/Google-Gemini-blue?style=for-the-badge&logo=google)

![Monday](https://img.shields.io/badge/Monday.com-API-ff3d57?style=for-the-badge)

![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

</p>

---

# 📖 Table of Contents

- Overview
- Features
- Architecture
- Tech Stack
- Project Structure
- Installation
- Monday.com Configuration
- API Flow
- Example Questions
- Security
- Future Improvements

---

# 🌟 Overview

The **Monday.com Business Intelligence Agent** enables users to interact with their project management data using natural language.

Instead of manually analyzing boards, users can simply ask questions like:

> *"Which projects are delayed?"*

> *"Give me an executive summary."*

> *"What are the biggest business risks?"*

The application retrieves live project data from **Monday.com**, sends it to **Google Gemini**, and generates meaningful business insights.

---

# ✨ Features

✅ Natural Language Business Queries

✅ Live Monday.com Data

✅ Google Gemini AI Integration

✅ Executive Summaries

✅ Business Recommendations

✅ Markdown Supported Responses

✅ Secure Environment Variables

✅ Responsive React Interface

---

# 🏗 System Architecture

```text
                    ┌────────────────────────┐
                    │      React Client      │
                    │    (Vite Frontend)     │
                    └──────────┬─────────────┘
                               │
                         HTTP Request
                               │
                               ▼
                 ┌─────────────────────────┐
                 │   Express.js Backend    │
                 │      REST API Server    │
                 └──────────┬──────────────┘
                            │
            ┌───────────────┴────────────────┐
            │                                │
            ▼                                ▼
   Monday.com GraphQL API          Google Gemini API
            │                                │
            └───────────────┬────────────────┘
                            ▼
                  AI Business Insights
                            │
                            ▼
                   React Chat Interface
```

---

# 🛠 Tech Stack

## Frontend

- ⚛ React
- ⚡ Vite
- 📝 React Markdown
- 🎨 CSS

## Backend

- 🟢 Node.js
- 🚀 Express.js
- Axios
- dotenv

## APIs

- Monday.com GraphQL API
- Google Gemini API

---

# 📂 Project Structure

```text
Skylark-Drones
│
├── backend
│   ├── server.js
│   ├── package.json
│   ├── routes
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── README.md
└── DECISION_LOG.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/Skylark-Drones.git

cd Skylark-Drones
```

---

## Backend

```bash
cd backend

npm install

npm start
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔧 Monday.com Configuration

### Step 1

Generate your **Monday.com Personal API Token**

```
Avatar
→ Administration
→ API
→ Personal API Token
```

---

### Step 2

Create two boards

📌 Deals Board

📌 Work Orders Board

---

### Step 3

Get Board IDs

Example

```
https://yourworkspace.monday.com/boards/123456789
```

Board ID

```
123456789
```

---

### Step 4

Create `.env`

```env
MONDAY_API_TOKEN=YOUR_TOKEN

DEALS_BOARD_ID=YOUR_DEALS_BOARD_ID

WORK_BOARD_ID=YOUR_WORK_BOARD_ID

GEMINI_API_KEY=YOUR_GEMINI_KEY

PORT=5000
```

---

# 🔄 API Flow

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
Google Gemini
      │
      ▼
Business Insights
      │
      ▼
Frontend Response
```

---

# 💬 Example Questions

- Which deals are delayed?
- Give me an executive summary.
- Which work orders have the highest priority?
- What projects need immediate attention?
- Identify possible business risks.

---

# 🔐 Security

✔ API Keys stored in `.env`

✔ `.env` excluded using `.gitignore`

✔ No credentials committed to GitHub

---

# 🚀 Future Improvements

- Authentication
- Interactive Dashboard
- Charts & Analytics
- PDF Report Export
- Multi-board Analytics
- Conversation History
- Voice Assistant

---

# 👨‍💻 Author

## **Sujal Ramnani**

**Monday.com Business Intelligence Agent**

Built for the **Skylark Drones Technical Assignment**.

---

<p align="center">

⭐ If you like this project, don't forget to star the repository!

</p>
