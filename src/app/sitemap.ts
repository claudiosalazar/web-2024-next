import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://claudiosalazar.cl',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://claudiosalazar.cl/trayectoria',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://claudiosalazar.cl/conocimientos',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: 'https://claudiosalazar.cl/portafolio',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    // indexar imagenes
    // {
    //     url: 'https://example.com',
    //     lastModified: '2021-01-01',
    //     changeFrequency: 'weekly',
    //     priority: 0.5,
    //     images: ['https://example.com/image.jpg'],
    // },
  ]
}