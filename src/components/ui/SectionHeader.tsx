"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export function SectionHeader({
  title,
  children,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-8 ${className}`}
    >
      <h2 className="text-2xl font-bold mb-4 pb-2 text-[#E6E6FF] shimmer-text relative inline-block">
        {title}
        {/* Neon Accent Line */}
        <div className="absolute -bottom-1 left-0 h-0.5 w-16 bg-gradient-to-r from-[#4CC9F0] to-[#7209B7] rounded-full shadow-[0_0_10px_#4CC9F0,0_0_20px_#7209B7]" />
      </h2>
      <div className="mt-4">
        {children}
      </div>
    </motion.div>
  );
}
