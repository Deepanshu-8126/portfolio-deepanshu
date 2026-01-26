// src/app/not-found.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { analytics } from "@/lib/analytics";

export default function NotFound() {
  // Track 404 page view
  if (typeof window !== "undefined") {
    analytics.trackEvent({
      name: "page_not_found",
      params: { url: window.location.pathname },
    });
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold mb-6 text-[#4CC9F0]"
        >
          404
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-[#E6E6FF]"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-[#A0A0C0] mb-8"
        >
          Looks like you've wandered into uncharted territory. This route
          doesn't exist in my production system.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button variant="primary" href="/">
            Return to Home
          </Button>
          <Button variant="secondary" href="/contact">
            Contact Me
          </Button>
        </motion.div>

        {/* Debug Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-12 text-xs text-[#707090]"
        >
          <p className="mb-2">Error Details:</p>
          <div className="bg-[#121218]/60 backdrop-blur-xl border border-[#1F1F29] rounded-lg p-4 text-left">
            <p>
              <strong>URL:</strong>{" "}
              {typeof window !== "undefined"
                ? window.location.pathname
                : "Unknown"}
            </p>
            <p>
              <strong>Status:</strong> 404 - Page Not Found
            </p>
            <p>
              <strong>Environment:</strong> Production-ready error handling
            </p>
          </div>
          <p className="mt-4">
            Built by a serious learner with production-grade systems thinking
          </p>
        </motion.div>
      </div>
    </div>
  );
}
