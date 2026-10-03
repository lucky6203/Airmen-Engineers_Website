'use client';

// ============================================
// Airmen Engineers — Mega Menu Component
// ============================================

import React from 'react';
import Link from 'next/link';
import { Wind, Truck, GitBranch, BatteryCharging, ArrowRight, Layers, Filter, Factory, Gauge, ShieldCheck } from 'lucide-react';
import { MegaMenuCategory } from '@/types';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<string, React.ReactNode> = {
  Wind: <Wind className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  BatteryCharging: <BatteryCharging className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Filter: <Filter className="w-5 h-5" />,
  Factory: <Factory className="w-5 h-5" />,
  Gauge: <Gauge className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
};

interface MegaMenuProps {
  categories: MegaMenuCategory[];
  viewAllHref?: string;
  viewAllLabel?: string;
  onItemClick?: () => void;
}

export default function MegaMenu({ 
  categories, 
  viewAllHref = '/products', 
  viewAllLabel = 'View All Products',
  onItemClick
}: MegaMenuProps) {
  const isFourCols = categories.length === 4;

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[var(--z-mega-menu)]"
      id="mega-menu"
    >
      <div
        className={cn(
          'bg-white rounded-xl shadow-xl border border-gray-200 p-6 animate-scale-in origin-top',
          isFourCols ? 'min-w-[860px]' : 'min-w-[700px]'
        )}
      >
        <div className={cn('grid gap-6', isFourCols ? 'grid-cols-4' : 'grid-cols-3')}>
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                <span className="text-gold">
                  {cat.icon && ICON_MAP[cat.icon]}
                </span>
                <span className="text-xs font-semibold text-navy uppercase tracking-wider">
                  {cat.title}
                </span>
              </div>
              <ul className="space-y-1">
                {cat.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onItemClick}
                      className="group flex items-start gap-2 p-2 rounded-lg hover:bg-gold-50 transition-colors"
                    >
                      <div className="flex-1">
                        <span className="text-sm font-medium text-charcoal group-hover:text-gold transition-colors block">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="text-xs text-gray-400 mt-0.5 block">
                            {item.description}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gold group-hover:translate-x-1 transition-all mt-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-400">
            {viewAllHref.includes('manufacturing')
              ? 'Explore our precision in-house engineered and manufactured equipment'
              : 'Explore our complete range of authorized industrial dealership equipment'}
          </p>
          <Link
            href={viewAllHref}
            onClick={onItemClick}
            className="text-sm font-semibold text-gold hover:text-gold-dark transition-colors flex items-center gap-1"
          >
            {viewAllLabel}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
