import { Code2, Terminal, Database, Cloud, GitBranch, Boxes } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Vue",
      "AngularJS",
      "HTML",
      "CSS"
    ],
  },
  {
    category: "Backend",
    icon: Terminal,
    skills: [
      "PHP",
      "Laravel",
      "REST APIs",
      "Backend Integrations",
      "Secure Data Workflows"
    ],
  },
  {
    category: "Database",
    icon: Database,
    skills: [
      "MongoDB",
      "MySQL",
      "Relational Database Design",
      "Query Optimization"
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "AWS",
      "Cloud Deployments",
      "CI/CD Pipelines",
      "Production Systems"
    ],
  },
  {
    category: "Tools",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "Code Reviews",
      "Debugging",
      "Testing Workflows"
    ],
  },
  {
    category: "Architecture & Practices",
    icon: Boxes,
    skills: [
      "System Architecture",
      "SDLC",
      "Accessibility Awareness",
      "Technical Documentation",
      "Performance Optimization"
    ],
  },
];

export default skillCategories;