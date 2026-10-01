'use client';

// ============================================
// Airmen Engineers — Hero Section
// ============================================

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const HERO_IMAGES = [
  {
    url: '/images/banner-1.jpg',
    alt: 'Kaeser Compressors',
  },
  {
    url: '/images/about-2.jpg',
    alt: 'Industrial Solutions',
  },
  {
    url: '/images/banner-3.jpg',
    alt: 'EP Forklifts',
  },
  {
    url: '/images/banner-4.jpg',
    alt: 'Greaves Power',
  },
  {
    url: '/images/banner-5.jpg',
    alt: 'AIM Compressors',
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  // ============================================
  // Background Image Slider
  // ============================================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  // ============================================
  // Parallax Scroll Effect
  // ============================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const textEl = section.querySelector(
        '.hero-text'
      ) as HTMLElement | null;

      if (textEl) {
        textEl.style.transform = `translateY(${scrollY * 0.3}px)`;
        textEl.style.opacity = `${Math.max(
          0,
          1 - scrollY / 600
        )}`;
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // ============================================
  // Hero Section
  // ============================================

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="
        relative
        flex
        items-center
        overflow-hidden
        bg-navy

        min-h-[50vh]
        sm:min-h-[55vh]
        md:min-h-[70vh]
        lg:min-h-screen
      "
    >

      {/* ========================================
          Background Images Slider
          ======================================== */}

      <div className="absolute inset-0 z-0">

        {HERO_IMAGES.map((img, index) => (
          <div
            key={img.url}
            className={`
              absolute
              inset-0
              overflow-hidden

              transition-opacity
              duration-1000
              ease-in-out

              ${index === currentImage
                ? 'opacity-100'
                : 'opacity-0'
              }
            `}
          >

            <Image
              src={img.url}
              alt={img.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="
                object-cover
                object-center
              "
            />

          </div>
        ))}

      </div>


      {/* ========================================
          Gradient Overlay
          ======================================== */}

      <div
        className="
          absolute
          inset-0
          z-[1]

          bg-gradient-to-r
          from-navy/90
          via-navy/50
          to-transparent

          max-[768px]:from-navy/70
          max-[768px]:via-navy/25
          max-[768px]:to-transparent
        "
      />


      {/* ========================================
          Bottom Gradient
          ======================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          h-32

          z-[1]

          bg-gradient-to-t
          from-white
          to-transparent

          max-[768px]:h-16
        "
      />


      {/* ========================================
          Slider Indicators
          ======================================== */}

      <div
        className="
          absolute
          z-[2]

          bottom-12
          left-1/2
          -translate-x-1/2

          flex
          items-center
          gap-2

          max-[768px]:bottom-5
        "
      >
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              w-3
              h-3

              rounded-full

              transition-all
              duration-300

              ${index === currentImage
                ? 'bg-gold scale-125'
                : 'bg-white/50 hover:bg-white/80'
              }

              max-[480px]:w-2.5
              max-[480px]:h-2.5
            `}
          />
        ))}
      </div>

    </section>
  );
}