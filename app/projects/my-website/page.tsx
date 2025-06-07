import { Github } from "lucide-react";

export default function MyWebsite() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Project Header */}
      <header className="mb-12 relative">
        <div className="absolute top-0 right-0">
          <a 
            href="https://github.com/heeyeonl/the-website"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-block text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <Github size={32} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-[var(--background)] px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              See code here
            </span>
          </a>
        </div>
        <h1 className="text-4xl font-sansita mb-8">My Website</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-[var(--ui-black)] mb-6">
            This is my personal website built with Next.js and Tailwind CSS. I wanted to create a space where I can showcase my projects and share my thoughts.
          </p>

          <h2 className="text-2xl font-sansita mt-8 mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-[var(--ui-black)]">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Lucide Icons</li>
            <li>Vercel</li>
          </ul>
        </div>
      </header>
    </main>
  );
}
