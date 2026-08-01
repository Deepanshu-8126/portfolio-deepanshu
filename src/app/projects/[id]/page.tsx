// src/app/projects/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackNavigation } from "@/components/ui/BackNavigation";
import projectsData from "@/data/projects.json";
import { FaGithub, FaArrowLeft, FaDatabase, FaChartBar, FaLightbulb } from "react-icons/fa";

const PROJECT_DETAILS = projectsData.reduce(
  (acc, project) => {
    acc[project.id] = project;
    return acc;
  },
  {} as Record<string, (typeof projectsData)[0]>,
);

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = PROJECT_DETAILS[projectId];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#06060B] flex items-center justify-center relative z-10">
        <FloatingNavbar />
        <GlassCard className="text-center p-8 max-w-md mx-4">
          <h2 className="text-2xl font-bold mb-4 shimmer-text">Project Not Found</h2>
          <p className="text-[#A0A0C0] mb-6">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/projects" className="glass-btn-primary inline-flex items-center gap-2">
            <FaArrowLeft /> Back to Projects
          </Link>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#06060B] text-[#E6E6FF] relative">
      <FloatingNavbar />
      <ScrollProgress />

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-20 max-w-4xl">
        {/* Back Navigation */}
        <BackNavigation className="mb-8" />

        {/* ─── PROJECT HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 shimmer-text">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 bg-[#4CC9F0]/10 text-[#4CC9F0] rounded-lg text-sm border border-[#4CC9F0]/20 font-medium">
              {project.category}
            </span>
            <span className={`px-3 py-1 rounded-lg text-sm font-medium border ${
              project.status === "Completed"
                ? "bg-green-500/10 text-green-400 border-green-500/20"
                : "bg-[#A855F7]/10 text-[#A855F7] border-[#A855F7]/20"
            }`}>
              {project.status}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-primary flex items-center justify-center gap-2 px-6 py-3"
            >
              <FaGithub /> View Code on GitHub
            </a>
            <Link href="/projects" className="glass-btn flex items-center justify-center gap-2 px-6 py-3">
              <FaArrowLeft /> Browse All Projects
            </Link>
          </div>
        </motion.div>

        {/* ─── PROBLEM STATEMENT ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Tilt3DCard className="p-6 md:p-8" glowColor="#7209B7">
            <h2 className="text-xl font-bold mb-3 text-[#A855F7] neon-text-purple">
              Problem Statement
            </h2>
            <p className="text-[#E6E6FF] text-base leading-relaxed">{project.problem}</p>
          </Tilt3DCard>
        </motion.div>

        {/* ─── SOLUTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Tilt3DCard className="p-6 md:p-8" glowColor="#4CC9F0">
            <h2 className="text-xl font-bold mb-3 text-[#4CC9F0] neon-text">
              My Solution
            </h2>
            <p className="text-[#E6E6FF] text-base leading-relaxed">{project.solution}</p>
          </Tilt3DCard>
        </motion.div>

        {/* ─── METRICS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <GlassCard className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6 shimmer-text">Project Metrics</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <FaDatabase className="text-[#4CC9F0] text-xl mx-auto mb-2" />
                <div className="text-3xl font-extrabold text-[#4CC9F0] text-glow-cyan mb-1">
                  {project.metrics?.datasets || 0}
                </div>
                <div className="text-xs text-[#707090] uppercase tracking-wider">Datasets</div>
              </div>
              <div className="text-center">
                <FaChartBar className="text-[#A855F7] text-xl mx-auto mb-2" />
                <div className="text-3xl font-extrabold text-[#A855F7] text-glow-purple mb-1">
                  {project.metrics?.visualizations || 0}
                </div>
                <div className="text-xs text-[#707090] uppercase tracking-wider">Charts</div>
              </div>
              <div className="text-center">
                <FaLightbulb className="text-[#4CC9F0] text-xl mx-auto mb-2" />
                <div className="text-3xl font-extrabold text-[#4CC9F0] text-glow-cyan mb-1">
                  {project.metrics?.insights || 0}
                </div>
                <div className="text-xs text-[#707090] uppercase tracking-wider">Insights</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── TOOLS & TECHNOLOGIES ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <GlassCard className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4 text-[#A855F7] neon-text-purple">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {(project.tools || []).map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-[#4CC9F0]/8 text-[#4CC9F0] rounded-lg text-sm border border-[#4CC9F0]/15 font-medium hover:bg-[#4CC9F0]/15 hover:border-[#4CC9F0]/30 transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── KEY INSIGHTS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <GlassCard className="p-6 md:p-8">
            <h2 className="text-xl font-bold mb-4 text-[#4CC9F0] neon-text">
              Key Insights
            </h2>
            <ul className="space-y-3">
              {(project.insights || []).map((insight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#4CC9F0] mt-2 flex-shrink-0" style={{
                    boxShadow: '0 0 6px rgba(76, 201, 240, 0.6)'
                  }} />
                  <span className="text-[#E6E6FF] text-sm leading-relaxed">{insight}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        {/* ─── WHAT I LEARNED ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <Tilt3DCard className="p-6 md:p-8" glowColor="#7209B7">
            <h2 className="text-xl font-bold mb-3 text-[#A855F7] neon-text-purple">
              What I Learned
            </h2>
            <p className="text-[#E6E6FF] text-base italic leading-relaxed">
              &quot;{project.learnings || "No learning notes available."}&quot;
            </p>
          </Tilt3DCard>
        </motion.div>

        {/* ─── BOTTOM CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-8"
        >
          <GlassCard className="p-8 neon-border">
            <p className="text-[#A0A0C0] mb-5">Interested in more of my work?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects" className="glass-btn-primary inline-flex items-center justify-center gap-2 px-6 py-3">
                Browse All Projects
              </Link>
              <Link href="/contact" className="glass-btn inline-flex items-center justify-center gap-2 px-6 py-3">
                Get In Touch
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
