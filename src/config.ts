import projectsData from './data/projects.json';
import hackathonsData from './data/hackathons.json';
import aboutData from './data/about.json';
import contactData from './data/contact.json';

export const config = {
    developer: {
        name: aboutData.core.name.split(" ")[0] || "Deepanshu",
        fullName: aboutData.core.name,
        title: "Data Analyst & AI/ML Aspirant",
        description: aboutData.core.currentFocus
    },
    social: {
        github: contactData.links.find(l => l.platform === 'GitHub')?.url || "https://github.com/Deepanshu-8126",
        email: contactData.directContact.email,
        location: "India"
    },
    about: {
        title: "About Me",
        description: `${aboutData.core.currentRole} at ${aboutData.core.college}. ${aboutData.learningEngine.learningPhilosophy} ${aboutData.personality.mindset}`
    },
    experiences: [] as any[], // To be added later
    hackathons: hackathonsData.map((h: any, index: number) => ({
        id: index + 1,
        position: h.role,
        company: h.title,
        period: h.year || h.duration,
        location: h.location,
        description: h.experience,
        responsibilities: h.learnings.technical.concat(h.learnings.softSkills),
        technologies: h.techStack.join(", "),
        image: h.photos && h.photos.length > 0 ? h.photos[0].url : "/images/placeholder.webp"
    })),
    projects: projectsData.map((p: any, index: number) => ({
        id: index + 1,
        title: p.title,
        category: p.category,
        technologies: Array.isArray(p.tech) ? p.tech.join(", ") : "",
        image: p.image,
        description: p.shortDesc || p.description
    })),
    contact: {
        email: contactData.directContact.email,
        github: contactData.links.find(l => l.platform === 'GitHub')?.url || "https://github.com/Deepanshu-8126",
        linkedin: contactData.links.find(l => l.platform === 'LinkedIn')?.url || "https://linkedin.com/in/deepanshu",
        twitter: "https://x.com/deepanshu_kapri",
        facebook: "",
        instagram: ""
    },
    skills: {
        develop: {
            title: "DATA ANALYTICS & SCIENCE",
            description: "Engineering intelligence through Data",
            details: "Specializing in Exploratory Data Analysis, Predictive Modeling, and Business Intelligence.",
            tools: aboutData.learningEngine.libraries
        }
    }
};
