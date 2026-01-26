// src/data/learning.ts
export interface LearningItem {
  topic: string;
  progress: number;
  goal: string;
  resources: string[];
}

export const currentlyLearning: LearningItem[] = [
  {
    topic: "LLM Fine-tuning",
    progress: 65,
    goal: "Deploy custom fine-tuned model for urban complaint classification",
    resources: ["Hugging Face Course", "Stanford CS324"]
  },
  {
    topic: "Advanced Pandas",
    progress: 80,
    goal: "Master groupby optimizations and memory-efficient operations",
    resources: ["Pandas Cookbook", "Real Python Tutorials"]
  }
];