// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    id: "urban-ai",
    title: "Urban Decision Intelligence System",
    description: "AI-powered platform for city infrastructure planning using real-time complaint data and risk modeling.",
    difficulty: "Advanced",
    tags: ["Python", "LLM", "MongoDB", "Flask", "React"],
    impact: "40% faster resolution"
  },
  {
    id: "sos-alert",
    title: "Smart SOS Emergency System",
    description: "Real-time location tracking, silent evidence capture, and multi-channel alerts for personal safety.",
    difficulty: "Advanced",
    tags: ["Node.js", "Twilio", "Socket.IO", "MongoDB", "Flutter"],
    impact: "Sub-5s alert delivery"
  },
  {
    id: "complaint-hub",
    title: "Smart City Complaint Hub",
    description: "AI-categorized citizen complaints with intelligent routing and admin dashboard.",
    difficulty: "Intermediate",
    tags: ["Next.js", "Zod", "PostgreSQL", "Pandas", "Scikit-learn"],
    impact: "92% auto-categorization"
  }
];