import { Metadata } from 'next';

type DefaultMetadata = {
  title: string;
  description: string;
  openGraph?: Metadata['openGraph'];
};

const DEFAULT_SEO: DefaultMetadata = {
  title: 'MEEM Organic Export | Global Agricultural Trade & Commodities',
  description: 'International supplier and exporter of certified organic fresh fruits, vegetables, 1121 Kainat basmati rice, Himalayan pink salt, and grains directly from verified growers.',
};

export function constructMetadata({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = '/images/unsplash-1542838132-92c53300491e.webp',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@meemorganic',
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
