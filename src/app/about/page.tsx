// src/app/about/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BackNavigation } from "@/components/ui/BackNavigation";
import aboutData from "@/data/about.json";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
const ABOUT_DATA = aboutData;

export default function AboutPage() {
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
      <ScrollProgress />

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
                About My System
              </span>
            </motion.h1>
            <p className="text-xl text-[#A0A0C0]">
              A personal profile of a future Data Scientist
            </p>
          </motion.div>

          {/* Core Identity Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-20"
          >
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-[#4CC9F0]">
                    Core Identity
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-[#707090]">
                        Current Role
                      </span>
                      <p className="text-[#E6E6FF]">
                        {ABOUT_DATA.core.currentRole}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-[#707090]">
                        Institution
                      </span>
                      <p className="text-[#E6E6FF]">
                        {ABOUT_DATA.core.college}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-[#707090]">Graduation</span>
                      <p className="text-[#E6E6FF]">
                        {ABOUT_DATA.core.graduation}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-[#7209B7]">
                    Future Trajectory
                  </h2>
                  <div className="space-y-3">
                    {ABOUT_DATA.core.futurePath.map((role, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full mr-3 ${
                            index === 0
                              ? "bg-[#4CC9F0]"
                              : index === 1
                                ? "bg-[#7209B7]"
                                : index === 2
                                  ? "bg-[#A0A0C0]"
                                  : "bg-[#707090]"
                          }`}
                        ></div>
                        <span className="text-[#E6E6FF]">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-[#1F1F29]">
                <p className="text-[#E6E6FF] italic">
                  "{ABOUT_DATA.core.currentFocus}"
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Learning Engine */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-20"
          >
            <SectionHeader title="Learning Engine" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <GlassCard className="p-6">
                <h3 className="font-bold text-[#E6E6FF] mb-3">
                  Primary Language
                </h3>
                <div className="text-3xl font-bold text-[#4CC9F0]">
                  {ABOUT_DATA.learningEngine.primaryLanguage}
                </div>
                <p className="text-sm text-[#A0A0C0] mt-2">
                  Core programming language for data analysis and automation
                </p>
              </GlassCard>
              <GlassCard className="p-6">
                <h3 className="font-bold text-[#E6E6FF] mb-3">Key Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_DATA.learningEngine.libraries.map((lib) => (
                    <span
                      key={lib}
                      className="px-3 py-1 bg-[#1F1F29] text-[#A0A0C0] rounded-full text-sm"
                    >
                      {lib}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ABOUT_DATA.learningEngine.focusAreas.map((area, index) => (
                <GlassCard key={area.area} className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-[#E6E6FF]">{area.area}</h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        area.status === "Practicing"
                          ? "bg-[#4CC9F0]/20 text-[#4CC9F0]"
                          : area.status === "Learning"
                            ? "bg-[#7209B7]/20 text-[#7209B7]"
                            : area.status === "Planned"
                              ? "bg-[#A0A0C0]/20 text-[#A0A0C0]"
                              : "bg-[#707090]/20 text-[#707090]"
                      }`}
                    >
                      {area.status}
                    </span>
                  </div>
                  <p className="text-sm text-[#A0A0C0]">{area.description}</p>
                </GlassCard>
              ))}
            </div>

            <GlassCard className="p-6 mt-6">
              <blockquote className="text-[#A0A0C0] italic">
                "{ABOUT_DATA.learningEngine.learningPhilosophy}"
              </blockquote>
            </GlassCard>
          </motion.div>

          {/* Personality Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-20"
          >
            <SectionHeader title="Personality Layer" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard className="p-6">
                <h3 className="font-bold text-[#E6E6FF] mb-3">
                  Discipline & Routine
                </h3>
                <p className="text-[#E6E6FF] mb-3">
                  {ABOUT_DATA.personality.discipline}
                </p>
                <p className="text-[#A0A0C0] italic">
                  "{ABOUT_DATA.personality.mindset}"
                </p>
              </GlassCard>
              <GlassCard className="p-6">
                <h3 className="font-bold text-[#E6E6FF] mb-3">
                  Creative Interests
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {ABOUT_DATA.personality.creativeInterests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2 py-1 bg-[#1F1F29] text-[#A0A0C0] rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_DATA.personality.coreValues.map((value) => (
                    <span
                      key={value}
                      className="px-2 py-1 bg-[#7209B7]/20 text-[#7209B7] rounded-full text-xs"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center"
          >
            <GlassCard className="p-8">
              <blockquote className="text-lg italic text-[#A0A0C0]">
                "I'm early in my journey — but I'm dangerous. Every line of
                code, every analysis, and every hackathon represents a step
                toward becoming a skilled Data Scientist who can solve real
                business problems."
              </blockquote>
              <p className="text-sm text-[#707090] mt-4">
                — {ABOUT_DATA.core.name}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
