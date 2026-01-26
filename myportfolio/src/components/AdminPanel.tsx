// src/components/ui/AdminPanel.tsx
"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

export default function AdminPanel() {
  const [isVisible, setIsVisible] = useState(false);
  const [jsonData, setJsonData] = useState(JSON.stringify(projects, null, 2));

  const handleSave = () => {
    try {
      const updated = JSON.parse(jsonData);
      // In real app: save to file via API route
      console.log("Would save:", updated);
      alert("✅ Projects updated! (In dev mode)");
    } catch (e) {
      alert("❌ Invalid JSON");
    }
  };

  if (typeof window !== "undefined" && !window.location.host.includes("localhost")) {
    return null; // Only show in dev
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isVisible ? (
        <button
          onClick={() => setIsVisible(true)}
          className="px-3 py-2 bg-red-500/20 text-red-400 rounded-lg text-sm"
        >
          Admin
        </button>
      ) : (
        <div className="glass p-4 w-80 max-h-[60vh] overflow-auto">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold">Edit Projects</h3>
            <button onClick={() => setIsVisible(false)} className="text-text-secondary">
              ✕
            </button>
          </div>
          <textarea
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
            className="w-full h-40 bg-surface rounded p-2 text-sm font-mono"
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              className="flex-1 py-1 bg-primary/20 text-primary rounded text-sm"
            >
              Save
            </button>
            <button
              onClick={() => setJsonData(JSON.stringify(projects, null, 2))}
              className="px-2 py-1 bg-surface rounded text-sm"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
}