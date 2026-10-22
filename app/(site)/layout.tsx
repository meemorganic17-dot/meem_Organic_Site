import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header isAdmin={false} adminName="Admin" />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
