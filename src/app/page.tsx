// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-8"
        >
          Deepanshu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-[#A0A0C0] mb-12"
        >
          BCA Student | Data Science & Analytics Learner
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-[#4CC9F0]/10 text-[#4CC9F0] rounded-lg hover:bg-[#4CC9F0]/20 transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 bg-transparent border border-[#4CC9F0]/30 text-[#E6E6FF] rounded-lg hover:bg-[#4CC9F0]/10 transition-colors"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
