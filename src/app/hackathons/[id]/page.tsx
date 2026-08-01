// src/app/hackathons/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { BackNavigation } from "@/components/ui/BackNavigation";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import hackathonsData from "@/data/hackathons.json";
import { FaArrowLeft, FaTrophy, FaUsers, FaClock } from "react-icons/fa";

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
      <div className="min-h-screen bg-[#06060B] flex items-center justify-center relative z-10">
        <FloatingNavbar />
        <GlassCard className="text-center p-8 max-w-md mx-4">
          <h2 className="text-2xl font-bold mb-4 shimmer-text">Hackathon Not Found</h2>
          <Link href="/hackathons" className="glass-btn-primary inline-flex items-center gap-2">
            <FaArrowLeft /> Back to Mission Log
          </Link>
        </GlassCard>
      </div>
    );
  }

  const getResultBadge = () => {
    if (hackathon.result.includes("Winner")) {
      return "bg-green-500/15 text-green-400 border border-green-500/20";
    } else if (hackathon.result.includes("Selected")) {
      return "bg-[#4CC9F0]/15 text-[#4CC9F0] border border-[#4CC9F0]/20";
    }
    return "bg-[#707090]/15 text-[#707090] border border-[#707090]/20";
  };

  const getResultLabel = () => {
    if (hackathon.result.includes("Winner")) return "🏆 Winner";
    if (hackathon.result.includes("Selected")) return "✦ Selected";
    return "Participated";
  };

  return (
    <div className="min-h-screen bg-[#06060B] text-[#E6E6FF] relative">
      <FloatingNavbar />
      <ScrollProgress />

      <div className="relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <BackNavigation className="mb-8" />

          {/* ─── HERO ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold mb-2 shimmer-text">
                  {hackathon.title}
                </h1>
                <p className="text-[#A0A0C0]">
                  {hackathon.organizedBy} • {hackathon.location} • {hackathon.year}
                </p>
              </div>
              <span className={`px-4 py-2 rounded-xl text-sm font-semibold flex-shrink-0 ${getResultBadge()}`}>
                {getResultLabel()}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#707090]">
              <span className="flex items-center gap-1.5"><FaClock className="text-[#4CC9F0]" /> {hackathon.duration}</span>
              <span className="flex items-center gap-1.5"><FaUsers className="text-[#A855F7]" /> Team: {hackathon.teamSize}</span>
            </div>
          </motion.div>

          {/* ─── EVENT CONTEXT ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <GlassCard className="p-6">
              <h2 className="text-lg font-bold mb-4 text-[#4CC9F0] neon-text">Event Context</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <span className="text-xs text-[#707090] uppercase tracking-wider">Organized By</span>
                  <p className="text-sm text-[#E6E6FF] mt-1">{hackathon.organizedBy}</p>
                </div>
                <div>
                  <span className="text-xs text-[#707090] uppercase tracking-wider">Location</span>
                  <p className="text-sm text-[#E6E6FF] mt-1">{hackathon.location}</p>
                </div>
                <div>
                  <span className="text-xs text-[#707090] uppercase tracking-wider">Duration</span>
                  <p className="text-sm text-[#E6E6FF] mt-1">{hackathon.duration}</p>
                </div>
                <div>
                  <span className="text-xs text-[#707090] uppercase tracking-wider">Year</span>
                  <p className="text-sm text-[#E6E6FF] mt-1">{hackathon.year}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* ─── ROLE & TECH ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Tilt3DCard className="p-6" glowColor="#7209B7">
              <h2 className="text-lg font-bold mb-4 text-[#A855F7] neon-text-purple">
                Role & Contribution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-xs text-[#707090] uppercase tracking-wider">My Role</span>
                  <p className="text-sm text-[#E6E6FF] mt-1">{hackathon.role}</p>
                </div>
                <div>
                  <span className="text-xs text-[#707090] uppercase tracking-wider">Team Size</span>
                  <p className="text-sm text-[#E6E6FF] mt-1">{hackathon.teamSize}</p>
                </div>
              </div>
              <div>
                <span className="text-xs text-[#707090] uppercase tracking-wider">Tech Stack</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {hackathon.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#4CC9F0]/8 text-[#4CC9F0] rounded-lg text-xs border border-[#4CC9F0]/15 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt3DCard>
          </motion.div>

          {/* ─── EXPERIENCE STORY ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <GlassCard className="p-6">
              <h2 className="text-lg font-bold mb-4 text-[#4CC9F0] neon-text">
                Experience Story
              </h2>
              <p className="text-sm text-[#E6E6FF] leading-relaxed mb-4">{hackathon.experience}</p>
              <p className="text-sm text-[#A0A0C0] leading-relaxed italic">{hackathon.challenges}</p>
            </GlassCard>
          </motion.div>

          {/* ─── KEY LEARNINGS ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <GlassCard className="p-6">
              <h2 className="text-lg font-bold mb-4 shimmer-text">Key Learnings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-sm text-[#4CC9F0] mb-3">Technical Learnings</h3>
                  <ul className="space-y-2">
                    {hackathon.learnings?.technical?.map((learning, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#4CC9F0] mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(76, 201, 240, 0.6)' }} />
                        <span className="text-sm text-[#E6E6FF]">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#A855F7] mb-3">Soft Skills</h3>
                  <ul className="space-y-2">
                    {hackathon.learnings?.softSkills?.map((learning, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7] mt-2 flex-shrink-0" style={{ boxShadow: '0 0 6px rgba(168, 85, 247, 0.6)' }} />
                        <span className="text-sm text-[#E6E6FF]">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* ─── RESULT ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <Tilt3DCard className="p-6" glowColor="#4CC9F0">
              <div className="flex items-center gap-3 mb-3">
                <FaTrophy className="text-[#4CC9F0] text-xl" />
                <h2 className="text-lg font-bold text-[#4CC9F0] neon-text">Result & Highlights</h2>
              </div>
              <p className="text-sm text-[#E6E6FF] leading-relaxed">{hackathon.result}</p>
            </Tilt3DCard>
          </motion.div>

          {/* ─── PHOTO GALLERY ─── */}
          {hackathon.photos && hackathon.photos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <GlassCard className="p-6">
                <h2 className="text-lg font-bold mb-6 text-[#A855F7] neon-text-purple">
                  Mission Photos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hackathon.photos
                    .filter((photo) => photo.url)
                    .map((photo, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="overflow-hidden rounded-xl bg-[#0D0D14] border border-[#1A1A26] hover:border-[#4CC9F0]/30 transition-colors"
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption || `Photo ${index + 1}`}
                          className="w-full h-auto object-contain"
                        />
                        {photo.caption && (
                          <div className="p-3">
                            <p className="text-xs text-[#A0A0C0]">{photo.caption}</p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* ─── NAVIGATION ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <Link href="/hackathons" className="glass-btn-primary inline-flex items-center gap-2 px-6 py-3">
              <FaArrowLeft /> Back to Mission Log
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
