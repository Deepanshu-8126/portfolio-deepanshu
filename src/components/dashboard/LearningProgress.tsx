// src/components/dashboard/LearningProgress.tsx
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface Skill {
  skill: string;
  level: number;
  category: string;
  description: string;
}

interface LearningProgressProps {
  skills: Skill[];
}

export function LearningProgress({ skills }: LearningProgressProps) {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.skill}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
        >
          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-[#E6E6FF]">{skill.skill}</h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  skill.category === "Practicing"
                    ? "bg-[#4CC9F0]/20 text-[#4CC9F0]"
                    : "bg-[#7209B7]/20 text-[#7209B7]"
                }`}
              >
                {skill.category}
              </span>
            </div>
            <p className="text-sm text-[#A0A0C0] mb-4">{skill.description}</p>
            <div className="w-full bg-[#1F1F29] rounded-full h-2 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 shadow-lg ${
                  skill.category === "Practicing"
                    ? "bg-gradient-to-r from-[#4CC9F0] to-[#7209B7]"
                    : "bg-gradient-to-r from-[#7209B7] to-[#A0A0C0]"
                }`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-xs text-[#A0A0C0]">{skill.level}%</span>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
