// src/app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-medium mb-6 text-[#A0A0C0]">
            Page Not Found
          </h2>
          <p className="text-lg text-[#707090] mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <Link href="/dashboard">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(76, 201, 240, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#121218]/60 backdrop-blur-xl border border-[#4CC9F0]/30 text-[#4CC9F0] rounded-lg font-medium hover:bg-[#4CC9F0]/10 transition-all duration-300"
            >
              ← Back to Dashboard
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
