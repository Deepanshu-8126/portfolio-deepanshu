// src/app/projects/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar"; // ✅ ADD THIS IMPORT
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import projectsData from "@/data/projects.json";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // Get unique categories
  const categories = ["All", ...new Set(projectsData.map((p) => p.category))];

  // Filter projects based on category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === activeCategory),
      );
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF]">
      <ScrollProgress />
      {/* ✅ NAVBAR ADDED HERE - WILL APPEAR ON EVERY PAGE */}
      <FloatingNavbar />

      <div className="container mx-auto px-6 py-16 md:py-24 pt-16">
        {" "}
        {/* ✅ Added pt-16 for navbar spacing */}
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 shimmer-text">Projects</h1>
          <p className="text-xl text-[#A0A0C0] max-w-2xl mx-auto">
            Real-world data projects built with honesty, learning, and practical
            problem-solving.
          </p>
        </motion.div>
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#4CC9F0]/20 text-[#4CC9F0] border border-[#4CC9F0]/30"
                  : "bg-[#1F1F29]/50 text-[#A0A0C0] hover:bg-[#1F1F29]/70 hover:text-[#4CC9F0]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Tilt3DCard className="h-full flex flex-col p-6 rounded-xl bg-[#12121A]/60 backdrop-blur-sm border border-[#1F1F29]">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg">{project.title}</h3><div className="flex gap-4 mt-2 mb-2"><span className="text-glow-cyan text-[#4CC9F0] font-bold">100+</span><span className="text-xs text-[#A0A0C0]">Datasets</span></div>
                    <Badge
                      variant={
                        project.status === "Completed" ? "primary" : "secondary"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-[#A0A0C0] text-sm mb-4 flex-grow">
                    {project.shortDesc}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-[#4CC9F0]/10 text-[#4CC9F0] border border-[#4CC9F0]/20 rounded-lg px-2 py-1 text-xs">{tech}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="bg-[#4CC9F0]/10 text-[#4CC9F0] border border-[#4CC9F0]/20 rounded-lg px-2 py-1 text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Link href={`/projects/${project.id}`} className="flex-1">
                      <Button variant="ghost" className="w-full hover:neon-text transition-colors group-hover:neon-text">
                        View Details
                      </Button>
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button variant="primary" className="w-full">
                        GitHub
                      </Button>
                    </a>
                  </div>
                </Tilt3DCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {/* Philosophy Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <GlassCard>
            <p className="text-[#A0A0C0] italic">
              "Every project represents a real learning journey — not just code,
              but understanding business problems, data quality issues, and the
              art of communication through visualization."
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
