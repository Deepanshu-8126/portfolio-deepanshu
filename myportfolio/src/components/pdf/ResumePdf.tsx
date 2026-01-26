// src/components/pdf/ResumePDF.tsx
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFxDMZ9N.woff"
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Inter",
    backgroundColor: "#FFFFFF",
    color: "#000000"
  },
  header: {
    marginBottom: 20
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4
  },
  role: {
    fontSize: 16,
    color: "#4CC9F0",
    marginBottom: 12
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "#7209B7"
  },
  project: {
    marginBottom: 10
  },
  projectTitle: {
    fontSize: 12,
    fontWeight: "bold"
  },
  projectDesc: {
    fontSize: 10,
    color: "#555",
    marginTop: 2
  },
  skills: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
    marginTop: 4
  },
  skillTag: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    fontSize: 9
  }
});

const resumeData = {
  name: "Vushal Joshi",
  role: "AI Engineer & Data Scientist",
  contact: "vishaljoshi1357@gmail.com • India • github.com/vushal • linkedin.com/in/vushal-joshi",
  summary: "Building intelligent urban systems with machine learning, LLMs, and scalable backend architecture.",
  skills: ["Python", "Machine Learning", "Pandas", "Node.js", "MongoDB", "Next.js", "SQL", "LLM Integration"],
  projects: [
    {
      title: "Urban Decision Intelligence System",
      description: "AI-powered platform for city infrastructure planning.",
      impact: "40% faster resolution",
      tags: ["Python", "LLM", "MongoDB"]
    }
  ],
  education: "BCA, University (Expected 2026)"
};

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{resumeData.name}</Text>
        <Text style={styles.role}>{resumeData.role}</Text>
        <Text style={{ fontSize: 10, color: "#666" }}>
          {resumeData.contact}
        </Text>
      </View>
      <Text style={styles.sectionTitle}>Summary</Text>
      <Text style={{ fontSize: 11 }}>{resumeData.summary}</Text>
      <Text style={styles.sectionTitle}>Technical Skills</Text>
      <View style={styles.skills}>
        {resumeData.skills.map((skill, i) => (
          <Text key={i} style={styles.skillTag}>{skill}</Text>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Key Projects</Text>
      {resumeData.projects.map((project, i) => (
        <View key={i} style={styles.project}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDesc}>{project.description}</Text>
          <Text style={{ fontSize: 9, color: "#4CC9F0", marginTop: 2 }}>
            Impact: {project.impact}
          </Text>
        </View>
      ))}
      <Text style={styles.sectionTitle}>Education</Text>
      <Text style={{ fontSize: 11 }}>{resumeData.education}</Text>
    </Page>
  </Document>
);