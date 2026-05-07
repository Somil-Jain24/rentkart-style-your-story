import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Minimize2, ChevronUp } from "lucide-react";

interface FloatingButtonProps {
  isOpen: boolean;
  isMinimized: boolean;
  onToggle: () => void;
  onMinimize: () => void;
}

export function FloatingButton({
  isOpen,
  isMinimized,
  onToggle,
  onMinimize,
}: FloatingButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[9998]">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {isMinimized && isOpen && (
          <motion.button
            onClick={onMinimize}
            className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title="Open chat"
          >
            <ChevronUp className="h-5 w-5 text-primary-foreground" />
          </motion.button>
        )}

        <motion.button
          onClick={onToggle}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all ${
            isOpen && !isMinimized
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-primary hover:shadow-xl'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title={isOpen && !isMinimized ? 'Close chat' : 'Open chat'}
        >
          {isOpen && !isMinimized ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              exit={{ rotate: 0 }}
            >
              <span className="text-xl font-bold text-white">×</span>
            </motion.div>
          ) : (
            <motion.div
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 90 }}
            >
              <MessageCircle className="h-6 w-6 text-primary-foreground" />
            </motion.div>
          )}
        </motion.button>

        {/* Floating label */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-16 bottom-3 whitespace-nowrap rounded-lg bg-card px-3 py-2 text-sm font-medium shadow-lg border border-border"
          >
            Ask RentVerse AI
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
