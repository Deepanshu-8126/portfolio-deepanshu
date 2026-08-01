"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TechStackGalaxy } from "@/components/webgl/TechStackGalaxy";
import { CertificateCarousel } from "@/components/ui/CertificateCarousel";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { FaPaperPlane, FaBriefcase, FaGraduationCap } from "react-icons/fa";

// Data Imports
import dashboardData from "@/data/dashboard.json";
import projectsData from "@/data/projects.json";
import hackathonsData from "@/data/hackathons.json";

gsap.registerPlugin(ScrollTrigger);

export default function SinglePagePortfolio() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const hackathonsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Helper to split text into spans for GitHub-like character animation
    const splitText = (selector: string) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        const text = el.textContent;
        if (!text) return;
        el.textContent = "";
        text.split("").forEach(char => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.opacity = "0";
          span.style.display = "inline-block";
          el.appendChild(span);
        });
      });
    };

    const ctx = gsap.context(() => {
      // Split the title text
      splitText(".split-char");

      // Hero Animation - GitHub style staggered character reveal
      gsap.fromTo(".split-char span", 
        { opacity: 0, y: 50, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, stagger: 0.05, duration: 1, ease: "back.out(1.7)", delay: 0.2 }
      );

      gsap.from(".hero-subtext", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 1
      });

      gsap.from(".hero-btn", {
        y: 20,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.2
      });

      // Subtle float for the profile image
      gsap.to(".hero-image", {
        y: -15,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      // Section Fade-ins on scroll
      const sections = [aboutRef, skillsRef, worksRef, hackathonsRef, contactRef];
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
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 relative z-10">
          
          <div className="flex-1 text-center lg:text-left z-10 flex flex-col justify-center mt-12 lg:mt-0">
            <h2 className="hero-subtext text-2xl md:text-3xl font-bold text-[#4CC9F0] mb-2 tracking-wide">
              Hello! I'm
            </h2>
            <h1 className="split-char text-6xl md:text-8xl lg:text-[100px] font-black uppercase tracking-tighter shimmer-text leading-none mb-6" style={{ perspective: "1000px" }}>
              Deepanshu Kapri
            </h1>
            
            <p className="hero-subtext text-xl md:text-2xl lg:text-3xl mb-12 text-[#E6E6FF] font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Engineering intelligence through <span className="neon-text-purple font-bold">Data Science</span> and precision <span className="text-glow-cyan font-bold">Analytics</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#works" className="hero-btn group glass-btn-primary px-8 py-4 text-lg font-bold flex items-center gap-3 overflow-hidden relative">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                Explore Data Archives
              </a>
              <a href="#contact" className="hero-btn glass-btn px-8 py-4 text-lg font-bold flex items-center gap-2 hover:border-[#4CC9F0]/50 transition-colors">
                <FaPaperPlane /> Contact Me
              </a>
            </div>
          </div>

          {/* Proper 2D Profile Image with GSAP Float - NO Distorted 3D Hologram */}
          <div className="flex-1 w-full max-w-sm lg:max-w-md mx-auto relative hero-image">
             <div className="absolute inset-0 bg-gradient-to-tr from-[#4CC9F0]/30 to-[#7209B7]/30 rounded-full blur-[80px] pointer-events-none transform scale-90" />
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(76,201,240,0.2)]">
               <img 
                 src={dashboardData.hero?.avatar || "/images/deepanshu_photo_portfolio.jpeg"} 
                 alt="Deepanshu Kapri"
                 className="w-full h-auto object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#06060B] via-transparent to-transparent opacity-80" />
             </div>
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

      {/* 5. HACKATHONS / MISSIONS SECTION */}
      <section id="hackathons" ref={hackathonsRef} className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
            <span className="text-[#4CC9F0]">04.</span> Hackathons
          </h2>
          <p className="text-[#A0A0C0] mb-16 max-w-2xl mx-auto text-center">
            Interactive experience archive of hackathons and competitions. I value learning over winning, growth over hype.
          </p>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4CC9F0] to-[#7209B7] neon-border"></div>

            <div className="space-y-12">
              {(hackathonsData || []).map((hackathon: any, index: number) => (
                <div key={hackathon.id || index} className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[7px] w-4 h-4 rounded-full bg-[#4CC9F0] shadow-[0_0_10px_#4CC9F0] z-10"></div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                  
                  <div className="w-full md:w-5/12 ml-12 md:ml-0">
                    <Tilt3DCard className="p-6 hover:bg-[#121218]/80 transition-colors bg-[#12121A]/60 rounded-xl border border-[#1F1F29]">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-[#E6E6FF]">
                            {hackathon.title}
                          </h4>
                          <p className="text-xs text-[#A0A0C0]">
                            {hackathon.location} • {hackathon.year}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            hackathon.status === "Winner"
                              ? "bg-green-500/20 text-green-400"
                              : hackathon.status === "Selected"
                                ? "bg-[#7209B7]/20 text-[#A855F7]"
                                : "bg-[#707090]/20 text-[#707090]"
                          }`}
                        >
                          {hackathon.status}
                        </span>
                      </div>
                      <p className="text-sm text-[#A0A0C0] mb-4 line-clamp-2">
                        {hackathon.description || "Participated in the Hackathon. Check details page for more."}
                      </p>
                      <a href={`/hackathons/${hackathon.id}`} className="text-xs font-semibold text-[#4CC9F0] hover:underline">
                        → View Details
                      </a>
                    </Tilt3DCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" ref={contactRef} className="py-32 border-t border-white/5 relative overflow-hidden bg-[#0A0A0F]/50">
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
