'use client';

// ============================================
// Airmen Engineers — Detailed Product Page Client
// Comprehensive Specs, Image Gallery, Features & Direct Engineering Quote
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  FileDown,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Wrench,
  Factory,
  Layers,
  Award,
  Sparkles,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import { Product } from '@/types';
import SpecificationTable from './SpecificationTable';

interface ProductDetailClientProps {
  product: Product;
  relatedProductsList?: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProductsList = [],
}: ProductDetailClientProps) {
  const images =
    product.images && product.images.length > 0
      ? product.images
      : ['/images/banner-1.jpg'];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const brandSlug = product.brand?.slug || 'products';

  const whatsappMessage = encodeURIComponent(
    `Hello Airmen Engineers, I am interested in technical specifications & quotation for ${product.name}. Please share details.`
  );

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* ── Breadcrumb Navigation ──────────────────── */}
      <Breadcrumb
        items={[
          { label: 'Industrial Products', href: '/products' },
          { label: product.brand?.name || 'Brand', href: `/${brandSlug}` },
          { label: product.name },
        ]}
      />

      {/* ── Main Product Showcase Hero ─────────────── */}
      <section className="py-8 sm:py-12 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left: Interactive Media Gallery (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* Main Feature View */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100 border border-gray-200/80 p-6 flex items-center justify-center overflow-hidden shadow-inner group">
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md select-none"
                  loading="eager"
                />

                {/* Brand watermark badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 text-[11px] font-extrabold uppercase tracking-wider text-navy shadow-sm">
                  {product.brand?.name}
                </div>
              </div>

              {/* Thumbnails list */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin">
                  {images.map((img, idx) => {
                    const isSelected = selectedImage === img;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImage(img)}
                        className={`relative w-20 h-20 rounded-xl bg-slate-50 border-2 p-1.5 flex-shrink-0 transition-all ${
                          isSelected
                            ? 'border-amber-500 ring-2 ring-amber-400/30 shadow-md'
                            : 'border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${product.name} - view ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Authorized Channel Guarantee Callout */}
              <div className="rounded-xl p-4 bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-bold text-navy">
                    100% Genuine OEM Equipment & Parts
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Airmen Engineers is the authorized sales, turnkey installation, and 24/7 warranty service partner across North India.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs & Inquiries (7 cols) */}
            <div className="lg:col-span-7 space-y-6">

              {/* Eyebrow & Brand */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                    {product.brand?.name} Genuine Portfolio
                  </span>
                  {product.brand?.country && (
                    <span className="text-[11px] font-semibold text-slate-500">
                      Engineering: {product.brand.country}
                    </span>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight leading-tight">
                  {product.name}
                </h1>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Key Highlights Grid */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  {product.specifications.slice(0, 6).map((spec, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        {spec.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-navy block truncate" title={`${spec.value} ${spec.unit || ''}`}>
                        {spec.value} {spec.unit && <span className="text-xs font-normal text-slate-500">{spec.unit}</span>}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Call-To-Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="inline-flex flex-1 items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg shadow-amber-500/20"
                  >
                    <span>Request Official Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/919999999999?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Enquiry</span>
                  </a>

                  {product.brochureUrl && (
                    <a
                      href={product.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-navy font-bold text-xs uppercase tracking-wider border border-slate-300 transition-all"
                    >
                      <FileDown className="w-4 h-4 text-amber-600" />
                      <span>Brochure</span>
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
                  <span>Immediate technical support line: <strong>+91-99999-99999</strong> (Mon–Sat 9AM–7PM)</span>
                </div>
              </div>

              {/* Quick Brand Link */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">
                  Looking for more {product.brand?.name} models?
                </span>
                <Link
                  href={`/${brandSlug}`}
                  className="font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
                >
                  <span>Explore full {product.brand?.name} catalog</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ── Complete Technical Specifications Table ─ */}
      {product.specifications && product.specifications.length > 0 && (
        <section className="py-10 sm:py-14 bg-white border-b border-gray-200">
          <Container>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-navy text-amber-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-navy">
                    Technical Specifications
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Factory audited performance parameters & engineering ratings.
                  </p>
                </div>
              </div>

              <SpecificationTable specs={product.specifications} />
            </div>
          </Container>
        </section>
      )}

      {/* ── Key Features & Engineering Advantages ─── */}
      {product.features && product.features.length > 0 && (
        <section className="py-10 sm:py-14 bg-slate-50 border-b border-gray-200">
          <Container>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-navy text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-navy">
                    Engineering Advantages & Key Features
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Why plant heads and maintenance managers choose this machine.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── Applications ───────────────────────────── */}
      {product.applications && product.applications.length > 0 && (
        <section className="py-10 bg-white border-b border-gray-200">
          <Container>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-navy text-amber-400">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-navy">
                    Target Industries & Ideal Operating Environments
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {product.applications.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── Related Equipment in Same Category ─────── */}
      {relatedProductsList.length > 0 && (
        <section className="py-12 bg-slate-50">
          <Container>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-navy">
                    Related Industrial Equipment
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Explore companion units and alternatives for complete line integration.
                  </p>
                </div>

                <Link
                  href="/products"
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700"
                >
                  <span>View All Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProductsList.slice(0, 3).map((rel) => {
                  const relBrandSlug = rel.brand?.slug || 'products';
                  const relImage = rel.images && rel.images.length > 0 ? rel.images[0] : '/images/banner-1.jpg';
                  return (
                    <div
                      key={rel.id}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                    >
                      <div className="aspect-[4/3] p-4 bg-slate-50 flex items-center justify-center border-b border-gray-100 overflow-hidden">
                        <img
                          src={relImage}
                          alt={rel.name}
                          className="w-auto h-full max-h-[160px] object-contain transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600">
                            {rel.brand?.name}
                          </span>
                          <h3 className="text-sm sm:text-base font-bold text-navy line-clamp-1 mt-1">
                            {rel.name}
                          </h3>
                          <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                            {rel.shortDescription || rel.description}
                          </p>
                        </div>

                        <Link
                          href={`/products/${relBrandSlug}/${rel.slug}`}
                          className="inline-flex items-center justify-between w-full pt-3 border-t border-gray-100 text-xs font-bold text-navy group-hover:text-amber-600 transition-colors"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ── Engineering Consultation CTA ─────────── */}
      <section className="py-12 bg-navy text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black">
              Need Help Selecting the Right Specification?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our factory-trained application engineers calculate line losses, peak CFM consumption, and electrical tariffs to provide the lowest lifecycle cost solution.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Talk to an Application Engineer
              </Link>
              <Link
                href="/service"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
              >
                Explore 24/7 Service & AMCs
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
