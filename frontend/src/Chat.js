import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { sendMessage } from "./api";
import "./App.css";

function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you?" },
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);
    const reply = await sendMessage(input);
    setLoading(false);

    const botMsg = { sender: "bot", text: reply };
    setMessages((prev) => [...prev, botMsg]);

    setInput("");
  };

  return (
    <div className="container">
      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && (
  <div className="message bot">
    <span>● ● ●</span>
  </div>
)}
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Message..."
        />
        <button onClick={handleSend}>➤</button>
      </div>
      <div ref={chatEndRef} />
    </div>
  );
}

export default Chat;