// src/app/resume/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaAward, FaExternalLinkAlt } from "react-icons/fa";
import dashboardData from "@/data/dashboard.json";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const SKILLS = (dashboardData.skills || []) as { name: string; level: number; category: string; description: string }[];
const CERTS = (dashboardData.certifications || []) as { id: string; title: string; issuer: string; issueDate: string; credentialUrl: string; skills: string[] }[];
const PROJECTS = (dashboardData.projects || []) as { id: string; title: string; description: string; tech: string[] }[];

const SKILL_CATEGORIES = [
  { key: "Core", label: "Core Skills", color: "#4CC9F0" },
  { key: "Foundation", label: "Foundation", color: "#7209B7" },
  { key: "Learning", label: "Currently Learning", color: "#A855F7" },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#08080F] via-[#0A0A0F] to-[#0C0C12] text-[#E6E6FF]">
      <ScrollProgress />
      <FloatingNavbar />

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-20 max-w-4xl">

        {/* ─── HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-[#E6E6FF] via-[#4CC9F0] to-[#A855F7] bg-clip-text text-transparent">
            Deepanshu Kapri
          </h1>
          <p className="text-lg text-[#A0A0C0] font-medium mb-2">
            Aspiring Data Analyst &amp; Business Intelligence Enthusiast
          </p>
          <p className="text-sm text-[#707090] max-w-2xl mx-auto mb-8 leading-relaxed">
            Hands-on experience in Python, SQL, Pandas, NumPy and Power BI. Passionate about building
            dashboards, performing exploratory data analysis, and solving business problems using data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/Resume_Deepanshu.docx"
              download="Resume_Deepanshu.docx"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4CC9F0] to-[#7209B7] text-white font-semibold hover:scale-105 transition shadow-lg shadow-[#4CC9F0]/20"
            >
              <FaDownload /> Download CV
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1F1F29] border border-[#4CC9F0]/30 text-[#4CC9F0] font-semibold hover:bg-[#4CC9F0]/10 transition"
            >
              <FaEnvelope /> Contact Me
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1F1F29] border border-[#1F1F29] text-[#E6E6FF] font-semibold hover:border-[#707090] transition"
            >
              <FaBriefcase /> View Projects
            </Link>
          </div>
        </motion.div>

        {/* ─── CONTACT INFO ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
        >
          <GlassCard className="text-center p-5">
            <div className="text-[#4CC9F0] text-2xl mb-2 flex justify-center"><FaEnvelope /></div>
            <div className="font-semibold mb-1 text-sm">Email</div>
            <a href="mailto:deepanshukapri4@gmail.com" className="text-[#A0A0C0] hover:text-[#4CC9F0] text-xs break-all">
              deepanshukapri4@gmail.com
            </a>
          </GlassCard>
          <GlassCard className="text-center p-5">
            <div className="text-[#4CC9F0] text-2xl mb-2 flex justify-center"><FaMapMarkerAlt /></div>
            <div className="font-semibold mb-1 text-sm">Location</div>
            <div className="text-[#A0A0C0] text-xs">India • Open to Remote</div>
          </GlassCard>
          <GlassCard className="text-center p-5">
            <div className="text-[#4CC9F0] text-2xl mb-2 flex justify-center"><FaGraduationCap /></div>
            <div className="font-semibold mb-1 text-sm">Education</div>
            <div className="text-[#A0A0C0] text-xs">BCA Student • 2024-2027</div>
          </GlassCard>
        </motion.div>

        {/* ─── EDUCATION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionHeader title="Education" />
          <GlassCard className="p-6 border-t-2 border-t-[#4CC9F0]">
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
              <div>
                <h3 className="font-bold text-lg text-[#E6E6FF]">Bachelor of Computer Applications (BCA)</h3>
                <p className="text-sm text-[#A0A0C0]">MIET College, Kumaun University</p>
                <p className="text-xs text-[#707090] mt-1">CGPA: 7.0 / 10 • Specializing in Data Science & CS Fundamentals</p>
              </div>
              <span className="text-[#4CC9F0] font-semibold text-sm whitespace-nowrap">Aug 2024 – Jun 2027</span>
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── TECHNICAL SKILLS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionHeader title="Technical Skills" />
          <div className="space-y-5">
            {SKILL_CATEGORIES.map(({ key, label, color }) => {
              const filtered = SKILLS.filter((s) => s.category === key);
              if (!filtered.length) return null;
              return (
                <GlassCard key={key} className="p-5">
                  <h3 className="text-sm font-bold mb-4" style={{ color }}>{label}</h3>
                  <div className="space-y-3">
                    {filtered.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-[#E6E6FF]">{skill.name}</span>
                          <span className="text-xs text-[#707090]">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-[#1F1F29] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(to right, ${color}, #7209B7)` }}
                          />
                        </div>
                        <p className="text-xs text-[#707090] mt-0.5">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              );
            })}

            {/* Tools row */}
            <GlassCard className="p-5">
              <h3 className="text-sm font-bold mb-3 text-[#A0A0C0]">Tools & Environment</h3>
              <div className="flex flex-wrap gap-2">
                {["Excel", "GitHub", "Google Colab", "Jupyter Notebook", "Power BI", "VS Code"].map((tool) => (
                  <span key={tool} className="px-3 py-1 bg-[#1F1F29] text-[#A0A0C0] rounded-full text-xs border border-[#1F1F29] hover:border-[#4CC9F0]/40 hover:text-[#4CC9F0] transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.div>

        {/* ─── PROJECTS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <SectionHeader title="Key Projects" />
            <Link href="/projects" className="text-xs text-[#4CC9F0] hover:underline">View All →</Link>
          </div>
          <div className="space-y-4">
            {PROJECTS.map((project) => (
              <GlassCard key={project.id} className="p-5 hover:border-[#4CC9F0]/40 transition">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-base text-[#E6E6FF]">{project.title}</h3>
                </div>
                <p className="text-sm text-[#A0A0C0] mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-0.5 bg-[#4CC9F0]/10 text-[#4CC9F0] rounded border border-[#4CC9F0]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* ─── CERTIFICATIONS ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <SectionHeader title="Certifications" />
            <Link href="/certifications" className="text-xs text-[#4CC9F0] hover:underline">View All →</Link>
          </div>
          <div className="space-y-3">
            {CERTS.map((cert) => (
              <GlassCard key={cert.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaAward className="text-[#4CC9F0] text-sm" />
                    <h3 className="font-bold text-sm text-[#E6E6FF]">{cert.title}</h3>
                  </div>
                  <p className="text-xs text-[#A0A0C0]">{cert.issuer} • {cert.issueDate}</p>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#4CC9F0] hover:underline whitespace-nowrap"
                >
                  Verify <FaExternalLinkAlt size={10} />
                </a>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* ─── DOWNLOAD CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <GlassCard className="p-8 border border-[#4CC9F0]/20">
            <p className="text-[#A0A0C0] mb-5 text-base">Want a full PDF version of this resume?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Resume_Deepanshu.docx"
                download="Resume_Deepanshu.docx"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#4CC9F0] to-[#7209B7] text-white font-semibold hover:scale-105 transition"
              >
                <FaDownload /> Download CV
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-[#1F1F29] border border-[#1F1F29] text-[#E6E6FF] font-semibold hover:border-[#4CC9F0] transition"
              >
                Contact Me
              </Link>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </div>
  );
}
