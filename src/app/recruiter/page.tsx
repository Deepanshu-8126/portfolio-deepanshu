// src/app/recruiter/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function RecruiterMode() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Clean White Background - Recruiter Friendly */}
      <div className="container mx-auto px-6 py-16 md:py-24 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Deepanshu</h1>
          <p className="text-xl text-gray-600 mb-6">
            BCA Student | Data Science & Analytics Learner
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Building real-world data projects and participating in hackathons.
            Open to full-time Data Analyst roles starting 2026.
          </p>
        </motion.div>

        {/* Key Stats - Recruiter Scan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Data Projects", value: "5+" },
            { label: "Core Stack", value: "Python, SQL, Excel" },
            { label: "Availability", value: "2026" },
            { label: "Location", value: "India (Remote)" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 rounded-lg border border-gray-200"
            >
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Skills - Proof Based */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
            Technical Skills
          </h2>
          <div className="space-y-4">
            {[
              {
                skill: "Python & Data Analysis",
                level: "Practicing",
                proof: "Built 5+ data analysis projects using pandas and NumPy",
              },
              {
                skill: "SQL",
                level: "Practicing",
                proof:
                  "Writing complex queries for data extraction and analysis",
              },
              {
                skill: "Data Visualization",
                level: "Practicing",
                proof:
                  "Creating charts and dashboards with Matplotlib and Seaborn",
              },
              {
                skill: "Excel",
                level: "Practicing",
                proof: "Building pivot tables and data analysis workflows",
              },
              {
                skill: "Statistics Fundamentals",
                level: "Learning",
                proof:
                  "Applying descriptive statistics and hypothesis testing in projects",
              },
              {
                skill: "Machine Learning Basics",
                level: "Learning",
                proof: "Building beginner ML models with scikit-learn",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-48 font-medium text-gray-800">
                  {item.skill}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        item.level === "Practicing"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {item.level}
                    </span>
                    <span className="ml-2">{item.proof}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects - Impact Focused */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
            Key Projects
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Sales Data Analysis",
                impact:
                  "Identified top-performing products and seasonal trends",
                tech: "Python, pandas, Matplotlib, Seaborn",
                type: "Data Analysis Project",
              },
              {
                title: "Customer Churn Analysis",
                impact:
                  "Analyzed factors leading to customer churn in telecom industry",
                tech: "Python, pandas, Seaborn, scikit-learn",
                type: "Exploratory Data Analysis",
              },
              {
                title: "Netflix Content Analysis",
                impact: "Analyzed content trends and regional preferences",
                tech: "Python, pandas, Matplotlib, Seaborn",
                type: "Data Visualization Project",
              },
              {
                title: "House Price Prediction",
                impact: "Built beginner ML model with 78% accuracy",
                tech: "Python, pandas, scikit-learn, Matplotlib",
                type: "Machine Learning Project",
              },
            ].map((project, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-4">
                <div className="font-bold text-lg text-gray-900">
                  {project.title}
                </div>
                <div className="text-blue-600 text-sm font-medium mb-1">
                  {project.type}
                </div>
                <div className="text-gray-700 mb-2">{project.impact}</div>
                <div className="text-sm text-gray-600">{project.tech}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hackathons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
            Hackathons
          </h2>
          <div className="space-y-4">
            {[
              {
                name: "DataVerse Hackathon",
                role: "Data Analysis Lead",
                outcome: "Successfully submitted complete analysis",
              },
              {
                name: "Campus Analytics Challenge",
                role: "Data Cleaning & Insights",
                outcome: "Shortlisted among top 10 teams",
              },
              {
                name: "Social Impact Data Challenge",
                role: "Data Research & Visualization",
                outcome: "Submitted solution with ethical considerations",
              },
            ].map((hackathon, index) => (
              <div key={index} className="flex">
                <div className="font-medium text-gray-900 mr-4">
                  {hackathon.name}
                </div>
                <div className="text-gray-700">
                  <span className="text-gray-600">Role: </span>
                  {hackathon.role} •
                  <span className="text-gray-600 ml-2">Outcome: </span>
                  {hackathon.outcome}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
            Career Progression
          </h2>
          <div className="space-y-4">
            {[
              {
                year: "2024",
                role: "Foundation Building",
                detail: "Mastered Python basics, built first data projects",
              },
              {
                year: "2025",
                role: "Data Analysis Focus",
                detail:
                  "Built 5+ projects, participated in hackathons, learning EDA",
              },
              {
                year: "2026",
                role: "BCA Graduate",
                detail: "Graduating as job-ready Data Analyst",
              },
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className="w-20 font-bold text-blue-600">{item.year}</div>
                <div>
                  <div className="font-medium text-gray-900">{item.role}</div>
                  <div className="text-gray-600">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact - Direct */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center pt-8 border-t border-gray-200"
        >
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <div className="space-y-4">
            <div>
              <a
                href="mailto:vishaljoshi1357@gmail.com"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Email Me: deepanshukapri4@gmail.com
              </a>
            </div>
            <div className="text-gray-600">
              Open to full-time Data Analyst roles starting 2026 • Remote or
              India
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <Link href="/" className="text-blue-600 hover:underline">
              ← View Full Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
