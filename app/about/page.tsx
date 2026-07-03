// app/about/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn the story behind Maa Jalapa Fruit. We partner directly with organic farmers to deliver fresh, premium produce across Kathmandu.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf7] dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-32 md:pt-40">
        
        {/* Editorial Hero Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-24 md:mb-32 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-bold block">
              Our Philosophy
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-light text-[#0b4228] dark:text-stone-100 tracking-tight leading-tight">
              Redefining the standard <br className="hidden md:block"/> for fresh produce.
            </h1>
            <p className="text-stone-600 dark:text-stone-400 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto pt-4">
              We bypassed the traditional supply chain to bring the Kathmandu Valley the absolute freshest, peak-harvest organic fruits directly from the source.
            </p>
          </div>
        </section>

        {/* Immersive Image Spread */}
        <section className="w-full px-4 md:px-8 mb-24 md:mb-32">
          <div className="max-w-[1400px] mx-auto relative h-[50vh] md:h-[70vh] rounded-[40px] overflow-hidden shadow-2xl">
            <Image 
              src="/apples1.jpg"
              alt="Maa Jalapa Fruit Harvest"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {/* Elegant overlay badge */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-white/95 dark:bg-black/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-800">
              <p className="text-xs uppercase tracking-widest text-[#0b4228] dark:text-emerald-500 font-bold">Since Inception</p>
              <p className="text-2xl font-serif text-stone-900 dark:text-stone-100 mt-1">100% Organic Promise</p>
            </div>
          </div>
        </section>

       
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-light text-[#0b4228] dark:text-stone-100 tracking-tight">
                The Origin
              </h2>
              <div className="space-y-6 text-stone-600 dark:text-stone-400 font-light text-lg leading-relaxed">
                <p>
                  Traditional supply chains are inherently flawed. By the time premium fruit travels from the farm, through wholesalers, into warehouses, and finally to your local market, it has already lost a significant percentage of its nutritional value, crispness, and flavor profile.
                </p>
                <p>
                  We recognized that consumers were paying a premium for compromised quality. Maa Jalapa Fruit was established to completely eliminate this inefficiency. 
                </p>
                <p>
                  By partnering directly with trusted, certified organic farmers and leveraging hyper-local logistics networks like Pathao and InDrive, we've built a system that delivers fruit to you just hours after it was picked. No middlemen. No cold-storage deterioration. Just pure, unadulterated freshness.
                </p>
              </div>
            </div>

            {/* Impact Stats (Bento Style) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#faf6ee] dark:bg-stone-900/50 p-8 rounded-3xl border border-stone-200/50 dark:border-stone-800 flex flex-col justify-center">
                <span className="text-4xl font-serif text-[#0b4228] dark:text-stone-200 mb-2">0</span>
                <span className="text-sm font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-500">Chemicals</span>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 font-light">Strictly organic farming protocols.</p>
              </div>
              <div className="bg-[#0b4228] dark:bg-emerald-950 text-white p-8 rounded-3xl shadow-lg flex flex-col justify-center border border-transparent dark:border-emerald-900">
                <span className="text-4xl font-serif mb-2">24h</span>
                <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Farm to Door</span>
                <p className="text-xs text-white/70 mt-2 font-light">Rapid urban dispatch system.</p>
              </div>
              <div className="bg-white dark:bg-stone-900 p-8 rounded-3xl border border-stone-200/80 dark:border-stone-800 sm:col-span-2 flex flex-col justify-center shadow-sm">
                <span className="text-4xl font-serif text-[#0b4228] dark:text-stone-200 mb-2">Local</span>
                <span className="text-sm font-semibold uppercase tracking-widest text-emerald-800 dark:text-emerald-500">Community Driven</span>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-2 font-light leading-relaxed">
                  Every purchase directly supports sustainable micro-farming communities across Nepal.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Immersive CTA */}
        <section className="border-t border-stone-200/50 dark:border-white/10 bg-stone-50 dark:bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#0b4228] dark:text-stone-100 tracking-tight mb-6">
              Experience the harvest.
            </h2>
            <p className="text-stone-600 dark:text-stone-400 font-light text-lg max-w-xl mx-auto mb-10">
              Browse our live catalog of seasonal varieties currently clearing our quality inspection lines.
            </p>
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#0b4228] dark:bg-emerald-800 hover:bg-[#072d1a] dark:hover:bg-emerald-700 text-white rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Catalog
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}