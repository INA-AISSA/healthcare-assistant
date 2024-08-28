"use client";

import React, { useState } from "react";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: "user" };
      setMessages([...messages, newMessage]);
      setInput("");

      setTimeout(() => {
        const aiResponse = generateAIResponse(input);
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  const handleInputChange = (e) => setInput(e.target.value);

  const generateAIResponse = (userInput) => {
    // This is where you can integrate a more advanced AI model
    const lowerCaseInput = userInput.toLowerCase();

    if (lowerCaseInput.includes("symptoms")) {
      return {
        text: "Please describe your symptoms, and I'll suggest possible causes or actions.",
        sender: "ai",
      };
    } else if (lowerCaseInput.includes("remind me to take my medicine")) {
      // Logic for reminders
      return {
        text: "I'll remind you to take your medicine at the specified time.",
        sender: "ai",
      };
    } else if (lowerCaseInput.includes("recommend a doctor")) {
      // Logic for recommending a doctor
      return {
        text: "Based on your symptoms, I recommend you see a doctor. Would you like me to find one near you?",
        sender: "ai",
      };
    } else {
      return {
        text: "I'm here to help with your healthcare needs. Please let me know how I can assist you.",
        sender: "ai",
      };
    }
  };

  return (
    <div className="flex flex-col text-black h-screen bg-blue-50">
      <div className="flex-grow p-6 overflow-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs md:max-w-md p-4 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-300 bg-white">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your message..."
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
