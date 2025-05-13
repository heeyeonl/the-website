import { Github } from "lucide-react";
// import GitHubContributions from '@/app/components/GitHubCalendar';

export default function Grind() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Project Header */}
      <header className="mb-12 relative">
        <div className="absolute top-0 right-0">
          <a
            href="https://github.com/heeyeonl/grind"
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
        <h1 className="text-4xl font-sansita mb-8">Grind</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            I wanted to master data structures and algorithms (DSA), so I built a collection of projects. My goal is to add more files to this repository as I learn more about DSA!
          </p>
        </div>
      </header>
      {/* <div className="mb-12">
        <h2 className="text-2xl font-sansita mb-4">My GitHub Contributions</h2>
        <GitHubContributions />
      </div> */}
    </main>
  );
}
