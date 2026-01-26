// src/components/dashboard/StatCard.tsx
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  trend: string;
  color: string;
  delay?: number;
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  color,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{
        y: -8,
        boxShadow: [
          "0 20px 50px rgba(0,0,0,0.3)",
          `0 0 0 1px rgba(67, 201, 240, 0.1)`,
          `0 0 0 2px rgba(67, 201, 240, 0.05)`,
        ].join(", "),
      }}
    >
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl">{icon}</span>
          <span className={`text-2xl font-bold ${color}`}>{value}</span>
        </div>
        <h3 className="text-sm text-[#A0A0C0] mb-2">{title}</h3>
        <p className="text-xs text-green-400">{trend}</p>
      </GlassCard>
    </motion.div>
  );
}
