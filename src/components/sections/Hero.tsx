'use client';

// ============================================
// Airmen Engineers — Hero Section
// Mobile-Responsive Banner Slider (Full-Image View on Mobile + Touch Swipe)
// ============================================

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  {
    url: '/images/Kaeser Industrial Air Compressor Banner.png',
    alt: 'Kaeser Compressors — German Engineered Screw Air Compressors',
  },
  {
    url: '/images/AIRpipe Industrial Pipeline Panorama.png',
    alt: 'AIRpipe — Industrial Aluminium Compressed Air Piping Distribution',
  },
  {
    url: '/images/EP Industrial Equipment Showcase.png',
    alt: 'EP Equipment — Electric & Lithium-Ion Material Handling Forklifts',
  },
  {
    url: '/images/ANEST IWATA Air Compressor Showcase.png',
    alt: 'Greaves Cotton — Industrial Diesel Generators & Power Solutions',
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // ============================================
  // AUTO SLIDER (Rotates every 4s)
  // ============================================
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, [currentImage]);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  // Touch Swipe Support for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      // Swiped left -> next
      handleNext();
    } else if (distance < -45) {
      // Swiped right -> prev
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="hero"
      className="relative w-full max-w-full overflow-hidden bg-slate-950 group select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Accessible Primary Page Heading (H1) */}
      <h1 className="sr-only">
        Airmen Engineers — Industrial Equipment &amp; In-House Precision Manufacturing
      </h1>

      {/* ========================================
          HERO IMAGE SLIDER CONTAINER
          Aspect ratio dynamically matches the 2.34:1 / 2.5:1 panorama images
          Ensures the entire banner opens FULLY on mobile without any cropping
          ======================================== */}
      <div
        className="
          relative
          w-full
          aspect-[2.34/1]
          sm:aspect-[2.35/1]
          md:aspect-[2.4/1]
          lg:aspect-[2.4/1]
          overflow-hidden
          bg-slate-950
        "
      >
        {HERO_IMAGES.map((image, index) => {
          const isActive = index === currentImage;
          return (
            <div
              key={image.url}
              className={`
                absolute
                inset-0
                w-full
                h-full
                transition-opacity
                duration-700
                ease-in-out
                ${isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}
              `}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                quality={90}
                className="
                  block
                  w-full
                  h-full
                  object-contain
                  sm:object-cover
                  object-center
                "
              />
            </div>
          );
        })}
      </div>

      {/* ========================================
          PREVIOUS / NEXT ARROWS
          Touch & Desktop Navigation
          ======================================== */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous banner"
        className="
          absolute
          left-1.5 sm:left-4 md:left-6
          top-1/2 -translate-y-1/2
          z-20
          p-1.5 sm:p-2.5 md:p-3
          rounded-full
          bg-black/45 hover:bg-black/75
          backdrop-blur-md
          border border-white/20
          text-white hover:text-gold
          transition-all duration-300
          opacity-70 sm:opacity-0 group-hover:opacity-100
          focus:opacity-100
          shadow-lg
          cursor-pointer
        "
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next banner"
        className="
          absolute
          right-1.5 sm:right-4 md:right-6
          top-1/2 -translate-y-1/2
          z-20
          p-1.5 sm:p-2.5 md:p-3
          rounded-full
          bg-black/45 hover:bg-black/75
          backdrop-blur-md
          border border-white/20
          text-white hover:text-gold
          transition-all duration-300
          opacity-70 sm:opacity-0 group-hover:opacity-100
          focus:opacity-100
          shadow-lg
          cursor-pointer
        "
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* ========================================
          SLIDER INDICATOR PILL
          ======================================== */}
      <div
        className="
          absolute
          z-20
          left-1/2 -translate-x-1/2
          bottom-2 sm:bottom-4 md:bottom-6
          flex
          items-center
          justify-center
          gap-1.5 sm:gap-2
          px-2.5 sm:px-3.5 py-1 sm:py-1.5
          rounded-full
          bg-black/50
          backdrop-blur-md
          border border-white/20
          shadow-lg
        "
      >
        {HERO_IMAGES.map((image, index) => {
          const isActive = index === currentImage;
          return (
            <button
              key={image.url}
              type="button"
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to banner slide ${index + 1}`}
              aria-current={isActive ? 'true' : undefined}
              className={`
                block
                p-0
                border-0
                rounded-full
                cursor-pointer
                transition-all
                duration-300
                ${isActive
                  ? 'bg-gold w-5 sm:w-7 md:w-8 h-1.5 sm:h-2 md:h-2.5 shadow-sm'
                  : 'bg-white/60 hover:bg-white w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5'
                }
              `}
            />
          );
        })}
      </div>
    </section>
  );
}