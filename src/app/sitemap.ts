import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://airmen.in';
  
  const routes = [
    '',
    '/about-us',
    '/products',
    '/service',
    '/industries',
    '/customer',
    '/contact',
    '/blog',
    '/a-rental-compressor',
    '/kaeser',
    '/aim',
    '/ep-forklifts',
    '/airpipe',

    '/greaves',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
