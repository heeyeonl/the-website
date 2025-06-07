import React from "react";
import { Code2, Store, Plus } from "lucide-react";

export interface ProjectCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  status: "available" | "coming-soon";
  statusColor?: string;
  tags: string[];
  isHighlighted?: boolean;
}

export const projects: ProjectCard[] = [
  {
    title: "AI Chat",
    description:
      "An NPM package that allows users to easily integrate AI chat functionality into their projects.",
    href: "/projects/ai-chat",
    icon: <Code2 size={32} />,
    status: "available",
    tags: ["React.js", "TypeScript", "NPM", "AI"],
    isHighlighted: true,
  },
  {
    title: "Homepage Editor",
    description:
      "A homepage editor that allows users to customize their homepage with a drag-and-drop interface.",
    href: "/projects/homepage-editor",
    icon: <Code2 size={32} />,
    status: "available",
    tags: ["Vue.js", "JavaScript", "Sass"],
  },

  // {
  //   title: "Grind",
  //   description: "A collection of projects showcasing my journey in mastering data structures and algorithms (DSA) and crafting engaging games.",
  //   href: "/projects/grind",
  //   icon: <Code2 size={32} />,
  //   status: 'available',
  //   tags: ['JavaScript', 'CSS', 'HTML']
  // },
  {
    title: "My Website",
    description:
      "This project highlights my exploration of modern web development technologies and my journey to mastering TypeScript.",
    href: "/projects/my-website",
    icon: <Code2 size={32} />,
    status: "available",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Knitting",
    description:
      "A personal passion project where I design and create unique, high-quality knitted items and accessories.",
    href: "/projects/knitting",
    icon: <Store size={32} />,
    status: "available",
    tags: ["Small Business", "Hobby", "Craft"],
  },
  {
    title: "Coming Soon",
    description:
      "More exciting projects are on the way! Stay tuned for new additions to my project collection.",
    href: "#",
    icon: <Plus size={32} />,
    status: "coming-soon",
    tags: [],
  },
];
