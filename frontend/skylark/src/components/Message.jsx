import ReactMarkdown from "react-markdown";

function Message({ sender, text }) {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={sender === "user" ? "user-message" : "ai-message"}>
      <div className="message-header">
        <span className="avatar">
          {sender === "user" ? "👤" : "🤖"}
        </span>

        <strong>
          {sender === "user" ? "You" : "AI Assistant"}
        </strong>

        <span className="time">{currentTime}</span>
      </div>

      <div className="markdown-content">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Message;