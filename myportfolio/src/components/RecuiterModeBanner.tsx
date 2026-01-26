// src/components/RecruiterModeBanner.tsx
"use client";

import { useEffect, useState } from "react";

export default function RecruiterModeBanner() {
  const [recruiterMode, setRecruiterMode] = useState(false);

  useEffect(() => {
    const mode = localStorage.getItem("recruiterMode") === "true";
    setRecruiterMode(mode);
  }, []);

  if (!recruiterMode) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-900/20 border-b border-yellow-700/30 py-2 text-center text-yellow-300 text-sm">
      <span className="font-mono">[RECRUITER MODE]</span> Showing concise, interview-ready view.
    </div>
  );
}