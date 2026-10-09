'use client';

// ============================================
// Airmen Engineers — Mobile Menu Component
// Optimized for smooth touch, accessible navigation & direct actions
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, MessageCircle, FileText, X, Mail, MapPin, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/data/navigation';
import { WHATSAPP_NUMBER, CONTACT_INFO } from '@/data/company';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedSubCat, setExpandedSubCat] = useState<string | null>('Industrial Products');

  const phoneRaw = CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '');
  const emailRaw = CONTACT_INFO.registeredOffice.email[0];

  return (
    <>
      {/* Overlay Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[var(--z-mobile-menu)] lg:hidden transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 w-[88vw] max-w-sm h-full bg-white z-[var(--z-mobile-menu)] lg:hidden',
          'transform transition-transform duration-300 ease-in-out',
          'flex flex-col shadow-2xl border-l border-gray-200',
          isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible pointer-events-none'
        )}
        id="mobile-menu"
        aria-hidden={!isOpen}
        role="dialog"
        aria-label="Mobile Navigation Menu"
      >
        {/* Header with Clickable Logo & Close Button */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-slate-50/80">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center group cursor-pointer py-1"
            id="mobile-menu-logo"
            aria-label="Airmen Engineers Homepage"
          >
            <img
              src="/images/logos/Airmen Engineers AE Logo.png"
              alt="Airmen Engineers"
              className="h-12 sm:h-14 w-auto max-h-[54px] object-contain flex-shrink-0"
            />
          </Link>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-navy hover:bg-gray-200/80 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1 divide-y divide-gray-100">
          <ul className="space-y-1 pb-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.megaMenu ? (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === item.label ? null : item.label
                        )
                      }
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded-xl transition-colors cursor-pointer min-h-[44px]',
                        expandedItem === item.label
                          ? 'bg-amber-50 text-navy font-semibold'
                          : 'text-charcoal hover:text-gold hover:bg-gray-50'
                      )}
                      aria-expanded={expandedItem === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 text-slate-400 transition-transform duration-200',
                          expandedItem === item.label && 'rotate-180 text-amber-600'
                        )}
                      />
                    </button>

                    {expandedItem === item.label && (
                      <div className="ml-2 mt-1 mb-2 space-y-2 border-l-2 border-amber-400/40 pl-3 py-1">
                        {item.megaMenu.map((cat) => {
                          const isSubOpen = expandedSubCat === cat.title;
                          return (
                            <div key={cat.title} className="rounded-xl border border-gray-100 overflow-hidden bg-slate-50/60">
                              <button
                                type="button"
                                onClick={() => setExpandedSubCat(isSubOpen ? null : cat.title)}
                                className="w-full flex items-center justify-between p-2.5 text-xs font-bold text-navy uppercase tracking-wider hover:bg-amber-50/70 transition-colors cursor-pointer"
                              >
                                <span className="truncate pr-1">{cat.title}</span>
                                <ChevronDown
                                  className={cn(
                                    'w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0',
                                    isSubOpen && 'rotate-180 text-amber-600'
                                  )}
                                />
                              </button>
                              {isSubOpen && (
                                <div className="p-1 space-y-1 bg-white border-t border-gray-100">
                                  {cat.items.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      onClick={onClose}
                                      className="block px-2.5 py-2 text-xs font-medium text-slate-700 hover:text-amber-600 hover:bg-amber-50/50 rounded-lg transition-colors"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                        <div className="pt-2 flex items-center justify-between px-1 text-xs border-t border-gray-100">
                          <Link
                            href="/products"
                            onClick={onClose}
                            className="font-bold text-amber-600 hover:text-amber-700"
                          >
                            All Industrial →
                          </Link>
                          <Link
                            href="/manufacturing-products"
                            onClick={onClose}
                            className="font-bold text-amber-600 hover:text-amber-700"
                          >
                            All Manufactured →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.children ? (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === item.label ? null : item.label
                        )
                      }
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-3 text-base font-medium rounded-xl transition-colors cursor-pointer min-h-[44px]',
                        expandedItem === item.label
                          ? 'bg-amber-50 text-navy font-semibold'
                          : 'text-charcoal hover:text-gold hover:bg-gray-50'
                      )}
                      aria-expanded={expandedItem === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 text-slate-400 transition-transform duration-200',
                          expandedItem === item.label && 'rotate-180 text-amber-600'
                        )}
                      />
                    </button>

                    {expandedItem === item.label && (
                      <div className="ml-2 mt-1 mb-2 space-y-1 border-l-2 border-amber-400/40 pl-3 py-1">
                        {item.children.map((child) => (
                          <React.Fragment key={child.label}>
                            {child.sectionTitle && (
                              <div className="pt-2 pb-1 px-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                                  {child.sectionTitle}
                                </span>
                              </div>
                            )}
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="block px-3 py-2 text-sm font-semibold text-slate-800 hover:text-amber-600 hover:bg-amber-50/50 rounded-lg transition-colors"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="truncate">{child.label}</span>
                                {child.badge && (
                                  <span
                                    className={cn(
                                      'text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shrink-0',
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
                                <p className="text-xs font-normal text-gray-500 mt-0.5 line-clamp-1">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-3 py-3 text-base font-medium text-charcoal hover:text-gold transition-colors rounded-xl hover:bg-gray-50 min-h-[44px] flex items-center"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Quick Direct Services */}
          <div className="pt-3 pb-2 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 block mb-1">
              Quick Services
            </span>
            <Link
              href="/a-rental-compressor"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-gold hover:bg-gray-50 transition-colors"
            >
              <Wrench className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Rental Compressors (10–75 HP)</span>
            </Link>
            <Link
              href="/service"
              onClick={onClose}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-gold hover:bg-gray-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>24/7 Service &amp; Maintenance</span>
            </Link>
          </div>

          {/* Direct Contact Details Block (Clickable Phone & Email) */}
          <div className="pt-3 space-y-2 text-xs text-slate-600">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 block">
              Contact Desk
            </span>
            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-navy hover:text-gold hover:bg-gray-50 font-semibold font-mono transition-colors min-h-[40px]"
            >
              <i className="fa-solid fa-phone text-xs text-amber-500 flex-shrink-0" />
              <span>+91-9212303791</span>
            </a>
            <a
              href={`mailto:${emailRaw}`}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-navy hover:text-gold hover:bg-gray-50 font-semibold font-mono transition-colors min-h-[40px]"
            >
              <i className="fa-solid fa-envelope text-xs text-amber-500 flex-shrink-0" />
              <span>{emailRaw}</span>
            </a>
            <div className="flex items-start gap-2.5 px-3 py-1.5 text-slate-500 text-[11px]">
              <i className="fa-solid fa-location-dot text-xs text-slate-400 flex-shrink-0 mt-0.5" />
              <span>Plot No. C-53, Prahalad Vihar, Rohini, Delhi 110085</span>
            </div>
          </div>
        </nav>

        {/* Bottom CTA Bar */}
        <div className="border-t border-gray-100 p-3 bg-slate-50 grid grid-cols-3 gap-2">
          <a
            href={`tel:${phoneRaw}`}
            className="flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl bg-navy text-white text-xs font-semibold hover:bg-navy-light transition-colors min-h-[44px]"
            aria-label="Call Airmen Engineers"
          >
            <i className="fa-solid fa-phone text-xs text-amber-400" />
            Call
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors min-h-[44px]"
            aria-label="Chat on WhatsApp"
          >
            <i className="fa-brands fa-whatsapp text-sm" />
            WhatsApp
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex flex-col items-center justify-center gap-1 py-2.5 rounded-xl bg-gold text-navy text-xs font-bold hover:bg-gold-dark transition-colors min-h-[44px]"
            aria-label="Get a Quote"
          >
            <i className="fa-solid fa-file-lines text-xs" />
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}
