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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deepanshu</h1>
          <p className="text-xl text-[#A0A0C0] mb-6">
            BCA Student | Data Science & Analytics Learner
          </p>
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
              href="/resume.pdf"
              download="Deepanshu_Kapri_Resume.pdf"
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
              <span className="text-[#4CC9F0]">2024 - 2027</span>
            </div>
            <p className="text-[#A0A0C0]">
              Currently pursuing BCA with focus on Data Science and Analytics
            </p>
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
              <h3 className="font-bold mb-3 text-[#4CC9F0]">Practicing</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "pandas",
                  "NumPy",
                  "SQL",
                  "Excel",
                  "Matplotlib",
                  "Seaborn",
                ].map((skill) => (
                  <Badge key={skill} variant="primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3 text-[#7209B7]">Learning</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Statistics",
                  "Exploratory Data Analysis (EDA)",
                  "Machine Learning Basics",
                  "Data Storytelling",
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#1F1F29]">
            Projects
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Sales Data Analysis",
                description:
                  "Analyzed sales patterns and identified top-performing products/categories using Python and pandas",
                tech: ["Python", "pandas", "Matplotlib", "Seaborn"],
              },
              {
                title: "Customer Churn Analysis",
                description:
                  "Identified factors leading to customer churn in telecom industry through exploratory data analysis",
                tech: ["Python", "pandas", "Seaborn", "scikit-learn"],
              },
              {
                title: "Netflix Content Analysis",
                description:
                  "Analyzed Netflix content trends and regional preferences using real-world datasets",
                tech: ["Python", "pandas", "Matplotlib", "Seaborn"],
              },
              {
                title: "House Price Prediction",
                description:
                  "Built beginner ML model for house price prediction with 78% accuracy using scikit-learn",
                tech: ["Python", "pandas", "scikit-learn", "Matplotlib"],
              },
            ].map((project, index) => (
              <GlassCard key={index}>
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-[#A0A0C0] mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[#1F1F29]">
            Hackathons
          </h2>

          <div className="space-y-4">
            {[
              {
                name: "DataVerse Hackathon",
                role: "Data Analysis Lead",
                year: "2025",
              },
              {
                name: "Campus Analytics Challenge",
                role: "Data Cleaning & Insights",
                year: "2025",
              },
              {
                name: "Social Impact Data Challenge",
                role: "Data Research & Visualization",
                year: "2025",
              },
            ].map((hackathon, index) => (
              <GlassCard
                key={index}
                className="flex justify-between items-start"
              >
                <div>
                  <h3 className="font-bold">{hackathon.name}</h3>
                  <p className="text-[#A0A0C0]">{hackathon.role}</p>
                </div>
                <span className="text-[#4CC9F0]">{hackathon.year}</span>
              </GlassCard>
            ))}
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
                name: "Python for Data Science",
                issuer: "Coursera",
                year: "2025",
              },
              {
                name: "SQL Fundamentals",
                issuer: "freeCodeCamp",
                year: "2025",
              },
              {
                name: "Data Analysis with Pandas",
                issuer: "Kaggle",
                year: "2025",
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
                <span className="text-[#4CC9F0]">{cert.year}</span>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GlassCard className="inline-block p-8">
            <p className="text-[#A0A0C0] mb-6 text-lg">
              Want a PDF version of this resume?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                download="Deepanshu_Resume.pdf"
                className="px-6 py-3 bg-[#4CC9F0]/10 text-[#4CC9F0] border border-[#4CC9F0]/30 rounded-lg hover:bg-[#4CC9F0]/20 transition-colors font-medium inline-flex items-center gap-2"
              >
                ⬇️ Download PDF
              </a>
              <Link href="/contact">
                <Button variant="primary">Contact Me</Button>
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
