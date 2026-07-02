// app/products/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PRODUCT_DATA = [
  {
    id: "p1",
    name: "Premium Dragon Fruit",
    category: "Exotics",
    description: "Deep pitaya varieties sourced directly from nutrient-rich organic micro-climates. Hand-picked at optimal brix sweetness levels.",
    image: "/aboutus.jpg",
  },
  {
    id: "p2",
    name: "Sun-Ripened Seedless Grapes",
    category: "Vineyard",
    description: "Crisp, thin-skinned organic emerald grapes packed immediately post-harvest to capture maximum cellular hydration and crisp snap.",
    image: "/hero2_image.jpeg",
  },
  {
    id: "p3",
    name: "Royal Pomegranates",
    category: "Orchard",
    description: "High-caliber, deeply pigmented pomegranates yielding maximum antioxidant density. Exceptional juice extraction yield profile.",
    image: "/hero1_img.jpeg",
  },
  {
    id: "p4",
    name: "Alpine Mangos",
    category: "Orchard",
    description: "Hand-sorted crisp mandarin and citrus selections sourced from elite high-altitude terraces across Nepal's premium micro-zones.",
    image: "/mangos.jpg", 
  },
  {
    id: "p5",
    name: "Crimson Grapes",
    category: "Vineyard",
    description: "Hand-sorted crisp mandarin and citrus selections sourced from elite high-altitude terraces across Nepal's premium micro-zones.",
    image: "/grapes.jpg", 
  },
  {
    id: "p6",
    name: "Wild Strawberries",
    category: "Vineyard",
    description: "Hand-sorted crisp mandarin and citrus selections sourced from elite high-altitude terraces across Nepal's premium micro-zones.",
    image: "/stwaberry.avif", 
  }
];

const CATEGORIES = ["All Collections", "Exotics", "Orchard", "Vineyard"];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("All Collections");

  // Dynamic Client Filter Processing
  const filteredProducts = activeFilter === "All Collections"
    ? PRODUCT_DATA
    : PRODUCT_DATA.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf7]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-6 mb-20">
            <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">
              Curated Inventory
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-[#0b4228] tracking-tight leading-tight">
              The Seasonal Catalog
            </h1>
            <p className="text-stone-600 font-light text-base md:text-lg leading-relaxed tracking-wide max-w-xl">
              An uncompromised selection of peak-harvest organic produce, updated weekly based on true agricultural availability. Dispatched via our tech logistics layer across Kathmandu.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center border-b border-stone-200 pb-8 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 text-xs font-medium uppercase tracking-widest rounded-full transition-all duration-300 border focus:outline-none ${
                  activeFilter === cat
                    ? "bg-[#0b4228] text-white border-[#0b4228] shadow-md"
                    : "bg-transparent text-stone-500 border-stone-300 hover:border-stone-500 hover:text-stone-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {filteredProducts.map((product, index) => (
              <article 
                key={product.id}
                className="group flex flex-col h-full bg-transparent"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-stone-100 mb-6 shadow-sm group-hover:shadow-lg transition-shadow duration-500 border border-stone-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority={index < 6}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 will-change-transform transform-gpu"
                  />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200/50">
                    <span className="text-[9px] uppercase tracking-widest text-[#0b4228] font-bold">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow px-2">
                  <h3 className="text-2xl font-serif text-[#0b4228] tracking-tight group-hover:text-emerald-800 transition-colors mb-3">
                    {product.name}
                  </h3>
                  
                  <p className="text-stone-600 font-light text-sm leading-relaxed tracking-wide mb-6 flex-grow">
                    {product.description}
                  </p>

                  <div className="pt-4 border-t border-stone-200/80">
                    <a
                      href={`https://wa.me/9779818840763?text=${encodeURIComponent(`Hello MAA JALAPA FRUIT, I'm interested in ordering the ${product.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0b4228] hover:text-emerald-700 transition-colors group/link"
                    >
                      Inquire Availability
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover/link:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-32 bg-[#faf6ee]/50 rounded-[40px] border border-dashed border-stone-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-stone-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3 className="text-xl font-serif text-[#0b4228] mb-2">No matching harvests</h3>
              <p className="text-stone-500 font-light text-sm tracking-wide">
                No crops matching this category are clearing inspection lines this week.
              </p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}