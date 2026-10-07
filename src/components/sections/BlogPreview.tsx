'use client';

// ============================================
// Airmen Engineers — Blog Preview Section
// ============================================

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { BLOG_POSTS } from '@/data/blog';

export default function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-10 sm:py-14 bg-gray-50 border-b border-gray-200" id="blog-preview">
      <Container>
        <SectionHeading
          // overline="Insights & Articles"
          title="Industrial Knowledge Hub"
          subtitle="Expert insights on air compressors, energy efficiency, maintenance, and industrial technology."
          align="center"
          className="mb-6 sm:mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <article className="card-industrial h-full flex flex-col group-hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="aspect-[16/9] bg-navy relative overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
                      <span className="text-4xl font-heading font-bold text-gold/20">
                        Image
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-gold text-navy text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 items-center sm:items-start text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-gray-400 mb-2">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  <h3 className="text-base font-heading font-semibold text-navy mb-2 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-custom line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-sm font-semibold text-gold mt-3 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button href="/blog" variant="secondary" showArrow id="blog-cta">
            View All Articles
          </Button>
        </div>
      </Container>
    </section>
  );
}
