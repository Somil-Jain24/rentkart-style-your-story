import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Minimize2, RotateCcw, Loader } from "lucide-react";
import { ChatWindow } from "./ChatWindow";
import { FloatingButton } from "./FloatingButton";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface UserContext {
  userType?: "customer" | "seller" | "admin";
  currentPage?: string;
  hasOrders?: boolean;
  hasListings?: boolean;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response - replace with actual API call
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateAIResponse(content),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 800);
  };

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Customer responses
    if (lowerMessage.includes("rent") && lowerMessage.includes("product")) {
      return language === "en"
        ? "To rent a product on RentVerse, browse our marketplace, select an item, check availability, and place a rental request. The owner will review and confirm within 24 hours. You'll need a valid payment method for the refundable hold."
        : "RentVerse पर कोई उत्पाद किराए पर लेने के लिए, हमारे बाजार को ब्राउज़ करें, एक आइटम चुनें, उपलब्धता जांचें और एक किराया अनुरोध रखें।";
    }

    if (lowerMessage.includes("delivery")) {
      return language === "en"
        ? "We offer doorstep delivery to most cities across India. Delivery time is typically 2-5 business days. All items are tracked, insured, and professionally packed."
        : "हम भारत के अधिकांश शहरों में घर पर डिलीवरी प्रदान करते हैं। डिलीवरी समय आमतौर पर 2-5 कार्य दिवस है।";
    }

    if (lowerMessage.includes("damage") || lowerMessage.includes("damaged")) {
      return language === "en"
        ? "If an item arrives damaged, you can open a dispute within 24 hours of delivery with photos. We'll assign an Ops Manager to verify. If confirmed, you get a full refund including the hold and rental fee."
        : "यदि कोई आइटम क्षतिग्रस्त आता है, तो आप डिलीवरी के 24 घंटे के भीतर फोटो के साथ विवाद खोल सकते हैं।";
    }

    if (lowerMessage.includes("refund")) {
      return language === "en"
        ? "After a successful return inspection, your refundable hold is released within 48 hours back to your original payment method. The rental fee amount depends on the specific item and duration."
        : "सफल वापसी निरीक्षण के बाद, आपकी प्रतिदेय होल्ड 48 घंटे के भीतर आपकी मूल भुगतान विधि में वापस आ जाती है।";
    }

    if (lowerMessage.includes("cancel")) {
      return language === "en"
        ? "You can cancel free of charge up to 5 days before the rental start date. Within 5 days of start date, 25% of the rental fee is non-refundable. The refundable hold is always returned in full."
        : "आप किराए की शुरुआत से 5 दिन पहले निःशुल्क रद्द कर सकते हैं।";
    }

    // Seller responses
    if (lowerMessage.includes("list") && lowerMessage.includes("product")) {
      return language === "en"
        ? "To list a product on RentVerse, go to your Seller Dashboard > New Listing. Add photos, title, description, rental price, and rental terms. Items need verification before going live. We recommend 5+ clear photos from different angles."
        : "RentVerse पर एक उत्पाद सूचीबद्ध करने के लिए, अपने विक्रेता डैशबोर्ड पर जाएं।";
    }

    if (lowerMessage.includes("payout") || lowerMessage.includes("payment")) {
      return language === "en"
        ? "Sellers receive payouts within 24 hours of successful return inspection. Payments are transferred via NEFT/IMPS to your registered bank account. Check your Seller Dashboard > Payouts for transaction history."
        : "विक्रेताओं को सफल रिटर्न निरीक्षण के 24 घंटे के भीतर भुगतान मिलता है।";
    }

    if (lowerMessage.includes("commission")) {
      return language === "en"
        ? "RentVerse charges a 20% platform commission on each successful rental. This includes payment processing, insurance, and support. The commission is deducted before payout to sellers."
        : "RentVerse प्रत्येक सफल किराए पर 20% प्लेटफॉर्म कमीशन लेता है।";
    }

    if (lowerMessage.includes("verify") && lowerMessage.includes("user")) {
      return language === "en"
        ? "To verify renters, check their trust score, past rental history, and reviews. We also conduct KYC verification for all users. You can block specific renters in your account settings."
        : "किरायेदारों को सत्यापित करने के लिए, उनके विश्वास स्कोर और इतिहास जांचें।";
    }

    if (lowerMessage.includes("damaged") && lowerMessage.includes("product")) {
      return language === "en"
        ? "If your rented product gets damaged, the renter can file a damage claim. We verify the damage extent and may deduct from their refundable hold. Document all damage with photos for claims."
        : "यदि आपका किराए का उत्पाद क्षतिग्रस्त हो जाता है, तो किरायेदार नुकसान की घोषणा कर सकता है।";
    }

    // Default response
    return language === "en"
      ? "I'm here to help! You can ask me about renting, listing items, payments, disputes, trust & safety, or any other RentVerse-related questions. How can I assist you today?"
      : "मैं आपकी मदद के लिए यहाँ हूँ! आप मुझसे किराए, वस्तुओं की सूची, भुगतान, विवाद या अन्य RentVerse-संबंधित प्रश्नों के बारे में पूछ सकते हैं।";
  };

  const handleReset = () => {
    setMessages([]);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            language={language}
            onSendMessage={handleSendMessage}
            onClose={() => setIsOpen(false)}
            onMinimize={() => setIsMinimized(true)}
            onReset={handleReset}
            onLanguageChange={setLanguage}
            messagesEndRef={messagesEndRef}
          />
        )}
      </AnimatePresence>

      <FloatingButton
        isOpen={isOpen}
        isMinimized={isMinimized}
        onToggle={toggleOpen}
        onMinimize={() => setIsMinimized(!isMinimized)}
      />
    </>
  );
}
