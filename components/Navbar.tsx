"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#faf9f5]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-16 max-w-[1920px] mx-auto">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 z-50 group"
            onClick={closeMenu}
          >
            <div className="relative h-11 w-11 overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="MAA JALAPA FRUIT"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-lg md:text-xl font-medium tracking-wide text-stone-800">
              {/* MAA JALAPA FRUIT */}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 text-sm tracking-wide text-stone-700">
            <Link href="/" className="hover:text-stone-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-stone-900 transition-colors">
              About
            </Link>
            <Link href="/products" className="hover:text-stone-900 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="hover:text-stone-900 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex flex-col justify-center items-center z-50 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-stone-800 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-stone-800 transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-stone-800 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden bg-[#faf9f5] transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-serif text-stone-800">
          <Link 
            href="/" 
            className="hover:text-stone-600 transition-colors" 
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="hover:text-stone-600 transition-colors" 
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            href="/products" 
            className="hover:text-stone-600 transition-colors" 
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-stone-600 transition-colors" 
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}