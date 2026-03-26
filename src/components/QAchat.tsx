import React, { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface QAChatProps {
  open: boolean;
  onClose: () => void;
}

export default function QAChat({ open, onClose }: QAChatProps) {
  const [messages, setMessages] = useState([
    { role: "bot", content: <span>Hi! Ask me anything about NucleUS🚀. I can help you in English.</span> },
  ]);
  const [input, setInput] = useState("");
  const [isClient, setIsClient] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToBottom = () => {
    if (!isClient || !chatEndRef.current) return;
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    if (isClient) {
      scrollToBottom();
    }
  }, [messages, isClient]);

  
  const getBotReply = (question: string): React.ReactNode => {
  const q = question.toLowerCase();

  if (q.includes("nuclear medicine")) {
    return (
      <span>
        Nuclear Medicine is a medical specialty that uses radioactive substances for diagnosis and treatment.
      </span>
    );
  }

  if (q.includes("nucleus") && !q.includes("nuclear")) {
    return (
      <span>
        NucleUS is a project focused on Nuclear Physics and Medical Physics applications.
      </span>
    );
  }

  if (q.includes("study") || q.includes("learn")) {
    return (
      <span>
        NucleUS provides knowledge and research in Nuclear Physics, Radiation, and Medical Physics.
      </span>
    );
  }

  return (
    <span>
      Sorry, I don't have an answer foryet. Please visit the{" "}
      <a
        href="https://nucleus-forum.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-sky-800 hover:underline"
      >
        NucleUSForum
      </a>{" "}
      immediately.
    </span>
  );
};

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: <span>{input}</span> };
    const botMsg = { role: "bot", content: getBotReply(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <div
            className="bg-white w-[90%] max-w-2xl rounded-xl p-5 flex flex-col h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">
                Q&A about NucleUS Project
                <br />You can ask me about: "NucleUS", "Nuclear medicine", or "Study"
              </h2>
              <button onClick={onClose}>✕</button>
            </div>

            {/* Chat */}
            <div className="flex-1 overflow-y-auto border rounded-lg p-3 mb-3 bg-gray-50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-2 flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg text-sm max-w-xs ${
                      msg.role === "user"
                        ? "bg-sky-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            {/* Input */}
<div className="flex gap-2">
  <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSend();
      }
    }}
    placeholder="Type your question..."
    className="flex-1 border rounded-lg px-3 py-2 text-sm"
  />

<button
  onClick={handleSend}
  className="bg-sky-500 text-white px-4 py-2 rounded-lg flex items-center justify-center"
>
  <ArrowRight size={18} />
</button>
</div>
          </div>
        </div>
      )}
    </>
  );
}
