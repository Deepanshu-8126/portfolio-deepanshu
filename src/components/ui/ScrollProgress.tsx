// src/components/ui/ScrollProgress.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    // Calculate initial scroll height
    const updateScrollHeight = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollHeight(Math.max(height, 1)); // Prevent division by zero
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Initial calculation
    updateScrollHeight();

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScrollHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollHeight);
    };
  }, []);

  const progress = scrollHeight > 0 ? scrollY / scrollHeight : 0;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#4CC9F0]/20 z-50 origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress }}
      transition={{ duration: 0.1, ease: "linear" }}
    />
  );
}
