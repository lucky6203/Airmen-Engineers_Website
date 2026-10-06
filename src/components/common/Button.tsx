'use client';

// ============================================
// Airmen Engineers — Button Component
// ============================================

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  showArrow?: boolean;
  className?: string;
  id?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  showArrow = false,
  className,
  id,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-heading font-semibold tracking-normal transition-all duration-300 rounded-lg relative overflow-hidden group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2';

  const variants = {
    primary:
      'bg-gold text-navy hover:bg-gold-dark shadow-md hover:shadow-gold active:scale-[0.98]',
    secondary:
      'bg-transparent text-navy border-2 border-navy hover:bg-navy hover:text-white active:scale-[0.98]',
    ghost:
      'bg-transparent text-gold hover:text-gold-dark underline-offset-4 hover:underline',
    dark:
      'bg-navy text-white hover:bg-navy-light border border-white/10 hover:border-gold/30 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className);

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gold-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} id={id}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} id={id}>
      {content}
    </button>
  );
}
