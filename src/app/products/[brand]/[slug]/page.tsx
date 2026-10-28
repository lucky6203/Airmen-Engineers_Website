import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import ProductDetailClient from '@/components/products/ProductDetailClient';

interface Props {
  params: Promise<{
    brand: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand, slug } = await params;
  if (brand === 'aim') {
    return {
      title: 'Product Not Found | Airmen Engineers',
    };
  }

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product || product.brand?.id === 'aim' || product.brand?.slug === 'aim') {
    return {
      title: 'Product Not Found | Airmen Engineers',
    };
  }

  return {
    title: `${product.name} | Airmen Engineers`,
    description: product.shortDescription || product.description,
    keywords: [
      product.name,
      product.brand?.name || '',
      'Airmen Engineers',
      'industrial equipment',
    ],
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { brand, slug } = await params;
  if (brand === 'aim') {
    notFound();
  }

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product || product.brand?.id === 'aim' || product.brand?.slug === 'aim') {
    notFound();
  }

  // Related products from the same category or brand (excluding AIM)
  const related = PRODUCTS.filter(
    (p) =>
      p.id !== product.id &&
      p.brand?.id !== 'aim' &&
      p.brand?.slug !== 'aim' &&
      (p.category === product.category || p.brand.id === product.brand.id)
  );

  return (
    <ProductDetailClient
      product={product}
      relatedProductsList={related}
    />
  );
}
