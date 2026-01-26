// src/components/dashboard/PerformanceMetrics.tsx
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface PerformanceMetricsProps {
  data: {
    githubStars: number;
    githubCommits: number;
    githubRepos: number;
    linkedinConnections: number;
  };
}

export function PerformanceMetrics({ data }: PerformanceMetricsProps) {
  const metrics = [
    { label: "GitHub Stars", value: data.githubStars, icon: "⭐" },
    { label: "GitHub Commits", value: data.githubCommits, icon: "📝" },
    { label: "Public Repos", value: data.githubRepos, icon: "📦" },
    {
      label: "LinkedIn Connections",
      value: data.linkedinConnections,
      icon: "🔗",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ y: -4 }}
        >
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl">{metric.icon}</span>
              <span className="text-2xl font-bold text-[#4CC9F0]">
                {metric.value.toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-[#A0A0C0]">{metric.label}</p>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
