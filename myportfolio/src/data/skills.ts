// src/data/skills.ts
export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 90 },
  { name: "Data Analysis (Pandas)", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Next.js", level: 82 },
  { name: "SQL", level: 78 },
  { name: "LLM Integration", level: 75 }
];