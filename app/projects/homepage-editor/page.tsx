"use client";

import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectContainer from "@/app/components/ProjectContainer";
import Tags from "@/app/components/Tags";

export default function HomepageEditor() {
  const tags = ['Vue.js', 'JavaScript', 'Sass', 'Accessibility', 'Responsive Design', 'Design System'];

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
    <ProjectContainer title="Homepage Editor">
      <section>
        <Tags tags={tags} />
        <p className="text-lg text-[var(--ui-black)] mb-6">
          While I was working at{" "}
          <a
            href="https://www.awardco.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            Awardco
          </a>
          , I developed a widget-based homepage editor using reusable Vue
          components, replacing the need for manual HTML edits. This
          user-friendly tool, featuring drag-and-drop functionality, empowered
          over 500 clients to independently customize their platforms,
          reducing support tickets by 80%.
        </p>
        <div className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group">
          <Link2 size={16} className="group-hover:rotate-45 transition-transform duration-300" />
          <Link
            href="https://awardco.my.site.com/Customerhelp/s/article/Homepage-Editor-legacy?language=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Awardco&apos;s official homepage editor introduction video
          </Link>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-sansita mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--ui-black)]">
          <li>Real-time preview of homepage layouts</li>
          <li>Drag-and-drop interface for easy customization</li>
          <li>Responsive design testing capabilities</li>
          <li>Component library with customizable elements</li>
          <li>Ability to add variants of available widgets</li>
        </ul>
      </section>

      <section className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-sansita mb-6">Development Process</h2>
        <div className="prose max-w-none text-[var(--ui-black)]">
          <p className="mb-4">
            The Homepage Editor project was developed with a focus on providing
            a user-friendly interface for creating and customizing website
            layouts. The development process involved several key stages:
          </p>

          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong className="text-[var(--ui-black)]">Initial Planning:</strong> Research and wireframing to
              determine the most intuitive user interface for homepage editing.
            </li>
            <li>
              <strong className="text-[var(--ui-black)]">Component Development:</strong> Creating a library of
              reusable components that users can drag and drop into their
              layouts.
            </li>
            <li>
              <strong className="text-[var(--ui-black)]">Real-time Preview:</strong> Implementing a live preview
              system that updates as users make changes to their design.
            </li>
            <li>
              <strong className="text-[var(--ui-black)]">Responsive Testing:</strong> Adding tools to test and
              adjust layouts across different screen sizes.
            </li>
          </ol>
        </div>
      </section>
    </ProjectContainer>
  );
}
