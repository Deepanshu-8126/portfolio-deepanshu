// src/app/hackathons/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { BackNavigation } from "@/components/ui/BackNavigation";
import hackathonsData from "@/data/hackathons.json";

const HACKATHONS = hackathonsData;

export default function HackathonsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0.05, 0.15],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF] overflow-hidden relative">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: backgroundOpacity }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </motion.div>

      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Navigation */}
          <BackNavigation className="mb-8" />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#E6E6FF] to-[#A0A0C0] bg-clip-text text-transparent">
                Mission Log
              </span>
            </motion.h1>
            <p className="text-xl text-[#A0A0C0]">
              Interactive experience archive of hackathons and competitions
            </p>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-20"
          >
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4CC9F0] to-[#7209B7]"></div>

              <div className="space-y-8 ml-12">
                {HACKATHONS.map((hackathon, index) => (
                  <Link key={hackathon.id} href={`/hackathons/${hackathon.id}`}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ x: 4, y: -2 }}
                    >
                      <GlassCard className="p-6 cursor-pointer hover:bg-[#121218]/80 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-[#E6E6FF] mb-1">
                              Hackathon #{index + 1}
                            </h3>
                            <h4 className="text-lg font-medium text-[#E6E6FF]">
                              {hackathon.title}
                            </h4>
                            <p className="text-sm text-[#A0A0C0]">
                              {hackathon.location} • {hackathon.year}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              hackathon.status === "Winner"
                                ? "bg-green-500/20 text-green-400"
                                : hackathon.status === "Selected"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-[#707090]/20 text-[#707090]"
                            }`}
                          >
                            {hackathon.status}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-[#707090]">
                          <span>{hackathon.duration}</span>
                          <span>→ View Details</span>
                        </div>
                      </GlassCard>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <GlassCard className="p-8">
              <blockquote className="text-lg italic text-[#A0A0C0]">
                "Every hackathon represents a real-world test of my skills,
                problem-solving abilities, and capacity to learn under pressure.
                I value learning over winning, growth over hype."
              </blockquote>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
