"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { DataNode3D } from "@/components/webgl/DataNode3D";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cinematic GSAP Entrance Timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, rotationX: 45, filter: "blur(20px)" },
        { opacity: 1, y: 0, rotationX: 0, filter: "blur(0px)", duration: 1.5, delay: 0.2 }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 },
        "-=1"
      )
      .fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15 },
        "-=0.8"
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP
  }, []);

  return (
    <div ref={containerRef} className="min-h-[90vh] flex items-center justify-center relative z-10 w-full overflow-hidden">
      
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Left Content Area (Text) */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center mt-12 lg:mt-0">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 shimmer-text tracking-tighter"
            style={{ perspective: "1000px" }}
          >
            DEEPANSHU <br/> KAPRI
          </h1>

          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl mb-12 text-[#E6E6FF] font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Engineering intelligence through <span className="neon-text-purple font-bold">Data Science</span> and precision <span className="text-glow-cyan font-bold">Analytics</span>.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <Link
              href="/dashboard"
              className="group glass-btn-primary px-8 py-4 text-lg font-bold flex items-center justify-center gap-3 overflow-hidden relative"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              Enter Mission Control
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="glass-btn px-8 py-4 text-lg font-bold flex items-center justify-center hover:border-[#4CC9F0]/50 transition-colors"
            >
              Explore Data Archives
            </Link>
          </div>
        </div>

        {/* Right Content Area (3D WebGL Element) */}
        <div className="flex-1 w-full max-w-lg mx-auto lg:max-w-none relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4CC9F0]/20 to-[#7209B7]/20 rounded-full blur-[100px] pointer-events-none transform scale-75" />
          <DataNode3D />
        </div>

      </div>
    </div>
  );
}
