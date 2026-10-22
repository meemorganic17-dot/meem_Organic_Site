import { constructMetadata } from '@/lib/seo';
import { prisma } from '@/lib/prisma';
import HomeClient from '@/components/home/HomeClient';

export const metadata = constructMetadata({
  title: 'Meeem Organic World | Bringing Nature To The World',
  description: 'Premium international exporter of organic fresh produce, grains, and spices.',
});

export default async function HomePage() {
  let dbCategories: any[] = [];
  try {
    dbCategories = await prisma.category?.findMany({
      orderBy: { order: 'asc' },
      take: 6,
    });
  } catch (error) {
    console.error("Database not connected yet", error);
  }

  let categories = dbCategories.map(c => ({
    id: c.id,
    slug: c.slug,
    name: c.name,
    description: c.description || undefined,
    image: c.bannerImage || undefined
  }));

  if (categories.length === 0) {
    categories = [
      { id: 'fresh-fruits', slug: 'fresh-fruits', name: 'Fresh Fruits', description: 'Premium organic fruits from certified orchards.', image: '/images/unsplash-1611080626919-7cf5a9dbab5b.webp' },
      { id: 'fresh-vegetables', slug: 'fresh-vegetables', name: 'Fresh Vegetables', description: 'Farm-fresh organic vegetables, handpicked for quality.', image: '/images/unsplash-1542838132-92c53300491e.webp' },
      { id: 'premium-rice', slug: 'premium-rice', name: 'Premium Basmati Rice', description: 'Ar`omatic, long-grain basmati rice from the foothills.', image: '/images/unsplash-1586201375761-83865001e31c.webp' },
      { id: 'pink-salt', slug: 'pink-salt', name: 'Himalayan Pink Salt', description: 'Pure, mineral-rich salt sourced directly from the Himalayas.', image: '/images/pink-salt-real.webp' },
      { id: 'herbs-spices', slug: 'herbs-spices', name: 'Herbs & Spices', description: 'Authentic, aromatic spices exported globally.', image: '/images/unsplash-1596040033229-a9821ebd058d.webp' },
      { id: 'dry-fruits', slug: 'dry-fruits', name: 'Dry Fruits & Nuts', description: 'Nutritious, premium grade dry fruits and nuts.', image: '/images/unsplash-1508061253366-f7da158b6d46.webp' },
    ];
  }

  return <HomeClient categories={categories} />;
}