'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/projects', label: 'projects' },
  { path: '/games', label: 'games' },
  { path: '/about', label: 'about' },
  { path: '/resume', label: 'resume' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? 'text-[var(--ui-foreground)] font-bold' : 'text-[var(--ui-foreground)]';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-[specialelite] text-[var(--ui-foreground)]">
            Heeyeon Lee
          </Link>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-[var(--ui-white)] text-[var(--ui-black)]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`${isActive(item.path)} text-md transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`
          md:hidden 
          ${isMenuOpen ? 'max-h-48 py-2' : 'max-h-0'} 
          overflow-hidden transition-all duration-300 ease-in-out
        `}>
          <div className="flex flex-col space-y-4 pb-3 items-end">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path} 
                className={`${isActive(item.path)} text-sm transition-colors duration-200`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 