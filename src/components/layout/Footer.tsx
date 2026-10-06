// ============================================
// Airmen Engineers — Footer Component
// ============================================

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/common/Container';
import { FOOTER_LINKS } from '@/data/navigation';
import { COMPANY_SHORT_DESCRIPTION } from '@/data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white" id="site-footer">
      {/* Main Footer */}
      <div className="section-padding border-b border-white/10">
        <Container>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left lg:pr-6">
              <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
                <img src="/images/main-logo.png" alt="Airmen Engineers" className="h-10 w-auto object-contain" />
                <span
                  className="text-white font-bold tracking-wide whitespace-nowrap leading-none text-lg sm:text-xl"
                  style={{ fontFamily: "'Times New Roman', 'Georgia', 'Palatino Linotype', serif" }}
                >
                  AIRMAN ENGINEERS
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto lg:mx-0">
                {COMPANY_SHORT_DESCRIPTION}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 relative z-10">
                <a href="https://www.linkedin.com/company/airmen-engineers-services-pvt-ltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors touch-manipulation">
                  <svg className="w-4 h-4 pointer-events-none" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                  <svg className="w-4 h-4 pointer-events-none" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 min-w-[44px] min-h-[44px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold transition-colors">
                  <svg className="w-4 h-4 pointer-events-none" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>

            {/* Links Grid: 2 rows on mobile (2 cols), 4 cols on tablet & desktop */}
            <div className="w-full lg:w-3/5 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
              {/* Products */}
              <div className="text-center md:text-left">
                <h3 className="font-heading text-sm sm:text-base font-semibold mb-4 text-white">
                  Industrial Products
                </h3>
                <ul className="space-y-3">
                  {FOOTER_LINKS.products.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center justify-center md:justify-start gap-1 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden md:inline-block" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="text-center md:text-left">
                <h3 className="font-heading text-sm sm:text-base font-semibold mb-4 text-white">
                  Services
                </h3>
                <ul className="space-y-3">
                  {FOOTER_LINKS.services.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center justify-center md:justify-start gap-1 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden md:inline-block" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="text-center md:text-left">
                <h3 className="font-heading text-sm sm:text-base font-semibold mb-4 text-white">
                  Company
                </h3>
                <ul className="space-y-3">
                  {FOOTER_LINKS.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center justify-center md:justify-start gap-1 group"
                      >
                        <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden md:inline-block" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="text-center md:text-left">
                <h3 className="font-heading text-sm sm:text-base font-semibold mb-4 text-white">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center justify-center md:justify-start gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden md:inline-block" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center justify-center md:justify-start gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden md:inline-block" />
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center justify-center md:justify-start gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden md:inline-block" />
                      Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/sitemap" className="text-sm text-gray-400 hover:text-gold transition-colors inline-flex items-center justify-center md:justify-start gap-1 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 hidden md:inline-block" />
                      Sitemap
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-6">
        <Container>
          <div className="text-center text-xs text-gray-500">
            <span>© {currentYear} Airmen Engineers. All rights reserved.</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
