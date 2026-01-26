// src/components/social/GitHubStats.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface GitHubStats {
  totalStars: number;
  totalCommits: number;
  publicRepos: number;
  followers: number;
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Mock data for now (you can connect to real API later)
    const mockData: GitHubStats = {
      totalStars: 18,
      totalCommits: 487,
      publicRepos: 12,
      followers: 15,
    };

    // Simulate API call
    setTimeout(() => {
      setStats(mockData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <GlassCard className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-[#1F1F29] rounded w-1/3"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-16 bg-[#1F1F29] rounded"></div>
            ))}
          </div>
        </div>
      </GlassCard>
    );
  }

  if (error) {
    return (
      <GlassCard className="p-6">
        <p className="text-[#A0A0C0]">{error}</p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6">
      <h3 className="font-bold mb-4 text-[#E6E6FF]">GitHub Activity</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Stars", value: stats!.totalStars },
          { label: "Commits", value: stats!.totalCommits },
          { label: "Repos", value: stats!.publicRepos },
          { label: "Followers", value: stats!.followers },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-2xl font-bold text-[#4CC9F0] mb-1">
              {item.value.toLocaleString()}
            </div>
            <div className="text-xs text-[#A0A0C0]">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
