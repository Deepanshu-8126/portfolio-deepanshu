// src/components/dashboard/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  metrics: {
    datasets: number;
    visualizations: number;
    insights: number;
  };
}

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <Link href={`/projects/${project.id}`}>
        <GlassCard className="p-6 cursor-pointer group">
          {/* Title */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-bold text-[#E6E6FF] text-base group-hover:text-[#4CC9F0] transition-colors">
              {project.title}
            </h3>
            <FaExternalLinkAlt className="text-[#707090] text-xs group-hover:text-[#4CC9F0] transition-colors flex-shrink-0 mt-1" />
          </div>

          {/* Description */}
          <p className="text-sm text-[#A0A0C0] mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 bg-[#4CC9F0]/8 text-[#4CC9F0] rounded-lg text-xs border border-[#4CC9F0]/15 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Metrics with neon glow */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1A1A26]">
            <div className="text-center">
              <div className="font-bold text-lg text-[#4CC9F0] text-glow-cyan">
                {project.metrics.datasets}
              </div>
              <div className="text-[10px] text-[#707090] uppercase tracking-wider font-medium">Datasets</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-[#A855F7] text-glow-purple">
                {project.metrics.visualizations}
              </div>
              <div className="text-[10px] text-[#707090] uppercase tracking-wider font-medium">Charts</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg text-[#4CC9F0] text-glow-cyan">
                {project.metrics.insights}
              </div>
              <div className="text-[10px] text-[#707090] uppercase tracking-wider font-medium">Insights</div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="mt-4 flex items-center gap-2 text-xs text-[#4CC9F0] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            <span>View Details</span>
            <span className="neon-text">→</span>
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
}
