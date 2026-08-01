// src/components/dashboard/SkillCard.tsx
"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
}

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

export function SkillCard({ skill, delay = 0 }: SkillCardProps) {
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Core":
        return { gradient: "from-[#4CC9F0] to-[#7209B7]", glow: "rgba(76, 201, 240, 0.4)" };
      case "Foundation":
        return { gradient: "from-[#7209B7] to-[#A855F7]", glow: "rgba(114, 9, 183, 0.4)" };
      case "Learning":
        return { gradient: "from-[#A855F7] to-[#F72585]", glow: "rgba(168, 85, 247, 0.4)" };
      default:
        return { gradient: "from-[#4CC9F0] to-[#7209B7]", glow: "rgba(76, 201, 240, 0.4)" };
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Core":
        return "bg-[#4CC9F0]/15 text-[#4CC9F0] border border-[#4CC9F0]/20";
      case "Foundation":
        return "bg-[#7209B7]/15 text-[#A855F7] border border-[#7209B7]/20";
      case "Learning":
        return "bg-[#A855F7]/15 text-[#F72585] border border-[#A855F7]/20";
      default:
        return "bg-[#4CC9F0]/15 text-[#4CC9F0] border border-[#4CC9F0]/20";
    }
  };

  const { gradient, glow } = getCategoryGradient(skill.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <GlassCard className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-[#E6E6FF] text-base">{skill.name}</h3>
          <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${getCategoryBadge(skill.category)}`}>
            {skill.category}
          </span>
        </div>

        <p className="text-sm text-[#A0A0C0] mb-4 leading-relaxed">{skill.description}</p>

        {/* Neon Progress Bar */}
        <div className="w-full bg-[#0D0D14] rounded-full h-2 overflow-hidden neon-progress">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
            className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
            style={{
              boxShadow: `0 0 8px ${glow}, 0 0 16px ${glow.replace("0.4", "0.2")}`,
            }}
          />
        </div>

        <div className="mt-2 flex justify-between items-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${
                  i < Math.round(skill.level / 20) ? "bg-[#4CC9F0]" : "bg-[#1A1A26]"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-mono text-[#4CC9F0]">{skill.level}%</span>
        </div>
      </GlassCard>
    </motion.div>
  );
}
