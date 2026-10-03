'use client';

// ============================================
// Airmen Engineers — Header Component
// ============================================

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/data/navigation';
import Button from '@/components/common/Button';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Auto-hide mega menu and mobile drawer on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-[var(--z-header)] transition-all duration-300 border-b border-gray-100',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-white'
        )}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo — Left Aligned */}
            <Link 
              href="/" 
              onClick={() => setActiveMenu(null)}
              className="flex items-center gap-2 sm:gap-3 group flex-shrink-0" 
              id="header-logo"
            >
              {/* Logo Image */}
              <img src="/images/main-logo.png" alt="Airmen Engineers" className="h-10 sm:h-12 w-auto object-contain flex-shrink-0" />
              {/* Logo Text — single line, professional serif */}
              <span
                className="text-navy font-bold tracking-wide whitespace-nowrap leading-none text-base sm:text-xl md:text-2xl"
                style={{ fontFamily: "'Times New Roman', 'Georgia', 'Palatino Linotype', serif" }}
              >
                AIRMAN ENGINEERS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5" id="desktop-nav">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActiveMenu(null)}
                    className={cn(
                      'px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-charcoal hover:text-gold transition-colors relative whitespace-nowrap',
                      'after:absolute after:bottom-0 after:left-2 xl:after:left-3 after:right-2 xl:after:right-3 after:h-0.5 after:bg-gold after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100'
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.megaMenu && activeMenu === item.label && (
                    <MegaMenu
                      categories={item.megaMenu}
                      viewAllHref={item.href}
                      viewAllLabel={`View All ${item.label}`}
                      onItemClick={() => setActiveMenu(null)}
                    />
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button 
                href="/contact" 
                size="sm" 
                onClick={() => setActiveMenu(null)}
                className="hidden lg:inline-flex" 
                id="header-cta"
              >
                GET A QUOTE
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                id="mobile-menu-toggle"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
