import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  User,
  Bot,
  Smile,
  Paperclip,
} from "lucide-react";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hello! Welcome to Artifact Tracker. How can I help you today? 😊",
      isUser: false,
      time: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Add user message
    const newUserMessage = { text: message, isUser: true, time: new Date() };
    setMessages([...messages, newUserMessage]);
    setMessage("");

    // Simulate agent typing
    setIsTyping(true);

    // Simulate agent response after delay
    setTimeout(() => {
      const responseMessages = [
        "Got it! Our team will assist you shortly. 🚀",
        "Hi there! Need help with anything specific?",
        "I’ll check that for you. One moment please... ⏳",
        "Could you share your email for follow-up? 📧",

        "Thanks for reaching out! How’s your day going? 😊",
      ];

      const randomResponse =
        responseMessages[Math.floor(Math.random() * responseMessages.length)];
      const newAgentMessage = {
        text: randomResponse,
        isUser: false,
        time: new Date(),
      };

      setMessages((prev) => [...prev, newAgentMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random delay for realism
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Chat Button (Pulse Animation) */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-pulse"
        >
          <MessageCircle size={24} />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-ping opacity-75"></span>
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full"></span>
        </button>
      )}

      {/* Chat Window (Slide-up Animation) */}
      {isOpen && (
        <div
          className={`bg-white rounded-xl shadow-2xl flex flex-col w-80 md:w-96 h-[28rem] border border-gray-200 transform transition-all duration-300 ${
            isOpen ? "animate-fade-in-up" : "animate-fade-out-down"
          }`}
        >
          {/* Header (Gradient Background) */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 flex justify-between items-center rounded-t-xl">
            <div className="flex items-center space-x-2">
              <Bot size={20} className="text-white" />
              <h3 className="font-semibold">Rentify Support</h3>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-green-700 rounded-full p-1 transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages (Subtle Bubbles) */}
          <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl relative ${
                    msg.isUser
                      ? "bg-gradient-to-br from-green-400 to-green-500 text-white rounded-br-none shadow-md"
                      : "bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100"
                  } transition-all duration-200 hover:scale-[1.02]`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p
                    className={`text-xs mt-1 text-right ${
                      msg.isUser ? "text-green-100" : "text-gray-500"
                    }`}
                  >
                    {formatTime(msg.time)}
                  </p>
                  {/* Chat bubble tip */}
                  <div
                    className={`absolute w-3 h-3 bottom-0 ${
                      msg.isUser
                        ? "right-0 bg-green-500 transform translate-x-1/2 rotate-45"
                        : "left-0 bg-white border-l border-t border-gray-100 transform -translate-x-1/2 rotate-45"
                    }`}
                  ></div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start mb-3">
                <div className="bg-white text-gray-800 px-4 py-2 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                  <div className="flex space-x-1 items-center">
                    <div className="text-xs text-gray-500 mr-2">typing</div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "200ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "400ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area (Modern Design) */}
          <div className="px-4 py-3 border-t border-gray-200 bg-white rounded-b-xl">
            <div className="flex items-center space-x-2">
              <button className="text-gray-500 hover:text-green-600 p-1 transition-colors">
                <Smile size={20} />
              </button>
              <button className="text-gray-500 hover:text-green-600 p-1 transition-colors">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className={`p-2 rounded-full transition-all duration-200 ${
                  message.trim()
                    ? "bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-md hover:scale-105"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add custom animations in global CSS */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
