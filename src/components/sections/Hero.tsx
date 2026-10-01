'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// ============================================
// Airmen Engineers — Hero Section
// Responsive / Mobile Optimized
// ============================================

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
  const sectionRef = useRef<HTMLElement | null>(null);

  const [currentImage, setCurrentImage] = useState(0);

  // ============================================
  // AUTO SLIDER
  // ============================================

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  // ============================================
  // PARALLAX
  // Desktop Only
  // ============================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleScroll = () => {
      const textElement = section.querySelector(
        '.hero-text'
      ) as HTMLElement | null;

      if (!textElement) return;

      // Completely disable parallax on mobile/tablet
      if (window.innerWidth <= 768) {
        textElement.style.transform = 'none';
        textElement.style.opacity = '1';
        return;
      }

      const scrollY = window.scrollY;

      textElement.style.transform = `translateY(${scrollY * 0.3}px)`;

      textElement.style.opacity = String(
        Math.max(0, 1 - scrollY / 600)
      );
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ============================================
  // HERO SECTION
  // ============================================

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-white

        /* Desktop */
        lg:min-h-screen
        lg:flex
        lg:items-center
      "
    >

      {/* ========================================
          HERO IMAGE AREA
          ======================================== */}

      <div
        className="
          relative
          w-full

          /* Mobile:
             Let image determine the height */
          aspect-[16/9]

          /* Tablet */
          sm:aspect-[16/8]

          /* Desktop */
          lg:absolute
          lg:inset-0
          lg:h-full
          lg:aspect-auto

          overflow-hidden
          bg-white
        "
      >

        {HERO_IMAGES.map((image, index) => (
          <div
            key={image.url}
            className={`
              absolute
              inset-0

              w-full
              h-full

              transition-opacity
              duration-1000
              ease-in-out

              ${index === currentImage
                ? 'opacity-100'
                : 'opacity-0 pointer-events-none'
              }
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

                /* Desktop */
                object-cover
                object-center

                /* Mobile */
                max-[768px]:object-contain
                max-[768px]:object-center
              "
            />

          </div>
        ))}

      </div>


      {/* ========================================
          DESKTOP OVERLAY
          ======================================== */}

      <div
        className="
          absolute
          inset-0

          z-[1]

          pointer-events-none

          bg-gradient-to-r
          from-navy/90
          via-navy/50
          to-transparent

          max-[768px]:hidden
        "
      />


      {/* ========================================
          MOBILE BOTTOM FADE
          ======================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          z-[2]

          h-10

          pointer-events-none

          bg-gradient-to-t
          from-white
          to-transparent

          lg:h-32
        "
      />


      {/* ========================================
          SLIDER DOTS
          ======================================== */}

      <div
        className="
          absolute

          z-[10]

          left-1/2
          -translate-x-1/2

          bottom-4

          flex
          items-center
          justify-center
          gap-2

          lg:bottom-12
        "
      >

        {HERO_IMAGES.map((image, index) => (
          <button
            key={image.url}
            type="button"
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={
              index === currentImage
                ? 'true'
                : undefined
            }
            className={`
              block
              p-0
              border-0

              w-2.5
              h-2.5

              rounded-full

              cursor-pointer

              transition-all
              duration-300

              ${index === currentImage
                ? 'bg-gold scale-125'
                : 'bg-white/70'
              }

              lg:w-3
              lg:h-3
            `}
          />
        ))}

      </div>

    </section>
  );
}