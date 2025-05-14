"use client";

import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomepageEditor() {
  const projectImages = [
    {
      id: 1,
      src: "/homepage-editor/homepage-editor-1.jpeg",
      alt: "Homepage Editor Screenshot 1",
    },
    {
      id: 2,
      src: "/homepage-editor/homepage-editor-2.jpeg",
      alt: "Homepage Editor Screenshot 2",
    },
    {
      id: 3,
      src: "/homepage-editor/homepage-editor-3.jpeg",
      alt: "Homepage Editor Screenshot 3",
    },
    {
      id: 4,
      src: "/homepage-editor/homepage-editor-4.jpeg",
      alt: "Homepage Editor Screenshot 4",
    },
    {
      id: 5,
      src: "/homepage-editor/homepage-editor-5.jpeg",
      alt: "Homepage Editor Screenshot 5",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Project Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-sansita mb-4 text-[var(--text-primary)]">Homepage Editor</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-[var(--text-secondary)] mb-6">
            While I was working at{" "}
            <a
              href="https://www.awardco.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--secondary-color)] hover:text-[var(--secondary-color-hover)] transition-colors"
            >
              Awardco
            </a>
            , I developed a widget-based homepage editor using reusable Vue
            components, replacing the need for manual HTML edits. This
            user-friendly tool, featuring drag-and-drop functionality, empowered
            over 500 clients to independently customize their platforms,
            reducing support tickets by 80%.
          </p>
          <div className="flex items-center gap-2 text-[var(--secondary-color)] hover:text-[var(--secondary-color-hover)] transition-colors group">
            <Link2 size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            <Link
              href="https://awardco.my.site.com/Customerhelp/s/article/Homepage-Editor-legacy?language=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link to Awardco&apos;s official homepage editor introduction video
            </Link>
          </div>

          <h2 className="text-2xl font-sansita mt-8 mb-4 text-[var(--text-primary)]">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
            <li>Real-time preview of homepage layouts</li>
            <li>Drag-and-drop interface for easy customization</li>
            <li>Responsive design testing capabilities</li>
            <li>Component library with customizable elements</li>
            <li>Ability to add variants of available widgets</li>
          </ul>
        </div>
      </header>

      {/* Project Screenshots */}
      <section>
        <h2 className="text-2xl font-sansita mb-6 text-[var(--text-primary)]">Project Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details */}
      <section className="mt-16">
        <h2 className="text-2xl font-sansita mb-6 text-[var(--text-primary)]">Development Process</h2>
        <div className="prose max-w-none text-[var(--text-secondary)]">
          <p className="mb-4">
            The Homepage Editor project was developed with a focus on providing
            a user-friendly interface for creating and customizing website
            layouts. The development process involved several key stages:
          </p>

          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong className="text-[var(--text-primary)]">Initial Planning:</strong> Research and wireframing to
              determine the most intuitive user interface for homepage editing.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Component Development:</strong> Creating a library of
              reusable components that users can drag and drop into their
              layouts.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Real-time Preview:</strong> Implementing a live preview
              system that updates as users make changes to their design.
            </li>
            <li>
              <strong className="text-[var(--text-primary)]">Responsive Testing:</strong> Adding tools to test and
              adjust layouts across different screen sizes.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
