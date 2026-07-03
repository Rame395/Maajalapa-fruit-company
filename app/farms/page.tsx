import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Farms & Sourcing",
  description: "Discover the specific micro-climates across Nepal where Maa Jalapa Fruit sources its premium organic produce.",
};

const SEASONS = [
  { month: "Jan - Mar", fruit: "Citrus, Strawberries", region: "Eastern Hills, Kathmandu Valley" },
  { month: "Apr - Jun", fruit: "Mangos, Lychee", region: "Terai Belt, Alpine Terraces" },
  { month: "Jul - Sep", fruit: "Apples, Pears", region: "Mustang, Jumla" },
  { month: "Oct - Dec", fruit: "Pomegranates, Grapes", region: "Mid-Western Valleys" },
];

export default function FarmsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf7] dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Header Section */}
          <div className="max-w-3xl space-y-6 mb-20 text-center mx-auto">
            <span className="text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-semibold block">
              Origin & Traceability
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-light text-[#0b4228] dark:text-stone-100 tracking-tight leading-tight">
              Sourced from Nepal's finest micro-climates.
            </h1>
            <p className="text-stone-600 dark:text-stone-400 font-light text-base md:text-lg leading-relaxed tracking-wide max-w-xl mx-auto">
              We travel across the country to partner exclusively with farmers cultivating in pristine, high-altitude, and organic-certified regions.
            </p>
          </div>

          {/* Map / Regions Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] w-full rounded-[40px] overflow-hidden shadow-xl border border-stone-200 dark:border-stone-800">
              {/* Placeholder for an actual map or farm landscape */}
              <Image 
                src="/aboutus.jpg"
                alt="Farms in Nepal"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white font-serif text-3xl">The Himalayan Advantage</h3>
                <p className="text-white/80 font-light text-sm mt-2">Unique altitude and soil composition yields unmatched sweetness.</p>
              </div>
            </div>
            
            <div className="space-y-12 lg:pl-10">
              <div>
                <h3 className="text-2xl font-serif text-[#0b4228] dark:text-stone-200 mb-3">Mustang & Jumla</h3>
                <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">Famous for our crisp, deeply flavored apples and alpine fruits. The cold climate naturally concentrates the sugars without chemical intervention.</p>
              </div>
              <div className="w-full h-px bg-stone-200 dark:bg-stone-800"></div>
              <div>
                <h3 className="text-2xl font-serif text-[#0b4228] dark:text-stone-200 mb-3">The Terai Belt</h3>
                <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">Where we source our legendary Alpine Mangos and Lychee during the peak summer months, harnessing the rich, fertile plains.</p>
              </div>
              <div className="w-full h-px bg-stone-200 dark:bg-stone-800"></div>
              <div>
                <h3 className="text-2xl font-serif text-[#0b4228] dark:text-stone-200 mb-3">Kathmandu Valley Periphery</h3>
                <p className="text-stone-600 dark:text-stone-400 font-light leading-relaxed">Our closest partners, providing strawberries and seasonal greens that reach your door within 4 hours of picking.</p>
              </div>
            </div>
          </div>

          {/* Seasonal Calendar */}
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-[40px] p-10 md:p-16 shadow-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-[#0b4228] dark:text-stone-100 mb-4">Harvest Calendar</h2>
              <p className="text-stone-500 dark:text-stone-400 font-light max-w-lg mx-auto">Because we do not use artificial cold storage or chemical preservers, our inventory strictly follows the natural cycle of the Earth.</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-stone-100 dark:border-stone-800">
                    <th className="py-4 px-6 text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-semibold">Season</th>
                    <th className="py-4 px-6 text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-semibold">Peak Harvests</th>
                    <th className="py-4 px-6 text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-semibold">Primary Region</th>
                  </tr>
                </thead>
                <tbody>
                  {SEASONS.map((season, index) => (
                    <tr key={index} className="border-b border-stone-100 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                      <td className="py-6 px-6 font-serif text-lg text-stone-900 dark:text-stone-200 whitespace-nowrap">{season.month}</td>
                      <td className="py-6 px-6 font-light text-stone-600 dark:text-stone-400">{season.fruit}</td>
                      <td className="py-6 px-6 font-light text-stone-500 dark:text-stone-500 text-sm">{season.region}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
