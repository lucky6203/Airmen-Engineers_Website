'use client';

// ============================================
// Airmen Engineers — Generator Sizing Calculator
// Interactive 5-Step Engineering Tool matching current website theme
// ============================================

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import {
  type LucideIcon,
  Building2,
  Cpu,
  FlaskConical,
  Snowflake,
  Hotel,
  Factory,
  Flame,
  Activity,
  PackageCheck,
  SlidersHorizontal,
  Search,
  Plus,
  Trash2,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Printer,
  PhoneCall,
  Zap,
  Gauge,
  Thermometer,
  Mountain,
  TrendingUp,
  FileSpreadsheet,
  AlertTriangle,
  Info,
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { cn } from '@/lib/utils';
import {
  SITE_PRESETS,
  EQUIPMENT_LIBRARY,
  STARTING_METHODS,
  DEFAULT_CONDITIONS,
  STANDARD_DG_RATINGS,
  calculateGeneratorSize,
  type StartingMethod,
  type LoadItem,
  type SiteConditions,
  type SitePreset,
} from '@/data/calculator';
import { CONTACT_INFO } from '@/data/company';

// Icon mapping helper for site presets
const ICON_MAP: Record<string, LucideIcon> = {
  Building2,
  Cpu,
  FlaskConical,
  Snowflake,
  Hotel,
  Factory,
  Flame,
  Activity,
  PackageCheck,
  SlidersHorizontal,
};

export default function GeneratorCalculator() {
  // Wizard state
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedPresetId, setSelectedPresetId] = useState<string>('workshop');
  const [loads, setLoads] = useState<LoadItem[]>(() => {
    const defaultPreset = SITE_PRESETS.find((p) => p.id === 'workshop');
    return defaultPreset ? JSON.parse(JSON.stringify(defaultPreset.defaultLoads)) : [];
  });
  const [conditions, setConditions] = useState<SiteConditions>(DEFAULT_CONDITIONS);

  // Equipment library search & filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Custom load modal/input
  const [customName, setCustomName] = useState('');
  const [customKw, setCustomKw] = useState('10');
  const [customMethod, setCustomMethod] = useState<StartingMethod>('DOL');
  const [showCustomModal, setShowCustomModal] = useState(false);

  // Added notification toast
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const calculatorRef = useRef<HTMLDivElement>(null);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set(EQUIPMENT_LIBRARY.map((item) => item.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filtered equipment library
  const filteredLibrary = useMemo(() => {
    return EQUIPMENT_LIBRARY.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Calculation results
  const results = useMemo(() => {
    return calculateGeneratorSize(loads, conditions);
  }, [loads, conditions]);

  // Current selected preset object
  const activePreset = useMemo(() => {
    return SITE_PRESETS.find((p) => p.id === selectedPresetId) || SITE_PRESETS[0];
  }, [selectedPresetId]);

  // Handle Preset Selection
  const handleSelectPreset = (preset: SitePreset) => {
    setSelectedPresetId(preset.id);
    setLoads(JSON.parse(JSON.stringify(preset.defaultLoads)));
  };

  // Add equipment from library
  const handleAddEquipment = (item: (typeof EQUIPMENT_LIBRARY)[0]) => {
    const newItem: LoadItem = {
      id: `${item.id}-${Date.now()}`,
      name: item.name,
      kw: item.defaultKw,
      qty: 1,
      startingMethod: item.defaultStartingMethod,
    };
    setLoads((prev) => [...prev, newItem]);
    setAddedNotice(`Added "${item.name}" (${item.defaultKw} kW) to load list`);
    setTimeout(() => setAddedNotice(null), 2500);
  };

  // Add custom equipment
  const handleAddCustomEquipment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;
    const kwNum = Math.max(0.5, parseFloat(customKw) || 5);
    const newItem: LoadItem = {
      id: `custom-${Date.now()}`,
      name: customName.trim(),
      kw: kwNum,
      qty: 1,
      startingMethod: customMethod,
    };
    setLoads((prev) => [...prev, newItem]);
    setCustomName('');
    setCustomKw('10');
    setShowCustomModal(false);
    setAddedNotice(`Added "${newItem.name}" (${newItem.kw} kW)`);
    setTimeout(() => setAddedNotice(null), 2500);
  };

  // Update load property
  const handleUpdateLoad = (id: string, updates: Partial<LoadItem>) => {
    setLoads((prev) =>
      prev.map((load) => (load.id === id ? { ...load, ...updates } : load))
    );
  };

  // Remove load item
  const handleRemoveLoad = (id: string) => {
    setLoads((prev) => prev.filter((load) => load.id !== id));
  };

  // Reset calculator
  const handleReset = () => {
    if (window.confirm('Reset all loads and site conditions to defaults?')) {
      setSelectedPresetId('workshop');
      const ws = SITE_PRESETS.find((p) => p.id === 'workshop');
      setLoads(ws ? JSON.parse(JSON.stringify(ws.defaultLoads)) : []);
      setConditions(DEFAULT_CONDITIONS);
      setCurrentStep(1);
    }
  };

  // Step navigation
  const goToStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
    calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Print PDF estimate
  const handlePrint = () => {
    window.print();
  };

  const phonePrimary = CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '');

  const progressPercent = Math.round(((currentStep - 1) / 4) * 100);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* ── HERO SECTION ─────────────────────────────────── */}
      <section className="bg-gradient-to-b from-navy via-navy to-slate-900 text-white pt-10 sm:pt-14 pb-14 sm:pb-20 relative overflow-hidden">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-300">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-gold font-medium">Free Services</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Generator Sizing Calculator</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold tracking-wider uppercase mb-4">
              <Zap className="w-3.5 h-3.5 text-gold" />
              <span>Free Engineering Tool</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
              Find the right generator size.{' '}
              <span className="text-gold block sm:inline">One step at a time.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              Choose a site profile, add your equipment and get a preliminary generator capacity estimate
              shaped around your installation — considering starting inrush currents and derating.
            </p>

            {/* Proof Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center backdrop-blur-xs">
                <div className="text-2xl font-black text-gold">10</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Site Profiles</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center backdrop-blur-xs">
                <div className="text-2xl font-black text-gold">20+</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Load Types</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center backdrop-blur-xs">
                <div className="text-2xl font-black text-gold">Live</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">DG Sizing Math</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 text-center backdrop-blur-xs">
                <div className="text-2xl font-black text-gold">Free</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">No Login Required</div>
              </div>
            </div>

            <button
              onClick={() => goToStep(1)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-dark text-navy font-extrabold text-base transition-all duration-200 shadow-lg shadow-gold/20 hover:scale-[1.02] cursor-pointer"
            >
              <span>Start Sizing</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </Container>
      </section>

      {/* ── CALCULATOR MAIN WIZARD ────────────────────────── */}
      <section ref={calculatorRef} id="calculator" className="py-8 sm:py-12">
        <Container>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* WIZARD HEADER & PROGRESS */}
            <div className="bg-slate-900 text-white p-5 sm:p-7 border-b border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  STEP 0{currentStep} OF 05
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  {progressPercent}% COMPLETE
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-gold h-full transition-all duration-300 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Step Navigation Tabs */}
              <div className="grid grid-cols-5 gap-1 sm:gap-2">
                {[
                  { step: 1, label: 'Site', num: '01' },
                  { step: 2, label: 'Equipment', num: '02' },
                  { step: 3, label: 'Review', num: '03' },
                  { step: 4, label: 'Conditions', num: '04' },
                  { step: 5, label: 'Result', num: '05' },
                ].map((s) => {
                  const isActive = currentStep === s.step;
                  const isDone = currentStep > s.step;
                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => goToStep(s.step)}
                      className={cn(
                        'py-2 px-1 sm:px-3 rounded-lg text-center transition-all cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2',
                        isActive
                          ? 'bg-amber-500/20 text-gold border border-gold/40 font-bold'
                          : isDone
                          ? 'text-slate-300 hover:bg-slate-800 hover:text-white font-medium'
                          : 'text-slate-500 hover:bg-slate-800/50'
                      )}
                    >
                      <span className="text-[11px] font-mono font-bold">{s.num}</span>
                      <span className="text-xs sm:text-sm font-semibold truncate">{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* WIZARD BODY */}
            <div className="p-5 sm:p-8 lg:p-10">
              {/* ========================================================= */}
              {/* STEP 1: SITE PROFILE */}
              {/* ========================================================= */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in-50 duration-200">
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider text-amber-600 uppercase">
                      STEP 01 · SITE PROFILE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy mt-1">
                      What kind of place are you sizing for?
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-1">
                      Choose the closest match to start with a practical load list. You can add, edit, or remove every item in the next steps.
                    </p>
                  </div>

                  {/* 10 Site Preset Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-4">
                    {SITE_PRESETS.map((preset) => {
                      const IconComponent = ICON_MAP[preset.iconName] || Building2;
                      const isSelected = selectedPresetId === preset.id;

                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => handleSelectPreset(preset)}
                          className={cn(
                            'p-4 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer group relative',
                            isSelected
                              ? 'bg-amber-50/70 border-gold ring-2 ring-gold/40 shadow-md'
                              : 'bg-white border-slate-200 hover:border-amber-400 hover:bg-slate-50/80'
                          )}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span
                                className={cn(
                                  'text-xs font-mono font-bold px-2 py-0.5 rounded',
                                  isSelected
                                    ? 'bg-amber-200 text-amber-900'
                                    : 'bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-amber-800'
                                )}
                              >
                                {preset.number}
                              </span>
                              <div
                                className={cn(
                                  'w-8 h-8 rounded-lg flex items-center justify-center transition-colors',
                                  isSelected
                                    ? 'bg-gold text-navy'
                                    : 'bg-slate-100 text-slate-600 group-hover:bg-amber-100 group-hover:text-gold'
                                )}
                              >
                                <IconComponent className="w-4 h-4" />
                              </div>
                            </div>
                            <strong className="block text-[15px] font-bold text-navy group-hover:text-amber-600 transition-colors">
                              {preset.title}
                            </strong>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                              {preset.subtitle}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                            <span className="text-slate-400">
                              {preset.defaultLoads.length} default loads
                            </span>
                            {isSelected && (
                              <i className="fa-solid fa-circle-check text-amber-600 text-sm" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Summary of selected profile */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-slate-500">Selected Profile:</div>
                      <div className="text-base font-bold text-navy">
                        {activePreset.title} ({loads.length} equipment items loaded)
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                      className="px-5 py-2.5 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Continue to Equipment</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* STEP 2: EQUIPMENT LIBRARY */}
              {/* ========================================================= */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in-50 duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold font-mono tracking-wider text-amber-600 uppercase">
                        STEP 02 · EQUIPMENT LIBRARY
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy mt-1">
                        Add the equipment you need to run.
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base mt-1">
                        Tap an item to add it to your load list. Typical ratings are starting points; use your equipment nameplate where available.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowCustomModal(true)}
                      className="px-4 py-2 rounded-lg border-2 border-dashed border-amber-500 text-amber-700 hover:bg-amber-50 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Custom Load</span>
                    </button>
                  </div>

                  {/* Added Notice Toast */}
                  {addedNotice && (
                    <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm px-4 py-2.5 rounded-xl flex items-center gap-2 animate-in fade-in duration-150">
                      <i className="fa-solid fa-check text-emerald-600 text-sm flex-shrink-0" />
                      <span>{addedNotice}</span>
                    </div>
                  )}

                  {/* Search & Filter Bar */}
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative flex-1">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search motors, air compressors, HVAC, cranes, forklifts..."
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all"
                      />
                    </div>

                    {/* Category Filter Chips */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSelectedCategory(cat)}
                          className={cn(
                            'px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer',
                            selectedCategory === cat
                              ? 'bg-navy text-gold shadow-xs'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          )}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Equipment Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {filteredLibrary.map((item) => {
                      const countInList = loads.filter((l) => l.name === item.name).length;
                      const methodCfg = STARTING_METHODS[item.defaultStartingMethod];

                      return (
                        <div
                          key={item.id}
                          className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between hover:border-amber-400 hover:shadow-md transition-all group"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-100">
                                {item.category}
                              </span>
                              {countInList > 0 && (
                                <span className="text-[10px] font-extrabold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                                  {countInList} in list
                                </span>
                              )}
                            </div>
                            <strong className="block text-sm font-bold text-navy group-hover:text-amber-600 transition-colors">
                              {item.name}
                            </strong>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <div>
                              <div className="text-xs font-extrabold text-slate-800">
                                {item.defaultKw} kW
                              </div>
                              <div className="text-[10px] text-slate-400">
                                {methodCfg.shortLabel}
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleAddEquipment(item)}
                              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-gold hover:text-navy text-slate-700 font-bold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Feedback footer */}
                  <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong>Current Load List:</strong> {loads.length} items added ({results.connectedLoadKw} kW connected).
                    </div>
                    <button
                      type="button"
                      onClick={() => goToStep(3)}
                      className="px-5 py-2.5 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-sm transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Proceed to Review ({loads.length} items)</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* STEP 3: LOAD REVIEW */}
              {/* ========================================================= */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in-50 duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold font-mono tracking-wider text-amber-600 uppercase">
                        STEP 03 · LOAD REVIEW
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy mt-1">
                        Check your equipment and quantities.
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base mt-1">
                        Adjust the rated input, quantity and starting method for each load. Remove anything that does not apply.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => goToStep(2)}
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add More Loads</span>
                    </button>
                  </div>

                  {loads.length === 0 ? (
                    <div className="text-center py-12 px-4 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
                      <AlertTriangle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-navy mb-1">Your load list is currently empty</h3>
                      <p className="text-sm text-slate-500 mb-4">
                        Add equipment from the library or choose a site profile with pre-configured defaults.
                      </p>
                      <div className="flex justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => goToStep(1)}
                          className="px-4 py-2 rounded-lg bg-slate-200 text-navy font-semibold text-xs cursor-pointer"
                        >
                          Pick Site Profile
                        </button>
                        <button
                          type="button"
                          onClick={() => goToStep(2)}
                          className="px-4 py-2 rounded-lg bg-gold text-navy font-bold text-xs cursor-pointer"
                        >
                          Open Equipment Library
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {/* Desktop Table Header */}
                      <div className="hidden lg:grid grid-cols-12 gap-3 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                        <div className="col-span-5">Equipment</div>
                        <div className="col-span-2 text-center">Rated kW Each</div>
                        <div className="col-span-2 text-center">Qty</div>
                        <div className="col-span-2">Starting Method</div>
                        <div className="col-span-1 text-right">Action</div>
                      </div>

                      {/* Items */}
                      {loads.map((load) => (
                        <div
                          key={load.id}
                          className="bg-white border border-slate-200 rounded-xl p-3.5 lg:p-4 grid grid-cols-1 lg:grid-cols-12 gap-3 items-center hover:border-slate-300 transition-colors shadow-xs"
                        >
                          {/* Equipment name */}
                          <div className="lg:col-span-5">
                            <div className="font-bold text-navy text-sm sm:text-base">
                              {load.name}
                            </div>
                            <div className="text-xs text-slate-400 mt-0.5">
                              Total load: <span className="font-semibold text-slate-700">{((load.kw || 0) * (load.qty || 1)).toFixed(1)} kW</span>
                            </div>
                          </div>

                          {/* kW Each Input */}
                          <div className="lg:col-span-2 flex items-center justify-between lg:justify-center gap-2">
                            <span className="lg:hidden text-xs text-slate-500 font-medium">kW each:</span>
                            <div className="flex items-center gap-1.5">
                              <input
                                type="number"
                                min="0.1"
                                step="0.5"
                                value={load.kw}
                                onChange={(e) =>
                                  handleUpdateLoad(load.id, {
                                    kw: Math.max(0, parseFloat(e.target.value) || 0),
                                  })
                                }
                                className="w-20 px-2.5 py-1.5 text-center text-sm font-bold bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-gold"
                              />
                              <span className="text-xs text-slate-500">kW</span>
                            </div>
                          </div>

                          {/* Qty Input with +/- */}
                          <div className="lg:col-span-2 flex items-center justify-between lg:justify-center gap-2">
                            <span className="lg:hidden text-xs text-slate-500 font-medium">Quantity:</span>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() =>
                                  handleUpdateLoad(load.id, {
                                    qty: Math.max(1, (load.qty || 1) - 1),
                                  })
                                }
                                className="w-7 h-7 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center cursor-pointer"
                              >
                                -
                              </button>
                              <span className="w-8 text-center text-sm font-bold text-navy">
                                {load.qty}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  handleUpdateLoad(load.id, {
                                    qty: (load.qty || 1) + 1,
                                  })
                                }
                                className="w-7 h-7 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Starting Method Selector */}
                          <div className="lg:col-span-2 flex items-center justify-between lg:justify-start gap-2">
                            <span className="lg:hidden text-xs text-slate-500 font-medium">Starting:</span>
                            <select
                              value={load.startingMethod}
                              onChange={(e) =>
                                handleUpdateLoad(load.id, {
                                  startingMethod: e.target.value as StartingMethod,
                                })
                              }
                              className="w-full px-2.5 py-1.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-lg focus:ring-1 focus:ring-gold"
                            >
                              <option value="DOL">DOL (Direct on Line)</option>
                              <option value="Star-Delta">Star-Delta</option>
                              <option value="Soft-Starter">Soft Starter</option>
                              <option value="VFD">VFD</option>
                              <option value="Direct">Direct / Static (No Surge)</option>
                            </select>
                          </div>

                          {/* Delete Action */}
                          <div className="lg:col-span-1 flex justify-end">
                            <button
                              type="button"
                              onClick={() => handleRemoveLoad(load.id)}
                              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Summary Bar */}
                  <div className="bg-slate-900 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-center sm:text-left">
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-slate-400">Total Items</div>
                        <div className="text-lg font-bold text-white">{loads.length}</div>
                      </div>
                      <div className="h-8 w-px bg-slate-800 hidden sm:block" />
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-slate-400">Connected Load</div>
                        <div className="text-lg font-extrabold text-gold">{results.connectedLoadKw} kW</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={loads.length === 0}
                      onClick={() => goToStep(4)}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gold hover:bg-gold-dark disabled:opacity-50 text-navy font-bold text-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Proceed to Site Conditions</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* STEP 4: SITE CONDITIONS */}
              {/* ========================================================= */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in-50 duration-200">
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider text-amber-600 uppercase">
                      STEP 04 · SITE CONDITIONS
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy mt-1">
                      Tell us about the installation.
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-1">
                      These operating assumptions adjust the estimate for simultaneous demand, power factor, and site derating.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {/* Diversity Factor */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-400 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-amber-600" />
                        <label className="text-sm font-bold text-navy">
                          How many loads run together? (Diversity Factor)
                        </label>
                      </div>
                      <p className="text-xs text-slate-500 mb-3">
                        Not all equipment operates simultaneously at full nameplate rating.
                      </p>
                      <select
                        value={conditions.diversityFactor}
                        onChange={(e) =>
                          setConditions((prev) => ({
                            ...prev,
                            diversityFactor: parseFloat(e.target.value),
                          }))
                        }
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-navy focus:ring-2 focus:ring-gold/50"
                      >
                        <option value="0.50">Light duty · 50% simultaneous use</option>
                        <option value="0.65">Typical industrial · 65% simultaneous use (Standard)</option>
                        <option value="0.80">Heavy industrial / Continuous · 80% simultaneous use</option>
                        <option value="1.00">All loads 100% running simultaneously</option>
                      </select>
                    </div>

                    {/* Power Factor */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-400 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Gauge className="w-4 h-4 text-amber-600" />
                        <label className="text-sm font-bold text-navy">
                          Operating Power Factor (PF)
                        </label>
                      </div>
                      <p className="text-xs text-slate-500 mb-3">
                        Indian industrial DG sets are rated at 0.8 lagging PF.
                      </p>
                      <div className="flex items-center gap-3">
                        <input
                          type="range"
                          min="0.70"
                          max="1.00"
                          step="0.05"
                          value={conditions.powerFactor}
                          onChange={(e) =>
                            setConditions((prev) => ({
                              ...prev,
                              powerFactor: parseFloat(e.target.value),
                            }))
                          }
                          className="flex-1 accent-amber-500 cursor-pointer"
                        />
                        <span className="w-16 text-center text-sm font-mono font-bold px-2 py-1 bg-slate-100 rounded-md">
                          {conditions.powerFactor.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Site Altitude */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-400 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Mountain className="w-4 h-4 text-amber-600" />
                        <label className="text-sm font-bold text-navy">
                          Site Elevation (Metres Above Sea Level)
                        </label>
                      </div>
                      <p className="text-xs text-slate-500 mb-3">
                        Gen-sets derate ~1% per 100m above 1,000m ASL due to air density.
                      </p>
                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          min="0"
                          max="4500"
                          step="50"
                          value={conditions.altitude}
                          onChange={(e) =>
                            setConditions((prev) => ({
                              ...prev,
                              altitude: Math.max(0, parseInt(e.target.value) || 0),
                            }))
                          }
                          className="w-28 p-2 text-sm font-bold bg-slate-50 border border-slate-200 rounded-lg"
                        />
                        <span className="text-xs text-slate-500">
                          {conditions.altitude > 1000
                            ? 'Altitude derating will apply'
                            : 'Normal sea-level (< 1000m)'}
                        </span>
                      </div>
                    </div>

                    {/* Ambient Temperature */}
                    <div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-400 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer className="w-4 h-4 text-amber-600" />
                        <label className="text-sm font-bold text-navy">
                          Peak Ambient Temperature (°C)
                        </label>
                      </div>
                      <p className="text-xs text-slate-500 mb-3">
                        Standard rating is 40°C. North India summer peaks reach 45°C - 48°C.
                      </p>
                      <div className="flex items-center gap-3">
                        <input
                          type="number"
                          min="20"
                          max="55"
                          step="1"
                          value={conditions.temperature}
                          onChange={(e) =>
                            setConditions((prev) => ({
                              ...prev,
                              temperature: Math.max(10, parseInt(e.target.value) || 40),
                            }))
                          }
                          className="w-28 p-2 text-sm font-bold bg-slate-50 border border-slate-200 rounded-lg"
                        />
                        <span className="text-xs text-slate-500">
                          {conditions.temperature > 40
                            ? `Thermal derate ~${((conditions.temperature - 40) * 0.7).toFixed(1)}%`
                            : 'Standard baseline (≤ 40°C)'}
                        </span>
                      </div>
                    </div>

                    {/* Future Growth Reserve */}
                    <div className="md:col-span-2 bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-400 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-amber-600" />
                        <label className="text-sm font-bold text-navy">
                          Future Expansion / Safety Margin Reserve
                        </label>
                      </div>
                      <p className="text-xs text-slate-500 mb-3">
                        Allows adding future machinery without immediately overloading the generator set.
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { val: 0.1, label: '10% Reserve', desc: 'Minimal expansion' },
                          { val: 0.2, label: '20% Reserve', desc: 'Recommended standard' },
                          { val: 0.3, label: '30% Reserve', desc: 'High future growth' },
                        ].map((opt) => (
                          <button
                            key={opt.val}
                            type="button"
                            onClick={() =>
                              setConditions((prev) => ({
                                ...prev,
                                growthReserve: opt.val,
                              }))
                            }
                            className={cn(
                              'p-3 rounded-lg border text-center transition-all cursor-pointer',
                              conditions.growthReserve === opt.val
                                ? 'bg-amber-50 border-gold ring-1 ring-gold text-navy font-bold'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                            )}
                          >
                            <div className="text-sm font-bold">{opt.label}</div>
                            <div className="text-[11px] text-slate-500">{opt.desc}</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => goToStep(5)}
                      className="px-6 py-3 rounded-xl bg-gold hover:bg-gold-dark text-navy font-extrabold text-sm transition-all flex items-center gap-2 shadow-md cursor-pointer"
                    >
                      <span>Calculate & View Result</span>
                      <ChevronRight className="w-4 h-4 stroke-[3]" />
                    </button>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* STEP 5: YOUR ESTIMATE (RESULT STEP) */}
              {/* ========================================================= */}
              {currentStep === 5 && (
                <div className="space-y-8 animate-in fade-in-50 duration-200 print:space-y-4">
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider text-amber-600 uppercase">
                      STEP 05 · YOUR ESTIMATE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy mt-1">
                      Your Generator Sizing Estimate
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-1">
                      Based on your selected site profile (<span className="font-semibold text-navy">{activePreset.title}</span>) and {loads.length} connected equipment loads.
                    </p>
                  </div>

                  {/* SPOTLIGHT HERO RESULT CARD */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-navy via-slate-900 to-navy text-white p-6 sm:p-8 lg:p-10 border border-gold/40 shadow-2xl overflow-hidden">
                    {/* Background gold flare */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 max-w-2xl">
                      <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-3">
                        Suggested Standard DG Rating
                      </span>

                      <div className="flex items-baseline gap-3 my-2">
                        <span className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white drop-shadow-sm">
                          {results.recommendedKva}
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold text-gold">
                          kVA
                        </span>
                      </div>

                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
                        Minimum commercial standard rating to reliably support continuous running loads and motor starting surges under your specified conditions.
                      </p>

                      <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                        <div>
                          Raw calculated minimum:{' '}
                          <span className="font-bold text-white">{results.minCalculatedKva} kVA</span>
                        </div>
                        <div>•</div>
                        <div>
                          Standard CPCB IV+ DG size:{' '}
                          <span className="font-bold text-gold">{results.recommendedKva} kVA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4 DETAILED BREAKDOWN METRICS */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                      <div className="text-xs uppercase font-bold text-slate-400 mb-1">
                        Connected Load
                      </div>
                      <div className="text-2xl font-black text-navy">
                        {results.connectedLoadKw}{' '}
                        <span className="text-xs font-normal text-slate-500">kW</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        Total nameplate input rating of all {loads.length} connected equipment.
                      </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                      <div className="text-xs uppercase font-bold text-slate-400 mb-1">
                        Running Demand
                      </div>
                      <div className="text-2xl font-black text-navy">
                        {results.runningDemandKw}{' '}
                        <span className="text-xs font-normal text-slate-500">kW</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        At {(conditions.diversityFactor * 100).toFixed(0)}% diversity + {(conditions.growthReserve * 100).toFixed(0)}% growth reserve.
                      </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                      <div className="text-xs uppercase font-bold text-slate-400 mb-1">
                        Starting Demand
                      </div>
                      <div className="text-2xl font-black text-navy">
                        {results.startingDemandKva}{' '}
                        <span className="text-xs font-normal text-slate-500">kVA</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        Motor inrush surge from largest motor ({results.largestMotorKw} kW via {results.largestMotorMethod}).
                      </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                      <div className="text-xs uppercase font-bold text-slate-400 mb-1">
                        Site Derating
                      </div>
                      <div className="text-2xl font-black text-navy">
                        {results.deratingPercent > 0 ? `-${results.deratingPercent}%` : '0%'}
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        {results.deratingNotes[0] || 'Standard sea-level conditions.'}
                      </p>
                    </div>
                  </div>

                  {/* EQUIPMENT LIST BREAKDOWN TABLE (FOR PRINT / REVIEW) */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-3 flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4 text-amber-600" />
                      <span>Loaded Equipment Breakdown</span>
                    </h3>
                    <div className="divide-y divide-slate-200 text-xs">
                      {loads.map((item, idx) => (
                        <div key={item.id} className="py-2 flex items-center justify-between">
                          <span className="text-slate-700">
                            <span className="font-mono text-slate-400 mr-2">{idx + 1}.</span>
                            <strong>{item.name}</strong> ({item.qty}x)
                          </span>
                          <span className="text-slate-600 font-mono">
                            {(item.kw * item.qty).toFixed(1)} kW · {item.startingMethod}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* PARTNERSHIP HIGHLIGHT — GREAVES COTTON DG SETS */}
                  <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h4 className="text-base font-bold text-navy">
                        Authorized Partner for Greaves Cotton DG Sets
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                        Airmen Engineers supplies, commissions, and services CPCB IV+ compliant Greaves diesel generator sets with Genius IoT smart remote monitoring.
                      </p>
                    </div>
                    <Link
                      href="/greaves"
                      className="whitespace-nowrap px-4 py-2 bg-navy hover:bg-slate-800 text-gold font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex-shrink-0"
                    >
                      Explore Greaves Lineup →
                    </Link>
                  </div>

                  {/* ACTION BUTTONS (PRINT & TALK TO ENGINEER) */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 print:hidden">
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 hover:border-slate-400 bg-white text-navy font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Printer className="w-4 h-4 text-slate-600" />
                      <span>Print / Save PDF</span>
                    </button>

                    <a
                      href={`tel:${phonePrimary}`}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold hover:bg-gold-dark text-navy font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <PhoneCall className="w-4 h-4 text-navy" />
                      <span>Talk to an Engineer (+91 92123 03791)</span>
                    </a>

                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-navy hover:bg-slate-800 text-white font-bold text-sm transition-colors text-center"
                    >
                      Request Detailed Site Survey
                    </Link>
                  </div>

                  {/* SIZING CAVEAT */}
                  <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-500 leading-relaxed flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Engineering Disclaimer:</strong> This generator sizing tool provides an indicative preliminary sizing estimate based on typical industrial standards. Final generator selection depends on site load sequencing, power factor correction, motor starting current curves, transient voltage dips (typically ≤ 20%), harmonic distortion from VFDs/UPS, and site survey by a certified electrical engineer.
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* WIZARD FOOTER CONTROLS */}
            <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex items-center justify-between gap-3 print:hidden">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-slate-500 hover:text-red-600 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Calculator</span>
              </button>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  disabled={currentStep === 1}
                  onClick={() => goToStep(currentStep - 1)}
                  className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Back
                </button>

                {currentStep < 5 && (
                  <button
                    type="button"
                    onClick={() => goToStep(currentStep + 1)}
                    className="px-5 py-2 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-xs sm:text-sm transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CUSTOM EQUIPMENT MODAL ───────────────────────── */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 w-full max-w-md animate-in zoom-in-95 duration-150">
            <h3 className="text-lg font-bold text-navy mb-1">Add Custom Equipment</h3>
            <p className="text-xs text-slate-500 mb-4">
              Enter your specific machine name, motor rating in kW, and starting method.
            </p>

            <form onSubmit={handleAddCustomEquipment} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Equipment Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hydraulic Power Pack, Packaging Unit"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Rated Input (kW)
                </label>
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  required
                  value={customKw}
                  onChange={(e) => setCustomKw(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Starting Method
                </label>
                <select
                  value={customMethod}
                  onChange={(e) => setCustomMethod(e.target.value as StartingMethod)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold focus:ring-1 focus:ring-gold"
                >
                  <option value="DOL">DOL (Direct on Line - 6.0x Inrush)</option>
                  <option value="Star-Delta">Star-Delta (3.0x Inrush)</option>
                  <option value="Soft-Starter">Soft Starter (2.5x Inrush)</option>
                  <option value="VFD">VFD (1.25x Inrush)</option>
                  <option value="Direct">Direct / Static (No Motor Surge)</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCustomModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold bg-gold text-navy hover:bg-gold-dark rounded-lg"
                >
                  Add to Load List
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
