"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = "https://wa.me/5545984163995";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="p-4">
        <MessageCircle className="w-6 h-6" />
      </div>
      <motion.span
        className="pr-5 font-medium text-sm overflow-hidden whitespace-nowrap"
        initial={{ width: 0, opacity: 0 }}
        animate={{
          width: isHovered ? "auto" : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        Fale comigo no WhatsApp
      </motion.span>
    </motion.a>
  );
}