'use client';

// ============================================
// Airmen Engineers — Footer Component
// Fully mobile-optimized with clickable phone/email, validated routes, and social channels
// ============================================

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import Container from '@/components/common/Container';
import { FOOTER_LINKS } from '@/data/navigation';
import { COMPANY_SHORT_DESCRIPTION, CONTACT_INFO, WHATSAPP_NUMBER } from '@/data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phonePrimary = CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '');
  const emailPrimary = CONTACT_INFO.registeredOffice.email[0];

  return (
    <footer className="bg-navy text-white border-t border-white/10" id="site-footer">
      {/* Main Footer */}
      <div className="section-padding border-b border-white/10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Column 1: Company Info & Social Channels */}
            <div className="lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left">
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

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
                {COMPANY_SHORT_DESCRIPTION}
              </p>

              {/* Direct Quick Contact Snippets */}
              <div className="space-y-2 mb-6 text-xs text-gray-300 w-full max-w-sm">
                <a
                  href={`tel:${phonePrimary}`}
                  className="flex items-center justify-center sm:justify-start gap-2.5 py-1 text-gray-300 hover:text-gold transition-colors font-mono font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>+91-9212303791 / +91-8588855726</span>
                </a>
                <a
                  href={`mailto:${emailPrimary}`}
                  className="flex items-center justify-center sm:justify-start gap-2.5 py-1 text-gray-300 hover:text-gold transition-colors font-mono font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>sales@airmen.in</span>
                </a>
                <div className="flex items-start justify-center sm:justify-start gap-2.5 py-1 text-gray-400 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span>Plot No. C-53, Road no. 1, Prahalad Vihar, Rohini, Delhi-110085</span>
                </div>
              </div>

              {/* Verified Social & Direct Channel Buttons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/airmen-engineers-services-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
                  aria-label="Airmen Engineers LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in text-base pointer-events-none" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 transition-colors"
                  aria-label="Direct WhatsApp Message"
                >
                  <i className="fa-brands fa-whatsapp text-lg pointer-events-none" />
                </a>
                <a
                  href={`mailto:${emailPrimary}`}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors"
                  aria-label="Send Email"
                >
                  <i className="fa-solid fa-envelope text-sm pointer-events-none" />
                </a>
                <a
                  href={`tel:${phonePrimary}`}
                  className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-gold hover:text-amber-300 hover:border-gold transition-colors"
                  aria-label="Call Registered Office"
                >
                  <i className="fa-solid fa-phone text-sm pointer-events-none" />
                </a>
              </div>
            </div>

            {/* Column 2: Industrial Products */}
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-sm font-semibold mb-4 text-white uppercase tracking-wider">
                Products
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.products.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-1 group py-1"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-gold" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-sm font-semibold mb-4 text-white uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-1 group py-1"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-gold" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Company & Legal Policies */}
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-sm font-semibold mb-4 text-white uppercase tracking-wider">
                Company &amp; Legal
              </h3>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-1 group py-1"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-gold" />
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-xs sm:text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-1 group py-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-gold" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-xs sm:text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-1 group py-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-gold" />
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="text-xs sm:text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-1 group py-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-gold" />
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sitemap"
                    className="text-xs sm:text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-1 group py-1"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden sm:inline-block text-gold" />
                    HTML Sitemap
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar with Dynamic Year & Cookie Preferences */}
      <div className="py-6 bg-[#060D17] border-t border-white/5">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
            <div>
              <span>© 1996 – {currentYear} Airmen Engineers. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link href="/privacy-policy" className="hover:text-gold transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-gold transition-colors">
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
                className="hover:text-gold transition-colors cursor-pointer"
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
