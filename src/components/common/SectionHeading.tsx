'use client';

// ============================================
// Airmen Engineers — Section Heading Component
// ============================================

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12',
        align === 'center'
          ? 'mx-auto text-center'
          : 'text-center md:text-left mx-auto md:mx-0',
        className
      )}
    >
      {overline && (
        <span className="overline mb-3 block">{overline}</span>
      )}
      <h2
        className={cn(
          'mb-4',
          dark ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg leading-relaxed',
            dark ? 'text-gray-300' : 'text-slate-custom'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
