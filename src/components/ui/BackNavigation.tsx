// src/components/navigation/BackNavigation.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

interface BackNavigationProps {
  fallbackHref?: string;
  className?: string;
}

export function BackNavigation({
  fallbackHref = "/dashboard",
  className = "",
}: BackNavigationProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 2) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <motion.button
      onClick={handleBack}
      className={`flex items-center text-[#A0A0C0] hover:text-white transition-colors ${className}`}
      whileHover={{ x: -8 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 backdrop-blur-xl border border-white/10">
        <FaArrowLeft className="text-sm" />
      </div>
      <span className="font-medium">Back</span>
    </motion.button>
  );
}
