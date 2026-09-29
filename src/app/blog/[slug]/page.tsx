// ============================================
// Airmen Engineers — Single Blog Post Page
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import BlogPostDetailClient from '@/components/blog/BlogPostDetailClient';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Details | Airmen Engineers Knowledge Hub',
      description: 'Read industrial engineering and compressed air technical articles from Airmen Engineers.',
    };
  }

  return {
    title: `${post.title} | Airmen Engineers`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Airmen Engineering Team'],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return (
    <div className="bg-[#040911] min-h-screen">
      <Breadcrumb
        items={[
          { label: 'Blog & Articles', href: '/blog' },
          { label: post?.title || 'Article' },
        ]}
      />
      <BlogPostDetailClient slug={slug} />
    </div>
  );
}
