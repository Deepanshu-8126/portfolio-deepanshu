"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HoloPhoto3D } from "@/components/webgl/HoloPhoto3D";
import { TechStackGalaxy } from "@/components/webgl/TechStackGalaxy";
import { CertificateCarousel } from "@/components/ui/CertificateCarousel";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { FaPaperPlane, FaBriefcase, FaGraduationCap } from "react-icons/fa";

// Data Imports
import dashboardData from "@/data/dashboard.json";
import projectsData from "@/data/projects.json";

gsap.registerPlugin(ScrollTrigger);

export default function SinglePagePortfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-text-anim", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5
      });

      // Section Fade-ins on scroll
      const sections = [aboutRef, skillsRef, worksRef, contactRef];
      sections.forEach((sec) => {
        gsap.from(sec.current, {
          scrollTrigger: {
            trigger: sec.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="w-full relative z-10 text-[#E6E6FF]">
      
      {/* 1. HERO SECTION */}
      <section id="landing" ref={heroRef} className="min-h-screen flex items-center justify-center pt-20 pb-10">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left z-10">
            <h2 className="hero-text-anim text-2xl md:text-3xl font-bold text-[#4CC9F0] mb-2 tracking-wide">
              Hello! I'm
            </h2>
            <h1 className="hero-text-anim text-6xl md:text-8xl font-black uppercase tracking-tighter shimmer-text leading-none mb-6">
              Deepanshu <br /> Kapri
            </h1>
            <div className="hero-text-anim mb-8">
              <h3 className="text-xl text-[#A0A0C0] mb-2">An</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Aspiring <span className="neon-text-purple">Data Analyst</span>
              </h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#A0A0C0]">
                & Full-Stack Developer
              </h2>
            </div>
            
            <div className="hero-text-anim flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#contact" className="glass-btn-primary px-8 py-4 text-lg font-bold flex items-center gap-2">
                <FaPaperPlane /> Hire Me
              </a>
              <a href="#works" className="glass-btn px-8 py-4 text-lg font-bold flex items-center gap-2">
                <FaBriefcase /> View Works
              </a>
            </div>
          </div>

          {/* 3D Holo Photo - Replaces the rigged character */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl hero-text-anim relative">
             <div className="absolute inset-0 bg-gradient-radial from-[#7209B7]/20 to-transparent blur-3xl rounded-full" />
             <HoloPhoto3D photoUrl={dashboardData.hero?.avatar || "/images/deepanshu_photo_portfolio.jpeg"} />
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" ref={aboutRef} className="py-24 border-t border-white/5 bg-[#0A0A0F]/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            <span className="text-[#4CC9F0]">01.</span> About Me
          </h2>
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 bg-[#12121A]/60 backdrop-blur-xl">
            <p className="text-lg md:text-xl text-[#A0A0C0] leading-relaxed mb-8">
              {dashboardData.aboutSummary?.bio || "I am a BCA student passionate about unlocking business insights from data. I focus on project-based learning—working with real-world datasets in Python and SQL to build practical solutions."}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(dashboardData.education || []).map((edu: any, i: number) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                  <FaGraduationCap className="text-3xl text-[#7209B7] mt-1" />
                  <div>
                    <h4 className="font-bold text-white text-lg">{edu.degree}</h4>
                    <p className="text-sm text-[#4CC9F0]">{edu.institution}</p>
                    <p className="text-xs text-[#A0A0C0] mt-2">{edu.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SKILLS / TECH STACK SECTION */}
      <section id="skills" ref={skillsRef} className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-[#4CC9F0]">02.</span> Tech Stack
          </h2>
          <p className="text-[#A0A0C0] mb-12 max-w-2xl mx-auto">
            Interact with the 3D WebGL galaxy below to explore the technologies I use to build robust data solutions and full-stack applications.
          </p>
          <TechStackGalaxy />
          
          <div className="mt-32">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
               Certifications Vault
            </h2>
            <p className="text-[#A0A0C0] mb-12 max-w-2xl mx-auto">
              Scroll and explore my verified credentials in 3D space.
            </p>
            <CertificateCarousel certificates={dashboardData.certifications || []} />
          </div>
        </div>
      </section>

      {/* 4. FEATURED WORKS SECTION */}
      <section id="works" ref={worksRef} className="py-24 border-t border-white/5 bg-[#0A0A0F]/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
            <span className="text-[#4CC9F0]">03.</span> Featured Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(projectsData || []).slice(0, 6).map((project: any, idx: number) => (
              <ProjectCard key={project.id || idx} project={project} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" ref={contactRef} className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4CC9F0]/10 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter shimmer-text">
            Let's Talk
          </h2>
          <p className="text-xl text-[#A0A0C0] mb-12">
            Currently looking for new opportunities, internships, and exciting projects. 
            My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href="mailto:kaprideepanshu1@gmail.com" className="inline-block glass-btn-primary px-12 py-5 text-xl font-bold rounded-2xl hover:scale-110 transition-transform">
            Say Hello
          </a>
        </div>
      </section>

    </main>
  );
}
