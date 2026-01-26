// src/components/ui/ScrollProgress.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? scrollY / scrollHeight : 0;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#4CC9F0]/20 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: progress }}
      transition={{ duration: 0.1 }}
      style={{ originX: 0 }}
    />
  );
}

export default ScrollProgress;
