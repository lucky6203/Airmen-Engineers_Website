'use client';

// ============================================
// Airmen Engineers — Footer Component
// Fully mobile-optimized with clickable phone/email, validated routes, and social channels
// ============================================

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, MapPin, MessageSquare } from 'lucide-react';
import Container from '@/components/common/Container';
import { FOOTER_LINKS } from '@/data/navigation';
import { COMPANY_SHORT_DESCRIPTION, CONTACT_INFO, WHATSAPP_NUMBER } from '@/data/company';

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'HTML Sitemap', href: '/sitemap' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const emailPrimary = CONTACT_INFO.registeredOffice.email[0];

  return (
    <footer className="bg-[#bbbbbb] text-slate-900 border-t border-stone-400" id="site-footer">
      {/* Main Footer */}
      <div className="section-padding border-b border-black/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Company Info & Social Channels */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <Link
                href="/"
                className="inline-flex items-center gap-2 mb-5 group cursor-pointer"
                id="footer-logo"
                aria-label="Airmen Engineers Homepage"
              >
                <img
                  src="/images/logos/Airmen Engineers AE Logo.png"
                  alt="Airmen Engineers"
                  className="h-12 sm:h-14 md:h-16 w-auto max-h-[64px] object-contain flex-shrink-0"
                />
              </Link>

              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm font-medium">
                {COMPANY_SHORT_DESCRIPTION}
              </p>

              {/* Direct Quick Contact Snippets */}
              <div className="space-y-2 mb-6 text-xs text-slate-800 w-full max-w-sm">
                <a
                  href={`mailto:${emailPrimary}`}
                  className="flex items-center justify-center sm:justify-start gap-2.5 py-1 text-slate-800 hover:text-navy transition-colors font-mono font-bold"
                >
                  <Mail className="w-3.5 h-3.5 text-navy flex-shrink-0" />
                  <span>sales@airmen.in</span>
                </a>
                <div className="flex items-start justify-center sm:justify-start gap-2.5 py-1 text-slate-700 text-[11px] font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <span>Plot No. C-53, Road no. 1, Prahalad Vihar, Rohini, Delhi-110085</span>
                </div>
              </div>

              {/* Verified Social & Direct Channel Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/airmen-engineers-services-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-black/5 border border-black/15 flex items-center justify-center text-slate-700 hover:text-navy hover:border-navy hover:bg-black/10 transition-colors"
                  aria-label="Airmen Engineers LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-base pointer-events-none" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-emerald-600/10 border border-emerald-600/30 flex items-center justify-center text-emerald-700 hover:text-emerald-800 hover:border-emerald-700 transition-colors"
                  aria-label="Direct WhatsApp Message"
                >
                  <i className="fa-brands fa-whatsapp text-lg pointer-events-none" />
                </a>
                <a
                  href={`mailto:${emailPrimary}`}
                  className="w-10 h-10 rounded-full bg-black/5 border border-black/15 flex items-center justify-center text-slate-700 hover:text-navy hover:border-navy hover:bg-black/10 transition-colors"
                  aria-label="Send Email"
                >
                  <i className="fa-solid fa-envelope text-sm pointer-events-none" />
                </a>
              </div>
            </div>

            {/* Footer Links: Exactly 2 rows on mobile (grid-cols-2), 4 columns on desktop (grid-cols-4) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-6 sm:pt-0 border-t border-black/10 sm:border-0 text-left">
              {/* Row 1, Col 1 on mobile: Industrial Products */}
              <div>
                <h3 className="font-heading text-sm font-extrabold mb-3 sm:mb-4 text-slate-900 uppercase tracking-wider">
                  Products
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {FOOTER_LINKS.products.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-700 hover:text-navy hover:font-semibold transition-colors inline-flex items-center gap-1 group py-0.5 sm:py-1"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-navy" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Row 1, Col 2 on mobile: Services */}
              <div>
                <h3 className="font-heading text-sm font-extrabold mb-3 sm:mb-4 text-slate-900 uppercase tracking-wider">
                  Services
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {FOOTER_LINKS.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-700 hover:text-navy hover:font-semibold transition-colors inline-flex items-center gap-1 group py-0.5 sm:py-1"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-navy" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Row 2, Col 1 on mobile: Company */}
              <div>
                <h3 className="font-heading text-sm font-extrabold mb-3 sm:mb-4 text-slate-900 uppercase tracking-wider">
                  Company
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {FOOTER_LINKS.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-700 hover:text-navy hover:font-semibold transition-colors inline-flex items-center gap-1 group py-0.5 sm:py-1"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-navy" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Row 2, Col 2 on mobile: Legal & Policies */}
              <div>
                <h3 className="font-heading text-sm font-extrabold mb-3 sm:mb-4 text-slate-900 uppercase tracking-wider">
                  Legal &amp; Policies
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {LEGAL_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-700 hover:text-navy hover:font-semibold transition-colors inline-flex items-center gap-1 group py-0.5 sm:py-1"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-navy" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar with Dynamic Year & Cookie Preferences */}
      <div className="py-6 bg-[#aeaeae] border-t border-black/10">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700 text-center sm:text-left font-medium">
            <div>
              <span>© 1996 – {currentYear} Airmen Engineers. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-slate-900 transition-colors">
                Terms
              </Link>
              <span>•</span>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-cookie-banner'));
                  }
                }}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
