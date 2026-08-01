"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode, forwardRef, useRef, useState } from "react";

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
    forwardedRef
  ) => {
    const localRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const baseClasses = `
      relative overflow-hidden rounded-2xl
      backdrop-blur-xl border border-white/10
      bg-gradient-to-br from-[#0D0D14]/60 to-[#080810]/80
      transition-all duration-500 neon-border
      ${className}
    `;

    const variantClasses = {
      default: "p-6",
      stat: "p-6",
      activity: "p-4",
      action: "p-6 cursor-pointer hover:bg-[#121218]/90",
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const el = localRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const width = rect.width;
      const height = rect.height;

      const rotateY = ((x - width / 2) / (width / 2)) * 6; // max 6deg
      const rotateX = ((height / 2 - y) / (height / 2)) * 6;

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setRotation({ x: 0, y: 0 });
    };

    return (
      <motion.div
        ref={(node) => {
          // Handle both refs
          (localRef as any).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay,
          duration: 0.6,
          ease: "easeOut",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          ...(isHovered ? { transition: "none" } : { transition: "transform 0.5s ease-out" })
        }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClasses} ${variantClasses[variant]}`}
        {...props}
      >
        {/* Gradient Edge Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 hover:opacity-30 transition-opacity duration-700 pointer-events-none`}
        ></div>

        {/* Inner Glow */}
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
  }
);

GlassCard.displayName = "GlassCard";
