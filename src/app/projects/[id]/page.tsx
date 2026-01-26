// src/app/projects/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import projectsData from "@/data/projects.json";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
// Convert array to object for easy lookup
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
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <GlassCard className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="text-[#A0A0C0] mb-6">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/projects">
            <Button variant="primary">← Back to Projects</Button>
          </Link>
          <ScrollProgress />
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF]">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="flex items-center text-[#4CC9F0] hover:text-white"
          >
            ← Back to All Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary">{project.category}</Badge>
                <Badge
                  variant={
                    project.status === "Completed" ? "success" : "secondary"
                  }
                >
                  {project.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="primary" className="w-full">
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.767-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code on GitHub
                </span>
              </Button>
            </a>
            <Link href="/projects" className="flex-1">
              <Button variant="secondary" className="w-full">
                Browse All Projects
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 text-[#7209B7]">
              Problem Statement
            </h2>
            <p className="text-[#E6E6FF] text-lg">{project.problem}</p>
          </GlassCard>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 text-[#4CC9F0]">
              My Solution
            </h2>
            <p className="text-[#E6E6FF] text-lg">{project.solution}</p>
          </GlassCard>
        </motion.div>

        {/* Metrics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-bold mb-6 text-[#7209B7]">
              Project Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4CC9F0] mb-2">
                  {project.metrics?.datasets || 0}
                </div>
                <div className="text-[#A0A0C0]">Datasets Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4CC9F0] mb-2">
                  {project.metrics?.visualizations || 0}
                </div>
                <div className="text-[#A0A0C0]">Visualizations Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#4CC9F0] mb-2">
                  {project.metrics?.insights || 0}
                </div>
                <div className="text-[#A0A0C0]">Key Insights Generated</div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 text-[#7209B7]">
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {(project.tools || []).map((tool) => (
                <Badge key={tool} variant="secondary">
                  {tool}
                </Badge>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 text-[#4CC9F0]">
              Key Insights
            </h2>
            <ul className="space-y-2">
              {(project.insights || []).map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#4CC9F0] mr-2 mt-1">•</span>
                  <span className="text-[#E6E6FF]">{insight}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        {/* What I Learned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <GlassCard>
            <h2 className="text-2xl font-bold mb-4 text-[#7209B7]">
              What I Learned
            </h2>
            <p className="text-[#E6E6FF] text-lg italic">
              "{project.learnings || "No learning notes available."}"
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
