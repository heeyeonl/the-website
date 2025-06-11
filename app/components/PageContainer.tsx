import { Github } from "lucide-react";

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
  titleStyle?: string;
  githubLink?: string;
  className?: string;
}

export default function PageContainer({
  children,
  title,
  titleStyle,
  githubLink,
  className,
}: PageContainerProps) {
  return (
    <main className={`max-w-7xl mx-[5%] sm:mx-[8%] lg:mx-[12%] my-4 sm:my-8 lg:my-16 p-6 sm:p-10 lg:p-14 bg-[var(--ui-white)] outline-2 outline-offset-2 border-2 rounded-lg shadow-sm ${className || ''}`}>
      <header className="mb-8 relative">
        {githubLink && (
          <div className="absolute top-0 right-0">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              <Github size={32} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--ui-black)] text-[var(--ui-white)] px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                See code here
              </span>
            </a>
          </div>
        )}
        <h1 className={titleStyle || 'text-2xl sm:text-3xl lg:text-4xl font-[deiya]'}>{title}</h1>
      </header>
      {children}
    </main>
  );
}
