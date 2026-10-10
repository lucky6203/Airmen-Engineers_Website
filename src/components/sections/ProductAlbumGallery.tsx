'use client';

// ============================================
// Airmen Engineers — 3D Product Album Gallery
// Pure Product Image Coverflow (No text, no dark frame background, larger size)
// ============================================

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface GalleryProductItem {
  id: string;
  title: string;
  image: string;
  href: string;
}

export const GALLERY_PRODUCTS: GalleryProductItem[] = [
  {
    id: 'kaeser',
    title: 'Kaeser Rotary Screw Compressor',
    image: '/images/compressors/kaeser-dsd-main.jpg',
    href: '/kaeser',
  },
  {
    id: 'ep-forklifts',
    title: 'EP Lithium-Ion Forklift',
    image: '/images/EP Industrial Equipment Showcase.png',
    href: '/ep-forklifts',
  },
  {
    id: 'greaves',
    title: 'Greaves Cotton DG Set',
    image: '/images/greaves/page_1.png',
    href: '/greaves',
  },
  {
    id: 'airpipe',
    title: 'AIRpipe Modular Piping',
    image: '/images/AIRpipe Industrial Pipeline Panorama.png',
    href: '/airpipe',
  },
  {
    id: 'forged-hubs',
    title: 'Forged Wheel Hubs & Bosses',
    image: '/images/gujraula_plant_img/8122.jpg.jpeg',
    href: '/manufacturing-products#forged-wheel-hub',
  },
  {
    id: 'bearing-rings',
    title: 'Profiled Bearing Rings',
    image: '/images/gujraula_plant_img/6647.jpg.jpeg',
    href: '/manufacturing-products#surface-profile-ring',
  },
  {
    id: 'aim-compressors',
    title: 'AIM Industrial Air Compressor',
    image: '/images/ANEST IWATA Air Compressor Showcase.png',
    href: '/aim',
  },
];

interface ProductAlbumGalleryProps {
  variant?: 'light' | 'dark';
}

export default function ProductAlbumGallery({ variant = 'light' }: ProductAlbumGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const total = GALLERY_PRODUCTS.length;
  const isDark = variant === 'dark';

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered, total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartXRef.current;
    if (Math.abs(diffX) > 35) {
      if (diffX > 0) handlePrev();
      else handleNext();
    }
    touchStartXRef.current = null;
  };

  // Circular offset relative to activeIndex
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div 
      className="relative w-full py-4 select-none overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 3D Coverflow Stage — Increased height for larger product images */}
      <div 
        className="relative h-[360px] sm:h-[400px] md:h-[430px] w-full flex items-center justify-center my-2"
        style={{ perspective: '1100px' }}
      >
        {GALLERY_PRODUCTS.map((item, idx) => {
          const offset = getOffset(idx);
          const isActive = offset === 0;

          // Only render visible items
          if (Math.abs(offset) > 2) return null;

          // 3D positioning
          let translateX = 0;
          let translateZ = 0;
          let rotateY = 0;
          let scale = 1;
          let zIndex = 30;
          let opacity = 1;

          if (offset === 0) {
            translateX = 0;
            translateZ = 70;
            rotateY = 0;
            scale = 1;
            zIndex = 40;
            opacity = 1;
          } else if (offset === 1) {
            translateX = 125;
            translateZ = -50;
            rotateY = -28;
            scale = 0.88;
            zIndex = 30;
            opacity = 0.85;
          } else if (offset === -1) {
            translateX = -125;
            translateZ = -50;
            rotateY = 28;
            scale = 0.88;
            zIndex = 30;
            opacity = 0.85;
          } else if (offset === 2) {
            translateX = 225;
            translateZ = -120;
            rotateY = -42;
            scale = 0.74;
            zIndex = 20;
            opacity = 0.6;
          } else if (offset === -2) {
            translateX = -225;
            translateZ = -120;
            rotateY = 42;
            scale = 0.74;
            zIndex = 20;
            opacity = 0.6;
          }

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={cn(
                'absolute transition-all duration-500 ease-out origin-center',
                isActive ? 'cursor-pointer' : 'cursor-pointer hover:opacity-100 hover:brightness-105'
              )}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Ground Shadow for active card */}
              {isActive && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-7 bg-black/40 blur-xl rounded-full -z-10 pointer-events-none" />
              )}

              {/* Product Card Container — Larger size, pure image, zero text */}
              <Link
                href={item.href}
                onClick={(e) => {
                  if (!isActive) {
                    e.preventDefault();
                    setActiveIndex(idx);
                  }
                }}
                className={cn(
                  'block w-[270px] sm:w-[310px] md:w-[340px] h-[330px] sm:h-[370px] md:h-[390px] rounded-3xl overflow-hidden relative',
                  isDark ? 'bg-slate-900' : 'bg-white',
                  'transition-all duration-300',
                  isActive 
                    ? 'border-2 border-amber-400 shadow-2xl shadow-black/40 ring-4 ring-amber-400/20 scale-100' 
                    : isDark
                      ? 'border border-white/15 shadow-lg shadow-black/20'
                      : 'border border-slate-200/80 shadow-lg shadow-slate-900/10'
                )}
                title={item.title}
              >
                {/* Pure High-Resolution Product Image — No overlay, No text */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className={cn(
                    'object-cover transition-transform duration-500',
                    isActive ? 'scale-100 hover:scale-105' : 'scale-95 opacity-85'
                  )}
                  priority={isActive}
                />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Floating Control Dock under the floating 3D gallery */}
      <div className="mt-3 flex items-center justify-center gap-3">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={cn(
            'w-9 h-9 rounded-full flex items-center justify-center font-bold text-base transition-all shadow-sm active:scale-95 cursor-pointer',
            isDark 
              ? 'bg-white/10 hover:bg-amber-400 text-white hover:text-slate-950 border border-white/20' 
              : 'bg-white hover:bg-amber-400 text-slate-700 hover:text-navy border border-slate-200'
          )}
          aria-label="Previous product image"
        >
          ‹
        </button>

        {/* Slide Indicator Dots */}
        <div className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-full shadow-xs',
          isDark 
            ? 'bg-white/10 border border-white/15' 
            : 'bg-slate-100 border border-slate-200/80'
        )}>
          {GALLERY_PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={cn(
                'rounded-full transition-all duration-300 cursor-pointer',
                i === activeIndex
                  ? 'w-6 h-2 bg-amber-400'
                  : isDark
                    ? 'w-2 h-2 bg-white/30 hover:bg-white/50'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={cn(
            'w-9 h-9 rounded-full flex items-center justify-center font-bold text-base transition-all shadow-sm active:scale-95 cursor-pointer',
            isDark 
              ? 'bg-white/10 hover:bg-amber-400 text-white hover:text-slate-950 border border-white/20' 
              : 'bg-white hover:bg-amber-400 text-slate-700 hover:text-navy border border-slate-200'
          )}
          aria-label="Next product image"
        >
          ›
        </button>
      </div>
    </div>
  );
}
