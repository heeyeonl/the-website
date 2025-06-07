'use client';

import { Folder } from 'lucide-react';
import Card from '../components/Card';
import { projects, ProjectCard } from './data';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center gap-4 mb-4">
        <Folder size={40} className="text-[var(--foreground)]" />
        <h1 className="text-3xl font-bold text-[var(--ui-black)]">projects</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project: ProjectCard) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            icon={project.icon}
            iconColor={project.statusColor}
            href={project.href}
            tags={project.tags}
            status={project.status}
            isHighlighted={project.isHighlighted}
          />
        ))}
      </div>
    </div>
  );
} 