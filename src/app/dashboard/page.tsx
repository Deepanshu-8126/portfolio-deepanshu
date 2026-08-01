// src/app/dashboard/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaPaperPlane,
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaTimes,
  FaSearchPlus,
} from "react-icons/fa";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillCard } from "@/components/dashboard/SkillCard";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ParticleGrid } from "@/components/ui/ParticleGrid";
import { TechStackGalaxy } from "@/components/webgl/TechStackGalaxy";
import { CertificateCarousel } from "@/components/ui/CertificateCarousel";

// ✅ JSON IMPORTS
import dashboardData from "@/data/dashboard.json";
import projectsData from "@/data/projects.json";
import hackathonsData from "@/data/hackathons.json";

// ✅ COMBINE DATA SOURCES
const DASHBOARD_DATA: any = {
  ...dashboardData,
  projects: Array.isArray(projectsData) && projectsData.length > 0 ? projectsData : dashboardData.projects || [],
  experience: Array.isArray(hackathonsData) && hackathonsData.length > 0
    ? hackathonsData.map((hackathon: any, index: number) => ({
        type: "hackathon",
        title: hackathon.title || `Hackathon ${index + 1}`,
        description:
          hackathon.description ||
          `Participated in ${hackathon.title || "a hackathon"}`,
        date: hackathon.year || "2025",
        role: hackathon.role || "Participant",
      }))
    : dashboardData.experience || [],
};

export default function DashboardPage() {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF] overflow-hidden relative futuristic-grid">
      <ParticleGrid />
      <ScrollProgress />

      {/* Background Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4CC9F0]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#7209B7]/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Main Container */}
      <div className="relative z-10 pt-20 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          
          {/* ============================================================
              1. HERO SECTION - CLEAN PROFILE & DIRECT CTAs
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">

              {/* PROFILE IMAGE - EXTRA LARGE & PROFESSIONAL GLASS CARD FRAME */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="flex-shrink-0 relative group hologram-frame"
              >
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#0A0A0F] bg-[#12121A] shadow-inner relative z-10">
                  <img
                    src={DASHBOARD_DATA.hero?.avatar || "/images/deepanshu_photo_portfolio.jpeg"}
                    alt={DASHBOARD_DATA.hero?.name || "Deepanshu Kapri"}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/profile-pic.jpg";
                    }}
                  />
                </div>
              </motion.div>

              {/* HERO TEXT & MAIN CTAS */}
              <div className="flex-1 text-center md:text-left">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl font-bold mb-1 tracking-wide neon-text"
                >
                  Hi, I&apos;m
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 tracking-tight shimmer-text"
                >
                  {DASHBOARD_DATA.hero?.name || "Deepanshu Kapri"}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-[#A0A0C0] font-medium mb-3"
                >
                  {DASHBOARD_DATA.hero?.title || "Aspiring Data Analyst & Data Scientist"}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm md:text-base text-[#707090] max-w-xl mb-6 leading-relaxed"
                >
                  {DASHBOARD_DATA.hero?.subtitle ||
                    "Building real-world data solutions with Python, SQL, and honest learning."}
                </motion.p>

                {/* Tools Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center md:justify-start gap-2 mb-8"
                >
                  {(DASHBOARD_DATA.hero?.tools || ["Python", "SQL", "Pandas", "Excel"]).map((tool: string) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-[#1F1F29]/80 border border-[#1F1F29] text-[#A0A0C0] text-xs font-medium rounded-full hover:border-[#4CC9F0]/40 hover:text-[#4CC9F0] transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </motion.div>

                {/* MAIN ACTION BUTTONS: HIRE ME & MY WORKS */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap items-center justify-center md:justify-start gap-4"
                >
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#4CC9F0] to-[#7209B7] text-white font-semibold text-sm shadow-lg shadow-[#4CC9F0]/25 hover:shadow-[#4CC9F0]/40 hover:scale-105 transition-all"
                  >
                    <FaPaperPlane />
                    <span>Hire Me</span>
                  </Link>

                  <Link
                    href="/projects"
                    className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1F1F29]/70 border border-[#4CC9F0]/30 text-[#E6E6FF] font-semibold text-sm hover:bg-[#4CC9F0]/10 hover:border-[#4CC9F0] hover:text-[#4CC9F0] transition-all"
                  >
                    <FaBriefcase />
                    <span>My Works</span>
                  </Link>

                  <Link
                    href="/resume"
                    className="px-5 py-3.5 rounded-xl bg-transparent border border-[#1F1F29] text-[#A0A0C0] hover:text-white hover:border-[#707090] transition-all text-sm font-medium"
                  >
                    View Resume →
                  </Link>
                </motion.div>
              </div>

            </div>
          </motion.div>


          {/* ============================================================
              2. ABOUT ME & MY SYSTEM / MINDSET SECTION
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionHeader title="About Me" />
            <GlassCard className="p-6 md:p-8 border-l-4 border-l-[#4CC9F0]">
              <h3 className="text-xl font-bold text-[#E6E6FF] mb-3">Who I Am</h3>
              <p className="text-base text-[#E6E6FF] leading-relaxed mb-4">
                {DASHBOARD_DATA.aboutSummary?.bio ||
                  "I am a 3rd-year BCA student passionate about unlocking business insights from data. I focus on project-based learning—working with real-world datasets in Python and SQL to build practical solutions."}
              </p>
              <div className="space-y-2 pt-4 border-t border-[#1F1F29]">
                {(
                  DASHBOARD_DATA.aboutSummary?.highlights || [
                    "Driven by daily discipline & problem solving",
                    "Proficient in exploratory data analysis (EDA)",
                    "Open to full-time Data Analyst roles starting 2026-2027",
                  ]
                ).map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs md:text-sm text-[#A0A0C0]">
                    <FaCheckCircle className="text-[#4CC9F0] flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>


          {/* ============================================================
              3. EDUCATION BANNER CARD (DYNAMIC FROM JSON)
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionHeader title="Education Journey" />
            <div className="space-y-4">
              {(DASHBOARD_DATA.education || []).map((edu: any) => (
                <div
                  key={edu.id || edu.degree}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#12121C] via-[#161624] to-[#1A1A2E] p-6 border border-[#1F1F29] shadow-xl hover:border-[#4CC9F0]/40 transition-all group"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4CC9F0] via-[#7209B7] to-[#4CC9F0]" />

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#4CC9F0]/10 border border-[#4CC9F0]/30 flex items-center justify-center text-[#4CC9F0] text-xl flex-shrink-0 mt-1 md:mt-0">
                        <FaGraduationCap />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl font-bold text-[#E6E6FF] group-hover:text-[#4CC9F0] transition-colors">
                            {edu.degree}
                          </h3>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#4CC9F0]/15 text-[#4CC9F0] border border-[#4CC9F0]/30">
                            {edu.status || "Pursuing"}
                          </span>
                        </div>
                        <p className="text-sm text-[#A0A0C0] font-medium mt-1">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-[#707090] mt-2 max-w-2xl">
                          {edu.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 md:text-right">
                      <span className="inline-block px-4 py-2 rounded-xl bg-[#1F1F29]/80 border border-[#1F1F29] text-[#4CC9F0] text-sm font-semibold">
                        🗓️ {edu.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>


          {/* ============================================================
              4. MY SKILLS & EXPERTISE SECTION
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <SectionHeader title="My Tech Stack Galaxy" />
            <div className="mt-8">
              <TechStackGalaxy />
            </div>
          </motion.div>


          {/* ============================================================
              5. FEATURED WORKS ("MY WORKS") SECTION
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <SectionHeader title="Featured Works" />
              <Link
                href="/projects"
                className="text-[#4CC9F0] hover:text-white text-sm font-semibold flex items-center gap-1 group"
              >
                <span>View All Works</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {(DASHBOARD_DATA.projects || []).slice(0, 3).map((project: any, index: number) => (
                <ProjectCard
                  key={`project-${project.id || index}`}
                  project={project}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>


          {/* ============================================================
              6. CERTIFICATIONS & MILESTONES WITH COVER PREVIEWS
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <div className="flex items-center justify-between mb-2">
              <SectionHeader title="Certifications Vault" />
              <Link
                href="/certifications"
                className="text-[#4CC9F0] hover:text-white text-sm font-semibold flex items-center gap-1 group"
              >
                <span>View All Certificates</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <p className="text-sm text-[#A0A0C0] mb-8 max-w-xl text-center mx-auto md:text-left md:mx-0">
              Interact with the 3D carousel to explore my verified credentials. Click to inspect any certificate.
            </p>
            
            <CertificateCarousel certificates={DASHBOARD_DATA.certifications || []} />
          </motion.div>


          {/* ============================================================
              7. HACKATHONS JOURNEY
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <SectionHeader title="Hackathon Journey" />
              <Link href="/hackathons" className="text-xs text-[#4CC9F0] hover:underline">
                View Details →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {(DASHBOARD_DATA.experience || []).slice(0, 3).map((exp: any, index: number) => (
                <GlassCard key={index} className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-xs text-[#4CC9F0] font-bold">{exp.date}</span>
                    <span className="text-xs px-2 py-0.5 bg-[#7209B7]/20 text-[#A855F7] rounded-full">
                      {exp.role}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-[#E6E6FF] mb-2">{exp.title}</h4>
                  <p className="text-xs text-[#A0A0C0] line-clamp-3">{exp.description}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>


          {/* ============================================================
              8. BOTTOM CALL TO ACTION (HIRE ME & CONNECT BANNER)
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#12121C] via-[#1A1A2E] to-[#12121C] p-8 sm:p-12 border border-[#4CC9F0]/30 shadow-2xl">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#E6E6FF] mb-3">
                  Let&apos;s Build Data Solutions Together!
                </h2>
                <p className="text-sm sm:text-base text-[#A0A0C0] mb-6">
                  Open to full-time Data Analyst roles, internships, and project collaborations.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-7 py-3.5 glass-btn-primary hover:scale-105 transition-transform"
                  >
                    <FaPaperPlane />
                    <span>Get In Touch / Hire Me</span>
                  </Link>
                  <Link
                    href="/resume"
                    className="px-6 py-3.5 glass-btn hover:scale-105 transition-transform"
                  >
                    Check Resume
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Removed old modal as it is now inside CertificateCarousel */}
    </div>
  );
}
