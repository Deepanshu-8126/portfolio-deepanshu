// src/components/dashboard/QuickActionCard.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

interface QuickActionCardProps {
  title: string;
  href: string;
  icon: string;
  description: string;
  delay?: number;
}

export function QuickActionCard({
  title,
  href,
  icon,
  description,
  delay = 0,
}: QuickActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4 }}
    >
      <Link href={href}>
        <GlassCard className="p-6 cursor-pointer hover:bg-[#121218]/80 transition-colors">
          <div className="flex items-center mb-3">
            <span className="text-2xl mr-3">{icon}</span>
            <h3 className="font-medium text-[#E6E6FF]">{title}</h3>
          </div>
          <p className="text-sm text-[#A0A0C0]">{description}</p>
          <div className="mt-4 text-xs text-[#4CC9F0] font-medium">
            → View Details
          </div>
        </GlassCard>
      </Link>
    </motion.div>
  );
}
