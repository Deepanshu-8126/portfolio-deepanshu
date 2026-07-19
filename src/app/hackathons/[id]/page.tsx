// src/app/hackathons/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { BackNavigation } from "@/components/ui/BackNavigation";
import { Button } from "@/components/ui/Button";
import hackathonsData from "@/data/hackathons.json";
type Hackathon = {
  id: string;
  title: string;
  description: string;
  organizedBy: string;
  location: string;
  duration: string;
  year: string;
  role: string;
  teamSize: string;
  techStack: string[];
  experience: string;
  challenges: string;
  result: string;
  status: string;

  learnings: {
    technical: string[];
    softSkills: string[];
  };

  photos?: {
    url: string;
    caption?: string;
  }[];
};
// Convert array to object for easy lookup
const HACKATHON_DETAILS = (hackathonsData as Hackathon[]).reduce(
  (acc, hackathon) => {
    acc[hackathon.id] = hackathon;
    return acc;
  },
  {} as Record<string, Hackathon>,
);

export default function HackathonDetailPage() {
  const params = useParams();
  const hackathonId = params.id as string;
  const hackathon = HACKATHON_DETAILS[hackathonId];

  if (!hackathon) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <GlassCard className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Hackathon Not Found</h2>
          <Button variant="primary" href="/hackathons">
            ← Back to Mission Log
          </Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF] overflow-hidden relative">
      {/* Floating Navbar */}
      <FloatingNavbar />

      {/* Main Content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Navigation */}
          <BackNavigation className="mb-8" />

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {hackathon.title}
                </h1>
                <p className="text-[#A0A0C0]">
                  {hackathon.organizedBy} • {hackathon.location} •{" "}
                  {hackathon.year}
                </p>
              </div>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  hackathon.result.includes("Winner")
                    ? "bg-green-500/20 text-green-400"
                    : hackathon.result.includes("Selected")
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-[#707090]/20 text-[#707090]"
                }`}
              >
                {hackathon.result.includes("Winner")
                  ? "Winner"
                  : hackathon.result.includes("Selected")
                    ? "Selected"
                    : "Participated"}
              </span>
            </div>
            <div className="flex items-center text-sm text-[#707090]">
              <span>{hackathon.duration}</span>
              <span className="mx-2">•</span>
              <span>Team: {hackathon.teamSize}</span>
            </div>
          </motion.div>

          {/* Context Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-12"
          >
            <GlassCard className="p-6">
              <h2 className="text-xl font-bold mb-4 text-[#4CC9F0]">
                Event Context
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-[#707090]">Organized By</span>
                  <p className="text-[#E6E6FF]">{hackathon.organizedBy}</p>
                </div>
                <div>
                  <span className="text-sm text-[#707090]">Location</span>
                  <p className="text-[#E6E6FF]">{hackathon.location}</p>
                </div>
                <div>
                  <span className="text-sm text-[#707090]">Duration</span>
                  <p className="text-[#E6E6FF]">{hackathon.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-[#707090]">Year</span>
                  <p className="text-[#E6E6FF]">{hackathon.year}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Role & Contribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <GlassCard className="p-6">
              <h2 className="text-xl font-bold mb-4 text-[#7209B7]">
                Role & Contribution
              </h2>
              <div className="mb-4">
                <span className="text-sm text-[#707090]">My Role</span>
                <p className="text-[#E6E6FF]">{hackathon.role}</p>
              </div>
              <div className="mb-4">
                <span className="text-sm text-[#707090]">Team Size</span>
                <p className="text-[#E6E6FF]">{hackathon.teamSize}</p>
              </div>
              <div>
                <span className="text-sm text-[#707090]">Tech Stack</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {hackathon.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1F1F29] text-[#A0A0C0] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Experience Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <GlassCard className="p-6">
              <h2 className="text-xl font-bold mb-4 text-[#4CC9F0]">
                Experience Story
              </h2>
              <p className="text-[#E6E6FF] mb-4">{hackathon.experience}</p>
              <p className="text-[#E6E6FF]">{hackathon.challenges}</p>
            </GlassCard>
          </motion.div>

          {/* Learnings Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <GlassCard className="p-6">
              <h2 className="text-xl font-bold mb-4 text-[#7209B7]">
                Key Learnings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-[#E6E6FF] mb-3">
                    Technical Learnings
                  </h3>
                  <ul className="space-y-2">
                    {hackathon.learnings?.technical?.map((learning, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#4CC9F0] mr-2 mt-1">•</span>
                        <span className="text-[#E6E6FF]">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-[#E6E6FF] mb-3">
                    Soft Skill Learnings
                  </h3>
                  <ul className="space-y-2">
                    {hackathon.learnings?.softSkills?.map((learning, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#4CC9F0] mr-2 mt-1">•</span>
                        <span className="text-[#E6E6FF]">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Result & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            <GlassCard className="p-6">
              <h2 className="text-xl font-bold mb-4 text-[#4CC9F0]">
                Result & Highlights
              </h2>
              <p className="text-[#E6E6FF]">{hackathon.result}</p>
            </GlassCard>
          </motion.div>

          {/* Photo Gallery */}
          {hackathon.photos && hackathon.photos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-12"
            >
              <GlassCard className="p-6">
                <h2 className="text-xl font-bold mb-6 text-[#7209B7]">
                  Mission Photos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {hackathon.photos
                    .filter((photo) => photo.url)
                    .map((photo, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="overflow-hidden rounded-xl bg-[#111]"
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption || `Photo ${index + 1}`}
                          className="w-full h-auto object-contain"
                        />

                        {photo.caption && (
                          <div className="p-3">
                            <p className="text-sm text-[#A0A0C0]">
                              {photo.caption}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center"
          >
            <Button variant="primary" href="/hackathons">
              ← Back to Mission Log
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
