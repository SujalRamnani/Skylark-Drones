import { useState } from "react";
import "./App.css";
import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendQuestion = async (question) => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: question,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.success ? data.answer : data.error,
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Unable to connect to the server. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>🤖 AI Business Intelligence Assistant</h1>
        <p>Powered by Monday.com + Gemini AI</p>
      </div>

      {/* Dashboard */}
      <div className="dashboard">
        <div className="card">
          <h2>📊</h2>
          <h3>351</h3>
          <p>Total Deals</p>
        </div>

        <div className="card">
          <h2>📄</h2>
          <h3>Live</h3>
          <p>Work Orders</p>
        </div>

        <div className="card">
          <h2>💰</h2>
          <h3>AI</h3>
          <p>Business Insights</p>
        </div>

        <div className="card">
          <h2>📈</h2>
          <h3>24×7</h3>
          <p>Assistant</p>
        </div>
      </div>

      {/* Chat */}
      <ChatBox messages={messages} />

      {loading && (
        <div className="loading">
          🤖 AI is analyzing your business data...
        </div>
      )}

      {/* Input */}
      <ChatInput onSend={sendQuestion} />
    </div>
  );
}

export default App;