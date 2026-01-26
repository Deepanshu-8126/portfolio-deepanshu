// src/app/build/page.tsx
import { buildLog } from "@/data/buildLog";
import { Calendar, Trophy, Lightbulb, AlertTriangle, RefreshCw } from "lucide-react";

export default function BuildLog() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "win": return <Trophy className="text-green-400" size={16} />;
      case "learn": return <Lightbulb className="text-blue-400" size={16} />;
      case "fail": return <AlertTriangle className="text-yellow-400" size={16} />;
      default: return <RefreshCw className="text-purple-400" size={16} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "win": return "border-l-green-500";
      case "learn": return "border-l-blue-500";
      case "fail": return "border-l-yellow-500";
      default: return "border-l-purple-500";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Build in Public</h1>
      <p className="text-text-secondary mb-8">
        My raw, unfiltered journey — wins, fails, and everything in between.
      </p>

      <div className="space-y-6">
        {buildLog.map((entry, i) => (
          <div 
            key={i} 
            className={`pl-4 border-l-4 glass p-5 ${getTypeColor(entry.type)}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                {getTypeIcon(entry.type)}
                <h3 className="font-bold">{entry.title}</h3>
              </div>
              <span className="text-xs text-text-secondary">
                {new Date(entry.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </span>
            </div>
            <p className="mt-2 text-text-secondary">{entry.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-text-secondary text-sm">
        <p>Updated weekly. Follow my journey.</p>
      </div>
    </div>
  );
}