// src/app/notes/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import notesData from "@/data/notes.json";

export default function NotesVault() {
  const [activeTag, setActiveTag] = useState<string>("All");

  // Get all unique tags
  const allTags = Array.from(new Set(notesData.flatMap((note) => note.tags)));
  const tags = ["All", ...allTags];

  // Filter notes by tag
  const filteredNotes =
    activeTag === "All"
      ? notesData
      : notesData.filter((note) => note.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF]">
      {/* ✅ Navbar on every page */}
      <FloatingNavbar />

      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Knowledge Vault
          </h1>
          <p className="text-xl text-[#A0A0C0]">
            Public notes from my journey in Data Science & AI. All original.
          </p>
        </motion.div>

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTag === tag
                  ? "bg-[#4CC9F0]/20 text-[#4CC9F0] border border-[#4CC9F0]/30"
                  : "bg-[#1F1F29]/50 text-[#A0A0C0] hover:bg-[#1F1F29]/70 hover:text-[#4CC9F0]"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Notes Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTag}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredNotes.map((note, index) => (
              <motion.div
                key={note.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold">{note.title}</h2>
                    <span className="text-xs text-[#707090] bg-[#1F1F29] px-2 py-1 rounded">
                      {note.date}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {note.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Link
                    href={`/notes/${note.id}`}
                    className="mt-4 inline-block"
                  >
                    <span className="text-sm text-[#4CC9F0] hover:underline">
                      Read Full Note →
                    </span>
                  </Link>
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
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <GlassCard className="p-6">
            <p className="text-[#A0A0C0] italic">
              "Sharing knowledge accelerates learning. These notes represent my
              honest journey through data science concepts, challenges, and
              breakthroughs."
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
