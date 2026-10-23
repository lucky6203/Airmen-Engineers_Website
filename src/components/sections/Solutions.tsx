'use client';

// ============================================
// Airmen Engineers — Solutions / Product Categories
// High-Contrast Light Cards with Transparent Equipment Cutouts
// ============================================

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { PRODUCT_CATEGORIES } from '@/data/products';

// ============================================
// CATEGORY IMAGES (Clean Transparent Cutouts)
// ============================================

const CATEGORY_IMAGES: Record<string, string> = {
  'air-compressors': '/images/compressors/kaeser-dsd-transparent.png',
  'material-handling': '/images/forklifts/models/efl253-battery.png',
  'compressed-air-piping': '/images/Banner-6.jpg',
  'power-solutions': '/images/greaves images/04_125-kva-cpcb-iv-greaves-power-diesel-generator-1-1000x1000.png',
};

// ============================================
// SOLUTIONS SECTION
// ============================================

export default function Solutions() {
  return (
    <section
      className="py-12 sm:py-16 bg-slate-50 border-b border-gray-200 relative overflow-hidden"
      id="solutions"
    >
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            title="Complete Industrial Solutions"
            subtitle="From compressed air to material handling, smart monitoring to power generation — we provide end-to-end engineering solutions for your industry."
            align="center"
            className="mb-8 sm:mb-10"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

  // Desktop 3D Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth <= 768) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * -5,
      y: x * 5,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="
        card-3d
        w-full
        h-[360px]
        min-[480px]:h-[370px]
        sm:h-[390px]
        md:h-[410px]
        lg:h-[330px]
        xl:h-[350px]
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
            bg-white
            border
            border-gray-200/80
            hover:border-gold/60
            shadow-md
            hover:shadow-xl
            transition-all
            duration-300
            group
            cursor-pointer
            flex
            flex-col
          "
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
        >

          {/* ====================================
              EQUIPMENT IMAGE BAY (Guaranteed Visible, Clean & Transparent)
          ==================================== */}
          <div
            className="
              relative
              w-full
              h-[180px]
              min-[480px]:h-[190px]
              sm:h-[200px]
              md:h-[210px]
              lg:h-[160px]
              xl:h-[175px]
              p-4
              flex
              items-center
              justify-center
              bg-slate-50/90
              border-b
              border-gray-100
              overflow-hidden
            "
          >
            <img
              src={imageUrl}
              alt={category.name}
              loading="eager"
              decoding="async"
              className="
                w-auto
                h-full
                max-h-full
                max-w-full
                object-contain
                transition-transform
                duration-500
                group-hover:scale-105
                drop-shadow-sm
                select-none
              "
            />
          </div>

          {/* ====================================
              CONTENT BAY (High-Contrast Clean Text)
          ==================================== */}
          <div
            className="
              relative
              flex
              flex-1
              flex-col
              justify-between
              p-4
              sm:p-5
              lg:p-3.5
              xl:p-4
              bg-white
            "
          >
            <div>
              {/* BRANDS */}
              <p
                className="
                  mb-1
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-gold
                  truncate
                "
              >
                {brandNames}
              </p>

              {/* TITLE */}
              <h3
                className="
                  mb-1.5
                  text-sm
                  sm:text-base
                  lg:text-sm
                  xl:text-base
                  font-heading
                  font-bold
                  text-navy
                  group-hover:text-amber-600
                  transition-colors
                  tracking-tight
                  line-clamp-1
                "
              >
                {category.name}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  text-xs
                  sm:text-[13px]
                  lg:text-xs
                  text-gray-500
                  line-clamp-2
                  leading-relaxed
                "
              >
                {category.description}
              </p>
            </div>

            {/* EXPLORE CTA BADGE */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <span
                className="
                  inline-flex
                  items-center
                  gap-1.5
                  text-xs
                  font-bold
                  text-navy
                  group-hover:text-amber-600
                  transition-colors
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
      </Link>
    </motion.div>
  );
}
