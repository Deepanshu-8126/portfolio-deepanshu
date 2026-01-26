// Personal Information
export const personalInfo = {
  name: "Deepanshu Kapri",
  username: "dkdropz",
  tagline: "Creative Designer × Data Scientist × AI Engineer",
  bio: "Transforming complex data into actionable insights and building intelligent systems that solve real-world problems.",
  avatar: "/images/profile-pic.jpg",
  email: "contact@deepanshukapri.com",
  location: "India",
  availability: "Open to Opportunities",
  
  // Social Links
  social: {
    instagram: "https://www.instagram.com/dropz.dk",
    telegram: "https://t.me/deepanshu",
    github: "https://github.com/deepanshu",
    linkedin: "https://linkedin.com/in/deepanshukapri",
    twitter: "https://twitter.com/dkdropz",
  },

  // Quick Stats
  stats: {
    projectsCompleted: 50,
    yearsExperience: 1.5,
    hackathonsWon: 8,
    happyClients: 35,
  },

  // Typing Animation Phrases
  roles: [
    "Data Scientist",
    "ML Engineer", 
    "Creative Designer",
    "Problem Solver",
    "AI Builder",
    "Full Stack Dev",
  ],
};

// Skills Data
export const skills = {
  development: [
    { name: "HTML & CSS", level: 90, icon: "🌐" },
    { name: "JavaScript", level: 90, icon: "⚡" },
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Next.js", level: 82, icon: "▲" },
    { name: "TypeScript", level: 75, icon: "📘" },
    { name: "Tailwind CSS", level: 95, icon: "🎨" },
  ],
  
  dataScience: [
    { name: "Python", level: 92, icon: "🐍" },
    { name: "Pandas & NumPy", level: 88, icon: "🐼" },
    { name: "Scikit-learn", level: 85, icon: "🤖" },
    { name: "TensorFlow", level: 78, icon: "🧠" },
    { name: "PyTorch", level: 75, icon: "🔥" },
    { name: "SQL", level: 90, icon: "🗄️" },
  ],
  
  design: [
    { name: "Figma", level: 95, icon: "🎨" },
    { name: "Adobe XD", level: 85, icon: "✨" },
    { name: "Photoshop", level: 88, icon: "🖼️" },
    { name: "Illustrator", level: 82, icon: "🎭" },
    { name: "UI/UX Design", level: 90, icon: "📱" },
    { name: "Logo Design", level: 95, icon: "🏆" },
  ],
  
  tools: [
    { name: "Git & GitHub", level: 88, icon: "📦" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Jupyter", level: 90, icon: "📓" },
    { name: "Docker", level: 70, icon: "🐳" },
    { name: "AWS", level: 65, icon: "☁️" },
  ],
};

// Projects Data
export const projects = [
  {
    id: 1,
    title: "Sentiment Analysis Engine",
    category: "Data Science",
    tags: ["Python", "NLP", "ML", "BERT"],
    description: "Built an NLP model achieving 94% accuracy in classifying customer reviews using BERT and TensorFlow.",
    image: "/images/project1-thumb.jpg",
    difficulty: "Advanced",
    metrics: {
      accuracy: "94%",
      dataset: "50K reviews",
      model: "BERT-base",
    },
    links: {
      github: "#",
      demo: "#",
      case: "#",
    },
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    title: "Sales Analytics Dashboard",
    category: "Data Analytics",
    tags: ["Python", "Tableau", "SQL", "ETL"],
    description: "Interactive dashboard analyzing $2M+ in sales data, revealing 23% increase opportunity in Q4.",
    image: "/images/project2-thumb.jpg",
    difficulty: "Intermediate",
    metrics: {
      revenue: "$2M+",
      insights: "15+",
      automation: "80%",
    },
    links: {
      github: "#",
      demo: "#",
      case: "#",
    },
    status: "Completed",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Website",
    category: "Web Development",
    tags: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    description: "Full-stack e-commerce platform with payment integration, admin panel, and real-time analytics.",
    image: "/images/project1-thumb.jpg",
    difficulty: "Advanced",
    metrics: {
      users: "500+",
      transactions: "1K+",
      uptime: "99.9%",
    },
    links: {
      github: "#",
      demo: "#",
      case: "#",
    },
    status: "Completed",
    featured: false,
  },
  {
    id: 4,
    title: "Brand Identity System",
    category: "Design",
    tags: ["Figma", "Illustrator", "Branding"],
    description: "Complete visual identity for tech startup including logo, style guide, and marketing materials.",
    image: "/images/project2-thumb.jpg",
    difficulty: "Intermediate",
    metrics: {
      deliverables: "25+",
      revisions: "3",
      satisfaction: "100%",
    },
    links: {
      behance: "#",
      dribbble: "#",
    },
    status: "Completed",
    featured: true,
  },
  {
    id: 5,
    title: "Image Classification Model",
    category: "Machine Learning",
    tags: ["Python", "CNN", "TensorFlow", "Computer Vision"],
    description: "Custom CNN model for medical image classification with 91% accuracy on test set.",
    image: "/images/project1-thumb.jpg",
    difficulty: "Advanced",
    metrics: {
      accuracy: "91%",
      dataset: "10K images",
      classes: "5",
    },
    links: {
      github: "#",
      paper: "#",
    },
    status: "Completed",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Analytics Platform",
    category: "Full Stack",
    tags: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    description: "Investment portfolio tracking platform with real-time data visualization and performance metrics.",
    image: "/images/project2-thumb.jpg",
    difficulty: "Intermediate",
    metrics: {
      apiCalls: "1M+/month",
      responseTime: "< 200ms",
      users: "250+",
    },
    links: {
      github: "#",
      demo: "#",
    },
    status: "In Progress",
    featured: false,
  },
];

// Experience Data
export const experience = [
  {
    id: 1,
    type: "internship",
    company: "Tech Corp",
    role: "Data Science Intern",
    duration: "Jun 2024 - Aug 2024",
    description: "Developed ML models for customer churn prediction, improving retention by 15%.",
    skills: ["Python", "Scikit-learn", "SQL", "Tableau"],
    achievements: [
      "Built predictive model with 87% accuracy",
      "Automated data pipeline reducing processing time by 60%",
      "Presented findings to C-suite executives",
    ],
  },
  {
    id: 2,
    type: "hackathon",
    event: "Smart India Hackathon 2024",
    achievement: "Winner - AI/ML Track",
    duration: "Mar 2024",
    description: "Developed AI-powered waste management system for smart cities.",
    skills: ["Computer Vision", "IoT", "React", "Flask"],
    awards: ["1st Place", "₹1 Lakh Prize", "Incubation Offer"],
  },
  {
    id: 3,
    type: "freelance",
    client: "Multiple Clients",
    role: "Creative Designer",
    duration: "2023 - Present",
    description: "Providing logo design, branding, and web design services to 35+ satisfied clients.",
    skills: ["Figma", "Illustrator", "Web Design", "Branding"],
    achievements: [
      "Completed 50+ design projects",
      "Maintained 100% client satisfaction rate",
      "Generated ₹2L+ revenue",
    ],
  },
];

// Certifications
export const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford University (Coursera)",
    date: "2024",
    credential: "#",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "2023",
    credential: "#",
  },
  {
    title: "Advanced React & Next.js",
    issuer: "Udemy",
    date: "2024",
    credential: "#",
  },
];

// Education
export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "University Name",
  duration: "2022 - 2025",
  cgpa: "8.5/10",
  relevant: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Machine Learning",
    "Web Technologies",
  ],
};