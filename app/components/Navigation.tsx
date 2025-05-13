'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-500 font-bold' : 'text-gray-600 hover:text-blue-500';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#faf6f1]/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-500">
            heeyeonl
          </Link>
          <div className="flex space-x-8 items-center">
            <Link href="/projects" className={`${isActive('/projects')} transition-colors duration-200`}>
              projects
            </Link>
            <Link href="/games" className={`${isActive('/games')} transition-colors duration-200`}>
              games
            </Link>
            <Link href="/about" className={`${isActive('/about')} transition-colors duration-200`}>
              about
            </Link>
            <a
              href="/HeeyeonLee_Resume.pdf"
              download
              className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
            >
              resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 