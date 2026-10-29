'use client';

// ============================================
// Airmen Engineers — Service Page Curved Hero Scroller
// Full edge-to-edge auto-scrolling cards with stationary arched curvature
// ============================================

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CurvedHeroCard {
  id: string;
  image: string;
  alt: string;
}

interface CurvedHeroScrollerProps {
  cards: CurvedHeroCard[];
  speed?: number; // Pixels per frame at 60fps
  className?: string;
}

export default function CurvedHeroScroller({
  cards,
  speed = 0.8,
  className,
}: CurvedHeroScrollerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const offsetRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);
  const lastTouchXRef = useRef<number | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const [dimensions, setDimensions] = useState({
    cardWidth: 260,
    cardHeight: 360,
    gap: 20,
    maxDrop: 36,
  });
  const [mounted, setMounted] = useState(false);

  // Repeat cards 4 times to ensure seamless infinite buffer
  const repeatedCards = React.useMemo(() => {
    return [...cards, ...cards, ...cards, ...cards];
  }, [cards]);

  // Measure responsive sizes
  useEffect(() => {
    setMounted(true);

    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({
          cardWidth: 160,
          cardHeight: 230,
          gap: 12,
          maxDrop: 20,
        });
      } else if (width < 768) {
        setDimensions({
          cardWidth: 190,
          cardHeight: 270,
          gap: 14,
          maxDrop: 26,
        });
      } else if (width < 1024) {
        setDimensions({
          cardWidth: 220,
          cardHeight: 310,
          gap: 16,
          maxDrop: 30,
        });
      } else {
        setDimensions({
          cardWidth: 260,
          cardHeight: 360,
          gap: 20,
          maxDrop: 36,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Continuous buttery-smooth RAF animation maintaining the arch curve
  useEffect(() => {
    if (!mounted) return;

    const singleLoopWidth = cards.length * (dimensions.cardWidth + dimensions.gap);

    const step = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const containerCenterX = containerWidth / 2;
      const cardStep = dimensions.cardWidth + dimensions.gap;

      // Increment offset when not paused
      if (!isPausedRef.current) {
        offsetRef.current += speed;
        if (offsetRef.current >= singleLoopWidth) {
          offsetRef.current -= singleLoopWidth;
        } else if (offsetRef.current < 0) {
          offsetRef.current += singleLoopWidth;
        }
      }

      // Starting X position so cards flow from beyond the left edge across to the right edge
      const baseStartX = -singleLoopWidth;

      // Update each card's transform along the stationary arch
      cardElementsRef.current.forEach((el, idx) => {
        if (!el) return;

        const x = baseStartX + idx * cardStep - offsetRef.current;
        const cardCenterX = x + dimensions.cardWidth / 2;
        const distFromCenter = cardCenterX - containerCenterX;
        const normalized = distFromCenter / (containerWidth / 2); // -1.0 (left), 0.0 (center), +1.0 (right)

        // Only position cards within or near the viewport
        if (normalized < -1.4 || normalized > 1.4) {
          el.style.visibility = 'hidden';
          return;
        }

        el.style.visibility = 'visible';

        // Parabolic arch formula:
        // Center (0) is at peak (translateY = 0)
        // Outer edges (normalized ~ ±1) curve downward (translateY = maxDrop)
        const normSq = Math.min(1.8, Math.pow(normalized, 2));
        const translateY = normSq * dimensions.maxDrop;

        // Smooth rotation conforming to the curved arc
        const rotate = Math.max(-7.5, Math.min(7.5, normalized * 6.8));

        // Center card has subtle elevation scale
        const scale = Math.max(0.93, 1.05 - Math.abs(normalized) * 0.1);

        // Center card sits on top in z-index hierarchy
        const zIndex = Math.round((1 - Math.min(1, Math.abs(normalized))) * 25) + 2;

        el.style.transform = `translate3d(${x}px, ${translateY}px, 0) rotate(${rotate}deg) scale(${scale})`;
        el.style.zIndex = `${zIndex}`;
      });

      animationFrameIdRef.current = requestAnimationFrame(step);
    };

    animationFrameIdRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [mounted, cards.length, dimensions, speed]);

  // Touch Drag Interaction
  const handleTouchStart = (e: React.TouchEvent) => {
    isPausedRef.current = true;
    touchStartXRef.current = e.touches[0].clientX;
    lastTouchXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (lastTouchXRef.current !== null) {
      const deltaX = e.touches[0].clientX - lastTouchXRef.current;
      offsetRef.current -= deltaX;
      lastTouchXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = () => {
    lastTouchXRef.current = null;
    touchStartXRef.current = null;
    // Brief grace period before resuming auto-scroll
    setTimeout(() => {
      isPausedRef.current = false;
    }, 1200);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full overflow-hidden select-none py-4 sm:py-6',
        className
      )}
      style={{
        height: `${dimensions.cardHeight + dimensions.maxDrop + 40}px`,
      }}
      onMouseEnter={() => {
        isPausedRef.current = true;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Soft gradient fades on extreme left and right viewport edges */}
      <div className="absolute top-0 bottom-0 left-0 w-10 sm:w-24 bg-gradient-to-r from-white to-transparent z-30 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-10 sm:w-24 bg-gradient-to-l from-white to-transparent z-30 pointer-events-none" />

      {/* Cards container */}
      <div className="relative w-full h-full">
        {repeatedCards.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            ref={(el) => {
              cardElementsRef.current[idx] = el;
            }}
            className={cn(
              'absolute top-2 left-0 will-change-transform',
              'rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-stone-200/90 bg-white',
              'transition-shadow duration-300 group cursor-pointer'
            )}
            style={{
              width: `${dimensions.cardWidth}px`,
              height: `${dimensions.cardHeight}px`,
              // Initial fallback position for SSR
              transform: mounted ? undefined : 'none',
            }}
          >
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 260px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={idx < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
