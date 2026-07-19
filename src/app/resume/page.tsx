// src/app/resume/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF]">
      {/* Navbar */}
      <FloatingNavbar />
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Deepanshu Kapri
          </h1>

          <p className="text-xl text-[#A0A0C0] mb-6">
            Aspiring Data Analyst | Data Analytics & Business Intelligence
          </p>

          <p className="text-lg text-[#E6E6FF] max-w-2xl mx-auto">
            Aspiring Data Analytics professional with hands-on experience in
            Python, SQL, Pandas, NumPy and Power BI. Passionate about building
            dashboards, performing exploratory data analysis, and solving
            business problems using data.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/Resume_Deepanshu.docx"
              download="public/Resume_Deepanshu.docx"
              className="px-6 py-3 rounded-lg bg-[#4CC9F0] text-black font-semibold hover:scale-105 transition"
            >
              ⬇ Download CV
            </a>

            <Link href="/contact">
              <Button variant="primary">Contact Me</Button>
            </Link>

            <Link href="/projects">
              <Button variant="secondary">View Projects</Button>
            </Link>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <GlassCard className="text-center">
            <div className="text-[#4CC9F0] mb-2">📧</div>
            <div className="font-medium">Email</div>
            <a
              href="mailto:deepanshukapri4@gmail.com"
              className="text-[#A0A0C0] hover:text-[#4CC9F0]"
            >
              deepanshukapri4@gmail.com
            </a>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-[#4CC9F0] mb-2">📍</div>
            <div className="font-medium">Location</div>
            <div className="text-[#A0A0C0]">India • Remote</div>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-[#4CC9F0] mb-2">🎓</div>
            <div className="font-medium">Education</div>
            <div className="text-[#A0A0C0]">BCA Student • 2026</div>
          </GlassCard>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#1F1F29]">
            Education
          </h2>
          <GlassCard>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">
                Bachelor of Computer Applications (BCA)
              </h3>
              <span className="text-[#4CC9F0]">Aug 2024 - Jun 2027</span>
            </div>
            <p className="text-[#A0A0C0]">CGPA: 7.0 / 10</p>
          </GlassCard>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#1F1F29]">
            Technical Skills
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-3 text-[#4CC9F0]">Programming</h3>

              <div className="flex flex-wrap gap-2">
                {["Python", "SQL"].map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-[#4CC9F0]">Data Analysis</h3>

              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "EDA"].map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-[#4CC9F0]">Visualization</h3>

              <div className="flex flex-wrap gap-2">
                {["Power BI", "Matplotlib", "Seaborn"].map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-[#4CC9F0]">Databases</h3>

              <div className="flex flex-wrap gap-2">
                {["SQL Joins", "Aggregations", "Subqueries"].map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-[#4CC9F0]">Tools</h3>

              <div className="flex flex-wrap gap-2">
                {["Excel", "GitHub", "Google Colab", "Jupyter Notebook"].map(
                  (skill) => (
                    <Badge key={skill} variant="primary">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#1F1F29]">
            Certifications
          </h2>

          <div className="space-y-4">
            {[
              {
                name: "Python Programming",
                issuer: "One Roadmap",
              },
              {
                name: "SQL",
                issuer: "HackerRank",
              },
            ].map((cert, index) => (
              <GlassCard
                key={index}
                className="flex justify-between items-start"
              >
                <div>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="text-[#A0A0C0]">{cert.issuer}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
