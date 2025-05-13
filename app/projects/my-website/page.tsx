import { Github } from "lucide-react";

export default function MyWebsite() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Project Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-sansita mb-4">My Website</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            I wanted to keep up with the latest trends in web development, so I built my own website.
          </p>

          <h2 className="text-2xl font-sansita mt-8 mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Lucide Icons</li>
            <li>Vercel</li>
          </ul>
        </div>
      </header>
      <div className="flex justify-center gap-6 mt-6">
        <a 
          href="https://github.com/heeyeonl/the-website"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group inline-block text-gray-700 hover:text-gray-800 transition-colors"
        >
          <Github size={32} />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            See code here
          </span>
        </a>
      </div>
    </main>
  );
}
