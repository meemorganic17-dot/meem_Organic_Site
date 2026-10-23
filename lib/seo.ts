import { Metadata } from 'next';

type DefaultMetadata = {
  title: string;
  description: string;
  openGraph?: Metadata['openGraph'];
};

const DEFAULT_SEO: DefaultMetadata = {
  title: 'Meeem Organic World | Bringing Nature To The World',
  description: 'Premium international exporter of organic fresh produce, grains, and spices, connecting farms directly to global markets.',
};

export function constructMetadata({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = '/images/logo.webp',
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
      creator: '@meemorganicworld',
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
