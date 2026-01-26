// src/components/pdf/ResumePdf.tsx
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import { useState, useEffect } from "react";

// Register fonts
Font.register({
  family: "Inter",
  src: "https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2",
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Inter",
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginBottom: 30,
    textAlign: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 12,
  },
  contactInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 30,
    flexWrap: "wrap",
  },
  contactItem: {
    fontSize: 12,
    color: "#6B7280",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
    paddingBottom: 4,
    borderBottom: "1px solid #E5E7EB",
  },
  educationItem: {
    marginBottom: 12,
  },
  educationDegree: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 4,
  },
  educationDetails: {
    fontSize: 12,
    color: "#6B7280",
  },
  skillsSection: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    flexWrap: "wrap",
  },
  skillsColumn: {
    flex: 1,
    minWidth: 200,
  },
  skillsTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 8,
  },
  skillsList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillBadge: {
    backgroundColor: "#EFF6FF",
    color: "#2563EB",
    padding: "2px 8px",
    borderRadius: 4,
    fontSize: 10,
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 6,
  },
  projectTech: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  techItem: {
    backgroundColor: "#F3F4F6",
    color: "#4B5563",
    padding: "1px 6px",
    borderRadius: 3,
    fontSize: 10,
  },
  hackathonItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  hackathonName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1F2937",
  },
  hackathonRole: {
    fontSize: 12,
    color: "#6B7280",
  },
  hackathonYear: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "bold",
  },
});

interface ResumeData {
  name: string;
  title: string;
  email: string;
  location: string;
  education: Array<{
    degree: string;
    period: string;
    details: string;
  }>;
  skills: {
    practicing: string[];
    learning: string[];
  };
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
  }>;
  hackathons: Array<{
    name: string;
    role: string;
    year: string;
  }>;
}

export function ResumePdf({ data }: { data: ResumeData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactItem}>{data.email}</Text>
            <Text style={styles.contactItem}>{data.location}</Text>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.educationDegree}>{edu.degree}</Text>
              <Text style={styles.educationDetails}>
                {edu.period} • {edu.details}
              </Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillsSection}>
            <View style={styles.skillsColumn}>
              <Text style={styles.skillsTitle}>Practicing</Text>
              <View style={styles.skillsList}>
                {data.skills.practicing.map((skill, index) => (
                  <Text key={index} style={styles.skillBadge}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.skillsColumn}>
              <Text style={styles.skillsTitle}>Learning</Text>
              <View style={styles.skillsList}>
                {data.skills.learning.map((skill, index) => (
                  <Text key={index} style={styles.skillBadge}>
                    {skill}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {data.projects.map((project, index) => (
            <View key={index} style={styles.projectItem}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectDescription}>
                {project.description}
              </Text>
              <View style={styles.projectTech}>
                {project.tech.map((tech, techIndex) => (
                  <Text key={techIndex} style={styles.techItem}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Hackathons */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hackathons</Text>
          {data.hackathons.map((hackathon, index) => (
            <View key={index} style={styles.hackathonItem}>
              <View>
                <Text style={styles.hackathonName}>{hackathon.name}</Text>
                <Text style={styles.hackathonRole}>{hackathon.role}</Text>
              </View>
              <Text style={styles.hackathonYear}>{hackathon.year}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
