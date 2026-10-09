'use client';

// ============================================
// Airmen Engineers — Floating Contact Widget
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WHATSAPP_NUMBER, CONTACT_INFO } from '@/data/company';

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[var(--z-floating-widget)] flex flex-col items-end gap-3">
      {/* Expanded Options */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-fade-in-up">
          <a
            href={`tel:${CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '')}`}
            className="flex items-center gap-3 bg-white rounded-full pl-4 pr-5 py-2.5 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center">
              <i className="fa-solid fa-phone text-xs text-white" />
            </div>
            <span className="text-sm font-medium text-navy group-hover:text-gold transition-colors">
              Call Us
            </span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20am%20interested%20in%20your%20products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-full pl-4 pr-5 py-2.5 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <i className="fa-brands fa-whatsapp text-base text-white" />
            </div>
            <span className="text-sm font-medium text-navy group-hover:text-green-600 transition-colors">
              WhatsApp
            </span>
          </a>

          <Link
            href="/contact"
            className="flex items-center gap-3 bg-white rounded-full pl-4 pr-5 py-2.5 shadow-lg hover:shadow-xl transition-shadow group"
          >
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <i className="fa-solid fa-file-lines text-xs text-navy" />
            </div>
            <span className="text-sm font-medium text-navy group-hover:text-gold transition-colors">
              Get Quote
            </span>
          </Link>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300',
          isOpen
            ? 'bg-charcoal text-white rotate-0'
            : 'bg-gold text-navy animate-pulse-gold hover:bg-gold-dark'
        )}
        aria-label={isOpen ? 'Close contact options' : 'Open contact options'}
        id="floating-contact-widget"
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark text-lg text-white" />
        ) : (
          <i className="fa-brands fa-whatsapp text-2xl text-navy" />
        )}
      </button>
    </div>
  );
}
