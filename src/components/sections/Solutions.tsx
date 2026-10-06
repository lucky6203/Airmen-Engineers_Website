'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { PRODUCT_CATEGORIES } from '@/data/products';

// ============================================
// CATEGORY IMAGES
// ============================================

const CATEGORY_IMAGES: Record<string, string> = {
  'air-compressors': '/images/compressors/kaeser-dsd-main.jpg',
  'material-handling': '/images/forklifts/models/efl253-battery.png',
  'compressed-air-piping': '/images/Banner-6.jpg',
  'power-solutions': '/images/greaves/products/greaves-canopy-industrial.jpg',
};

// ============================================
// SOLUTIONS
// ============================================

export default function Solutions() {
  return (
    <section
      className="section-padding bg-gray-50"
      id="solutions"
    >
      <Container>

        <SectionHeading
          overline="What We Offer"
          title="Complete Industrial Solutions"
          subtitle="From compressed air to material handling, smart monitoring to power generation — we provide end-to-end engineering solutions for your industry."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <SolutionCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

// ============================================
// SOLUTION CARD
// ============================================

function SolutionCard({
  category,
  index,
}: {
  category: typeof PRODUCT_CATEGORIES[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const brandNames = category.brands
    .map((brand) => brand.name)
    .join(' • ');

  const firstBrandSlug =
    category.brands[0]?.slug || '/products';

  const imageUrl =
    CATEGORY_IMAGES[category.id] ||
    '/images/banner-1.jpg';

  // ==========================================
  // DESKTOP TILT
  // ==========================================

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!cardRef.current) return;

    if (window.innerWidth <= 768) {
      return;
    }

    const rect =
      cardRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width - 0.5;

    const y =
      (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * -5,
      y: x * 5,
    });
  };

  const handleMouseLeave = () => {
    setTilt({
      x: 0,
      y: 0,
    });
  };

  // ==========================================
  // CARD
  // ==========================================

  return (
    <div
      ref={cardRef}
      className="
        card-3d
        w-full
        h-[350px]
        min-[480px]:h-[360px]
        sm:h-[380px]
        md:h-[400px]
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >

      <Link
        href={`/${firstBrandSlug}`}
        className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-2xl"
      >

        <div
          className="
            relative
            w-full
            h-full
            overflow-hidden
            rounded-2xl
            bg-[#dfe1e4]
            border
            border-gray-200/50
            hover:border-gold/60
            shadow-lg
            hover:shadow-2xl
            transition-all
            duration-300
            group
            cursor-pointer
          "
          style={{
            transform: `
              perspective(1000px)
              rotateX(${tilt.x}deg)
              rotateY(${tilt.y}deg)
            `,
            transition:
              'transform 0.15s ease-out',
          }}
        >

          {/* ====================================
              ORIGINAL IMAGE
              
              IMPORTANT:
              - NO object-cover
              - NO scale
              - NO blur
              - NO duplicate image
              - FULL IMAGE PRESERVED
          ==================================== */}

          <div
            className="
              absolute
              inset-0
              z-0
              flex
              items-start
              justify-center
              overflow-hidden
            "
          >
            <Image
              src={imageUrl}
              alt={category.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="
                object-contain
                object-top
              "
            />
          </div>

          {/* ====================================
              DARK GRADIENT
          ==================================== */}

          <div
            className="
              absolute
              inset-0
              z-10
              bg-gradient-to-t
              from-[#0a192f]
              via-[#0a192f]/85
              to-[#0a192f]/30
            "
          />

          {/* ====================================
              CONTENT
          ==================================== */}

          <div
            className="
              relative
              z-20
              flex
              h-full
              flex-col
              justify-end
              p-5
              sm:p-6
            "
          >

            {/* TEXT */}

            <div
              className="
                transition-transform
                duration-500
                group-hover:-translate-y-2
                max-sm:text-center
              "
            >

              {/* TITLE */}

              <h3
                className="
                  mb-2
                  text-xl
                  sm:text-2xl
                  font-heading
                  font-bold
                  text-white
                "
              >
                {category.name}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mb-3
                  text-xs
                  sm:text-sm
                  text-gray-300
                  line-clamp-2
                "
              >
                {category.description}
              </p>

              {/* BRANDS */}

              <p
                className="
                  mb-4
                  text-xs
                  font-medium
                  text-gold
                "
              >
                {brandNames}
              </p>

              {/* EXPLORE CTA BADGE */}
              <div className="pt-2 max-sm:flex max-sm:justify-center">
                <span
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-lg
                    bg-white/15
                    backdrop-blur-md
                    border
                    border-white/20
                    text-xs
                    font-bold
                    text-white
                    transition-all
                    duration-300
                    group-hover:bg-gold
                    group-hover:text-navy
                    group-hover:border-gold
                    group-hover:shadow-md
                  "
                >
                  <span>Explore Equipment</span>
                  <ArrowRight
                    className="
                      h-3.5
                      w-3.5
                      transition-transform
                      duration-300
                      group-hover:translate-x-1.5
                    "
                  />
                </span>
              </div>

            </div>
          </div>

        </div>
      </Link>
    </div>
  );
}