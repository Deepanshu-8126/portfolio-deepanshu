// src/app/career/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { BackNavigation } from "@/components/ui/BackNavigation";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF]">
      <ScrollProgress />
      <FloatingNavbar />

      <div className="relative z-10 pt-16 pb-16">
        {" "}
        {/* ✅ Fixed spacing */}
        <div className="container mx-auto px-6">
          <BackNavigation className="mb-8" />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Career Journey
            </h1>
            <p className="text-xl text-[#A0A0C0] mb-8">
              My path from BCA student to future Data Scientist
            </p>

            <GlassCard className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#4CC9F0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Current</h3>
                  <p className="text-[#A0A0C0]">
                    BCA Student | Data Analyst Learner
                  </p>
                  <p className="text-sm text-[#707090]">2024-2025</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#7209B7]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Next</h3>
                  <p className="text-[#A0A0C0]">Junior Data Analyst</p>
                  <p className="text-sm text-[#707090]">2026</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#A0A0C0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Future</h3>
                  <p className="text-[#A0A0C0]">Data Scientist</p>
                  <p className="text-sm text-[#707090]">2027+</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#1F1F29]">
                <blockquote className="text-lg italic text-[#A0A0C0]">
                  "I'm building my career step by step — from foundational data
                  analysis skills to advanced machine learning capabilities.
                  Every project and hackathon represents a milestone in this
                  journey."
                </blockquote>
              </div>
            </GlassCard>
          </motion.div>

          {/* Roadmap Section - Detailed View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Detailed Roadmap
            </h2>

            {/* Current Stage */}
            <Link href="/roadmap/current" className="block mb-8">
              <GlassCard className="p-6 hover:bg-[#121218]/60 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-[#4CC9F0]/20 text-[#4CC9F0] rounded-full text-sm font-medium mb-2">
                      Current Stage
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      BCA Student | Data Analyst Learner
                    </h3>
                    <p className="text-[#A0A0C0] mb-3">2024-2025</p>
                    <p className="text-[#E6E6FF]">
                      Currently pursuing Bachelor of Computer Applications (BCA)
                      with a strong focus on building foundational data analysis
                      skills through hands-on projects and real-world datasets.
                    </p>
                  </div>
                  <div className="text-[#4CC9F0] font-medium">
                    View Details →
                  </div>
                </div>
              </GlassCard>
            </Link>

            {/* Next Stage */}
            <Link href="/roadmap/next" className="block mb-8">
              <GlassCard className="p-6 hover:bg-[#121218]/60 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-[#7209B7]/20 text-[#7209B7] rounded-full text-sm font-medium mb-2">
                      Next Stage
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Junior Data Analyst
                    </h3>
                    <p className="text-[#A0A0C0] mb-3">2026</p>
                    <p className="text-[#E6E6FF]">
                      Targeting Junior Data Analyst roles where I can apply my
                      analytical skills to solve real business problems and
                      contribute to data-driven decision making.
                    </p>
                  </div>
                  <div className="text-[#7209B7] font-medium">
                    View Details →
                  </div>
                </div>
              </GlassCard>
            </Link>

            {/* Future Stage */}
            <Link href="/roadmap/future" className="block">
              <GlassCard className="p-6 hover:bg-[#121218]/60 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-[#A0A0C0]/20 text-[#A0A0C0] rounded-full text-sm font-medium mb-2">
                      Future Stage
                    </div>
                    <h3 className="text-xl font-bold mb-2">Data Scientist</h3>
                    <p className="text-[#A0A0C0] mb-3">2027+</p>
                    <p className="text-[#E6E6FF]">
                      Long-term goal to become a Data Scientist capable of
                      building predictive models, implementing machine learning
                      solutions, and driving advanced analytics initiatives.
                    </p>
                  </div>
                  <div className="text-[#A0A0C0] font-medium">
                    View Details →
                  </div>
                </div>
              </GlassCard>
            </Link>
          </motion.div>

          {/* Philosophy Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <GlassCard className="p-8">
              <blockquote className="text-lg italic text-[#A0A0C0]">
                "My career journey reflects my growth mindset — every skill
                learned, every project completed, and every hackathon
                participated in brings me closer to becoming a world-class Data
                Scientist."
              </blockquote>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
