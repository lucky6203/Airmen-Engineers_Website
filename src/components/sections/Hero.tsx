'use client';

// ============================================
// Airmen Engineers — He1ro Section
// Mobile-Responsive Banner Slider with Brand Coordination
// ============================================

import React, { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface HeroSlide {
  id: 'kaeser' | 'greaves' | 'aim' | 'ep' | 'airpipe';
  url: string;
  alt: string;
  brandName: string;
}

export const HERO_IMAGES: HeroSlide[] = [
  {
    id: 'kaeser',
    url: '/images/Kaeser HSD 600 Compressor Banner.png',
    alt: 'Kaeser Compressors — German Engineered Screw Air Compressors',
    brandName: 'KAESER KOMPRESSOREN',
  },
  {
    id: 'airpipe',
    url: '/images/AIRpipe Industrial Pipeline Panorama.png',
    alt: 'AIRpipe — Industrial Aluminium Compressed Air Piping Distribution',
    brandName: 'AIRpipe Systems',
  },
  {
    id: 'ep',
    url: '/images/EP Industrial Equipment Showcase.png',
    alt: 'EP Equipment — Electric & Lithium-Ion Material Handling Forklifts',
    brandName: 'EP Equipment',
  },
  {
    id: 'greaves',
    url: '/images/Modern Greaves Power Generator Facility.png',
    alt: 'Greaves Cotton — Industrial Diesel Generators & Power Solutions',
    brandName: 'Greaves Power (Greaves Cotton)',
  },
  {
    id: 'aim',
    url: '/images/ANEST IWATA Air Compressor Showcase.png',
    alt: 'AIM / Anest Iwata Motherson — Reciprocating & Oil-Free Air Compressors',
    brandName: 'AIM (Anest Iwata Motherson)',
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Notify other components when slide changes
  const notifySlideChange = useCallback((index: number) => {
    if (typeof window !== 'undefined' && HERO_IMAGES[index]) {
      window.dispatchEvent(
        new CustomEvent('hero-slide-changed', {
          detail: { brandId: HERO_IMAGES[index].id, index },
        })
      );
    }
  }, []);

  // Listen for brand clicks or hovers from "Authorized Dealer & Service Partner" section
  useEffect(() => {
    const handleSelectBrand = (e: Event) => {
      const customEvent = e as CustomEvent<{ brandId: string; scroll?: boolean }>;
      const brandId = customEvent.detail?.brandId;
      const shouldScroll = customEvent.detail?.scroll ?? false;
      if (!brandId) return;

      const targetIndex = HERO_IMAGES.findIndex((img) => img.id === brandId);
      if (targetIndex !== -1) {
        setCurrentImage(targetIndex);
        notifySlideChange(targetIndex);

        if (shouldScroll) {
          const heroElement = document.getElementById('hero');
          if (heroElement) {
            heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    window.addEventListener('select-hero-brand', handleSelectBrand);
    return () => {
      window.removeEventListener('select-hero-brand', handleSelectBrand);
    };
  }, [notifySlideChange]);

  // ============================================
  // AUTO SLIDER (Rotates every 4.5s)
  // ============================================
  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentImage((prev) => {
        const next = (prev + 1) % HERO_IMAGES.length;
        notifySlideChange(next);
        return next;
      });
    }, 4500);

    return () => {
      window.clearInterval(timer);
    };
  }, [currentImage, notifySlideChange]);

  const handlePrev = () => {
    setCurrentImage((prev) => {
      const next = (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length;
      notifySlideChange(next);
      return next;
    });
  };

  const handleNext = () => {
    setCurrentImage((prev) => {
      const next = (prev + 1) % HERO_IMAGES.length;
      notifySlideChange(next);
      return next;
    });
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
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="hero"
      className="relative w-full max-w-full overflow-hidden bg-slate-950 group select-none scroll-mt-20"
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
              onClick={() => {
                setCurrentImage(index);
                notifySlideChange(index);
              }}
              aria-label={`Go to ${image.brandName} banner`}
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