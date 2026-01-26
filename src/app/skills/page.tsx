// src/app/skills/page.tsx
"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// Skills data organized by category and learning stage
const SKILLS_DATA = {
  practicing: [
    {
      name: "Python",
      description: "Core programming language for data analysis and automation",
      tools: ["pandas", "NumPy", "Jupyter Notebooks"],
      projects: [
        "Sales Data Analysis",
        "Customer Churn Analysis",
        "Netflix Content Analysis",
      ],
    },
    {
      name: "pandas",
      description: "Data manipulation and analysis library for structured data",
      tools: ["DataFrame operations", "GroupBy", "Merge/Join operations"],
      projects: [
        "Sales Data Analysis",
        "Customer Churn Analysis",
        "College Placement Analysis",
      ],
    },
    {
      name: "NumPy",
      description:
        "Numerical computing library for array operations and mathematical functions",
      tools: [
        "Array manipulation",
        "Mathematical operations",
        "Statistical functions",
      ],
      projects: ["House Price Prediction", "Sales Data Analysis"],
    },
    {
      name: "SQL",
      description:
        "Database querying language for data extraction and manipulation",
      tools: ["SELECT queries", "JOINs", "Aggregations", "Subqueries"],
      projects: ["Customer Churn Analysis", "Sales Data Analysis"],
    },
    {
      name: "Excel",
      description:
        "Spreadsheet software for data organization and basic analysis",
      tools: ["Pivot Tables", "VLOOKUP", "Data validation", "Basic charts"],
      projects: ["College Placement Analysis", "Sales Data Analysis"],
    },
    {
      name: "Matplotlib",
      description:
        "Python library for creating static, animated, and interactive visualizations",
      tools: ["Line plots", "Bar charts", "Scatter plots", "Histograms"],
      projects: [
        "Sales Data Analysis",
        "Customer Churn Analysis",
        "Netflix Content Analysis",
      ],
    },
    {
      name: "Seaborn",
      description: "Statistical data visualization library built on matplotlib",
      tools: [
        "Heatmaps",
        "Distribution plots",
        "Regression plots",
        "Categorical plots",
      ],
      projects: [
        "Customer Churn Analysis",
        "Netflix Content Analysis",
        "House Price Prediction",
      ],
    },
  ],
  learning: [
    {
      name: "Statistics",
      description: "Fundamental statistical concepts for data analysis",
      tools: [
        "Descriptive statistics",
        "Probability basics",
        "Hypothesis testing",
        "Correlation analysis",
      ],
      projects: ["Customer Churn Analysis", "House Price Prediction"],
    },
    {
      name: "Exploratory Data Analysis (EDA)",
      description:
        "Systematic approach to understanding datasets through summary statistics and visualizations",
      tools: [
        "Data profiling",
        "Outlier detection",
        "Missing value analysis",
        "Feature relationships",
      ],
      projects: [
        "Sales Data Analysis",
        "Customer Churn Analysis",
        "Netflix Content Analysis",
      ],
    },
    {
      name: "Machine Learning Basics",
      description:
        "Introduction to supervised learning algorithms and model evaluation",
      tools: [
        "Linear regression",
        "Logistic regression",
        "Decision trees",
        "Train/test split",
      ],
      projects: ["House Price Prediction", "Customer Churn Analysis"],
    },
    {
      name: "Data Storytelling",
      description:
        "Communicating insights effectively to non-technical stakeholders",
      tools: [
        "Dashboard design",
        "Narrative structure",
        "Visual hierarchy",
        "Business context",
      ],
      projects: ["Sales Data Analysis", "Customer Churn Analysis"],
    },
  ],
  planned: [
    {
      name: "Advanced Machine Learning",
      description: "Ensemble methods, neural networks, and advanced algorithms",
      tools: [
        "Random Forest",
        "Gradient Boosting",
        "Neural Networks",
        "Hyperparameter tuning",
      ],
      projects: [],
    },
    {
      name: "Model Deployment",
      description:
        "Deploying machine learning models to production environments",
      tools: [
        "Flask/Django APIs",
        "Docker",
        "Cloud platforms",
        "Model monitoring",
      ],
      projects: [],
    },
    {
      name: "Big Data Tools",
      description:
        "Working with large-scale datasets and distributed computing",
      tools: [
        "Apache Spark",
        "Hadoop",
        "Distributed processing",
        "Stream processing",
      ],
      projects: [],
    },
    {
      name: "Advanced Visualization",
      description: "Interactive dashboards and complex visual analytics",
      tools: ["Plotly/Dash", "Tableau", "Power BI", "D3.js"],
      projects: [],
    },
  ],
};

// Learning stage configuration
const LEARNING_STAGES = {
  practicing: {
    title: "Practicing",
    description: "Skills I use regularly in my projects and hackathons",
    color: "#4CC9F0",
    icon: "✅",
  },
  learning: {
    title: "Learning",
    description:
      "Foundations I'm actively building through coursework and projects",
    color: "#7209B7",
    icon: "📚",
  },
  planned: {
    title: "Planned",
    description: "Future skills I'm preparing to learn next",
    color: "#A0A0C0",
    icon: "🚀",
  },
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#E6E6FF]">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills</h1>
          <p className="text-xl text-[#A0A0C0] max-w-2xl mx-auto">
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">
                      {LEARNING_STAGES[stage].icon}
                    </span>
                    <h2
                      className="text-2xl font-bold"
                      style={{ color: LEARNING_STAGES[stage].color }}
                    >
                      {LEARNING_STAGES[stage].title}
                    </h2>
                  </div>
                  <p className="text-[#A0A0C0]">
                    {LEARNING_STAGES[stage].description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SKILLS_DATA[stage].map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: stageIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ y: -4 }}
                    >
                      <Card>
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                          <span
                            className="text-sm font-semibold"
                            style={{ color: LEARNING_STAGES[stage].color }}
                          >
                            {LEARNING_STAGES[stage].icon}
                          </span>
                        </div>

                        <p className="text-[#A0A0C0] text-sm mb-4">
                          {skill.description}
                        </p>

                        {/* Tools Used */}
                        <div className="mb-4">
                          <h4 className="font-bold text-xs text-[#7209B7] mb-2">
                            TOOLS & LIBRARIES
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {skill.tools.map((tool) => (
                              <Badge key={tool} variant="secondary">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Applied Projects */}
                        {skill.projects.length > 0 && (
                          <div>
                            <h4 className="font-bold text-xs text-[#4CC9F0] mb-2">
                              APPLIED IN PROJECTS
                            </h4>
                            <ul className="text-xs text-[#A0A0C0] space-y-1">
                              {skill.projects.map((project) => (
                                <li key={project} className="flex items-start">
                                  <span className="mr-2">•</span>
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </Card>
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
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto mt-20 text-center"
        >
          <Card>
            <p className="text-[#A0A0C0] italic">
              "I believe in honest learning — showcasing what I can do today
              while being transparent about what I'm working towards tomorrow.
              Every skill listed here represents real practice, not just
              theoretical knowledge."
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
