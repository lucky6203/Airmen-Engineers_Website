'use client';

// ============================================
// Airmen Engineers — Interactive Blog Client
// Complete Client-Side Publishing & Reader Studio (Bina Backend Ke)
// ============================================

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  Tag,
  Search,
  PlusCircle,
  PenTool,
  Trash2,
  Edit3,
  Share2,
  X,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Eye,
  FileText,
  Bookmark,
  Layers,
  Check,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  ThumbsUp
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { BlogPost } from '@/types';
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blog';

const STORAGE_KEY = 'airmen_engineers_blog_posts_v2';

const IMAGE_PRESETS = [
  { label: 'Kaeser DSD Screw Compressor', src: '/images/compressors/kaeser-dsd-main.jpg' },
  { label: 'High-Tech IIoT Automation', src: '/images/banner-2.jpg' },
  { label: 'Direct-Drive Heavy Compressor', src: '/images/compressors/kaeser-dsd-direct-drive.jpg' },
  { label: 'Precision Machinery Station', src: '/images/about-3.jpg' },
  { label: 'Field Engineering Workshop', src: '/images/about-1.jpg' },
  { label: 'Continuous Industrial Plant', src: '/images/banner-3.jpg' },
];

export default function BlogClient() {
  const [posts, setPosts] = useState<BlogPost[]>(BLOG_POSTS);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyUserCreated, setOnlyUserCreated] = useState<boolean>(false);

  // Modals state
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form state for writing / editing
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: BLOG_CATEGORIES[0] || 'Air Compressors',
    customCategory: '',
    image: IMAGE_PRESETS[0].src,
    customImageUrl: '',
    excerpt: '',
    content: '',
    tags: '',
  });

  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');

  // Load from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPosts(parsed);
        }
      }
    } catch (e) {
      console.error('Error loading blog posts from localStorage:', e);
    }
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const savePostsToStorage = (updatedPosts: BlogPost[]) => {
    setPosts(updatedPosts);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  };

  // Open modal for new blog
  const handleOpenNew = () => {
    setEditingPostId(null);
    setFormData({
      title: '',
      author: 'Airmen Technical Contributor',
      category: BLOG_CATEGORIES[0],
      customCategory: '',
      image: IMAGE_PRESETS[0].src,
      customImageUrl: '',
      excerpt: '',
      content: '',
      tags: 'compressed air, industrial maintenance, energy efficiency',
    });
    setActiveTab('write');
    setIsWriteModalOpen(true);
  };

  // Open modal for editing
  const handleOpenEdit = (post: BlogPost) => {
    setEditingPostId(post.id);
    setFormData({
      title: post.title,
      author: post.author || 'Airmen Contributor',
      category: post.category,
      customCategory: '',
      image: post.image || IMAGE_PRESETS[0].src,
      customImageUrl: '',
      excerpt: post.excerpt,
      content: post.content,
      tags: post.tags.join(', '),
    });
    setActiveTab('write');
    setIsWriteModalOpen(true);
  };

  // Submit / Publish blog
  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in both a Title and Article Content.');
      return;
    }

    const wordCount = formData.content.split(/\s+/).filter(Boolean).length;
    const readMinutes = Math.max(1, Math.round(wordCount / 180));
    const finalCategory = formData.customCategory.trim() ? formData.customCategory.trim() : formData.category;
    const finalImage = formData.customImageUrl.trim() ? formData.customImageUrl.trim() : formData.image;
    const tagsArray = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const generatedSlug = formData.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();

    if (editingPostId) {
      // Update existing post
      const updated = posts.map((p) => {
        if (p.id === editingPostId) {
          return {
            ...p,
            title: formData.title,
            author: formData.author || 'Airmen Contributor',
            category: finalCategory,
            image: finalImage,
            excerpt: formData.excerpt || formData.content.slice(0, 160) + '...',
            content: formData.content,
            tags: tagsArray.length > 0 ? tagsArray : ['industrial'],
            readTime: `${readMinutes} min read`,
          };
        }
        return p;
      });
      savePostsToStorage(updated);
      triggerToast('Article successfully updated!');
      if (readingPost && readingPost.id === editingPostId) {
        setReadingPost(updated.find((p) => p.id === editingPostId) || null);
      }
    } else {
      // Create new post
      const newPost: BlogPost = {
        id: `post-${Date.now()}`,
        title: formData.title,
        slug: `${generatedSlug}-${Date.now().toString().slice(-4)}`,
        author: formData.author || 'Airmen Contributor',
        category: finalCategory,
        date: new Date().toISOString().split('T')[0],
        image: finalImage,
        excerpt: formData.excerpt || formData.content.slice(0, 160) + '...',
        content: formData.content,
        tags: tagsArray.length > 0 ? tagsArray : ['industrial', 'maintenance'],
        relatedPosts: ['understanding-screw-compressors', 'energy-efficiency-compressed-air'],
        readTime: `${readMinutes} min read`,
        isUserCreated: true,
      };

      const updated = [newPost, ...posts];
      savePostsToStorage(updated);
      triggerToast('New article published successfully to your Knowledge Hub!');
    }

    setIsWriteModalOpen(false);
  };

  // Delete post
  const handleDeletePost = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this article?')) {
      const updated = posts.filter((p) => p.id !== id);
      savePostsToStorage(updated);
      if (readingPost && readingPost.id === id) {
        setReadingPost(null);
      }
      triggerToast('Article removed.');
    }
  };

  // Reset to default
  const handleResetDefaults = () => {
    if (window.confirm('Reset all blog articles to the original official editorial collection?')) {
      savePostsToStorage(BLOG_POSTS);
      triggerToast('Articles reset to defaults.');
    }
  };

  // Insert markdown helper in editor
  const insertFormatting = (prefix: string, suffix: string = '') => {
    const textarea = document.getElementById('blog-editor-textarea') as HTMLTextAreaElement | null;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selection = text.substring(start, end);
    const replacement = prefix + (selection || 'text') + suffix;

    const newText = text.substring(0, start) + replacement + text.substring(end);
    setFormData({ ...formData, content: newText });

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + (selection || 'text').length);
    }, 50);
  };

  // Filtered posts
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => set.add(p.category));
    return ['All', ...Array.from(set)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesUserFilter = !onlyUserCreated || post.isUserCreated;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        (post.author && post.author.toLowerCase().includes(q)) ||
        post.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesUserFilter && matchesSearch;
    });
  }, [posts, selectedCategory, onlyUserCreated, searchQuery]);

  const userPublishedCount = useMemo(() => posts.filter((p) => p.isUserCreated).length, [posts]);

  // Helper to render markdown content simply
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-base sm:text-lg font-bold text-slate-900 mt-5 mb-2">
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="text-lg sm:text-xl font-extrabold text-slate-950 mt-6 mb-3 border-b border-gray-100 pb-2">
            {line.replace('## ', '')}
          </h3>
        );
      }
      if (line.startsWith('# ')) {
        return (
          <h2 key={idx} className="text-xl sm:text-2xl font-black text-slate-950 mt-8 mb-4">
            {line.replace('# ', '')}
          </h2>
        );
      }
      if (line.startsWith('- ')) {
        return (
          <li key={idx} className="ml-5 text-slate-700 list-disc text-sm sm:text-base mb-1.5 leading-relaxed">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (line.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-4 border-amber-500 bg-amber-50/70 p-4 my-4 rounded-r-xl italic text-slate-800 text-sm sm:text-base">
            {line.replace('> ', '')}
          </blockquote>
        );
      }
      if (line.trim() === '') {
        return <div key={idx} className="h-3" />;
      }
      return (
        <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-slate-900 text-white rounded-2xl shadow-2xl border border-amber-500/40 animate-bounce">
          <i className="fa-solid fa-check text-amber-400 text-sm" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* ── Modern High-Impact Hero Section ──────────────────────── */}
      <section className="relative overflow-hidden bg-[#060D17] bg-gradient-to-b from-navy-dark via-navy to-[#060D17] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.08),transparent_60%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="max-w-2xl text-left space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                <i className="fa-solid fa-newspaper text-xs text-gold" />
                <span>INDUSTRIAL KNOWLEDGE HUB • TECHNICAL ARTICLES &amp; CASE STUDIES</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Industrial Engineering <br />
                <span className="text-gold">
                  Insights &amp; Articles
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
                Expert technical knowledge on Kaeser rotary screw compressors, ISO 8573-1 air purity standards, ultrasonic energy audits, and industrial material handling. Write and share your own engineering articles right from your browser!
              </p>

              {/* Stat Counters */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm">
                  <div className="text-xl font-extrabold text-amber-400 font-mono">{posts.length}</div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Total Articles</div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm">
                  <div className="text-xl font-extrabold text-emerald-400 font-mono">{userPublishedCount}</div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">User Published</div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm">
                  <div className="text-xl font-extrabold text-white font-mono">{allCategories.length - 1}+</div>
                  <div className="text-[10px] text-gray-300 uppercase tracking-wider font-semibold">Categories</div>
                </div>
              </div>
            </div>

            {/* Right Action: Write Blog CTA Box */}
            <div className="w-full lg:w-auto flex-shrink-0">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-xl shadow-2xl space-y-4 max-w-sm w-full">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                    <PenTool className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Write &amp; Publish Article</h3>
                    <p className="text-xs text-amber-400">Instant client-side publishing (Bina backend)</p>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Share maintenance checklists, factory audit insights, or machinery guides. Your article will be published instantly and saved in your browser!
                </p>

                <button
                  onClick={handleOpenNew}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>+ Write New Blog Post</span>
                </button>

                {userPublishedCount > 0 && (
                  <button
                    onClick={handleResetDefaults}
                    className="w-full text-center text-[11px] text-gray-400 hover:text-rose-400 transition-colors flex items-center justify-center gap-1 cursor-pointer pt-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset back to official articles</span>
                  </button>
                )}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Search & Filter Controls ─────────────────────────────── */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <Container>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {allCategories.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = cat === 'All' ? posts.length : posts.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-navy text-white shadow-md scale-105'
                        : 'bg-gray-100 hover:bg-gray-200 text-slate-700'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-amber-400 text-slate-950' : 'bg-gray-200 text-gray-600'}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input & Write Button */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, tags, authors..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-navy placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* User Published Filter Toggle */}
              {userPublishedCount > 0 && (
                <button
                  onClick={() => setOnlyUserCreated(!onlyUserCreated)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors whitespace-nowrap cursor-pointer ${
                    onlyUserCreated
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'bg-gray-50 text-slate-700 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  My Articles ({userPublishedCount})
                </button>
              )}

              <button
                onClick={handleOpenNew}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>+ Write</span>
              </button>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Blog Articles Grid ───────────────────────────────────── */}
      <section className="py-12 sm:py-16">
        <Container>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8 max-w-xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-navy">No Articles Found</h3>
              <p className="text-sm text-gray-500">
                No blog articles match your current search or category filter. Try clearing filters or write the very first article on this topic!
              </p>
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setOnlyUserCreated(false); }}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-slate-700 text-xs font-bold rounded-xl"
                >
                  Reset Filters
                </button>
                <button
                  onClick={handleOpenNew}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow-sm"
                >
                  Write This Article
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setReadingPost(post)}
                  className="bg-white rounded-3xl border border-gray-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 cursor-pointer relative"
                >
                  {/* Top Cover Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <Image
                      src={post.image || IMAGE_PRESETS[0].src}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

                    {/* Category & Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-navy/90 backdrop-blur-md text-amber-300 border border-amber-400/30 text-[10px] font-extrabold uppercase tracking-wider">
                        {post.category}
                      </span>
                      {post.isUserCreated && (
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold shadow-md flex items-center gap-1">
                          <Check className="w-2.5 h-2.5" />
                          User Published
                        </span>
                      )}
                    </div>

                    {/* Read Time on Image */}
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-medium text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {post.readTime || '4 min read'}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Date & Author */}
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-amber-500" />
                          {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1 truncate max-w-[140px]">
                          <User className="w-3 h-3 text-gray-400" />
                          {post.author || 'Airmen Editorial'}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-navy mb-2 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer Tags & Actions */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-navy group-hover:text-amber-600 transition-colors flex items-center gap-1">
                          Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>

                        {post.isUserCreated && (
                          <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                            <button
                              onClick={() => handleOpenEdit(post)}
                              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 hover:text-amber-600 transition-colors"
                              title="Edit post"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={(e) => handleDeletePost(post.id, e)}
                              className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                              title="Delete post"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ── Modal 1: Article Reader View ─────────────────────────── */}
      {readingPost && (
        <div className="fixed top-20 inset-x-0 bottom-0 z-40 flex items-start justify-center p-3 sm:p-6 pt-4 sm:pt-6 pb-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[calc(100vh-6.5rem)] flex flex-col my-auto sm:my-0">
            
            {/* Modal Header Bar with Close Button */}
            <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase">
                  {readingPost.category}
                </span>
                <span className="text-xs text-gray-400 hidden sm:inline">• {readingPost.readTime || '4 min read'}</span>
              </div>

              <div className="flex items-center gap-2">
                {readingPost.isUserCreated && (
                  <button
                    onClick={() => {
                      const p = readingPost;
                      setReadingPost(null);
                      handleOpenEdit(p);
                    }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                )}
                <button
                  onClick={() => setReadingPost(null)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Article Body */}
            <div className="overflow-y-auto p-6 sm:p-10 flex-1">
              {/* Feature Image Banner */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 shadow-md bg-slate-900">
                <Image
                  src={readingPost.image || IMAGE_PRESETS[0].src}
                  alt={readingPost.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 leading-tight mb-4">
                {readingPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-6 mb-6 border-b border-gray-100">
                <span className="flex items-center gap-1.5 font-medium text-slate-700">
                  <User className="w-3.5 h-3.5 text-amber-500" />
                  {readingPost.author || 'Airmen Engineering Contributor'}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {new Date(readingPost.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {readingPost.readTime || '4 min read'}
                </span>
              </div>

              {/* Excerpt Lead */}
              {readingPost.excerpt && (
                <p className="text-base sm:text-lg font-medium text-slate-700 italic border-l-4 border-amber-500 pl-4 py-1 mb-8 bg-amber-50/40 rounded-r-lg">
                  {readingPost.excerpt}
                </p>
              )}

              {/* Rendered Body */}
              <div className="prose prose-slate max-w-none">
                {renderFormattedContent(readingPost.content)}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Topic Tags:</div>
                <div className="flex flex-wrap gap-2">
                  {readingPost.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-lg font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Inside Reader */}
              <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Need Technical Guidance For Your Plant?</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Talk to Airmen certified compressed air engineers today.</p>
                </div>
                <Button href="/contact" size="sm" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 whitespace-nowrap">
                  Contact Engineering
                </Button>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ── Modal 2: Write & Publish Blog Modal (Bina Backend Ke) ─ */}
      {isWriteModalOpen && (
        <div className="fixed top-20 inset-x-0 bottom-0 z-40 flex items-start justify-center p-3 sm:p-6 pt-4 sm:pt-6 pb-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[calc(100vh-6.5rem)] flex flex-col my-auto sm:my-0">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-950 text-white flex items-center justify-between border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <PenTool className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">
                    {editingPostId ? 'Edit Article' : 'Write New Industrial Article'}
                  </h2>
                  <p className="text-[11px] text-amber-400">Published directly to browser Knowledge Hub (localStorage)</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Tabs: Write vs Preview */}
                <div className="flex items-center bg-white/10 rounded-xl p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab('write')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      activeTab === 'write' ? 'bg-amber-500 text-slate-950' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Editor
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('preview')}
                    className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      activeTab === 'preview' ? 'bg-amber-500 text-slate-950' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    Preview
                  </button>
                </div>

                <button
                  onClick={() => setIsWriteModalOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handlePublish} className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-5">
              
              {activeTab === 'write' ? (
                <>
                  {/* Title */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Article Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g. 5 Common Screw Compressor Mistakes That Cost Industries Lakhs"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>

                  {/* Author & Category in Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Author Name / Title
                      </label>
                      <input
                        type="text"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                        placeholder="e.g. Senior Application Engineer"
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500 bg-white"
                      >
                        {BLOG_CATEGORIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                        <option value="Custom">+ Custom Category...</option>
                      </select>
                      {formData.category === 'Custom' && (
                        <input
                          type="text"
                          value={formData.customCategory}
                          onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                          placeholder="Type custom category name..."
                          className="w-full mt-2 px-3 py-1.5 rounded-lg border border-amber-300 text-xs text-slate-800 focus:outline-none"
                        />
                      )}
                    </div>
                  </div>

                  {/* Featured Cover Image Picker */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Select Featured Cover Image
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-2">
                      {IMAGE_PRESETS.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setFormData({ ...formData, image: img.src, customImageUrl: '' })}
                          className={`relative h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            formData.image === img.src && !formData.customImageUrl
                              ? 'border-amber-500 ring-2 ring-amber-500/30 scale-105'
                              : 'border-gray-200 hover:border-gray-300 opacity-70 hover:opacity-100'
                          }`}
                        >
                          <Image src={img.src} alt={img.label} fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                    <input
                      type="url"
                      value={formData.customImageUrl}
                      onChange={(e) => setFormData({ ...formData, customImageUrl: e.target.value })}
                      placeholder="Or paste an image URL (https://...)"
                      className="w-full px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-slate-700 focus:outline-none"
                    />
                  </div>

                  {/* Short Excerpt */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Short Summary / Excerpt (1-2 sentences)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      placeholder="Brief teaser of what readers will learn in this technical guide..."
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Article Content with Formatting Toolstrip */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Article Body (Markdown supported) <span className="text-rose-500">*</span>
                      </label>
                      
                      {/* Formatting Helper Buttons */}
                      <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5 text-[11px] font-bold">
                        <button
                          type="button"
                          onClick={() => insertFormatting('## ')}
                          className="px-2 py-0.5 hover:bg-white rounded text-slate-700"
                          title="Heading 2"
                        >
                          H2
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting('### ')}
                          className="px-2 py-0.5 hover:bg-white rounded text-slate-700"
                          title="Heading 3"
                        >
                          H3
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting('**', '**')}
                          className="px-2 py-0.5 hover:bg-white rounded text-slate-700 font-bold"
                          title="Bold"
                        >
                          B
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting('- ')}
                          className="px-2 py-0.5 hover:bg-white rounded text-slate-700"
                          title="Bullet List"
                        >
                          • List
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatting('> ')}
                          className="px-2 py-0.5 hover:bg-white rounded text-slate-700"
                          title="Quote"
                        >
                          &ldquo; Quote
                        </button>
                      </div>
                    </div>

                    <textarea
                      id="blog-editor-textarea"
                      required
                      rows={10}
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      placeholder="Write your article here...&#10;&#10;## Key Industrial Takeaway&#10;Explain the operational principle or maintenance workflow.&#10;&#10;- Step 1: Check baseline operating pressure&#10;- Step 2: Perform ultrasonic leak audit&#10;&#10;> Regular maintenance preserves 15-20% electrical power."
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-xs sm:text-sm font-mono text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 leading-relaxed"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="kaeser, rotary screw, maintenance, energy audit"
                      className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-xs text-slate-800 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </>
              ) : (
                /* Live Preview Mode */
                <div className="space-y-4">
                  <div className="relative h-48 w-full rounded-2xl overflow-hidden shadow bg-slate-900">
                    <Image
                      src={formData.customImageUrl || formData.image}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>

                  <span className="inline-block px-2.5 py-1 rounded-lg bg-navy text-amber-300 text-[10px] font-bold uppercase">
                    {formData.customCategory || formData.category}
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                    {formData.title || 'Untitled Article'}
                  </h2>

                  <div className="text-xs text-gray-500">
                    By {formData.author || 'Author'} • {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </div>

                  {formData.excerpt && (
                    <p className="text-sm italic border-l-4 border-amber-500 pl-3 py-1 bg-amber-50/50 text-slate-700">
                      {formData.excerpt}
                    </p>
                  )}

                  <div className="border-t border-gray-100 pt-4">
                    {formData.content ? (
                      renderFormattedContent(formData.content)
                    ) : (
                      <p className="text-gray-400 italic text-sm">No content written yet. Switch back to Editor tab to write.</p>
                    )}
                  </div>
                </div>
              )}

              {/* Submit Buttons */}
              <div className="pt-4 border-t border-gray-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsWriteModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-slate-700 text-xs font-bold hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold shadow-lg shadow-amber-500/25 transition-all cursor-pointer"
                >
                  <i className="fa-solid fa-check text-xs" />
                  <span>{editingPostId ? 'Save Changes' : 'Publish Article Now'}</span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}
