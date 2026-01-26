// src/app/roadmap/[stage]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BackNavigation } from "@/components/ui/BackNavigation";

// Roadmap data with detailed information and resources
const ROADMAP_DETAILS = {
  current: {
    stage: "Current",
    role: "BCA Student | Data Analyst Learner",
    timeline: "2024-2025",
    focus: ["Python", "SQL", "EDA", "Visualization"],
    description:
      "Currently pursuing Bachelor of Computer Applications (BCA) with a strong focus on building foundational data analysis skills through hands-on projects and real-world datasets.",
    skills: [
      {
        name: "Python",
        level: 85,
        description:
          "Core programming language for data analysis and automation",
      },
      {
        name: "pandas",
        level: 80,
        description: "Data manipulation, cleaning, and transformation",
      },
      {
        name: "SQL",
        level: 75,
        description:
          "Database querying and data extraction from relational databases",
      },
      {
        name: "Matplotlib/Seaborn",
        level: 70,
        description:
          "Creating effective visualizations to communicate insights",
      },
      {
        name: "Statistics",
        level: 65,
        description: "Understanding statistical concepts for data analysis",
      },
    ],
    projects: [
      "Sales Data Analysis",
      "Customer Churn Analysis",
      "Netflix Content Analysis",
    ],
    resources: [
      {
        name: "Python Data Analysis Notes",
        url: "/pdfs/python-data-analysis.pdf",
        type: "PDF",
      },
      {
        name: "SQL Query Cheatsheet",
        url: "/pdfs/sql-cheatsheet.pdf",
        type: "PDF",
      },
      { name: "EDA Checklist", url: "/pdfs/eda-checklist.pdf", type: "PDF" },
    ],
    nextSteps:
      "Complete advanced SQL concepts and build more complex data visualization dashboards",
  },
  next: {
    stage: "Next",
    role: "Junior Data Analyst",
    timeline: "2026",
    focus: [
      "Advanced SQL",
      "Business Intelligence",
      "Dashboarding",
      "A/B Testing",
    ],
    description:
      "Targeting Junior Data Analyst roles where I can apply my analytical skills to solve real business problems and contribute to data-driven decision making.",
    skills: [
      {
        name: "Advanced SQL",
        level: 0,
        description: "Window functions, CTEs, query optimization",
      },
      {
        name: "Power BI/Tableau",
        level: 0,
        description: "Creating interactive dashboards and reports",
      },
      {
        name: "A/B Testing",
        level: 0,
        description: "Designing and analyzing experiments",
      },
      {
        name: "Business Metrics",
        level: 0,
        description: "Understanding KPIs and business logic",
      },
    ],
    learningPath: [
      "Complete Business Intelligence certification",
      "Build portfolio of dashboard projects",
      "Learn A/B testing methodologies",
    ],
    resources: [
      {
        name: "BI Tools Learning Path",
        url: "/pdfs/bi-learning-path.pdf",
        type: "PDF",
      },
      {
        name: "A/B Testing Guide",
        url: "/pdfs/ab-testing-guide.pdf",
        type: "PDF",
      },
    ],
    jobReadiness: "Open to full-time Data Analyst roles starting 2026",
  },
  future: {
    stage: "Future",
    role: "Data Scientist",
    timeline: "2027+",
    focus: [
      "Machine Learning",
      "Deep Learning",
      "MLOps",
      "Advanced Statistics",
    ],
    description:
      "Long-term goal to become a Data Scientist capable of building predictive models, implementing machine learning solutions, and driving advanced analytics initiatives.",
    skills: [
      {
        name: "Machine Learning",
        level: 0,
        description: "Supervised and unsupervised learning algorithms",
      },
      {
        name: "Deep Learning",
        level: 0,
        description: "Neural networks and deep learning frameworks",
      },
      {
        name: "MLOps",
        level: 0,
        description: "Model deployment, monitoring, and management",
      },
      {
        name: "Advanced Statistics",
        level: 0,
        description: "Bayesian statistics, time series analysis",
      },
    ],
    learningPath: [
      "Complete Machine Learning specialization",
      "Build end-to-end ML projects",
      "Learn MLOps best practices",
    ],
    resources: [
      {
        name: "ML Learning Roadmap",
        url: "/pdfs/ml-roadmap.pdf",
        type: "PDF",
      },
      {
        name: "MLOps Best Practices",
        url: "/pdfs/mlops-guide.pdf",
        type: "PDF",
      },
    ],
    vision:
      "Building intelligent systems that solve complex business problems through data",
  },
};

export default function RoadmapDetailPage() {
  const params = useParams();
  const stageKey = params.stage as keyof typeof ROADMAP_DETAILS;
  const roadmapStage = ROADMAP_DETAILS[stageKey];

  if (!roadmapStage) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <GlassCard className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Roadmap Stage Not Found</h2>
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-[#4CC9F0]/20 text-[#4CC9F0] rounded-lg hover:bg-[#4CC9F0]/30 transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF]">
      <div className="container mx-auto px-6 py-16">
        {/* Back Navigation */}
        <BackNavigation className="mb-8" />

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              roadmapStage.stage === "Current"
                ? "bg-[#4CC9F0]/20 text-[#4CC9F0]"
                : roadmapStage.stage === "Next"
                  ? "bg-[#7209B7]/20 text-[#7209B7]"
                  : "bg-[#A0A0C0]/20 text-[#A0A0C0]"
            }`}
          >
            {roadmapStage.stage}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {roadmapStage.role}
          </h1>
          <p className="text-xl text-[#A0A0C0]">{roadmapStage.timeline}</p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-[#4CC9F0]">
              About This Stage
            </h2>
            <p className="text-lg text-[#E6E6FF]">{roadmapStage.description}</p>
          </GlassCard>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <SectionHeader title="Key Skills & Focus Areas" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapStage.skills.map((skill, index) => (
              <GlassCard key={skill.name} className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-[#E6E6FF]">{skill.name}</h3>
                  {skill.level > 0 && (
                    <span className="text-sm text-[#4CC9F0]">
                      {skill.level}%
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#A0A0C0]">{skill.description}</p>

                {skill.level > 0 && (
                  <div className="mt-4 w-full bg-[#1F1F29] rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 shadow-lg ${
                        roadmapStage.stage === "Current"
                          ? "bg-gradient-to-r from-[#4CC9F0] to-[#7209B7]"
                          : roadmapStage.stage === "Next"
                            ? "bg-gradient-to-r from-[#7209B7] to-[#A0A0C0]"
                            : "bg-gradient-to-r from-[#A0A0C0] to-[#707090]"
                      }`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Projects/Learning Path */}
        {(roadmapStage.projects || roadmapStage.learningPath) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <SectionHeader
              title={
                roadmapStage.stage === "Current"
                  ? "Current Projects"
                  : "Learning Path"
              }
            />
            <GlassCard className="p-6">
              <ul className="space-y-2">
                {(roadmapStage.projects || roadmapStage.learningPath)?.map(
                  (item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#4CC9F0] mr-2 mt-1">•</span>
                      <span className="text-[#E6E6FF]">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </GlassCard>
          </motion.div>
        )}

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <SectionHeader title="Learning Resources" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapStage.resources.map((resource, index) => (
              <GlassCard key={resource.name} className="p-6">
                <h3 className="font-bold text-[#E6E6FF] mb-2">
                  {resource.name}
                </h3>
                <p className="text-sm text-[#A0A0C0] mb-4">{resource.type}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#4CC9F0] hover:text-white font-medium"
                >
                  Download →
                </a>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Next Steps / Vision */}
        {(roadmapStage.nextSteps ||
          roadmapStage.vision ||
          roadmapStage.jobReadiness) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <SectionHeader
              title={
                roadmapStage.stage === "Current"
                  ? "Next Steps"
                  : roadmapStage.stage === "Next"
                    ? "Job Readiness"
                    : "Vision"
              }
            />
            <GlassCard className="p-6">
              <p className="text-[#E6E6FF]">
                {roadmapStage.nextSteps ||
                  roadmapStage.jobReadiness ||
                  roadmapStage.vision}
              </p>
            </GlassCard>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/dashboard"
            className="inline-block px-6 py-3 bg-[#4CC9F0]/20 text-[#4CC9F0] rounded-lg hover:bg-[#4CC9F0]/30 transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
