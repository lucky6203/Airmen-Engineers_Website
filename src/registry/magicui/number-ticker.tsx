'use client';

import React, { ComponentPropsWithoutRef, useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface NumberTickerProps extends ComponentPropsWithoutRef<'span'> {
  value: number | string;
  direction?: 'up' | 'down';
  delay?: number; // delay in seconds
  decimalPlaces?: number;
  useGrouping?: boolean;
}

export function NumberTicker({
  value,
  direction = 'up',
  delay = 0,
  className,
  decimalPlaces = 0,
  useGrouping = true,
  ...props
}: NumberTickerProps) {
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
  const isNumeric = typeof numericValue === 'number' && !isNaN(numericValue) && isFinite(numericValue);

  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? (isNumeric ? numericValue : 0) : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '0px' });

  useEffect(() => {
    if (isInView && isNumeric) {
      const timer = setTimeout(() => {
        motionValue.set(direction === 'down' ? 0 : numericValue);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, numericValue, direction, isNumeric]);

  useEffect(() => {
    if (!isNumeric) return;
    return springValue.on('change', (latest) => {
      if (ref.current) {
        const formatted = Intl.NumberFormat('en-US', {
          useGrouping,
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)));
        ref.current.textContent = formatted;
      }
    });
  }, [springValue, decimalPlaces, useGrouping, isNumeric]);

  if (!isNumeric) {
    return (
      <span className={cn('inline-block tracking-wider', className)} {...props}>
        {value}
      </span>
    );
  }

  const initialFormatted = Intl.NumberFormat('en-US', {
    useGrouping,
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(direction === 'down' ? numericValue : 0);

  return (
    <span
      ref={ref}
      className={cn('inline-block tabular-nums tracking-wider', className)}
      {...props}
    >
      {initialFormatted}
    </span>
  );
}

export function NumberTickerDemo() {
  return (
    <NumberTicker
      value={100}
      className="text-8xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
    />
  );
}

export default NumberTicker;
