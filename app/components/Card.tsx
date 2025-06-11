'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import Tags from './Tags';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  iconColor?: string;
  tags?: string[];
  href?: string;
  status?: 'available' | 'coming-soon';
  actionLabel?: string;
  className?: string;
  isHighlighted?: boolean;
}

export default function Card({
  title,
  description,
  icon,
  iconColor = 'text-[var(--foreground)]',
  tags = [],
  href,
  status = 'available',
  actionLabel = 'Learn More',
  className = '',
  isHighlighted = false,
}: CardProps) {
  const { theme } = useTheme();
  const isAvailable = status === 'available';
  
  return (
    <div
      className={`
        border-2 border-[var(--ui-black)] rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-[var(--ui-white)]
        ${className} relative min-h-[200px]
      `}
    >
      <div className="pb-14">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <div className={`${isAvailable ? iconColor : 'text-[var(--ui-black)]'}`}>
              {icon}
            </div>
          )}
          <h2 className="text-xl font-semibold text-[var(--ui-black)]">{title}</h2>
        </div>

        {/* Description */}
        <p className="text-[var(--ui-black)] mb-4">{description}</p>

        {/* Tags */}
        {tags.length > 0 && <Tags tags={tags} />}
      </div>

      {/* Action Button */}
      {href ? (
        isAvailable ? (
          <Link
            href={href}
            className="absolute bottom-6 left-6 inline-block bg-[var(--foreground)] text-[var(--ui-white)] px-4 py-2 rounded-md hover:bg-[var(--foreground-hover)] transition-colors"
          >
            {actionLabel}
          </Link>
        ) : (
          <span className="absolute bottom-6 left-6 inline-block bg-[var(--ui-gray)]/80 text-[var(--ui-white)] px-4 py-2 rounded-md cursor-not-allowed">
            Coming Soon
          </span>
        )
      ) : null}

      {isHighlighted && (
        <Image 
          src={theme === 'dark' ? "/images/flower-white.png" : "/images/flower-black.png"} 
          alt="Flower" 
          width={80} 
          height={80} 
          className="absolute bottom-2 right-2 flower-spin transition-all"
          priority
        />
      )}
    </div>
  );
} 