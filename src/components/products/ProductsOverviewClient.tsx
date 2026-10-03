'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  FileDown,
  Sparkles,
  Wind,
  Truck,
  Flame,
  Layers,
  Activity,
  PhoneCall,
  Search,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

import Container from '@/components/common/Container';
import { Product, ProductCategoryInfo } from '@/types';

interface ProductsOverviewClientProps {
  products: Product[];
  categories: ProductCategoryInfo[];
}

/* =========================================================
   CATEGORY TABS
========================================================= */

const CATEGORY_TABS = [
  {
    id: 'all',
    label: 'All Equipment',
    icon: Layers,
  },
  {
    id: 'air-compressors',
    label: 'Air Compressors',
    icon: Wind,
  },
  {
    id: 'material-handling',
    label: 'Material Handling',
    icon: Truck,
  },
  {
    id: 'power-solutions',
    label: 'Power Solutions',
    icon: Flame,
  },
  {
    id: 'compressed-air-piping',
    label: 'Air Piping',
    icon: Layers,
  },
  {
    id: 'smart-monitoring',
    label: 'Smart IIoT',
    icon: Activity,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ProductsOverviewClient({
  products,
  categories,
}: ProductsOverviewClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      /* Category filter */
      const categoryMatch =
        activeCategory === 'all' ||
        product.category === activeCategory;

      if (!categoryMatch) {
        return false;
      }

      /* Search filter */
      if (!query) {
        return true;
      }

      const searchableText = [
        product.name,
        product.description,
        product.brand?.name,
        product.brand?.slug,
        typeof product.category === 'string' ? product.category : '',
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [products, activeCategory, searchQuery]);

  /* =======================================================
     CLEAR FILTERS
  ======================================================= */

  const clearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-[#0a1628] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.18),transparent_55%)] pointer-events-none" />
        <Container>
          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Industrial Equipment Catalog
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              Products & <span className="text-gold">Engineering Solutions</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-4 max-w-3xl">
              Explore our complete range of authorized industrial equipment: German Kaeser rotary screw compressors, EP Lithium-ion forklifts, Greaves Cotton power generators, and AIRpipe aluminium distribution systems designed for demanding industrial operations.
            </p>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CATEGORY FILTER + SEARCH
      ===================================================== */}

      <section
        className="
          sticky
          top-16
          z-30
          border-b
          border-gray-200
          bg-white
          shadow-sm
        "
      >
        <Container>

          <div
            className="
              flex
              min-w-0
              flex-col
              gap-4
              py-4
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            {/* =================================================
                CATEGORY FILTER
            ================================================= */}

            <div
              className="
                w-full
                min-w-0
                lg:flex-1
              "
            >

              <div
                className="
                  flex
                  w-full
                  flex-wrap
                  items-center
                  justify-start
                  gap-2
                "
              >

                {CATEGORY_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive =
                    activeCategory === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() =>
                        setActiveCategory(tab.id)
                      }
                      className={`
                        inline-flex
                        h-10
                        shrink-0
                        grow-0
                        items-center
                        justify-center
                        gap-2
                        whitespace-nowrap
                        rounded-xl
                        px-4
                        text-xs
                        font-bold
                        transition-all
                        duration-200
                        focus:outline-none
                        focus:ring-2
                        focus:ring-navy/20
                        ${isActive
                          ? 'bg-navy text-white shadow-md'
                          : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
                        }
                      `}
                    >

                      <Icon
                        className={`
                          h-3.5
                          w-3.5
                          shrink-0
                          ${isActive
                            ? 'text-amber-400'
                            : 'text-slate-500'
                          }
                        `}
                      />

                      <span>
                        {tab.label}
                      </span>

                    </button>
                  );
                })}

              </div>
            </div>

            {/* =================================================
                SEARCH
            ================================================= */}

            <div
              className="
                relative
                w-full
                shrink-0
                lg:w-72
              "
            >

              <Search
                className="
                  pointer-events-none
                  absolute
                  left-3.5
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search products..."
                className="
                  h-11
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  pl-10
                  pr-4
                  text-sm
                  text-slate-800
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-navy
                  focus:bg-white
                  focus:ring-2
                  focus:ring-navy/10
                "
              />

            </div>

          </div>

        </Container>
      </section>

      {/* =====================================================
          PRODUCT CATALOG
      ===================================================== */}

      <section className="py-12 sm:py-16 lg:py-24">
        <Container>

          {/* =================================================
              RESULT COUNT
          ================================================= */}

          <div
            className="
              mb-8
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p className="text-sm font-semibold text-slate-500">
              Showing{' '}
              <span className="font-bold text-slate-900">
                {filteredProducts.length}
              </span>{' '}
              {filteredProducts.length === 1
                ? 'product'
                : 'products'}
            </p>

            {(activeCategory !== 'all' ||
              searchQuery) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-gray-200
                  bg-white
                  px-3
                  py-2
                  text-xs
                  font-bold
                  text-slate-600
                  transition
                  hover:border-navy
                  hover:text-navy
                "
                >
                  Clear filters
                </button>
              )}

          </div>

          {/* =================================================
              PRODUCTS GRID
          ================================================= */}

          {filteredProducts.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                gap-6
                sm:gap-8
                md:grid-cols-2
                lg:grid-cols-3
              "
            >

              {filteredProducts.map((product) => {

                const productImg =
                  product.images?.length > 0
                    ? product.images[0]
                    : '/images/banner-1.jpg';

                const brandSlug =
                  product.brand?.slug || 'products';

                return (

                  <div
                    key={product.id}
                    className="
                      group
                      flex
                      min-w-0
                      flex-col
                      overflow-hidden
                      rounded-2xl
                      border
                      border-gray-200
                      bg-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >

                    {/* =======================================
                        PRODUCT IMAGE
                    ======================================= */}

                    <div
                      className="
                        relative
                        flex
                        aspect-[4/3]
                        w-full
                        items-center
                        justify-center
                        overflow-hidden
                        border-b
                        border-gray-100
                        bg-slate-50
                        p-5
                        sm:p-6
                      "
                    >

                      <div
                        className="
                          flex
                          h-full
                          w-full
                          items-center
                          justify-center
                          overflow-hidden
                        "
                      >

                        <img
                          src={productImg}
                          alt={product.name}
                          className="
                            block
                            max-h-full
                            max-w-full
                            object-contain
                            transition-transform
                            duration-500
                            group-hover:scale-[1.02]
                          "
                        />

                      </div>

                      {/* BRAND NAME */}

                      {product.brand?.name && (
                        <div
                          className="
                            absolute
                            left-3
                            top-3
                            z-20
                            max-w-[55%]
                            truncate
                            rounded-md
                            border
                            border-gray-200
                            bg-white
                            px-2.5
                            py-1
                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-wide
                            text-slate-700
                            shadow-sm
                            sm:text-xs
                          "
                        >
                          {product.brand.name}
                        </div>
                      )}

                      {/* BRAND LOGO */}

                      {product.brand?.logo && (
                        <div
                          className="
                            absolute
                            right-3
                            top-3
                            z-20
                            flex
                            h-9
                            max-w-[80px]
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-md
                            border
                            border-gray-200
                            bg-white
                            px-2
                            shadow-sm
                            sm:h-10
                            sm:max-w-[100px]
                          "
                        >

                          <img
                            src={product.brand.logo}
                            alt={`${product.brand.name} logo`}
                            className="
                              block
                              max-h-6
                              max-w-full
                              object-contain
                              sm:max-h-7
                            "
                          />

                        </div>
                      )}

                    </div>

                    {/* =======================================
                        PRODUCT CONTENT
                    ======================================= */}

                    <div
                      className="
                        flex
                        flex-1
                        flex-col
                        p-5
                        sm:p-6
                      "
                    >

                      {/* CATEGORY */}

                      {product.category && (
                        <div className="mb-2">
                          <span
                            className="
                              text-[10px]
                              font-extrabold
                              uppercase
                              tracking-[0.15em]
                              text-amber-600
                            "
                          >
                            {categories.find((c) => c.id === product.category)?.name || (typeof product.category === 'string' ? product.category.replace(/-/g, ' ') : '')}
                          </span>
                        </div>
                      )}

                      {/* PRODUCT NAME */}

                      <h2
                        className="
                          text-lg
                          font-extrabold
                          leading-tight
                          text-slate-900
                          sm:text-xl
                        "
                      >
                        {product.name}
                      </h2>

                      {/* DESCRIPTION */}

                      {product.description && (
                        <p
                          className="
                            mt-3
                            line-clamp-3
                            text-sm
                            leading-6
                            text-slate-500
                          "
                        >
                          {product.description}
                        </p>
                      )}

                      {/* FEATURES */}

                      {product.features &&
                        product.features.length > 0 && (

                          <div className="mt-5 space-y-2">

                            {product.features
                              .slice(0, 3)
                              .map((feature, index) => (

                                <div
                                  key={`${product.id}-feature-${index}`}
                                  className="
                                  flex
                                  items-start
                                  gap-2
                                  text-xs
                                  text-slate-600
                                "
                                >

                                  <CheckCircle2
                                    className="
                                    mt-0.5
                                    h-3.5
                                    w-3.5
                                    shrink-0
                                    text-green-600
                                  "
                                  />

                                  <span>
                                    {feature}
                                  </span>

                                </div>

                              ))}

                          </div>
                        )}

                      {/* BUTTONS */}

                      <div className="mt-auto pt-6">

                        <div
                          className="
                            flex
                            flex-col
                            gap-2
                            sm:flex-row
                          "
                        >

                          <Link
                            href={`/products/${brandSlug}/${product.slug}`}
                            className="
                              inline-flex
                              min-h-10
                              flex-1
                              items-center
                              justify-center
                              gap-2
                              rounded-xl
                              bg-navy
                              px-4
                              py-2.5
                              text-xs
                              font-bold
                              text-white
                              transition
                              hover:bg-slate-800
                            "
                          >
                            View Details

                            <ArrowRight
                              className="h-3.5 w-3.5"
                            />
                          </Link>

                          {product.brochureUrl && (
                            <a
                              href={product.brochureUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="
                                inline-flex
                                min-h-10
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-gray-200
                                bg-white
                                px-4
                                py-2.5
                                text-xs
                                font-bold
                                text-slate-700
                                transition
                                hover:border-navy
                                hover:text-navy
                              "
                            >
                              <FileDown
                                className="h-3.5 w-3.5"
                              />

                              Brochure
                            </a>
                          )}

                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>

          ) : (

            /* =================================================
               NO RESULTS
            ================================================= */

            <div
              className="
                flex
                min-h-[300px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-gray-300
                bg-white
                px-6
                text-center
              "
            >

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-slate-100
                "
              >
                <Search
                  className="h-6 w-6 text-slate-400"
                />
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-bold
                  text-slate-900
                "
              >
                No products found
              </h3>

              <p
                className="
                  mt-2
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                Try changing the category or search term
                to find the product you are looking for.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-5
                  rounded-xl
                  bg-navy
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  transition
                  hover:bg-slate-800
                "
              >
                Reset Filters
              </button>

            </div>
          )}

        </Container>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section
        className="
          bg-navy
          py-14
          sm:py-16
          lg:py-20
        "
      >
        <Container>

          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >

            <div className="max-w-2xl">

              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  text-amber-400
                "
              >
                <ShieldCheck className="h-5 w-5" />

                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                  "
                >
                  Industrial Support
                </span>
              </div>

              <h2
                className="
                  text-2xl
                  font-black
                  text-white
                  sm:text-3xl
                "
              >
                Need help choosing the right equipment?
              </h2>

              <p
                className="
                  mt-3
                  text-sm
                  leading-6
                  text-white/65
                  sm:text-base
                "
              >
                Talk to our technical team for product
                selection, specifications, pricing and
                application guidance.
              </p>

            </div>

            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
              "
            >

              <Link
                href="/contact"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-amber-400
                  px-6
                  py-3
                  text-sm
                  font-extrabold
                  text-slate-900
                  transition
                  hover:bg-amber-300
                "
              >
                <PhoneCall className="h-4 w-4" />
                Contact Us
              </Link>

              <Link
                href="/services"
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/20
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  font-extrabold
                  text-white
                  transition
                  hover:bg-white/10
                "
              >
                Our Services
                <ExternalLink className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </Container>
      </section>

    </div>
  );
}