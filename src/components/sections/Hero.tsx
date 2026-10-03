'use client';

// ============================================
// Airmen Engineers — Hero Section
// Responsive / Mobile Optimized Slider
// ============================================

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  {
    url: '/images/banner-1.jpg',
    alt: 'Kaeser Compressors — German Engineered Screw Air Compressors',
  },
  {
    url: '/images/Banner-6.jpg',
    alt: 'AIRpipe — Industrial Aluminium Compressed Air Piping Distribution',
  },
  {
    url: '/images/banner-7.jpg',
    alt: 'EP Equipment — Electric & Lithium-Ion Material Handling Forklifts',
  },
  {
    url: '/images/banner-4.jpg',
    alt: 'Greaves Cotton — Industrial Diesel Generators & Power Solutions',
  },
  {
    url: '/images/banner-5.jpg',
    alt: 'AIM Compressors — Reciprocating & Scroll Air Compressors',
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // ============================================
  // AUTO SLIDER (Active 3.5s continuous rotation)
  // Resets timer on user interaction
  // ============================================

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 3500);

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

  return (
    <section
      id="hero"
      className="relative w-full max-w-full overflow-hidden bg-white group select-none"
    >
      {/* ========================================
          HERO IMAGE SLIDER CONTAINER
          Identical width & height for all slides
          Mobile Responsive Aspect Ratio
          ======================================== */}
      <div
        className="
          relative
          w-full
          aspect-[16/9]
          sm:aspect-[16/8]
          lg:aspect-[21/9]
          xl:aspect-[2.4/1]
          min-h-[220px]
          sm:min-h-[320px]
          lg:min-h-[500px]
          overflow-hidden
          bg-white
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
                  object-cover
                  object-center
                "
              />
            </div>
          );
        })}
      </div>

      {/* ========================================
          PREVIOUS / NEXT ARROWS
          Desktop & Tablet Quick Navigation
          ======================================== */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous banner"
        className="
          absolute
          left-3 sm:left-6
          top-1/2 -translate-y-1/2
          z-20
          p-2 sm:p-3
          rounded-full
          bg-black/35 hover:bg-black/70
          backdrop-blur-md
          border border-white/25
          text-white hover:text-gold
          transition-all duration-300
          opacity-0 group-hover:opacity-100
          focus:opacity-100
          shadow-lg
        "
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next banner"
        className="
          absolute
          right-3 sm:right-6
          top-1/2 -translate-y-1/2
          z-20
          p-2 sm:p-3
          rounded-full
          bg-black/35 hover:bg-black/70
          backdrop-blur-md
          border border-white/25
          text-white hover:text-gold
          transition-all duration-300
          opacity-0 group-hover:opacity-100
          focus:opacity-100
          shadow-lg
        "
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* ========================================
          SLIDER INDICATOR PILL
          Visible over both dark and white backgrounds
          ======================================== */}
      <div
        className="
          absolute
          z-20
          left-1/2 -translate-x-1/2
          bottom-3 sm:bottom-6
          flex
          items-center
          justify-center
          gap-2
          px-3 sm:px-4 py-1.5
          rounded-full
          bg-black/40
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
                  ? 'bg-gold w-6 sm:w-8 h-2 sm:h-2.5 shadow-sm'
                  : 'bg-white/60 hover:bg-white w-2 sm:w-2.5 h-2 sm:h-2.5'
                }
              `}
            />
          );
        })}
      </div>
    </section>
  );
}