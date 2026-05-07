import React from "react";
import { motion } from "framer-motion";

interface QuickActionsProps {
  language: "en" | "hi";
  onSelectAction: (action: string) => void;
}

const QUICK_ACTIONS = {
  customer: {
    en: [
      "How do I rent a product?",
      "How does delivery work?",
      "What if I damage an item?",
      "How do refunds work?",
      "Can I cancel my booking?",
      "How do trust scores work?",
    ],
    hi: [
      "मैं एक उत्पाद कैसे किराए पर लूं?",
      "डिलीवरी कैसे काम करती है?",
      "अगर मैं किसी आइटम को नुकसान पहुंचाऊं तो?",
      "रिफंड कैसे काम करते हैं?",
      "क्या मैं अपनी बुकिंग रद्द कर सकता हूँ?",
      "ट्रस्ट स्कोर कैसे काम करते हैं?",
    ],
  },
  seller: {
    en: [
      "How do I list my product?",
      "How do payouts work?",
      "How much commission does RentVerse charge?",
      "How do I verify users?",
      "What happens if my product gets damaged?",
      "How can I increase visibility?",
    ],
    hi: [
      "मैं अपना उत्पाद कैसे सूचीबद्ध करूं?",
      "भुगतान कैसे काम करते हैं?",
      "RentVerse कितना कमीशन लेता है?",
      "मैं उपयोगकर्ताओं को कैसे सत्यापित करूं?",
      "अगर मेरा उत्पाद क्षतिग्रस्त हो जाए तो?",
      "मैं दृश्यता कैसे बढ़ा सकता हूँ?",
    ],
  },
  admin: {
    en: [
      "How many active rentals today?",
      "Show pending verification requests",
      "Show reported products",
      "Recent dispute activity",
      "Platform revenue analytics",
      "Fraud detection alerts",
    ],
    hi: [
      "आज कितने सक्रिय किराए हैं?",
      "लंबित सत्यापन अनुरोध दिखाएं",
      "रिपोर्ट किए गए उत्पाद दिखाएं",
      "हाल की विवाद गतिविधि",
      "प्लेटफॉर्म राजस्व विश्लेषण",
      "धोखाधड़ी पहचान सतर्कता",
    ],
  },
};

export function QuickActions({
  language,
  onSelectAction,
}: QuickActionsProps) {
  const actions = QUICK_ACTIONS.customer[language];

  return (
    <div className="border-t border-border bg-muted/30 px-4 py-3">
      <p className="mb-3 text-xs font-medium text-muted-foreground">
        {language === 'en' ? 'Quick questions' : 'त्वरित प्रश्न'}
      </p>
      <div className="space-y-2">
        {actions.map((action, idx) => (
          <motion.button
            key={action}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => onSelectAction(action)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-left text-xs hover:bg-muted hover:border-primary transition-colors text-foreground"
          >
            {action}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
