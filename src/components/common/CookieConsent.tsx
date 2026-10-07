'use client';

// ============================================
// Airmen Engineers — Cookie Consent & Permission Banner
// Compliant, responsive, and re-openable from footer
// ============================================

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, Check, X, Settings2 } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('ae_cookie_consent');
      if (!consent) {
        // Small delay so page renders smoothly first
        const t = setTimeout(() => setShow(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      // LocalStorage unavailable
    }

    const handleReopen = () => {
      setShow(true);
      setShowDetails(true);
    };

    window.addEventListener('open-cookie-banner', handleReopen);
    return () => window.removeEventListener('open-cookie-banner', handleReopen);
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem('ae_cookie_consent', JSON.stringify({ essential: true, analytics: true, date: new Date().toISOString() }));
    } catch {}
    setShow(false);
  };

  const handleAcceptEssential = () => {
    try {
      localStorage.setItem('ae_cookie_consent', JSON.stringify({ essential: true, analytics: false, date: new Date().toISOString() }));
    } catch {}
    setShow(false);
  };

  const handleSaveCustom = () => {
    try {
      localStorage.setItem('ae_cookie_consent', JSON.stringify({ essential: true, analytics: analyticsAllowed, date: new Date().toISOString() }));
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-0 inset-x-0 z-[var(--z-modal)] p-3 sm:p-5 pointer-events-none"
    >
      <div className="max-w-3xl mx-auto bg-navy/95 border border-white/20 backdrop-blur-xl text-white rounded-3xl p-5 sm:p-6 shadow-2xl pointer-events-auto animate-in slide-in-from-bottom-5 duration-300">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-heading font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <span>We Value Your Privacy &amp; Data Security</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" /> GDPR &amp; DPDP
                </span>
              </h3>
              <button
                type="button"
                onClick={handleAcceptEssential}
                className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                aria-label="Dismiss cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Airmen Engineers uses cookies to enhance equipment inquiry processing, remember your preferences, and evaluate website performance. You can customize your preferences or read our{' '}
              <Link href="/privacy-policy" className="text-gold hover:underline font-medium">
                Privacy Policy
              </Link>.
            </p>

            {/* Expandable Preferences */}
            {showDetails && (
              <div className="pt-3 mt-3 border-t border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <span className="font-bold text-white block">Strictly Necessary Cookies</span>
                    <span className="text-gray-400 text-[11px]">Required for RFQ security, session routing &amp; core functions.</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase">
                    Always Active
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <div>
                    <span className="font-bold text-white block">Analytics &amp; Performance</span>
                    <span className="text-gray-400 text-[11px]">Helps us analyze page load times and user journeys anonymously.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAnalyticsAllowed(!analyticsAllowed)}
                    className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-1 cursor-pointer ${
                      analyticsAllowed ? 'bg-gold' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`w-4 h-4 rounded-full bg-navy transition-transform duration-200 transform ${
                        analyticsAllowed ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-dark text-navy font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                Accept All
              </button>

              <button
                type="button"
                onClick={handleAcceptEssential}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors border border-white/15 cursor-pointer"
              >
                Essential Only
              </button>

              {showDetails ? (
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Save Settings
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setShowDetails(true)}
                  className="px-3 py-2.5 text-xs text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-1.5 cursor-pointer ml-auto"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  Cookie Settings
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
