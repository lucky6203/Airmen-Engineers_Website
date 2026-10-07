'use client';

// ============================================
// Airmen Engineers — Header Component
// ============================================

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
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
          <div className="flex items-center justify-between h-20 sm:h-24 gap-4">
            {/* Logo — Left Aligned */}
            <Link 
              href="/" 
              onClick={() => setActiveMenu(null)}
              className="flex items-center py-1 group flex-shrink-0" 
              id="header-logo"
            >
              {/* Logo Image */}
              <img 
                src="/images/logos/Airmen Engineers AE Logo.png" 
                alt="Airmen Engineers" 
                className="h-14 sm:h-16 md:h-18 lg:h-20 max-h-[72px] sm:max-h-[82px] w-auto object-contain flex-shrink-0 transition-transform duration-200 group-hover:scale-[1.02]" 
              />
            </Link>

            {/* Desktop Navigation — Right Aligned */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 ml-auto mr-3 xl:mr-5" id="desktop-nav">
              {NAV_ITEMS.map((item) => {
                const hasSubmenu = Boolean(item.megaMenu || item.children);
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => hasSubmenu && setActiveMenu(item.label)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setActiveMenu(null)}
                      className={cn(
                        'px-2.5 xl:px-3.5 py-2 text-[17px] xl:text-[18px] font-bold text-charcoal hover:text-gold transition-colors relative whitespace-nowrap inline-flex items-center gap-1.5',
                        'after:absolute after:bottom-0 after:left-2.5 xl:after:left-3.5 after:right-2.5 xl:after:right-3.5 after:h-0.5 after:bg-gold after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100',
                        activeMenu === item.label && 'text-gold after:scale-x-100'
                      )}
                    >
                      <span>{item.label}</span>
                      {hasSubmenu && (
                        <ChevronDown
                          className={cn(
                            'w-4 h-4 text-slate-400 transition-transform duration-200 stroke-[2.5]',
                            activeMenu === item.label && 'rotate-180 text-gold'
                          )}
                        />
                      )}
                    </Link>

                    {/* Mega Menu */}
                    {item.megaMenu && activeMenu === item.label && (
                      <MegaMenu
                        categories={item.megaMenu}
                        viewAllHref={item.href}
                        viewAllLabel={`View All ${item.label}`}
                        onItemClick={() => setActiveMenu(null)}
                      />
                    )}

                    {/* Dropdown for Children (e.g. Services) */}
                    {item.children && activeMenu === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-84 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2.5 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                        <div className="px-4 py-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                          <span className="text-[11px] font-black uppercase tracking-wider text-amber-600">
                            {item.label}
                          </span>
                          <Link
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="text-[11px] font-bold text-slate-500 hover:text-navy transition-colors flex items-center gap-1"
                          >
                            <span>Explore All</span>
                            <span>→</span>
                          </Link>
                        </div>
                        <div className="space-y-1 px-1.5">
                          {item.children.map((child) => (
                            <React.Fragment key={child.label}>
                              {child.sectionTitle && (
                                <div className="pt-2 pb-1 px-2.5 mt-1 border-t border-gray-100">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md">
                                    {child.sectionTitle}
                                  </span>
                                </div>
                              )}
                              <Link
                                href={child.href}
                                onClick={() => setActiveMenu(null)}
                                className="group/child block px-3 py-2.5 rounded-xl hover:bg-amber-50/70 transition-colors"
                              >
                                <div className="text-[14px] font-bold text-navy group-hover/child:text-amber-600 transition-colors flex items-center justify-between gap-2">
                                  <span className="truncate">{child.label}</span>
                                  {child.badge && (
                                    <span
                                      className={cn(
                                        'text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md shrink-0',
                                        child.badge.toLowerCase().includes('free')
                                          ? 'bg-amber-100 text-amber-800'
                                          : 'bg-slate-100 text-slate-700'
                                      )}
                                    >
                                      {child.badge}
                                    </span>
                                  )}
                                </div>
                                {child.description && (
                                  <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2 leading-relaxed font-normal">
                                    {child.description}
                                  </p>
                                )}
                              </Link>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button 
                href="/contact" 
                size="md" 
                onClick={() => setActiveMenu(null)}
                className="hidden lg:inline-flex bg-gold text-navy hover:bg-gold-dark font-extrabold text-[15px] sm:text-[16px] px-5 py-2.5 shadow-sm" 
                id="header-cta"
              >
                Get a Quote
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
