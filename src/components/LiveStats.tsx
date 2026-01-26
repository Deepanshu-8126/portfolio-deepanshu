// src/components/LiveStats.tsx
"use client";

import { useEffect, useState } from "react";
import { Github, Medal, BookOpen } from "lucide-react";

interface Stats {
  github?: { stars: number; commits: number; repos: number };
  kaggle?: { notebooks: number; medals: any; tier: string };
  loading: boolean;
}

export default function LiveStats() {
  const [stats, setStats] = useState<Stats>({ loading: true });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [ghRes, kgRes] = await Promise.all([
          fetch("/api/github"),
          fetch("/api/kaggle")
        ]);
        
        const github = await ghRes.json();
        const kaggle = await kgRes.json();
        
        setStats({ github, kaggle, loading: false });
      } catch (e) {
        setStats({ loading: false });
      }
    };

    fetchStats();
  }, []);

  if (stats.loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[1,2,3,4].map(i => (
          <div key={i} className="glass p-4 animate-pulse">
            <div className="h-4 bg-surface-hover rounded w-1/2 mb-2"></div>
            <div className="h-6 bg-surface-hover rounded w-3/4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
      <StatCard 
        icon={<Github size={18} />}
        label="GitHub Commits" 
        value={`${stats.github?.commits}+`} 
      />
      <StatCard 
        icon={<BookOpen size={18} />}
        label="Public Repos" 
        value={stats.github?.repos?.toString() || "0"} 
      />
      <StatCard 
        icon={<Medal size={18} />}
        label="Kaggle Medals" 
        value={`${stats.kaggle?.medals.gold + stats.kaggle?.medals.silver + stats.kaggle?.medals.bronze || 0}`} 
      />
      <StatCard 
        icon={<BookOpen size={18} />}
        label="Notebooks" 
        value={stats.kaggle?.notebooks?.toString() || "0"} 
      />
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="glass p-4">
      <div className="flex items-center gap-2 text-text-secondary mb-1">
        {icon} {label}
      </div>
      <div className="text-xl font-bold text-primary">{value}</div>
    </div>
  );
}