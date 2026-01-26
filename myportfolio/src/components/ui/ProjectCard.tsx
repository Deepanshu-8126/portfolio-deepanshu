// src/components/ui/ProjectCard.tsx
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-900/30 text-green-400";
      case "Intermediate": return "bg-yellow-900/30 text-yellow-400";
      default: return "bg-red-900/30 text-red-400";
    }
  };

  return (
    <Link href={`/projects/${project.id}`} className="block bg-surface/80 backdrop-blur-xl border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(project.difficulty)}`}>
          {project.difficulty}
        </span>
      </div>
      <p className="mt-3 text-text-secondary text-sm">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-1 bg-secondary/20 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 text-sm">
        <span className="text-primary font-mono">↑ {project.impact}</span>
      </div>
    </Link>
  );
}