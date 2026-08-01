"use client";

import React from "react";

export function ParticleGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dot Grid Overlay */}
      <div 
        className="absolute inset-0 futuristic-grid opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Scan Line Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(76,201,240,0.05)] to-transparent h-4 w-full animate-float-slow"
      />

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#4CC9F0]/10 blur-[120px] animate-orb-float-1 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] rounded-full bg-[#7209B7]/10 blur-[150px] animate-orb-float-2 mix-blend-screen" />
    </div>
  );
}
