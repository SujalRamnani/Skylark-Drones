import { useEffect, useRef } from "react";
import Message from "./Message";

function ChatBox({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="chat-box">
      {messages.length === 0 ? (
        <p className="placeholder">
          👋 Welcome! Ask anything about your Monday.com business data.
        </p>
      ) : (
        <>
          {messages.map((msg, index) => (
            <Message
              key={index}
              sender={msg.sender}
              text={msg.text}
            />
          ))}

          <div ref={bottomRef}></div>
        </>
      )}
    </div>
  );
}

export default ChatBox;