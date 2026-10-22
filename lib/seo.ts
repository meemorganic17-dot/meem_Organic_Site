import { Metadata } from 'next';

type DefaultMetadata = {
  title: string;
  description: string;
  openGraph?: Metadata['openGraph'];
};

const DEFAULT_SEO: DefaultMetadata = {
  title: 'Meem Organic World | Premium International Trade Portal',
  description: 'Wholesale importer and exporter of premium fresh fruits, vegetables, dry fruits, nuts, and more from global origins.',
};

export function constructMetadata({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = '/logo.png',
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
