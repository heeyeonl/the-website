'use client';

import Link from 'next/link';
import { Code2, Folder, Plus } from 'lucide-react';

interface ProjectCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  status: 'available' | 'coming-soon';
  tags: string[];
}

const projects: ProjectCard[] = [
  {
    title: "Homepage Editor",
    description: "A homepage editor that allows users to customize their homepage with a drag-and-drop interface.",
    href: "/projects/homepage-editor",
    icon: <Code2 size={32} />,
    status: 'available',
    tags: ['Vue.js', 'JavaScript', 'Sass']
  },
  {
    title: "My Website",
    description: "This is my personal website built with Next.js, TypeScript, and Tailwind CSS.",
    href: "/projects/my-website",
    icon: <Code2 size={32} />,
    status: 'available',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: "Coming Soon",
    description: "More exciting projects are on the way! Stay tuned for new additions to my project collection.",
    href: "#",
    icon: <Plus size={32} />,
    status: 'coming-soon',
    tags: []
  }
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center gap-4 mb-8">
        <Folder size={40} className="text-blue-500" />
        <h1 className="text-3xl font-bold">projects</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className={`border rounded-lg p-6 shadow-sm transition-all duration-300 ${
              project.status === 'available'
                ? 'hover:shadow-md hover:-translate-y-1 bg-white'
                : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${project.status === 'available' ? 'text-blue-500' : 'text-gray-400'}`}>
                {project.icon}
              </div>
              <h2 className="text-xl font-semibold">{project.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            {project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {project.status === 'available' ? (
              <Link
                href={project.href}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            ) : (
              <span className="inline-block bg-gray-200 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed">
                Coming Soon
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 