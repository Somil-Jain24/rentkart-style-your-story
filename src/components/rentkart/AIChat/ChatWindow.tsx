import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Minimize2, RotateCcw, Send, Loader, Sparkles } from "lucide-react";
import { Message } from "./ChatBot";
import { MessageBubble } from "./MessageBubble";
import { QuickActions } from "./QuickActions";

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  language: "en" | "hi";
  onSendMessage: (message: string) => void;
  onClose: () => void;
  onMinimize: () => void;
  onReset: () => void;
  onLanguageChange: (lang: "en" | "hi") => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export function ChatWindow({
  messages,
  isLoading,
  language,
  onSendMessage,
  onClose,
  onMinimize,
  onReset,
  onLanguageChange,
  messagesEndRef,
}: ChatWindowProps) {
  const [inputValue, setInputValue] = useState('');
  const [showActions, setShowActions] = useState(messages.length === 0);

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
      setShowActions(false);
    }
  };

  const handleQuickAction = (action: string) => {
    onSendMessage(action);
  };

  const handleResetChat = () => {
    onReset();
    setShowActions(true);
  };

  const headerText = language === "en" ? "RentVerse Assistant" : "RentVerse सहायक";
  const subtitleText = language === "en"
    ? "Get instant help with rentals, payments, orders, listings, and more."
    : "किराए, भुगतान, ऑर्डर, सूची और बहुत कुछ के साथ तुरंत सहायता प्राप्त करें।";
  const emptyStateText = language === "en"
    ? "Hi 👋 I'm RentVerse AI.\nHow can I help you today?"
    : "नमस्ते 👋 मैं RentVerse AI हूँ।\nमैं आज आपकी कैसे मदद कर सकता हूँ?";
  const placeholderText = language === "en"
    ? "Ask me anything..."
    : "मुझसे कुछ भी पूछें...";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-24 right-6 z-[9999] w-96 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:bottom-24 sm:w-80"
    >
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border px-6 py-4">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">{headerText}</h2>
                <p className="text-xs text-muted-foreground">{subtitleText}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={onMinimize}
                className="rounded-lg p-2 hover:bg-background transition-colors"
                title="Minimize"
              >
                <Minimize2 className="h-4 w-4 text-muted-foreground" />
              </button>
              <button
                onClick={onClose}
                className="rounded-lg p-2 hover:bg-background transition-colors"
                title="Close"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="h-96 space-y-4 overflow-y-auto bg-background p-4">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-4 text-4xl">👋</div>
            <p className="whitespace-pre-line text-sm text-muted-foreground">
              {emptyStateText}
            </p>
          </div>
        ) : (
          <>
            {messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm bg-muted px-4 py-2">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="h-2 w-2 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Quick Actions */}
      {showActions && messages.length === 0 && (
        <QuickActions
          language={language}
          onSelectAction={handleQuickAction}
        />
      )}

      {/* Input Area */}
      <div className="border-t border-border bg-card px-4 py-3 space-y-3">
        {/* Language Toggle & Reset */}
        <div className="flex items-center justify-between text-xs">
          <div className="flex gap-2">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              English
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'hi'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              हिंदी
            </button>
          </div>
          {messages.length > 0 && (
            <button
              onClick={handleResetChat}
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </button>
          )}
        </div>

        {/* Input Field */}
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={placeholderText}
            className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
            className="flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-primary-foreground transition-all hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
