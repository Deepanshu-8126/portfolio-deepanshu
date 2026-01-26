// src/components/dashboard/RoadmapCard.tsx
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface RoadmapStage {
  stage: string;
  role: string;
  focus: string[];
  timeline: string;
}

interface RoadmapCardProps {
  stage: RoadmapStage;
  isCurrent: boolean;
  delay?: number;
}

export function RoadmapCard({ stage, isCurrent, delay = 0 }: RoadmapCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <GlassCard
        className={`p-6 ${isCurrent ? "border-l-4 border-[#4CC9F0]" : ""}`}
      >
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              isCurrent
                ? "bg-[#4CC9F0]/20 text-[#4CC9F0]"
                : "bg-[#707090]/20 text-[#707090]"
            }`}
          >
            {stage.stage}
          </span>
          <span className="text-xs text-[#707090]">{stage.timeline}</span>
        </div>

        <h3 className="font-bold text-[#E6E6FF] mb-3">{stage.role}</h3>

        <div className="space-y-2">
          {stage.focus.map((focus, index) => (
            <div key={index} className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CC9F0] mr-2"></span>
              <span className="text-sm text-[#A0A0C0]">{focus}</span>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
