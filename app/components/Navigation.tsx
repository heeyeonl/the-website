'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'text-[var(--text-hover)] font-bold' : 'text-[var(--text-secondary)] hover:text-[var(--text-hover)]';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[var(--nav-bg)] backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-[var(--text-primary)] hover:text-[var(--text-hover)]">
            heeyeonl
          </Link>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-[var(--ui-white)] text-[var(--text-secondary)]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8 items-center">
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
              className="font-bold text-[var(--text-secondary)] hover:text-[var(--text-hover)] transition-colors duration-200"
            >
              resume
            </a>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`
          md:hidden 
          ${isMenuOpen ? 'max-h-48 py-2' : 'max-h-0'} 
          overflow-hidden transition-all duration-300 ease-in-out
        `}>
          <div className="flex flex-col space-y-4 pb-3 items-end">
            <Link 
              href="/projects" 
              className={`${isActive('/projects')} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              projects
            </Link>
            <Link 
              href="/games" 
              className={`${isActive('/games')} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              games
            </Link>
            <Link 
              href="/about" 
              className={`${isActive('/about')} transition-colors duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </Link>
            <a
              href="/HeeyeonLee_Resume.pdf"
              download
              className="text-[var(--text-secondary)] hover:text-[var(--text-hover)] transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 