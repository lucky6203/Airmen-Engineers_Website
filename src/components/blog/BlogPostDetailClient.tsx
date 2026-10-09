'use client';

// ============================================
// Airmen Engineers — Blog Post Detail View
// Supports both statically defined and client-stored user posts
// ============================================

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  Tag,
  ArrowLeft,
  Share2,
  BookOpen,
  Phone,
  ExternalLink
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { BlogPost } from '@/types';
import { BLOG_POSTS } from '@/data/blog';

const STORAGE_KEY = 'airmen_engineers_blog_posts_v2';

interface Props {
  slug: string;
}

export default function BlogPostDetailClient({ slug }: Props) {
  const [post, setPost] = useState<BlogPost | null>(() => {
    return BLOG_POSTS.find((p) => p.slug === slug) || null;
  });
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!post) {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            const found = parsed.find((p: BlogPost) => p.slug === slug);
            if (found) setPost(found);
          }
        }
      } catch (e) {
        console.error('Error finding blog post in localStorage', e);
      }
    }
  }, [slug, post]);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!post && mounted) {
    return (
      <Container className="py-24 text-center">
        <div className="max-w-md mx-auto bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
          <BookOpen className="w-14 h-14 text-amber-400 mx-auto mb-4 opacity-75" />
          <h2 className="text-2xl font-bold text-white mb-2">Article Not Found</h2>
          <p className="text-slate-400 text-sm mb-6">
            The requested technical article may have been removed or is stored in a different browser session.
          </p>
          <Button href="/blog" variant="primary" size="md">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Knowledge Hub
          </Button>
        </div>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container className="py-24 text-center text-slate-500">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-slate-800 mb-4" />
          <div className="h-6 w-48 bg-slate-800 rounded mb-2" />
        </div>
      </Container>
    );
  }

  // Markdown renderer for content
  const renderMarkdown = (text: string) => {
    return text.split('\n\n').map((block, idx) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={idx} className="text-xl font-bold text-white mt-8 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-amber-400" />
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      if (trimmed.startsWith('## ')) {
        return (
          <h2 key={idx} className="text-2xl font-bold text-amber-300 mt-10 mb-4 border-b border-slate-800/80 pb-3">
            {trimmed.replace('## ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('# ')) {
        return (
          <h1 key={idx} className="text-3xl font-extrabold text-white mt-10 mb-4">
            {trimmed.replace('# ', '')}
          </h1>
        );
      }
      if (trimmed.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-4 border-amber-400 bg-amber-500/10 rounded-r-xl p-4 my-6 text-amber-200 italic font-medium text-base">
            {trimmed.replace(/^>\s*/gm, '')}
          </blockquote>
        );
      }
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const items = trimmed.split('\n').map((item) => item.replace(/^[-*]\s*/, '').trim());
        return (
          <ul key={idx} className="my-5 space-y-2.5 pl-2">
            {items.map((item, itemIdx) => {
              const boldRegex = /\*\*(.*?)\*\*/g;
              const parts = [];
              let lastIdx = 0;
              let match;
              while ((match = boldRegex.exec(item)) !== null) {
                if (match.index > lastIdx) {
                  parts.push(item.substring(lastIdx, match.index));
                }
                parts.push(<strong key={match.index} className="text-amber-300 font-semibold">{match[1]}</strong>);
                lastIdx = match.index + match[0].length;
              }
              if (lastIdx < item.length) parts.push(item.substring(lastIdx));

              return (
                <li key={itemIdx} className="flex items-start gap-2.5 text-slate-300 text-base leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                  <span>{parts.length > 0 ? parts : item}</span>
                </li>
              );
            })}
          </ul>
        );
      }

      // Standard paragraph with bold support
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIdx = 0;
      let match;
      while ((match = boldRegex.exec(trimmed)) !== null) {
        if (match.index > lastIdx) {
          parts.push(trimmed.substring(lastIdx, match.index));
        }
        parts.push(<strong key={match.index} className="text-white font-semibold">{match[1]}</strong>);
        lastIdx = match.index + match[0].length;
      }
      if (lastIdx < trimmed.length) parts.push(trimmed.substring(lastIdx));

      return (
        <p key={idx} className="text-slate-300 text-base leading-relaxed mb-5">
          {parts.length > 0 ? parts : trimmed}
        </p>
      );
    });
  };

  return (
    <article className="py-12 lg:py-16 text-slate-200">
      <Container>
        {/* Navigation & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-amber-400 transition-colors bg-slate-900/60 px-4 py-2 rounded-xl border border-slate-800 hover:border-amber-500/30"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all shadow-sm"
          >
            {copied ? (
              <>
                <i className="fa-solid fa-check text-emerald-400 text-xs" />
                <span className="text-emerald-400">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-amber-400" />
                <span>Share Article</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Header */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {post.category}
            </span>
            {post.isUserCreated && (
              <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
                <i className="fa-solid fa-users text-xs text-cyan-400" /> Community Contribution
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400 pb-8 border-b border-slate-800">
            <span className="flex items-center gap-2 text-slate-300 font-medium">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold uppercase">
                {(post.author || 'Airmen Engineers')[0]}
              </div>
              {post.author || 'Airmen Engineering Team'}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-500" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-500" />
              {post.readTime || '4 min read'}
            </span>
          </div>

          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden my-8 border border-slate-800/80 shadow-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040911]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          )}

          {/* Excerpt Lead */}
          {post.excerpt && (
            <p className="text-lg sm:text-xl text-slate-300 font-medium leading-relaxed bg-slate-900/40 border-l-4 border-amber-400 p-5 rounded-r-2xl mb-8">
              {post.excerpt}
            </p>
          )}

          {/* Article Content */}
          <div className="prose prose-invert max-w-none">
            {renderMarkdown(post.content)}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 mr-2">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA Box */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-slate-950 border border-amber-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Need an On-Site Audit for Your Plant?</h4>
              <p className="text-sm text-slate-400 max-w-md">
                Our certified compressed air &amp; material handling engineers can evaluate your factory efficiency with zero downtime.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Button href="/contact" variant="primary" size="md">
                Request Free Audit
              </Button>
              <Button href="/a-rental-compressor" variant="secondary" size="md">
                Explore Rentals
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
