"use client";

import { ReactNode, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

interface Tilt3DCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  glowColor?: string;
  neonBorder?: boolean;
}

export function Tilt3DCard({
  children,
  className = "",
  tiltIntensity = 8,
  glowColor = "#4CC9F0",
  neonBorder = true,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Create GSAP quickTo functions for smooth physics-based rotation
  const xTo = useRef<gsap.QuickToFunc>();
  const yTo = useRef<gsap.QuickToFunc>();
  const gradientX = useRef<gsap.QuickToFunc>();
  const gradientY = useRef<gsap.QuickToFunc>();

  useEffect(() => {
    if (!cardRef.current) return;
    
    // Initialize GSAP quick setters for butter-smooth animation
    xTo.current = gsap.quickTo(cardRef.current, "rotationX", { duration: 0.5, ease: "power3.out" });
    yTo.current = gsap.quickTo(cardRef.current, "rotationY", { duration: 0.5, ease: "power3.out" });
    
    // Inner parallax content
    if (contentRef.current) {
      gsap.set(contentRef.current, { z: 50 }); // Push content forward in 3D space
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateY = ((mouseX - width / 2) / (width / 2)) * tiltIntensity;
    const rotateX = ((height / 2 - mouseY) / (height / 2)) * tiltIntensity;
    
    if (xTo.current && yTo.current) {
      xTo.current(rotateX);
      yTo.current(rotateY);
    }

    // Update gradient position
    const glowEl = cardRef.current.querySelector('.glow-effect') as HTMLElement;
    if (glowEl) {
      const percX = (mouseX / width) * 100;
      const percY = (mouseY / height) * 100;
      glowEl.style.background = `radial-gradient(circle 200px at ${percX}% ${percY}%, ${glowColor}25, transparent)`;
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (xTo.current && yTo.current) {
      xTo.current(0);
      yTo.current(0);
    }
    // Also reset inner content parallax
    if (contentRef.current) {
      gsap.to(contentRef.current, { x: 0, y: 0, duration: 0.5, ease: "power3.out" });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="perspective-container"
      style={{ perspective: "1500px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        className={`relative h-full rounded-2xl bg-[#0D0D14]/70 backdrop-blur-2xl border border-white/5 overflow-hidden shadow-2xl ${
          neonBorder ? "neon-border" : ""
        } ${className}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Hover Glow Effect */}
        <div
          className={`glow-effect pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Content wrapper for inner parallax */}
        <div ref={contentRef} className="relative z-20 h-full w-full" style={{ transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
