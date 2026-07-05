import type { Certification, EducationItem, ExperienceItem, NavigationSection, PipelineStep, PortfolioContent, Project, SkillCategory } from "@/types/portfolio";
import { siteConfig } from "@/config/site";

const skillCategories: SkillCategory[] = [
  {
    label: "AI & Machine Learning",
    color: "#38bdf8",
    skills: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs", "NLP", "Computer Vision", "RAG", "Prompt Engineering", "AI Agents", "CNN", "Feature Engineering"],
  },
  {
    label: "Data Science & Analytics",
    color: "#c084fc",
    skills: ["Data Analysis", "EDA", "Statistical Analysis", "KPI Tracking", "Business Intelligence", "Power BI", "Tableau", "Looker", "Data Storytelling", "Excel"],
  },
  {
    label: "Libraries & Frameworks",
    color: "#06b6d4",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Plotly", "Flask", "React.js", "NLTK", "Gradio"],
  },
  {
    label: "Databases & Cloud",
    color: "#818cf8",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "BigQuery", "AWS (S3, RDS)", "GCP", "Neo4j"],
  },
  {
    label: "Languages & Tools",
    color: "#f472b6",
    skills: ["Python", "JavaScript", "C", "C++", "HTML/CSS", "Git", "GitHub", "Jupyter", "VS Code", "REST APIs"],
  },
];

const education: EducationItem[] = [
  {
    degree: "B.Tech — Artificial Intelligence & Machine Learning",
    school: "Uttarakhand Technical University",
    location: "Dehradun, Uttarakhand",
    period: "2022 — 2026",
    current: true,
  },
  {
    degree: "Higher Secondary — Computer Science",
    school: "Kendriya Vidyalaya No.2 N.H.P.B Banbasa",
    location: "Champawat, Uttarakhand",
    period: "2021 — 2022",
    current: false,
  },
];

const experience: ExperienceItem[] = [
  {
    title: "AI Intern",
    company: "Wavygo",
    period: "June 2026 — Present",
    current: true,
    highlights: [
      "Developing AI features using ML, NLP & Generative AI for travel applications",
      "Data collection, cleaning & analysis to support model evaluation & optimization",
      "Deploying scalable AI solutions with cross-functional teams via Agile practices",
    ],
    tags: ["Python", "NLP", "Generative AI", "Machine Learning", "Agile"],
  },
  {
    title: "AI Intern",
    company: "Innovate",
    period: "Jan 2025 — June 2025",
    current: false,
    highlights: [
      "Real-time data pipeline with Python & OpenCV for live traffic video analysis",
      "YOLOv7-based inference system for automated object detection at scale",
      "Structured output logs for downstream performance reporting & analysis",
    ],
    tags: ["Python", "YOLOv7", "OpenCV", "Computer Vision", "Data Pipeline"],
  },
];

const projects: Project[] = [
  {
    title: "Economic Benchmark Analysis",
    subtitle: "$9.31K Global GDP per Capita",
    description: "End-to-end World Bank data analysis with automated ingestion, SQLite data modeling, and interactive Power BI dashboards for trend analysis & country comparisons.",
    tech: ["Python", "Pandas", "NumPy", "SQLite", "Power BI", "Matplotlib"],
    outcomes: ["Automated data ingestion pipeline", "Interactive Power BI dashboards", "Trend analysis & country benchmarks"],
    color: "#38bdf8",
  },
  {
    title: "Retail Sales Intelligence",
    subtitle: "142% YoY Growth Analysis",
    description: "Executive Power BI analytics for multi-year retail performance across stores & categories. Self-service analytics enabling profitability optimization & demand planning.",
    tech: ["Power BI", "Power Query", "DAX", "Data Modeling"],
    outcomes: ["Self-service analytics dashboard", "142% YoY growth tracked", "Reduced reliance on manual analysis"],
    color: "#c084fc",
  },
  {
    title: "Customer Experience Analytics",
    subtitle: "British Airways Service Performance",
    description: "Tableau analytics solution transforming customer review data into actionable insights, with regional KPI tracking and dynamic stakeholder-driven dashboards.",
    tech: ["Tableau", "Data Visualization", "KPI Reporting", "Dashboard Design"],
    outcomes: ["Regional performance gap analysis", "Customer satisfaction trends", "Stakeholder-ready interactive dashboards"],
    color: "#06b6d4",
  },
  {
    title: "DetectXpert",
    subtitle: "Automated Blood Cell Detection",
    description: "YOLOv8-powered multi-class detection of RBCs, WBCs & Platelets from blood smear images. Cloud-deployed on Hugging Face Spaces with real-time Gradio interface.",
    tech: ["Python", "YOLOv8", "OpenCV", "Gradio", "Hugging Face", "NumPy"],
    outcomes: ["Real-time cloud-based detection", "Multi-class cell classification", "Automated diagnostic efficiency"],
    color: "#f472b6",
  },
];

const pipeline: PipelineStep[] = [
  { id: "src", label: "Data Sources", sub: "APIs · CSV · DB", icon: "🌐", color: "#38bdf8" },
  { id: "kafka", label: "Kafka", sub: "Stream Ingest", icon: "⚡", color: "#fbbf24" },
  { id: "spark", label: "PySpark", sub: "Distributed ETL", icon: "🔥", color: "#f97316" },
  { id: "airflow", label: "Airflow", sub: "Orchestration", icon: "🔄", color: "#10b981" },
  { id: "snowflake", label: "Snowflake", sub: "Data Warehouse", icon: "❄️", color: "#818cf8" },
  { id: "bi", label: "Power BI", sub: "Visualization", icon: "📊", color: "#c084fc" },
  { id: "ai", label: "AI Models", sub: "ML Inference", icon: "🧠", color: "#38bdf8" },
];

const certifications: Certification[] = [
  { name: "State Level Hackathon — EVORA", issuer: "State Level", date: "Nov 2025", color: "#38bdf8" },
  { name: "Full Stack Data Science Program", issuer: "AlmaBetter", date: "2025", color: "#10b981" },
  { name: "Data Analysis Job Simulation", issuer: "Deloitte Australia", date: "June 2025", color: "#6366f1" },
  { name: "Data Visualisation Job Simulation", issuer: "Tata / TCS", date: "July 2025", color: "#f59e0b" },
  { name: "Enterprise Data Science in Practice", issuer: "IBM", date: "July 2025", color: "#06b6d4" },
  { name: "Building LLM Apps with Prompt Engineering", issuer: "Coursera", date: "May 2025", color: "#c084fc" },
  { name: "Advanced Technology in AI & Data Analysis", issuer: "Various", date: "Aug 2025", color: "#f472b6" },
  { name: "Excel for Data Analysis", issuer: "IBM", date: "Feb 2026", color: "#38bdf8" },
  { name: "Machine Learning with Apache Spark", issuer: "IBM", date: "2025", color: "#fbbf24" },
  { name: "Databases & SQL for Data Science with Python", issuer: "IBM", date: "2025", color: "#10b981" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM", date: "2025", color: "#06b6d4" },
  { name: "Neo4j Fundamentals", issuer: "Neo4j", date: "2025", color: "#818cf8" },
];

export const portfolioContent: PortfolioContent = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  roles: siteConfig.roles,
  location: siteConfig.location,
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  bio: siteConfig.bio,
  education,
  experience,
  projects,
  skillCategories,
  pipeline,
  certifications,
};

export const navigationSections: NavigationSection[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "analytics", label: "Analytics", href: "#analytics" },
  { id: "certifications", label: "Certifications", href: "#certifications" },
];

export const chartData = {
  gdp: [
    { region: "N. America", gdp: 56200, avg: 9310 },
    { region: "Oceania", gdp: 47800, avg: 9310 },
    { region: "Europe", gdp: 38500, avg: 9310 },
    { region: "E. Asia", gdp: 22100, avg: 9310 },
    { region: "L. America", gdp: 9800, avg: 9310 },
    { region: "S. Asia", gdp: 4200, avg: 9310 },
    { region: "Africa", gdp: 2100, avg: 9310 },
  ],
  retail: [
    { month: "Jan", "2023": 42000, "2024": 89400 },
    { month: "Feb", "2023": 38200, "2024": 94100 },
    { month: "Mar", "2023": 51000, "2024": 108500 },
    { month: "Apr", "2023": 47400, "2024": 115200 },
    { month: "May", "2023": 55800, "2024": 128000 },
    { month: "Jun", "2023": 63100, "2024": 142000 },
  ],
};
