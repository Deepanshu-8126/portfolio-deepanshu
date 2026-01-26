// src/app/private/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PrivateZone() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app: verify via API
    if (password === "urbanai2026") {
      localStorage.setItem("privateAccess", "granted");
      router.push("/private/dashboard");
    } else {
      setError("Incorrect access code");
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-md">
      <div className="glass p-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Private Zone</h1>
        <p className="text-text-secondary mb-6">
          This area contains confidential projects and experiments.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Access code"
            className="w-full px-4 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:border-primary"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-primary/20 hover:bg-primary/30 text-primary rounded-lg transition-colors"
          >
            Unlock Access
          </button>
        </form>
      </div>
    </div>
  );
}