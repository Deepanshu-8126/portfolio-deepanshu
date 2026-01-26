// src/components/dashboard/ProjectCard.tsx
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";

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
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <Link href={`/projects/${project.id}`}>
        <GlassCard className="p-6 cursor-pointer hover:bg-[#121218]/80 transition-colors">
          <h3 className="font-bold text-[#E6E6FF] mb-3">{project.title}</h3>
          <p className="text-sm text-[#A0A0C0] mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-1 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-[#1F1F29] text-[#A0A0C0] rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="text-center">
              <div className="font-bold text-[#4CC9F0]">
                {project.metrics.datasets}
              </div>
              <div className="text-[#707090]">Datasets</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-[#4CC9F0]">
                {project.metrics.visualizations}
              </div>
              <div className="text-[#707090]">Charts</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-[#4CC9F0]">
                {project.metrics.insights}
              </div>
              <div className="text-[#707090]">Insights</div>
            </div>
          </div>

          <div className="mt-4 text-xs text-[#4CC9F0] font-medium">
            → View Details
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
}
