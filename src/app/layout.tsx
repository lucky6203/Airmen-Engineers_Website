import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWidget from '@/components/common/FloatingWidget';
import CookieConsent from '@/components/common/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://airmen.in'),
  title: {
    default: 'Airmen Engineers — Industrial Air Compressor & Material Handling Solutions',
    template: '%s | Airmen Engineers',
  },
  description:
    'Airmen Engineers is India\'s trusted supplier of industrial air compressors (Kaeser, AIM), forklifts (EP Equipment), compressed air piping (AIRpipe), and power solutions (Greaves). Established 1996.',
  keywords: [
    'air compressor', 'screw compressor', 'Kaeser', 'AIM compressor',
    'EP forklift', 'AIRpipe', 'Greaves generator',
    'industrial compressor Delhi', 'compressor rental', 'compressed air piping',
    'material handling', 'energy audit', 'Airmen Engineers',
  ],
  authors: [{ name: 'Airmen Engineers' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/images/logos/Airmen Engineers AE Logo.png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://airmen.in',
    siteName: 'Airmen Engineers',
    title: 'Airmen Engineers — Industrial Air Compressor & Material Handling Solutions',
    description:
      'India\'s trusted partner for Kaeser screw compressors, EP forklifts, AIRpipe piping, and Greaves power solutions. Since 1996.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airmen Engineers — Industrial Solutions Since 1996',
    description:
      'Air compressors, forklifts, compressed air piping, smart monitoring & power solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// Structured Data — Organization
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Airmen Engineers',
  url: 'https://airmen.in',
  description: 'Industrial air compressor, material handling, compressed air piping, smart monitoring and power solutions provider since 1996.',
  foundingDate: '1996',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. C-53, Road no. 1, Prahalad Vihar, Near Sector-25, Rohini',
    addressLocality: 'Delhi',
    postalCode: '110085',
    addressCountry: 'IN',
  },
  telephone: '+91-9212303791',
  email: 'sales@airmen.in',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://airmen.in" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main id="lqd-site-content">{children}</main>
        <Footer />
        <FloatingWidget />
        <CookieConsent />
      </body>
    </html>
  );
}
