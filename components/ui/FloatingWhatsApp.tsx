import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/971523901100"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
      aria-label="Direct WhatsApp Trade Desk"
    >
      <div className="hidden sm:flex items-center gap-2 bg-[#111A13]/90 text-white text-xs font-semibold px-3 py-2 rounded-full border border-[#C26D38]/30 shadow-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Trade Desk Online</span>
      </div>
      <div className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.35)] group-hover:scale-110 group-hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-all duration-300">
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </div>
    </Link>
  );
}
