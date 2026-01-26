// src/app/notes/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import notesData from "@/data/notes.json";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
export default function NotesVault() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get categories from JSON data
  const categories = [
    "All",
    ...new Set(notesData.map((note) => note.category)),
  ];

  // Filter notes based on category and search
  const filteredNotes = notesData.filter((note) => {
    const matchesCategory =
      selectedCategory === "All" || note.category === selectedCategory;
    const matchesSearch =
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF]">
      <FloatingNavbar />
      <ScrollProgress />

      <div className="container mx-auto px-6 py-16 md:py-24 pt-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Notes Vault</h1>
          <p className="text-xl text-[#A0A0C0] max-w-2xl mx-auto">
            Downloadable, searchable PDFs covering everything I've learned in my
            data science journey.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search notes by title, tags, or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 bg-[#121218]/60 backdrop-blur-xl border border-[#1F1F29] rounded-xl 
                       text-[#E6E6FF] placeholder-[#A0A0C0] focus:outline-none focus:border-[#4CC9F0]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-4 top-3.5 text-[#A0A0C0]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-[#4CC9F0]/20 text-[#4CC9F0] border border-[#4CC9F0]/30"
                    : "bg-[#121218]/60 text-[#A0A0C0] border border-[#1F1F29] hover:border-[#4CC9F0]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Notes Grid */}
        <div className="max-w-6xl mx-auto">
          {filteredNotes.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <p className="text-[#A0A0C0]">
                No notes found matching your search.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <GlassCard className="h-full flex flex-col">
                    {/* Note Image */}
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img
                        src={note.imageUrl}
                        alt={note.title}
                        className="w-full h-32 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>

                    <div className="flex justify-between items-start mb-3">
                      <span className="text-xs bg-[#7209B7]/20 text-[#7209B7] px-2 py-1 rounded">
                        {note.category}
                      </span>
                      <span className="text-xs text-[#A0A0C0]">
                        {note.date}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg mb-2">{note.title}</h3>

                    <p className="text-[#A0A0C0] text-sm mb-4 line-clamp-2">
                      {note.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {note.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      {note.tags.length > 3 && (
                        <span className="text-xs text-[#A0A0C0]">
                          +{note.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Link href={`/notes/${note.id}`} className="flex-1">
                        <button className="w-full px-3 py-2 bg-[#1F1F29]/50 text-[#4CC9F0] rounded-lg text-sm font-medium hover:bg-[#1F1F29]/70 transition-colors">
                          View Details
                        </button>
                      </Link>
                      <a
                        href={note.pdfUrl}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full px-3 py-2 bg-[#4CC9F0]/20 text-[#4CC9F0] rounded-lg text-sm font-medium hover:bg-[#4CC9F0]/30 transition-colors">
                          Download PDF
                        </button>
                      </a>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <GlassCard>
            <p className="text-[#A0A0C0] italic">
              "Every note is a downloadable, searchable PDF — designed to help
              others starting their data science journey just like I did."
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
