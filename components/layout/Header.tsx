"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, ChevronDown, Leaf, Carrot, 
  ShoppingBag, Wheat, ShoppingBasket, User, LayoutDashboard, LogOut,
  Sparkles
} from "lucide-react";

type MegaMenuItem = {
  name: string;
  href: string;
  description: string;
  icon: React.ElementType;
};

type NavLink = {
  name: string;
  href: string;
  megaMenu?: MegaMenuItem[];
};

export function Header({ isAdmin = false, adminName = 'Admin' }: { isAdmin?: boolean, adminName?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { 
      name: "Products", 
      href: "/products",
      megaMenu: [
        { name: "Fresh Fruits", href: "/products/fresh-fruits", description: "Seasonal orchard-fresh fruits", icon: Leaf },
        { name: "Fresh Vegetables", href: "/products/fresh-vegetables", description: "Farm-fresh certified produce", icon: Carrot },
        { name: "Dry Fruits & Nuts", href: "/products/dry-fruits", description: "Sun-dried organic nuts and fruits", icon: ShoppingBasket },
        { name: "Grains & Staples", href: "/products/grains", description: "Export grade long-grain basmati", icon: Wheat },
        { name: "Poultry Products", href: "/products/poultry", description: "Temperature-monitored poultry", icon: ShoppingBag },
      ]
    },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
  ];

  const headerTransparent = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        headerTransparent
          ? "bg-transparent py-4"
          : "bg-[#FAF8F5]/90 backdrop-blur-xl shadow-[0_8px_30px_rgba(30,46,33,0.06)] py-3 border-b border-[#E6DFD5]/70"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Identity / Logo */}
        <Link href="/" className="flex items-center gap-3 z-50 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E2E21] to-[#2E4733] flex items-center justify-center text-white shadow-md shadow-[#1E2E21]/20 group-hover:scale-105 transition-transform duration-300 border border-[#C26D38]/30">
            <Leaf className="w-5 h-5 text-[#C26D38]" />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight leading-none ${headerTransparent ? "text-white" : "text-[#1E2E21]"}`}>
              MEEM
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-[#C26D38] mt-1">
              Organic Export
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 h-full">
          {navLinks.map((link) => (
            <div 
              key={link.name}
              className="relative group h-full flex items-center"
              onMouseEnter={() => link.megaMenu && setActiveDropdown(link.name)}
              onMouseLeave={() => link.megaMenu && setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-[#C26D38] relative group/link flex items-center gap-1.5 py-4 ${
                  headerTransparent ? "text-white/90" : "text-[#1C1917]"
                }`}
              >
                {link.name}
                {link.megaMenu && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                )}
                <span className="absolute bottom-2.5 left-0 w-0 h-0.5 bg-[#C26D38] transition-all duration-300 group-hover/link:w-full rounded-full"></span>
              </Link>

              {link.megaMenu && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-[calc(100%-4px)] left-1/2 -translate-x-1/2 w-[500px] bg-[#FAF8F5] rounded-2xl shadow-[0_24px_50px_rgba(30,46,33,0.12)] border border-[#E6DFD5] overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#E6DFD5]">
                          <span className="text-xs font-bold text-[#736E68] uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#C26D38]" /> Verified Agro Portfolios
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {link.megaMenu.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-[#E6DFD5] transition-all duration-200"
                              >
                                <div className="mt-0.5 w-8 h-8 rounded-lg bg-[#C26D38]/10 text-[#C26D38] flex items-center justify-center group-hover/item:bg-[#C26D38] group-hover/item:text-white transition-colors duration-200 shrink-0">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-[#1C1917] group-hover/item:text-[#1E2E21] transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-[#736E68] mt-0.5 leading-tight">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                      <div className="bg-[#EDE8E1]/60 px-6 py-3 border-t border-[#E6DFD5] flex justify-between items-center text-xs">
                        <span className="text-[#736E68]">Direct from Certified Orchards</span>
                        <Link 
                          href={link.href} 
                          onClick={() => setActiveDropdown(null)} 
                          className="font-semibold text-[#1E2E21] hover:text-[#C26D38] flex items-center gap-1 transition-colors"
                        >
                          Explore full catalog <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact-us/request-import-quote"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold bg-[#C26D38] text-white hover:bg-[#A8582B] shadow-[0_4px_15px_rgba(194,109,56,0.25)] hover:shadow-[0_8px_25px_rgba(194,109,56,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Request Quote</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {isAdmin && (
            <div className="relative group/admin cursor-pointer ml-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${headerTransparent ? "bg-white/20 text-white hover:bg-white/30" : "bg-[#1E2E21]/10 text-[#1E2E21] hover:bg-[#1E2E21]/20"}`}>
                <User className="w-5 h-5" />
              </div>
              <div className="absolute right-0 top-full pt-4 opacity-0 invisible group-hover/admin:opacity-100 group-hover/admin:visible transition-all duration-300 z-50">
                <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
                  <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                    <p className="text-sm font-semibold text-gray-900">{adminName}</p>
                    <p className="text-xs text-gray-500">Administrator</p>
                  </div>
                  <div className="p-2 flex flex-col gap-1">
                    <Link href="/admin" className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#1E2E21] rounded-lg transition-colors">
                      <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </Link>
                    <Link href="/api/auth/signout" className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <LogOut className="w-4 h-4" /> Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${headerTransparent ? "text-white" : "text-[#1C1917]"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${headerTransparent ? "text-white" : "text-[#1C1917]"}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-[#FAF8F5] shadow-2xl border-t border-[#E6DFD5] lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col py-6 px-6 gap-2 max-h-[75vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-[#E6DFD5]/60 last:border-0 pb-2">
                  {link.megaMenu ? (
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between py-2">
                        <Link 
                          href={link.href} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg font-medium text-[#1C1917] hover:text-[#C26D38] transition-colors"
                        >
                          {link.name}
                        </Link>
                        <button 
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(activeDropdown === link.name ? null : link.name);
                          }}
                          className="p-2 text-[#736E68] hover:text-[#1E2E21]"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                        </button>
                      </div>
                      
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 border-l-2 border-[#C26D38]/40 ml-2 mt-1 mb-3 flex flex-col gap-2.5">
                              {link.megaMenu.map((item) => {
                                const Icon = item.icon;
                                return (
                                  <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 text-base text-[#736E68] hover:text-[#1E2E21] transition-colors py-1 group/mobitem"
                                  >
                                    <div className="w-6 h-6 rounded-md bg-[#C26D38]/10 text-[#C26D38] flex items-center justify-center shrink-0">
                                      <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-medium text-sm text-[#1C1917]">{item.name}</span>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-[#1C1917] hover:text-[#C26D38] transition-colors py-2 block"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact-us/request-import-quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#C26D38] text-white px-6 py-3.5 text-base font-semibold hover:bg-[#A8582B] transition-colors shadow-lg"
              >
                Request Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
