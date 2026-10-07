import React, { useState } from 'react';
import Link from 'next/link';
import { Wind, Truck, GitBranch, BatteryCharging, ArrowRight, Layers, Filter, Factory, Gauge, ShieldCheck, ChevronRight } from 'lucide-react';
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
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const isTwoCols = categories.length === 2;
  const isFourCols = categories.length === 4;

  if (isTwoCols) {
    const activeCategory = categories[activeCategoryIndex] || categories[0];
    return (
      <div
        className="absolute top-full -left-28 xl:left-1/2 xl:-translate-x-1/2 pt-2.5 z-[var(--z-mega-menu)] animate-scale-in origin-top"
        id="mega-menu"
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex min-w-[760px] max-w-[820px]">
          {/* Left Panel: 2 Primary Links (Industrial Products & Manufactured Products) */}
          <div className="w-[300px] bg-slate-50/90 p-4 border-r border-gray-100 flex flex-col justify-between shrink-0">
            <div>
              <span className="block text-[11px] font-black uppercase tracking-wider text-slate-400 px-1 pb-3">
                Select Division
              </span>
              <div className="space-y-2.5">
                {categories.map((cat, idx) => {
                  const isSelected = activeCategoryIndex === idx;
                  const isIndustrial = idx === 0;
                  return (
                    <div
                      key={cat.title}
                      onMouseEnter={() => setActiveCategoryIndex(idx)}
                      onClick={() => setActiveCategoryIndex(idx)}
                      className={cn(
                        'group/card p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between',
                        isSelected
                          ? 'bg-white border-amber-400 shadow-md ring-2 ring-amber-400/20'
                          : 'bg-white/60 hover:bg-white border-gray-200 hover:border-gray-300'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            'w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0',
                            isSelected
                              ? 'bg-amber-400 text-navy'
                              : 'bg-gray-100 text-slate-600 group-hover/card:bg-amber-50 group-hover/card:text-gold'
                          )}
                        >
                          {cat.icon && ICON_MAP[cat.icon]}
                        </div>
                        <div>
                          <Link
                            href={isIndustrial ? '/products' : '/manufacturing-products'}
                            onClick={onItemClick}
                            className="text-xs sm:text-[13px] font-bold text-navy hover:text-amber-600 block transition-colors"
                          >
                            {cat.title}
                          </Link>
                          <span className="text-[11px] text-slate-500 block">
                            {isIndustrial ? 'Authorized Dealerships' : 'In-House Gajraula Plant'}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={cn(
                          'w-4 h-4 transition-transform shrink-0',
                          isSelected
                            ? 'text-amber-500 translate-x-0.5'
                            : 'text-slate-300 group-hover/card:text-slate-500'
                        )}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Division Note */}
            <div className="pt-3 border-t border-gray-200/80 px-1">
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Hover or click either division to open its sub-nav bar.
              </p>
            </div>
          </div>

          {/* Right Panel: Sub-Nav Bar for Active Division */}
          <div className="flex-1 p-5 sm:p-6 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider text-navy">
                    {activeCategory.title} — Sub Navigation
                  </span>
                </div>
                <Link
                  href={activeCategoryIndex === 0 ? '/products' : '/manufacturing-products'}
                  onClick={onItemClick}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 group"
                >
                  <span>Explore All</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Sub-Nav Bar Items */}
              <ul className="space-y-1.5">
                {activeCategory.items.map((subItem) => (
                  <li key={subItem.label}>
                    <Link
                      href={subItem.href}
                      onClick={onItemClick}
                      className="group/sub flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/80 transition-colors"
                    >
                      <div className="min-w-0 pr-2">
                        <span className="text-xs sm:text-sm font-bold text-navy group-hover/sub:text-amber-700 block transition-colors">
                          {subItem.label}
                        </span>
                        {subItem.description && (
                          <span className="text-[11px] text-slate-500 block truncate">
                            {subItem.description}
                          </span>
                        )}
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover/sub:text-amber-600 group-hover/sub:translate-x-1 transition-all shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Footer Action */}
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-slate-400">
              <span>Airmen Engineers</span>
              <Link
                href={activeCategoryIndex === 0 ? '/products' : '/manufacturing-products'}
                onClick={onItemClick}
                className="font-bold text-navy hover:text-amber-600 transition-colors flex items-center gap-1"
              >
                <span>View Full {activeCategoryIndex === 0 ? 'Industrial' : 'Manufacturing'} Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
