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
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
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
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products from the same category or brand
  const related = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.brand.id === product.brand.id)
  );

  return (
    <ProductDetailClient
      product={product}
      relatedProductsList={related}
    />
  );
}
