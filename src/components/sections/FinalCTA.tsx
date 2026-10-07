'use client';

// ============================================
// Airmen Engineers — Final CTA Section
// ============================================

import React, { useEffect, useState } from 'react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function FinalCTA() {
  const [particles, setParticles] = useState<{ id: number; left: string; top: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${3 + Math.random() * 4}s`,
      }))
    );
  }, []);

  return (
    <section className="relative py-12 sm:py-16 bg-navy overflow-hidden" id="final-cta">
      {/* Decorative particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute w-1 h-1 bg-gold/20 rounded-full"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animation: `float ${p.duration} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white" />
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* <span className="overline mb-4 block">Get Started</span> */}
          <h2 className="text-white mb-4">
            Ready to Improve Your{' '}
            <span className="text-gold">Operations?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Talk to our engineering team about your industrial air compressor, 
            material handling, or compressed air requirement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg" showArrow id="final-cta-quote">
              Get a Quote
            </Button>
            <Button
              href="/contact"
              variant="dark"
              size="lg"
              id="final-cta-contact"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
