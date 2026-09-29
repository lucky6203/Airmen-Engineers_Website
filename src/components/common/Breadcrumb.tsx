'use client';

// ============================================
// Airmen Engineers — Breadcrumb Component
// ============================================

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Container from './Container';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://airmen.in/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://airmen.in${item.href}` }),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="py-4 border-b border-gray-200">
        <Container>
          <ol className="flex items-center justify-center md:justify-start gap-2 text-sm font-body flex-wrap">
            <li>
              <Link
                href="/"
                className="text-slate-custom hover:text-gold transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            {items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-slate-custom hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-navy font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </nav>
    </>
  );
}
