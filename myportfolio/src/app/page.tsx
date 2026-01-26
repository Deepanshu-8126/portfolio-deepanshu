// src/app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { GlassCard } from "@/components/ui/GlassCard";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Data Analyst",
    "Python Developer",
    "AI Engineer",
    "Problem Solver",
  ];

  useEffect(() => {
    setIsMounted(true);

    // Role rotation effect
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF] overflow-hidden relative">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Navbar - Only one navbar */}
      <FloatingNavbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -180, -360] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            delay: 5,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name - Cinematic Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#E6E6FF] to-[#A0A0C0] bg-clip-text text-transparent">
              Deepanshu
            </span>
          </motion.h1>

          {/* Dynamic Role - Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="text-xl md:text-2xl text-[#A0A0C0] flex items-center justify-center gap-2">
              <span>BCA Student |</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="font-medium text-[#4CC9F0]"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Subtitle - Professional Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#707090] max-w-2xl mx-auto mb-8"
          >
            Building real-world data solutions with Python, SQL, and honest
            learning.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link href="/dashboard">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(76, 201, 240, 0.2)",
                  boxShadow: "0 0 20px rgba(76, 201, 240, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#121218]/60 backdrop-blur-xl border border-[#4CC9F0]/30 text-[#4CC9F0] rounded-xl font-medium text-lg hover:bg-[#4CC9F0]/10 transition-all duration-300"
              >
                Explore My Journey →
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Preview - Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            <GlassCard className="p-4">
              <div className="text-2xl font-bold text-[#4CC9F0]">06</div>
              <div className="text-xs text-[#A0A0C0]">Projects</div>
            </GlassCard>
            <GlassCard className="p-4">
              <div className="text-2xl font-bold text-[#7209B7]">03</div>
              <div className="text-xs text-[#A0A0C0]">Hackathons</div>
            </GlassCard>
            <GlassCard className="p-4">
              <div className="text-2xl font-bold text-[#4CC9F0]">500+</div>
              <div className="text-xs text-[#A0A0C0]">Hours</div>
            </GlassCard>
            <GlassCard className="p-4">
              <div className="text-2xl font-bold text-[#7209B7]">Daily</div>
              <div className="text-xs text-[#A0A0C0]">Gym</div>
            </GlassCard>
          </motion.div>

          {/* Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="mt-12"
          >
            <GlassCard className="p-6 max-w-2xl mx-auto">
              <p className="text-[#A0A0C0] italic text-sm">
                "I am early in my journey, but I am extremely serious about
                becoming a world-class Data Scientist."
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
