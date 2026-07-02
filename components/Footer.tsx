// components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf6ee] border-t border-stone-200/60 pt-16 pb-8 text-[#0b4228]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-12">
          
          {/* Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-white p-1.5 border border-stone-200">
                <Image 
                  src="/logo.png" 
                  alt="MAA JALAPA FRUIT" 
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-lg font-serif font-medium text-stone-800">
                MAA JALAPA FRUIT
              </span>
            </div>
            
            <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
              Delivering fresh, organic fruits across Kathmandu Valley with convenient on-demand service.
            </p>

            {/* Contact Information */}
            <div className="space-y-2 pt-2 text-sm text-stone-600">
              <p className="flex items-center gap-2">
                <span>📍</span> Budhanilkantha, Kathmandu, Nepal
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> +977 1-XXXXXXX
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-[#0b4228] font-semibold">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-stone-600">
                <li>
                  <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-stone-900 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-stone-900 transition-colors">Products</Link>
                </li>
                <li>
                  <Link href="/farms" className="hover:text-stone-900 transition-colors">Our Farms</Link>
                </li>
                <li>
                  <Link href="/wholesale" className="hover:text-stone-900 transition-colors">Wholesale</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-stone-900 transition-colors">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Delivery Partners */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-[#0b4228] font-semibold">
                Delivery Partners
              </h4>
              <ul className="space-y-2.5 text-sm text-stone-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                  Pathao
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  InDrive
                </li>
                <li className="text-xs text-stone-500 pt-1">
                  Serving Kathmandu Valley
                </li>
              </ul>
            </div>

            {/* Order Now */}
            <div className="space-y-4 col-span-2 md:col-span-1">
              <h4 className="text-xs uppercase tracking-wider text-[#0b4228] font-semibold">
                Order Now
              </h4>
              <div className="pt-1">
                <a 
                  href="https://wa.me/97798XXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <span>WhatsApp</span>
                  <span>💬</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200/60 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
            <p>© {currentYear} MAA JALAPA FRUIT. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-stone-700 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-stone-700 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}