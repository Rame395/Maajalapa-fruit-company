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
    name: "Apples",
    category: "Orchard",
    description: "High-caliber, deeply pigmented pomegranates yielding maximum antioxidant density. Exceptional juice extraction yield profile.",
    image: "/hero1_img.jpeg",
    
  },
  {
    id: "p4",
    name: "Mangos",
    category: "Orchard",
    description: "Hand-sorted crisp mandarin and citrus selections sourced from elite high-altitude terraces across Nepal's premium micro-zones.",
    image: "/mangos.jpg", 
    
  },
  {
    id: "p5",
    name: "Grapes",
    category: "Vineyard",
    description: "Hand-sorted crisp mandarin and citrus selections sourced from elite high-altitude terraces across Nepal's premium micro-zones.",
    image: "/grapes.jpg", 
    
  },
  {
    id: "p6",
    name: "Strawberry",
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


//   const generateWhatsAppLink = (productName: string) => {
//     const baseMessage = `Hello MAA JALAPA FRUIT, I would like to verify instantaneous stock status and place an on-demand order for the ${productName}.`;
//     return `https://wa.me/97798XXXXXXXX?text=${encodeURIComponent(baseMessage)}`;
//   };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf7]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4 mb-16">
            <span className="text-[11px] uppercase tracking-widest text-[#0b4228] font-semibold block">
              Curated Inventory
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-[#0b4228] tracking-tight">
              The Seasonal Catalog
            </h1>
            <p className="text-stone-600 font-light text-sm md:text-base leading-relaxed tracking-wide max-w-xl">
              An uncompromised selection of peak-harvest organic produce, updated weekly based on true agricultural availability. Dispatched via our tech logistics layer across Kathmandu.
            </p>
          </div>

          
          <div className="flex flex-wrap gap-3 items-center border-b border-stone-200 pb-6 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs font-medium uppercase tracking-widest rounded-full transition-all duration-300 border cursor-pointer ${
                  activeFilter === cat
                    ? "bg-[#0b4228] text-white border-[#0b4228] shadow-sm"
                    : "bg-transparent text-stone-500 border-stone-200 hover:border-stone-400 hover:text-stone-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group flex flex-col justify-between bg-[#faf6ee]/40 rounded-[40px] p-6 border border-stone-200/40 transition-all duration-300 hover:bg-[#faf6ee] hover:shadow-sm"
              >
                <div className="space-y-6">
                  
                  <div className="relative aspect-square w-full overflow-hidden rounded-[32px] rounded-tl-[100px] border border-stone-900/5 bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                  </div>

                  
                  <div className="space-y-2 px-2">
                    <div className="flex justify-between items-baseline gap-4">
                      <h3 className="text-xl font-serif text-[#0b4228] tracking-tight group-hover:text-stone-800 transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
                        {product.category}
                      </span>
                    </div>
                    
                    <p className="text-stone-600 font-light text-xs md:text-sm leading-relaxed tracking-wide pt-1">
                      {product.description}
                    </p>
                  </div>
                </div>

                
                {/* <div className="pt-6 px-2">
                  <a
                    href={generateWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block py-3 bg-[#0b4228] text-white hover:bg-[#143216] rounded-full text-xs font-medium tracking-widest uppercase transition-colors duration-300 shadow-2xs"
                  >
                    Check Live Availability 💬
                  </a>
                </div> */}

              </div>
            ))}
          </div>

          
          {filteredProducts.length === 0 && (
            <div className="text-center py-24 bg-[#faf6ee]/20 rounded-[40px] border border-dashed border-stone-200">
              <p className="text-stone-500 font-light text-sm tracking-wide">
                No crops matching this category classification are clearing inspection lines this week.
              </p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}