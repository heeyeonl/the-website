import { Download } from "lucide-react";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="flex flex-col p-6 max-w-4xl mx-auto">
      <div className="flex items-end mb-6 relative">
        <h1 className="text-4xl font-sansita">Resume</h1>
        <Link href="/HeeyeonLee_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <Download 
            size={32}
            className="ml-2 p-1 cursor-pointer hover:text-[var(--secondary-color)] transition-colors"
          />
        </Link>
      </div>
      <div className="w-full h-[80vh] border border-gray-300 rounded-lg overflow-hidden">
        <iframe 
          src="/HeeyeonLee_Resume.pdf" 
          className="w-full h-full"
          title="Heeyeon Lee Resume"
        />
      </div>
    </div>
  );
}
