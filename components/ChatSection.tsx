"use client";

import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello 👋 I’m $ose your AI Tax Assistant. Ask me anything about taxes.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    const updatedMessages = [...messages, userMessage];

  setMessages(updatedMessages);
  setInput("");
  setIsLoading(true);

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
     },
      body: JSON.stringify({ messages: updatedMessages }),
    });

    const data = await res.json();

    const aiMessage = {
      role: "assistant" as const,
      content: data.reply,
    };

    setMessages((prev) => [...prev, aiMessage]);
  } catch {
    
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: "⚠️ Something went wrong. Try again.",
      },
    ]);
  }

  setIsLoading(false);
};

  return (
    <div className="w-full mx-auto px-6 py-20 flex flex-col gap-10 max-w-7xl">
        <div className="flex flex-col gap-3.5">
            <h1 className="text-4xl text-[#2E4F21]">Meet $ose: Your Tax AI Assistant</h1>
            <p className="text-[#2E4F21]">Simplifying taxes one chat at a time.</p>
        </div>
        <div className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl flex flex-col h-150 my-5"> 
            {/* Header */}
            <div className="p-4 border-b flex items-center justify-between">
                <div>
                <h2 className="text-lg font-semibold">Apex Finance AI Tax Assistant</h2>
                <p className="text-sm text-gray-500">Tax-trained AI</p>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                    <div
                    className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm ${
                        msg.role === "user"
                        ? "bg-[#2E4F21] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                    >
                    {msg.content}
                    </div>
                </div>
                ))}

                {isLoading && (
                <div className="text-sm text-gray-500">$ose is typing...</div>
                )}
            </div>

            {/* Input */}
            <div className="p-4 border-t flex gap-2">
                <input
                type="text"
                placeholder="Ask anything about taxes..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                }}
                className="flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2E4F21]"
                />

                <button
                onClick={handleSend}
                 disabled={isLoading}
                className="bg-[#2E4F21] text-white px-4 py-2 rounded-xl hover:bg-[#2E4F21] transition"
                >
                Send
                </button>
            </div>
      </div>
    </div>
  );
};

export default ChatSection;