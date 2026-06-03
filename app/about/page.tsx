// app/about/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf7]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Hero Section */}
          <div className="max-w-4xl space-y-6 mb-24">
            <span className="text-xs uppercase tracking-wider text-[#0b4228] font-semibold block">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-[#0b4228] tracking-tight leading-tight">
              Fresh Fruits, <br />
              Delivered Direct.
            </h1>
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed max-w-2xl pt-4">
              MAA JALAPA FRUIT brings you the freshest organic fruits from local farms across Kathmandu Valley, delivered straight to your doorstep the same day they're picked.
            </p>
          </div>

          {/* Image + Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-32">
            <div className="lg:col-span-7 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-stone-200/50 shadow-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: "url('/aboutus.jpg')" }}
              />
            </div>
            <div className="lg:col-span-5 bg-[#faf6ee] p-8 md:p-12 rounded-3xl border border-stone-200/50 space-y-5">
              <h3 className="text-2xl font-serif text-[#0b4228]">Our Story</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                We started MAA JALAPA FRUIT because we saw a problem: by the time fruits reached consumers through traditional markets, they'd already lost their freshness and flavor.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                So we built a better way. We work directly with trusted organic farmers and deliver their harvest to you within hours—no middlemen, no warehouses, just fresh fruit at its peak.
              </p>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="border-t border-stone-200 pt-20 mb-32">
            <h2 className="text-3xl font-serif text-[#0b4228] mb-12">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              
              {/* Feature 1 */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-serif text-[#0b4228]">100% Organic</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Every fruit we deliver is certified organic and hand-picked from farms we personally inspect. No pesticides, no chemicals—just nature's best.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-serif text-[#0b4228]">Same-Day Delivery</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Order in the morning, enjoy fresh fruit by evening. We partner with Pathao and InDrive to get your order to you fast, anywhere in Kathmandu Valley.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-serif text-[#0b4228]">Personal Service</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Skip the apps and forms. Order directly through WhatsApp and chat with real people who care about getting you the perfect produce.
                </p>
              </div>

            </div>
          </div>

          {/* Our Promise Section */}
          <div className="bg-[#0b4228] text-[#faf9f5] rounded-3xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            <div className="lg:col-span-8 space-y-5 relative z-10">
              <span className="text-xs uppercase font-semibold tracking-wider text-emerald-300">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight max-w-xl leading-tight">
                Farm-fresh quality, every single time.
              </h2>
              <p className="text-[#faf9f5]/80 text-base max-w-xl leading-relaxed">
                We believe everyone deserves access to fresh, healthy, organic fruits without the hassle. That's why we've made ordering simple, delivery fast, and quality guaranteed.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end relative z-10">
              <Link 
                href="/contact"
                className="inline-block px-8 py-4 bg-[#faf9f5] hover:bg-white text-[#0b4228] text-sm font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.03] rounded-full translate-x-10 -translate-y-10 filter blur-3xl pointer-events-none" />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}