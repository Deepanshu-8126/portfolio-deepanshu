// src/app/skills/page.tsx
"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Tilt3DCard } from "@/components/ui/Tilt3DCard";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackNavigation } from "@/components/ui/BackNavigation";

// Skills data organized by category and learning stage
const SKILLS_DATA = {
  practicing: [
    { name: "Python", description: "Core programming language for data analysis and automation", tools: ["pandas", "NumPy", "Jupyter Notebooks"], projects: ["Sales Data Analysis", "Customer Churn Analysis", "Netflix Content Analysis"] },
    { name: "pandas", description: "Data manipulation and analysis library for structured data", tools: ["DataFrame operations", "GroupBy", "Merge/Join operations"], projects: ["Sales Data Analysis", "Customer Churn Analysis", "College Placement Analysis"] },
    { name: "NumPy", description: "Numerical computing library for array operations and mathematical functions", tools: ["Array manipulation", "Mathematical operations", "Statistical functions"], projects: ["House Price Prediction", "Sales Data Analysis"] },
    { name: "SQL", description: "Database querying language for data extraction and manipulation", tools: ["SELECT queries", "JOINs", "Aggregations", "Subqueries"], projects: ["Customer Churn Analysis", "Sales Data Analysis"] },
    { name: "Excel", description: "Spreadsheet software for data organization and basic analysis", tools: ["Pivot Tables", "VLOOKUP", "Data validation", "Basic charts"], projects: ["College Placement Analysis", "Sales Data Analysis"] },
    { name: "Matplotlib", description: "Python library for creating static, animated, and interactive visualizations", tools: ["Line plots", "Bar charts", "Scatter plots", "Histograms"], projects: ["Sales Data Analysis", "Customer Churn Analysis", "Netflix Content Analysis"] },
    { name: "Seaborn", description: "Statistical data visualization library built on matplotlib", tools: ["Heatmaps", "Distribution plots", "Regression plots", "Categorical plots"], projects: ["Customer Churn Analysis", "Netflix Content Analysis", "House Price Prediction"] },
  ],
  learning: [
    { name: "Statistics", description: "Fundamental statistical concepts for data analysis", tools: ["Descriptive statistics", "Probability basics", "Hypothesis testing", "Correlation analysis"], projects: ["Customer Churn Analysis", "House Price Prediction"] },
    { name: "Exploratory Data Analysis (EDA)", description: "Systematic approach to understanding datasets through summary statistics and visualizations", tools: ["Data profiling", "Outlier detection", "Missing value analysis", "Feature relationships"], projects: ["Sales Data Analysis", "Customer Churn Analysis", "Netflix Content Analysis"] },
    { name: "Machine Learning Basics", description: "Introduction to supervised learning algorithms and model evaluation", tools: ["Linear regression", "Logistic regression", "Decision trees", "Train/test split"], projects: ["House Price Prediction", "Customer Churn Analysis"] },
    { name: "Data Storytelling", description: "Communicating insights effectively to non-technical stakeholders", tools: ["Dashboard design", "Narrative structure", "Visual hierarchy", "Business context"], projects: ["Sales Data Analysis", "Customer Churn Analysis"] },
  ],
  planned: [
    { name: "Advanced Machine Learning", description: "Ensemble methods, neural networks, and advanced algorithms", tools: ["Random Forest", "Gradient Boosting", "Neural Networks", "Hyperparameter tuning"], projects: [] },
    { name: "Model Deployment", description: "Deploying machine learning models to production environments", tools: ["Flask/Django APIs", "Docker", "Cloud platforms", "Model monitoring"], projects: [] },
    { name: "Big Data Tools", description: "Working with large-scale datasets and distributed computing", tools: ["Apache Spark", "Hadoop", "Distributed processing", "Stream processing"], projects: [] },
    { name: "Advanced Visualization", description: "Interactive dashboards and complex visual analytics", tools: ["Plotly/Dash", "Tableau", "Power BI", "D3.js"], projects: [] },
  ],
};

const LEARNING_STAGES = {
  practicing: { title: "Practicing", description: "Skills I use regularly in my projects and hackathons", color: "#4CC9F0", glowColor: "rgba(76, 201, 240, 0.5)" },
  learning: { title: "Learning", description: "Foundations I'm actively building through coursework and projects", color: "#A855F7", glowColor: "rgba(168, 85, 247, 0.5)" },
  planned: { title: "Planned", description: "Future skills I'm preparing to learn next", color: "#707090", glowColor: "rgba(112, 112, 144, 0.5)" },
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#06060B] text-[#E6E6FF] relative">
      <FloatingNavbar />
      <ScrollProgress />

      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-24 pb-20">
        <BackNavigation className="mb-8" />

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 shimmer-text">Skills</h1>
          <p className="text-lg text-[#A0A0C0] max-w-2xl mx-auto">
            My honest learning journey — from current practice to future goals.
          </p>
        </motion.div>

        {/* Skills Sections */}
        <div className="max-w-6xl mx-auto space-y-16">
          {(Object.keys(SKILLS_DATA) as Array<keyof typeof SKILLS_DATA>).map(
            (stage, stageIndex) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stageIndex * 0.1 }}
              >
                {/* Stage Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: LEARNING_STAGES[stage].color,
                        boxShadow: `0 0 10px ${LEARNING_STAGES[stage].glowColor}`,
                      }}
                    />
                    <h2
                      className="text-2xl font-bold"
                      style={{ color: LEARNING_STAGES[stage].color }}
                    >
                      {LEARNING_STAGES[stage].title}
                    </h2>
                  </div>
                  <p className="text-[#A0A0C0] text-sm ml-6">
                    {LEARNING_STAGES[stage].description}
                  </p>
                  <div
                    className="h-0.5 w-20 mt-3 ml-6 rounded-full"
                    style={{
                      background: `linear-gradient(to right, ${LEARNING_STAGES[stage].color}, transparent)`,
                    }}
                  />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {SKILLS_DATA[stage].map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: stageIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <Tilt3DCard className="p-5 h-full" glowColor={LEARNING_STAGES[stage].color}>
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-base text-[#E6E6FF]">{skill.name}</h3>
                          <div
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{
                              backgroundColor: LEARNING_STAGES[stage].color,
                              boxShadow: `0 0 6px ${LEARNING_STAGES[stage].glowColor}`,
                            }}
                          />
                        </div>

                        <p className="text-xs text-[#A0A0C0] mb-4 leading-relaxed">
                          {skill.description}
                        </p>

                        {/* Tools */}
                        <div className="mb-4">
                          <h4 className="font-bold text-[10px] uppercase tracking-wider text-[#707090] mb-2">
                            Tools & Libraries
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {skill.tools.map((tool) => (
                              <span
                                key={tool}
                                className="px-2 py-0.5 text-[10px] rounded-md border font-medium"
                                style={{
                                  backgroundColor: `${LEARNING_STAGES[stage].color}08`,
                                  color: LEARNING_STAGES[stage].color,
                                  borderColor: `${LEARNING_STAGES[stage].color}20`,
                                }}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        {skill.projects.length > 0 && (
                          <div>
                            <h4 className="font-bold text-[10px] uppercase tracking-wider text-[#707090] mb-2">
                              Applied In
                            </h4>
                            <ul className="space-y-1">
                              {skill.projects.map((project) => (
                                <li key={project} className="flex items-start gap-2 text-xs text-[#A0A0C0]">
                                  <div
                                    className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                                    style={{ backgroundColor: LEARNING_STAGES[stage].color }}
                                  />
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </Tilt3DCard>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <GlassCard className="p-8 neon-border">
            <p className="text-[#A0A0C0] italic text-sm leading-relaxed">
              &quot;I believe in honest learning — showcasing what I can do today
              while being transparent about what I&apos;m working towards tomorrow.
              Every skill listed here represents real practice, not just
              theoretical knowledge.&quot;
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
