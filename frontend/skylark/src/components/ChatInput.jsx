import { useState } from "react";

function ChatInput({ onSend }) {
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (!question.trim()) return;

    onSend(question);
    setQuestion("");
  };

  const handleKeyDown = (e) => {
    // Enter = Send
    // Shift + Enter = New Line
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <textarea
        placeholder="Ask anything about your Monday.com boards..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleSend}
        disabled={!question.trim()}
      >
        📤 Send
      </button>
    </div>
  );
}

export default ChatInput;