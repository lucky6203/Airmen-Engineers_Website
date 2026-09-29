// ============================================
// Airmen Engineers — Industrial Blog & Knowledge Hub Page
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import BlogClient from '@/components/blog/BlogClient';

export const metadata: Metadata = {
  title: 'Industrial Blog & Knowledge Hub — Articles & Guides | Airmen Engineers',
  description: 'Expert articles, maintenance checklists, energy audit guides, and industrial engineering insights. Publish and read technical articles right from your browser.',
  keywords: [
    'air compressor blog',
    'kaeser compressor maintenance guide',
    'industrial energy efficiency blog',
    'material handling articles',
    'compressed air auditing tips'
  ],
};

export default function BlogPage() {
  return (
    <div className="bg-[#040911] min-h-screen">
      <Breadcrumb items={[{ label: 'Blog & Articles' }]} />
      <BlogClient />
    </div>
  );
}
