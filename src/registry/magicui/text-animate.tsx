'use client';

import React, { ElementType } from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

export type TextAnimateAnimation =
  | 'fadeIn'
  | 'fadeInUp'
  | 'blurIn'
  | 'blurInUp'
  | 'blurInDown'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleUp'
  | 'scaleDown';

export type TextAnimateBy = 'text' | 'word' | 'character' | 'line';

export interface TextAnimateProps extends Omit<MotionProps, 'children'> {
  /**
   * The text to animate
   */
  children: string;
  /**
   * Additional classes for the container
   */
  className?: string;
  /**
   * Delay before animation starts (seconds)
   */
  delay?: number;
  /**
   * Animation duration (seconds)
   */
  duration?: number;
  /**
   * Custom Framer Motion variants
   */
  variants?: Variants;
  /**
   * HTML element to render as (default: 'span')
   */
  as?: ElementType;
  /**
   * Granularity of splitting
   */
  by?: TextAnimateBy;
  /**
   * Whether to animate only on view
   */
  startOnView?: boolean;
  /**
   * Whether to trigger animation only once
   */
  once?: boolean;
  /**
   * Animation preset
   */
  animation?: TextAnimateAnimation;
  /**
   * Viewport trigger amount
   */
  amount?: 'some' | 'all' | number;
}

const defaultItemVariants: Record<TextAnimateAnimation, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { opacity: 0, y: 16 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { opacity: 0, filter: 'blur(10px)' },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { opacity: 0, filter: 'blur(10px)', y: 20 },
  },
  blurInDown: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: -20 },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { opacity: 0, filter: 'blur(10px)', y: -20 },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { y: 20, opacity: 0 },
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { y: -20, opacity: 0 },
  },
  slideLeft: {
    hidden: { x: 20, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { x: 20, opacity: 0 },
  },
  slideRight: {
    hidden: { x: -20, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { x: -20, opacity: 0 },
  },
  scaleUp: {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { scale: 0.8, opacity: 0 },
  },
  scaleDown: {
    hidden: { scale: 1.2, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.25, 0, 1] },
    },
    exit: { scale: 1.2, opacity: 0 },
  },
};

export function TextAnimate({
  children,
  className,
  delay = 0,
  duration,
  variants,
  as: Component = 'span',
  by = 'character',
  startOnView = true,
  once = true,
  animation = 'blurInUp',
  amount = 0.2,
  ...props
}: TextAnimateProps) {
  const text = typeof children === 'string' ? children : String(children ?? '');

  const stagger = by === 'character' ? 0.03 : by === 'word' ? 0.08 : by === 'line' ? 0.15 : 0;

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
    exit: {
      transition: {
        staggerChildren: stagger,
        staggerDirection: -1,
      },
    },
  };

  const selectedItemVariants = variants || defaultItemVariants[animation];
  const itemVariants: Variants = duration
    ? {
        ...selectedItemVariants,
        show: {
          ...selectedItemVariants.show,
          transition: {
            ...(typeof selectedItemVariants.show === 'object' ? selectedItemVariants.show.transition : {}),
            duration,
          },
        },
      }
    : selectedItemVariants;

  const MotionComponent = motion.create(Component as keyof React.JSX.IntrinsicElements);

  if (by === 'text') {
    return (
      <MotionComponent
        initial="hidden"
        whileInView={startOnView ? 'show' : undefined}
        animate={startOnView ? undefined : 'show'}
        viewport={{ once, amount }}
        variants={containerVariants}
        className={cn('inline-block', className)}
        {...props}
      >
        <motion.span variants={itemVariants} className="inline-block">
          {text}
        </motion.span>
      </MotionComponent>
    );
  }

  if (by === 'line') {
    const lines = text.split('\n');
    return (
      <MotionComponent
        initial="hidden"
        whileInView={startOnView ? 'show' : undefined}
        animate={startOnView ? undefined : 'show'}
        viewport={{ once, amount }}
        variants={containerVariants}
        className={cn('inline-block', className)}
        {...props}
      >
        {lines.map((line, idx) => (
          <motion.span key={`line-${idx}`} variants={itemVariants} className="block">
            {line}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  if (by === 'word') {
    const words = text.split(/\s+/).filter(Boolean);
    return (
      <MotionComponent
        initial="hidden"
        whileInView={startOnView ? 'show' : undefined}
        animate={startOnView ? undefined : 'show'}
        viewport={{ once, amount }}
        variants={containerVariants}
        className={cn('inline-block', className)}
        {...props}
      >
        {words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="inline-block">
            <motion.span variants={itemVariants} className="inline-block">
              {word}
            </motion.span>
            {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </MotionComponent>
    );
  }

  // by === 'character'
  const words = text.split(' ');
  return (
    <MotionComponent
      initial="hidden"
      whileInView={startOnView ? 'show' : undefined}
      animate={startOnView ? undefined : 'show'}
      viewport={{ once, amount }}
      variants={containerVariants}
      className={cn('inline-block', className)}
      {...props}
    >
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`char-${wordIndex}-${charIndex}`}
              variants={itemVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </MotionComponent>
  );
}

export function TextAnimateDemo() {
  return (
    <TextAnimate animation="blurInUp" by="character" once>
      Blur in by character
    </TextAnimate>
  );
}

export default TextAnimate;
