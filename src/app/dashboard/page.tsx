// src/app/dashboard/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillCard } from "@/components/dashboard/SkillCard";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { ExperienceCard } from "@/components/dashboard/ExperienceCard";
import { NoteCard } from "@/components/dashboard/NoteCard";
import { RoadmapCard } from "@/components/dashboard/RoadmapCard";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

// ✅ JSON IMPORTS
import dashboardData from "@/data/dashboard.json";
import projectsData from "@/data/projects.json";
import hackathonsData from "@/data/hackathons.json";
import notesData from "@/data/notes.json";

// ✅ COMBINE DATA SOURCES
const DASHBOARD_DATA = {
  ...dashboardData,
  projects: Array.isArray(projectsData) ? projectsData : [],
  experience: Array.isArray(hackathonsData)
    ? hackathonsData.map((hackathon, index) => ({
        type: "hackathon",
        title: hackathon.title || `Hackathon ${index + 1}`,
        description:
          hackathon.description ||
          `Participated in ${hackathon.title || "a hackathon"}`,
        date: hackathon.year || "2024",
        role: hackathon.role || "Participant",
      }))
    : [],
  notes: Array.isArray(notesData) ? notesData : [],
};

export default function DashboardPage() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0.05, 0.15],
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF] overflow-hidden relative">
      <ScrollProgress />

      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ opacity: backgroundOpacity }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
          transition={{ duration: 25, repeat: Infinity, delay: 5 }}
        />
      </motion.div>

      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Main Content - Added pt-16 for proper spacing */}
      <div className="relative z-10 pt-16 pb-16">
        {" "}
        {/* ✅ FIXED: Added pt-16 */}
        <div className="container mx-auto px-6">
          {/* HERO STATUS - FIRST IMPRESSION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl mx-auto mb-20 text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-[#E6E6FF] to-[#A0A0C0] bg-clip-text text-transparent">
                Hi, I'm {DASHBOARD_DATA.hero?.name || "Deepanshu"}
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-[#A0A0C0] mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {DASHBOARD_DATA.hero?.title ||
                "Data Analyst → Future Data Scientist"}
            </motion.p>
            <motion.p
              className="text-lg text-[#707090] max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {DASHBOARD_DATA.hero?.subtitle ||
                "Building real-world data solutions with Python, SQL, and honest learning"}
            </motion.p>

            {/* Tools - Staggered entrance */}
            <motion.div
              className="flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {(DASHBOARD_DATA.hero?.tools || ["Python", "SQL"]).map(
                (tool, index) => (
                  <motion.span
                    key={tool}
                    className="px-3 py-1 bg-[#1F1F29]/50 text-[#A0A0C0] rounded-full text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                    whileHover={{
                      y: -2,
                      backgroundColor: "rgba(67, 201, 240, 0.15)",
                      color: "#4CC9F0",
                    }}
                  >
                    {tool}
                  </motion.span>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* PROJECTS SECTION - CLICKABLE TO PROJECTS PAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-6">
              <SectionHeader title="Projects" />
              <Link
                href="/projects"
                className="text-[#4CC9F0] hover:text-white text-sm font-medium"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {(DASHBOARD_DATA.projects || [])
                .slice(0, 3)
                .map((project, index) => (
                  <ProjectCard
                    key={`project-${project.id || index}`}
                    project={project}
                    delay={index * 0.1}
                  />
                ))}
            </div>
          </motion.div>

          {/* HACKATHONS SECTION - CLICKABLE TO HACKATHONS PAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-6">
              <SectionHeader title="Hackathon Journey" />
              <Link
                href="/hackathons"
                className="text-[#4CC9F0] hover:text-white text-sm font-medium"
              >
                View All →
              </Link>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4CC9F0] to-[#7209B7]"></div>
              <div className="space-y-6 ml-12">
                {(DASHBOARD_DATA.experience || [])
                  .slice(0, 3)
                  .map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ x: 4 }}
                    >
                      <GlassCard className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="font-bold text-[#E6E6FF]">
                            {exp.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              exp.role.includes("Winner")
                                ? "bg-green-500/20 text-green-400"
                                : exp.role.includes("Selected")
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-[#707090]/20 text-[#707090]"
                            }`}
                          >
                            {exp.role}
                          </span>
                        </div>
                        <p className="text-[#A0A0C0] mb-3">{exp.description}</p>
                        <p className="text-sm text-[#4CC9F0] font-medium">
                          Key Learnings: Team coordination, time management,
                          real-world problem solving
                        </p>
                      </GlassCard>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>

          {/* SKILLS SECTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mb-20"
          >
            <SectionHeader title="Skills & Expertise" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(DASHBOARD_DATA.skills || []).map((skill, index) => (
                <SkillCard
                  key={skill.name || index}
                  skill={skill}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* LEARNING VAULT - CLICKABLE TO NOTES PAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-6">
              <SectionHeader title="Learning Vault" />
              <Link
                href="/notes"
                className="text-[#4CC9F0] hover:text-white text-sm font-medium"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(DASHBOARD_DATA.notes || []).slice(0, 3).map((note, index) => (
                <NoteCard
                  key={`note-${index}`}
                  note={note}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>

          {/* DISCIPLINE & LIFESTYLE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mb-20"
          >
            <SectionHeader title="Discipline & Creativity" />
            <GlassCard className="p-8 text-center">
              <blockquote className="text-lg italic text-[#A0A0C0]">
                "Consistency over motivation. Discipline over talent."
              </blockquote>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-[#E6E6FF]">
                <div>
                  <div className="text-2xl mb-2">🏋️</div>
                  <div className="font-medium">Gym & Fitness</div>
                  <div className="text-sm text-[#A0A0C0]">
                    Daily routine with strong discipline
                  </div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-medium">Creative Skills</div>
                  <div className="text-sm text-[#A0A0C0]">
                    Video editing, visual storytelling, design thinking
                  </div>
                </div>
                <div>
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-medium">Technical Excellence</div>
                  <div className="text-sm text-[#A0A0C0]">
                    Excel, PowerPoint, data presentation mastery
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* CAREER ROADMAP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="mb-20"
          >
            <SectionHeader title="Career Roadmap" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(DASHBOARD_DATA.roadmap || []).map((stage, index) => {
                const stageKey =
                  stage.stage === "Current"
                    ? "current"
                    : stage.stage === "Next"
                      ? "next"
                      : "future";
                return (
                  <Link key={stage.stage} href={`/roadmap/${stageKey}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.1 + index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -6 }}
                    >
                      <RoadmapCard
                        stage={stage}
                        isCurrent={stage.stage === "Current"}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>

          {/* FUTURE VISION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4, duration: 0.6 }}
            className="mb-20"
          >
            <SectionHeader title="Future Vision" />
            <GlassCard className="p-6">
              <ul className="space-y-3 text-[#E6E6FF]">
                <li className="flex items-start">
                  <span className="text-[#4CC9F0] mr-3 mt-1">→</span>
                  <span>
                    Become a skilled Data Scientist who can solve real business
                    problems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4CC9F0] mr-3 mt-1">→</span>
                  <span>
                    Master Machine Learning and Deep Learning for advanced AI
                    systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4CC9F0] mr-3 mt-1">→</span>
                  <span>
                    Work as an AI Engineer building intelligent, scalable
                    systems
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4CC9F0] mr-3 mt-1">→</span>
                  <span>
                    Contribute to cutting-edge research in artificial
                    intelligence
                  </span>
                </li>
              </ul>
            </GlassCard>
          </motion.div>

          {/* PHILOSOPHY STATEMENT */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="text-center"
          >
            <GlassCard className="p-8">
              <blockquote className="text-lg italic text-[#A0A0C0]">
                "I am early in my journey, but I am extremely serious about
                becoming a world-class Data Scientist."
              </blockquote>
              <p className="text-sm text-[#707090] mt-4">
                — {DASHBOARD_DATA.hero?.name || "Deepanshu"}
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
