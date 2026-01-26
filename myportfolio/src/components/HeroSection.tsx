// src/components/HeroSection.tsx
"use client";

import TypewriterText from "./TypewriterText";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isRecruiter, setIsRecruiter] = useState(false);

  useEffect(() => {
    const mode = typeof window !== "undefined" && localStorage.getItem("recruiterMode") === "true";
    setIsRecruiter(mode);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Vushal Joshi</h1>
      
      <div className="text-xl md:text-2xl text-text-secondary mb-6">
        <TypewriterText
          texts={["Data Scientist", "AI Engineer", "Urban Intelligence Builder"]}
          loop={true}
        />
      </div>

      {isRecruiter ? (
        <div className="max-w-2xl mx-auto text-left mt-6 space-y-2 text-sm mb-10 text-white">
          <div><span className="text-text-secondary">🎯 Role:</span> AI Engineer / Data Scientist</div>
          <div><span className="text-text-secondary">🚀 Open to:</span> Full-time roles (2026)</div>
          <div><span className="text-text-secondary">🛠️ Stack:</span> Python, ML, Node.js, SQL, LLMs</div>
          <div><span className="text-text-secondary">📍 Location:</span> Remote / India</div>
          <div><span className="text-text-secondary">📈 Proof:</span> 4+ production AI systems deployed</div>
        </div>
      ) : (
        <p className="max-w-2xl mx-auto text-text-secondary mb-10">
          I build AI systems that solve real urban challenges — from emergency response to infrastructure planning.
        </p>
      )}

      <a
        href="#projects"
        className="inline-block px-8 py-3 bg-surface/80 backdrop-blur-xl border border-border rounded-lg hover:bg-primary/20 transition-colors font-medium"
      >
        Explore My Work →
      </a>
    </motion.div>
  );
}