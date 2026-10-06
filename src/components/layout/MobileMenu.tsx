'use client';

// ============================================
// Airmen Engineers — Mobile Menu Component
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, MessageCircle, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/data/navigation';
import { WHATSAPP_NUMBER, CONTACT_INFO } from '@/data/company';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[var(--z-mobile-menu)] lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 w-[85vw] max-w-sm h-full bg-white z-[var(--z-mobile-menu)] lg:hidden',
          'transform transition-transform duration-300 ease-in-out',
          'flex flex-col shadow-2xl',
          isOpen ? 'translate-x-0 visible' : 'translate-x-full invisible pointer-events-none'
        )}
        id="mobile-menu"
        aria-hidden={!isOpen}
      >
        <div className="p-4 border-b border-gray-100">
          <span
            className="text-navy font-bold tracking-wide whitespace-nowrap leading-none text-base"
            style={{ fontFamily: "'Times New Roman', 'Georgia', 'Palatino Linotype', serif" }}
          >
            AIRMAN ENGINEERS
          </span>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                {item.megaMenu ? (
                  <div>
                    <button
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === item.label ? null : item.label
                        )
                      }
                      className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-charcoal hover:text-gold transition-colors rounded-lg hover:bg-gray-50"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          expandedItem === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                    {expandedItem === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-gold/20 pl-3">
                        {item.megaMenu.map((cat) =>
                          cat.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              onClick={onClose}
                              className="block px-3 py-2 text-sm text-slate-custom hover:text-gold transition-colors rounded-lg hover:bg-gray-50"
                            >
                              {subItem.label}
                            </Link>
                          ))
                        )}
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block px-3 py-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                        >
                          View All {item.label} →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-3 py-3 text-base font-medium text-charcoal hover:text-gold transition-colors rounded-lg hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTA Bar */}
        <div className="border-t border-gray-100 p-4 grid grid-cols-3 gap-2">
          <a
            href={`tel:${CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '')}`}
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-navy text-white text-xs font-medium hover:bg-navy-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-green-600 text-white text-xs font-medium hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex flex-col items-center gap-1 py-2 rounded-lg bg-gold text-navy text-xs font-medium hover:bg-gold-dark transition-colors"
          >
            <FileText className="w-4 h-4" />
            Quote
          </Link>
        </div>
      </div>
    </>
  );
}
