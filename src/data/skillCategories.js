import { Code2, Terminal, Database, Boxes } from "lucide-react";

const skillCategories = [
  {
    category: "Core",
    icon: Terminal,
    skills: ["JavaScript", "PHP", "REST APIs", "Git"],
  },
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      "TypeScript",
      "React",
      "Vue.js 2/3",
      "HTML5",
      "CSS3",
      "Responsive web development",
      "Bootstrap 5",
    ],
  },
  {
    category: "Backend & APIs",
    icon: Boxes,
    skills: ["Node.js", "Express", "Laravel", "JSON", "Third-party API integrations"],
  },
  {
    category: "Data",
    icon: Database,
    skills: ["SQL", "MySQL", "PostgreSQL", "MongoDB"],
  },
];

export default skillCategories;
