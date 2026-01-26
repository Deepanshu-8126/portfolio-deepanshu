// src/components/dashboard/ActivityItem.tsx
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface Activity {
  type: string;
  title: string;
  desc: string;
  time: string;
  status: string;
}

interface ActivityItemProps {
  activity: Activity;
  delay?: number;
}

export function ActivityItem({ activity, delay = 0 }: ActivityItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-400";
      case "in-progress":
        return "text-yellow-400";
      case "published":
        return "text-blue-400";
      default:
        return "text-[#A0A0C0]";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "project":
        return "📊";
      case "note":
        return "📝";
      case "hackathon":
        return "🏆";
      case "learning":
        return "📚";
      default:
        return "🔍";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4, ease: "easeOut" }}
      whileHover={{ x: -4 }}
    >
      <GlassCard className="p-4">
        <div className="flex items-start space-x-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              activity.type === "project"
                ? "bg-blue-500/10 text-blue-400"
                : activity.type === "note"
                  ? "bg-purple-500/10 text-purple-400"
                  : activity.type === "hackathon"
                    ? "bg-yellow-500/10 text-yellow-400"
                    : "bg-green-500/10 text-green-400"
            }`}
          >
            {getTypeIcon(activity.type)}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-[#E6E6FF]">{activity.title}</h3>
              <span className={`text-xs ${getStatusColor(activity.status)}`}>
                {activity.status.replace("-", " ")}
              </span>
            </div>
            <p className="text-sm text-[#A0A0C0] mb-1">{activity.desc}</p>
            <p className="text-xs text-[#707090]">{activity.time}</p>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
