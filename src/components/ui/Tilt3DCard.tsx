"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

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
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateY = ((mouseX - width / 2) / (width / 2)) * tiltIntensity;
    const rotateX = ((height / 2 - mouseY) / (height / 2)) * tiltIntensity;
    
    setRotation({ x: rotateX, y: rotateY });
    setMousePos({ 
      x: (mouseX / width) * 100, 
      y: (mouseY / height) * 100 
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform: `perspective(1200px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovered ? "none" : "transform 0.5s ease-out",
        transformStyle: "preserve-3d",
      }}
      className={`relative rounded-2xl bg-[#0D0D14]/60 backdrop-blur-xl border border-white/5 ${
        neonBorder ? "neon-border" : ""
      } ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 150px at ${mousePos.x}% ${mousePos.y}%, ${glowColor}15, transparent)`,
          }}
        />
      )}
      <div className="relative z-20 h-full w-full">{children}</div>
    </motion.div>
  );
}
