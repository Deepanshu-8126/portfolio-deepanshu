// src/app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#06060B] flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-7xl md:text-9xl font-extrabold mb-4 shimmer-text">404</h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-[#A0A0C0]">
            Page Not Found
          </h2>
          <p className="text-base text-[#707090] mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <Link href="/dashboard" className="glass-btn-primary inline-flex items-center gap-2 px-6 py-3">
            ← Back to Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
