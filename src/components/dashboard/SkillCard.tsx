// src/components/dashboard/SkillCard.tsx
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
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Core":
        return "from-[#4CC9F0] to-[#7209B7]";
      case "Foundation":
        return "from-[#7209B7] to-[#A0A0C0]";
      case "Learning":
        return "from-[#A0A0C0] to-[#707090]";
      default:
        return "from-[#4CC9F0] to-[#7209B7]";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
    >
      <GlassCard className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-[#E6E6FF]">{skill.name}</h3>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              skill.category === "Core"
                ? "bg-[#4CC9F0]/20 text-[#4CC9F0]"
                : skill.category === "Foundation"
                  ? "bg-[#7209B7]/20 text-[#7209B7]"
                  : "bg-[#A0A0C0]/20 text-[#A0A0C0]"
            }`}
          >
            {skill.category}
          </span>
        </div>
        <p className="text-sm text-[#A0A0C0] mb-4">{skill.description}</p>
        <div className="w-full bg-[#1F1F29] rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 shadow-lg bg-gradient-to-r ${getCategoryColor(skill.category)}`}
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <div className="mt-2 text-right">
          <span className="text-xs text-[#A0A0C0]">{skill.level}%</span>
        </div>
      </GlassCard>
    </motion.div>
  );
}
