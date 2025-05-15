'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

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
}

export default function Card({
  title,
  description,
  icon,
  iconColor = 'text-[var(--secondary-color)]',
  tags = [],
  href,
  status = 'available',
  actionLabel = 'Learn More',
  className = '',
}: CardProps) {
  const isAvailable = status === 'available';
  
  return (
    <div
      className={`
        border rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-[var(--ui-white)]
        ${className} relative min-h-[200px]
      `}
    >
      <div className="pb-14">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          {icon && (
            <div className={`${isAvailable ? iconColor : 'text-[var(--text-secondary)]'}`}>
              {icon}
            </div>
          )}
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">{title}</h2>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] mb-4">{description}</p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[var(--secondary-color)]/10 text-[var(--secondary-color)] text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Action Button */}
      {href ? (
        isAvailable ? (
          <Link
            href={href}
            className="absolute bottom-6 left-6 inline-block bg-[var(--secondary-color)] text-white px-4 py-2 rounded-md hover:bg-[var(--secondary-color-hover)] transition-colors"
          >
            {actionLabel}
          </Link>
        ) : (
          <span className="absolute bottom-6 left-6 inline-block opacity-60 bg-[#d4d4d4] text-[var(--ui-white)] px-4 py-2 rounded-md cursor-not-allowed">
            Coming Soon
          </span>
        )
      ) : null}
    </div>
  );
} 