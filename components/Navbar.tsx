"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#faf9f5]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-md shadow-sm border-b border-stone-200/50 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-16 max-w-[1920px] mx-auto">
          
          <Link 
            href="/" 
            className="flex items-center gap-3 z-50 group"
            onClick={closeMenu}
          >
            <div className="relative h-11 w-11 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="MAA JALAPA FRUIT"
                width={44}
                height={44}
                className="h-full w-full object-contain dark:invert"
              />
            </div>
            <span className="text-lg md:text-xl font-medium tracking-wide text-stone-800 dark:text-stone-100">
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-sm tracking-wide text-stone-700 dark:text-stone-300">
            <Link href="/" className="hover:text-stone-900 dark:hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-stone-900 dark:hover:text-white transition-colors">About</Link>
            <Link href="/products" className="hover:text-stone-900 dark:hover:text-white transition-colors">Products</Link>
            <Link href="/farms" className="hover:text-stone-900 dark:hover:text-white transition-colors">Our Farms</Link>
            <Link href="/wholesale" className="hover:text-stone-900 dark:hover:text-white transition-colors">Wholesale</Link>
            <Link href="/contact" className="hover:text-stone-900 dark:hover:text-white transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4 z-50">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {resolvedTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex flex-col justify-center items-center focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-stone-800 dark:bg-stone-200 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-stone-800 dark:bg-stone-200 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-stone-800 dark:bg-stone-200 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden bg-[#faf9f5] dark:bg-[#0a0a0a] transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-serif text-stone-800 dark:text-stone-200">
          <Link href="/" className="hover:text-stone-600 dark:hover:text-white transition-colors" onClick={closeMenu}>Home</Link>
          <Link href="/about" className="hover:text-stone-600 dark:hover:text-white transition-colors" onClick={closeMenu}>About</Link>
          <Link href="/products" className="hover:text-stone-600 dark:hover:text-white transition-colors" onClick={closeMenu}>Products</Link>
          <Link href="/farms" className="hover:text-stone-600 dark:hover:text-white transition-colors" onClick={closeMenu}>Our Farms</Link>
          <Link href="/wholesale" className="hover:text-stone-600 dark:hover:text-white transition-colors" onClick={closeMenu}>Wholesale</Link>
          <Link href="/contact" className="hover:text-stone-600 dark:hover:text-white transition-colors" onClick={closeMenu}>Contact</Link>
        </nav>
      </div>
    </>
  );
}