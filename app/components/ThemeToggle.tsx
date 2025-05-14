'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 p-3 rounded-full opacity-60 bg-[var(--ui-white)] shadow-lg text-[var(--text-secondary)] hover:text-[var(--text-hover)] transition-all duration-200 hover:scale-110 z-50"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
} 