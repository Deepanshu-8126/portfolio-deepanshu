// src/app/projects/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import projectsData from "@/data/projects.json";

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
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF]">
      <FloatingNavbar />

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
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
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <GlassCard className="h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg">{project.title}</h3>
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
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs text-[#A0A0C0]">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Link href={`/projects/${project.id}`} className="flex-1">
                      <Button variant="ghost" className="w-full">
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
                </GlassCard>
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
