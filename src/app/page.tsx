// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ParticleGrid } from "@/components/ui/ParticleGrid";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF] flex items-center justify-center relative overflow-hidden futuristic-grid">
      <ParticleGrid />
      
      {/* Subtle decorative blurred gradient circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#4CC9F0]/20 to-[#7209B7]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-6 shimmer-text"
          >
            DEEPANSHU KAPRI
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl mb-12 neon-text font-medium"
          >
            Data Science & Analytics
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
          >
            <Link
              href="/dashboard"
              className="glass-btn-primary px-10 py-4 text-lg font-bold rounded-xl text-center w-full sm:w-auto hover:scale-105 transition-transform"
            >
              Enter Dashboard
            </Link>
            <Link
              href="/projects"
              className="glass-btn px-10 py-4 text-lg font-bold rounded-xl text-center w-full sm:w-auto hover:scale-105 transition-transform"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
