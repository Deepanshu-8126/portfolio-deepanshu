// src/components/dashboard/ExperienceCard.tsx
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface Experience {
  type: string;
  title: string;
  description: string;
  date: string;
  role: string;
}

interface ExperienceCardProps {
  experience: Experience;
  delay?: number;
}

export function ExperienceCard({ experience, delay = 0 }: ExperienceCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "hackathon":
        return "🏆";
      case "learning":
        return "📚";
      case "project":
        return "📊";
      default:
        return "💼";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "hackathon":
        return "text-yellow-400";
      case "learning":
        return "text-purple-400";
      case "project":
        return "text-blue-400";
      default:
        return "text-[#4CC9F0]";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ x: -4 }}
    >
      <GlassCard className="p-6">
        <div className="flex items-start space-x-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${getTypeColor(experience.type)} bg-current/10`}
          >
            {getTypeIcon(experience.type)}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-[#E6E6FF]">{experience.title}</h3>
              <span className="text-xs text-[#707090]">{experience.date}</span>
            </div>
            <p className="text-sm text-[#A0A0C0] mb-2">
              {experience.description}
            </p>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)} bg-current/10`}
            >
              {experience.role}
            </span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
