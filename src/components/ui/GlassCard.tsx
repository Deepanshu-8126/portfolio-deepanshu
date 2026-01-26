// src/components/ui/GlassCard.tsx
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, forwardRef } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "stat" | "activity" | "action";
  gradient?: string;
  delay?: number;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      className = "",
      variant = "default",
      gradient = "from-blue-400/10 to-cyan-400/10",
      delay = 0,
      ...props
    },
    ref,
  ) => {
    const baseClasses = `
      relative overflow-hidden rounded-2xl
      backdrop-blur-xl border border-white/10
      bg-gradient-to-br from-[#121218]/80 to-[#0C0C12]/90
      transition-all duration-500
      ${className}
    `;

    const variantClasses = {
      default: "p-6",
      stat: "p-6",
      activity: "p-4",
      action: "p-6 cursor-pointer hover:bg-[#121218]/90",
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay,
          duration: 0.6,
          ease: "easeOut",
        }}
        whileHover={{
          y: -8,
          boxShadow: [
            "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            `0 0 0 1px rgba(67, 201, 240, 0.15)`,
            `0 0 0 2px rgba(67, 201, 240, 0.08)`,
          ].join(", "),
        }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} ${variantClasses[variant]}`}
        {...props}
      >
        {/* Gradient Edge Effect - Linear (Works out of box) */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 hover:opacity-30 transition-opacity duration-700 pointer-events-none`}
        ></div>

        {/* Inner Glow - Very Subtle */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-15 transition-opacity duration-700 pointer-events-none"
          style={{
            boxShadow: "inset 0 0 25px rgba(67, 201, 240, 0.2)",
          }}
        ></div>

        {children}

        {/* Depth Shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-black/20 to-transparent opacity-40 rounded-b-2xl"></div>
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";
