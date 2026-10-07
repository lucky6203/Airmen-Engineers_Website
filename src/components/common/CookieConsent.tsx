'use client';

// ============================================
// Airmen Engineers — Cookie Settings Modal / Banner
// Matches exact user design specification
// ============================================

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Check } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);
  const [marketingAllowed, setMarketingAllowed] = useState(true);

  useEffect(() => {
    try {
      const consentStr = localStorage.getItem('ae_cookie_consent');
      if (!consentStr) {
        // Render shortly after mount
        const timer = setTimeout(() => setShow(true), 1000);
        return () => clearTimeout(timer);
      } else {
        const consent = JSON.parse(consentStr);
        if (typeof consent.analytics === 'boolean') setAnalyticsAllowed(consent.analytics);
        if (typeof consent.marketing === 'boolean') setMarketingAllowed(consent.marketing);
      }
    } catch {
      // LocalStorage fallback
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
      localStorage.setItem(
        'ae_cookie_consent',
        JSON.stringify({
          essential: true,
          analytics: true,
          marketing: true,
          date: new Date().toISOString(),
        })
      );
    } catch {}
    setShow(false);
    setShowDetails(false);
  };

  const handleSavePreferences = () => {
    try {
      localStorage.setItem(
        'ae_cookie_consent',
        JSON.stringify({
          essential: true,
          analytics: analyticsAllowed,
          marketing: marketingAllowed,
          date: new Date().toISOString(),
        })
      );
    } catch {}
    setShow(false);
    setShowDetails(false);
  };

  const handleDismiss = () => {
    try {
      localStorage.setItem(
        'ae_cookie_consent',
        JSON.stringify({
          essential: true,
          analytics: false,
          marketing: false,
          date: new Date().toISOString(),
        })
      );
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-[calc(100%-2rem)] sm:w-auto max-w-[450px]"
    >
      <div className="bg-white text-neutral-900 rounded-xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-250">
        {/* Top Header & Content Area */}
        <div className="p-5 sm:p-6 relative">
          {/* Close button */}
          <button
            type="button"
            onClick={handleDismiss}
            aria-label="Close cookie settings"
            className="absolute top-4 right-4 p-1.5 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>

          <h2 className="text-xl sm:text-[22px] font-bold text-neutral-900 tracking-tight pr-8">
            Cookie settings
          </h2>

          <p className="mt-3 text-sm text-neutral-700 leading-relaxed font-normal">
            By clicking &quot;Accept all cookies&quot;, you agree to storing cookies on your device to enhance
            site navigation, analyze site usage and assist in our marketing efforts as outlined in our{' '}
            <Link
              href="/privacy-policy"
              className="underline underline-offset-2 text-neutral-900 hover:text-black font-normal"
            >
              privacy policy
            </Link>
            .
          </p>

          {/* Granular Settings Expandable Panel */}
          {showDetails && (
            <div className="mt-4 pt-4 border-t border-neutral-100 space-y-3 animate-in fade-in duration-200">
              {/* Essential */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80">
                <div>
                  <div className="text-xs font-bold text-neutral-900">Strictly Necessary Cookies</div>
                  <div className="text-[11px] text-neutral-500">Essential for website security and core functionality.</div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-600 bg-neutral-200/80 px-2 py-0.5 rounded">
                  Always Active
                </span>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80">
                <div>
                  <div className="text-xs font-bold text-neutral-900">Analytics &amp; Performance</div>
                  <div className="text-[11px] text-neutral-500">Helps us understand and improve website usage.</div>
                </div>
                <button
                  type="button"
                  onClick={() => setAnalyticsAllowed((prev) => !prev)}
                  className={`w-10 h-5 rounded-full transition-colors relative flex items-center px-0.5 cursor-pointer ${
                    analyticsAllowed ? 'bg-black' : 'bg-neutral-300'
                  }`}
                  aria-label="Toggle analytics cookies"
                >
                  <span
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 transform ${
                      analyticsAllowed ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80">
                <div>
                  <div className="text-xs font-bold text-neutral-900">Marketing &amp; Targeting</div>
                  <div className="text-[11px] text-neutral-500">Used to deliver relevant equipment updates and offers.</div>
                </div>
                <button
                  type="button"
                  onClick={() => setMarketingAllowed((prev) => !prev)}
                  className={`w-10 h-5 rounded-full transition-colors relative flex items-center px-0.5 cursor-pointer ${
                    marketingAllowed ? 'bg-black' : 'bg-neutral-300'
                  }`}
                  aria-label="Toggle marketing cookies"
                >
                  <span
                    className={`w-4 h-4 rounded-full bg-white transition-transform duration-200 transform ${
                      marketingAllowed ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Button Section with subtle light background */}
        <div className="bg-neutral-50/90 border-t border-neutral-100 px-5 sm:px-6 py-4 flex flex-wrap items-center gap-3">
          {showDetails ? (
            <>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-4 py-2 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded transition-colors shadow-sm cursor-pointer"
              >
                Save settings
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-sm rounded border border-neutral-300 transition-colors shadow-sm cursor-pointer"
              >
                Accept all cookies
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2 bg-black hover:bg-neutral-800 text-white font-bold text-sm rounded transition-colors shadow-sm cursor-pointer"
              >
                Accept all cookies
              </button>
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-sm rounded border border-neutral-300 transition-colors shadow-sm cursor-pointer"
              >
                Cookie settings
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
