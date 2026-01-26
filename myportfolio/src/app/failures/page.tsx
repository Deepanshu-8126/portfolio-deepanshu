// src/app/failures/page.tsx
"use client";

import { AlertTriangle } from "lucide-react";

interface FailureProject {
  id: string;
  title: string;
  problem: string;
  whatWentWrong: string;
  lessons: string[];
  wouldDoDifferently: string;
}

// Hardcoded data instead of import
const failureProjects: FailureProject[] = [
  {
    id: "realtime-dashboard",
    title: "Real-time Urban Dashboard",
    problem: "Needed live visualization of city complaint hotspots",
    whatWentWrong: "Used WebSocket broadcasting to all clients — caused server meltdown at 500+ users",
    lessons: [
      "Premature optimization is evil",
      "Load testing is non-negotiable",
      "Pub/sub architecture > broadcast"
    ],
    wouldDoDifferently: "Use Redis pub/sub with client-side filtering and pagination"
  },
  {
    id: "ml-model-drift",
    title: "Complaint Classification Model",
    problem: "Model accuracy dropped from 92% to 68% after 3 months",
    whatWentWrong: "Didn’t implement data drift monitoring or retraining pipeline",
    lessons: [
      "ML models decay in production",
      "Monitoring > initial accuracy",
      "Automate retraining"
    ],
    wouldDoDifferently: "Add Evidently.ai for drift detection and Airflow for retraining"
  }
];

export default function FailuresPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-red-900/20 text-red-400 px-4 py-2 rounded-full mb-4">
          <AlertTriangle size={18} />
          <span className="font-medium">Failure Log</span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">
          What I’ve Learned From Failing
        </h1>
        <p className="text-gray-400 mt-4">
          Real engineering isn’t about avoiding failure — it’s about failing fast and learning faster.
        </p>
      </div>

      <div className="space-y-10">
        {failureProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
          >
            <h2 className="text-xl font-bold text-white mb-3">{project.title}</h2>
            
            <div className="mb-4">
              <h3 className="font-bold text-gray-400 mb-1">The Problem</h3>
              <p className="text-gray-300">{project.problem}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-400 mb-1">What Went Wrong</h3>
              <p className="text-red-400">{project.whatWentWrong}</p>
            </div>

            <div className="mb-4">
              <h3 className="font-bold text-gray-400 mb-2">Key Lessons</h3>
              <ul className="list-disc pl-5 space-y-1">
                {project.lessons.map((lesson, i) => (
                  <li key={i} className="text-gray-300">{lesson}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-400 mb-1">What I’d Do Differently</h3>
              <p className="text-gray-300">{project.wouldDoDifferently}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}