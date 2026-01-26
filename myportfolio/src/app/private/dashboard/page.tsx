// src/app/private/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";

// Define interface for type safety
interface PrivateProject {
  id: string;
  title: string;
  description: string;
}

// Hardcoded data (since dynamic imports won't work reliably)
const privateProjects: PrivateProject[] = [
  {
    id: "confidential-ai",
    title: "Confidential Urban AI System",
    description: "Proprietary AI system for government infrastructure planning."
  },
  {
    id: "secure-sos",
    title: "Enterprise SOS Platform",
    description: "Custom emergency response system for corporate clients."
  }
];

export default function PrivateDashboard() {
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check access only on client-side
    const access = typeof window !== "undefined" && localStorage.getItem("privateAccess") === "granted";
    setHasAccess(access);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <p className="text-gray-400">Verifying access...</p>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold text-red-400 mb-4">Access Denied</h1>
        <p className="text-gray-400 mt-4">You need an invite to view this content.</p>
        <a 
          href="/private" 
          className="mt-6 inline-block px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
        >
          ← Go Back
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2 text-white">Private Projects</h1>
      <p className="text-gray-400 mb-8">
        Confidential work shared under NDA.
      </p>

      <div className="grid grid-cols-1 gap-6">
        {privateProjects.map((project) => (
          <div 
            key={project.id} 
            className="bg-surface/80 backdrop-blur-xl border border-border rounded-2xl p-6 hover:border-red-500/30 transition-colors"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <span className="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs">
                Confidential
              </span>
            </div>
            <p className="mt-3 text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}