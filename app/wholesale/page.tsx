"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Building2, UtensilsCrossed, Hotel, ChefHat } from "lucide-react";

export default function WholesalePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for premium UX
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Inquiry Submitted", {
        description: "Our B2B relations team will contact you within 2 business hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fcfbf7] dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Col: Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-semibold block">
                  B2B Partnerships
                </span>
                <h1 className="text-5xl md:text-6xl font-serif font-light text-[#0b4228] dark:text-stone-100 tracking-tight leading-tight">
                  Wholesale for<br />Industry Leaders
                </h1>
                <p className="text-stone-600 dark:text-stone-400 font-light text-base md:text-lg leading-relaxed max-w-md">
                  Maa Jalapa Fruit proudly supplies the finest organic produce to Kathmandu's top restaurants, boutique hotels, and catering services. 
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-stone-200/50 dark:border-white/10">
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/50 rounded-full flex items-center justify-center text-emerald-800 dark:text-emerald-500">
                    <UtensilsCrossed size={18} />
                  </div>
                  <h4 className="font-medium text-stone-900 dark:text-stone-200">Fine Dining</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-light">Consistent, unblemished quality for tasting menus.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/50 rounded-full flex items-center justify-center text-emerald-800 dark:text-emerald-500">
                    <Hotel size={18} />
                  </div>
                  <h4 className="font-medium text-stone-900 dark:text-stone-200">Luxury Hotels</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-light">Bulk supply for breakfast buffets and suites.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/50 rounded-full flex items-center justify-center text-emerald-800 dark:text-emerald-500">
                    <Building2 size={18} />
                  </div>
                  <h4 className="font-medium text-stone-900 dark:text-stone-200">Corporate pantries</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-light">Healthy, organic snacks for employee wellness.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/50 rounded-full flex items-center justify-center text-emerald-800 dark:text-emerald-500">
                    <ChefHat size={18} />
                  </div>
                  <h4 className="font-medium text-stone-900 dark:text-stone-200">Catering</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-light">Reliable volume delivery for massive events.</p>
                </div>
              </div>
            </div>

            {/* Right Col: Form */}
            <div className="bg-white dark:bg-stone-900 p-10 md:p-12 rounded-[40px] shadow-xl border border-stone-100 dark:border-stone-800">
              <h3 className="text-2xl font-serif text-[#0b4228] dark:text-stone-200 mb-2">Request a Partnership</h3>
              <p className="text-sm text-stone-500 dark:text-stone-400 font-light mb-8">Fill out the details below to receive our B2B pricing tier list.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">First Name</label>
                    <input required type="text" className="w-full bg-[#fcfbf7] dark:bg-stone-950 border border-stone-200 dark:border-stone-800 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 transition-colors dark:text-stone-200" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">Last Name</label>
                    <input required type="text" className="w-full bg-[#fcfbf7] dark:bg-stone-950 border border-stone-200 dark:border-stone-800 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 transition-colors dark:text-stone-200" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">Business Name</label>
                  <input required type="text" className="w-full bg-[#fcfbf7] dark:bg-stone-950 border border-stone-200 dark:border-stone-800 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 transition-colors dark:text-stone-200" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">Email Address</label>
                  <input required type="email" className="w-full bg-[#fcfbf7] dark:bg-stone-950 border border-stone-200 dark:border-stone-800 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 transition-colors dark:text-stone-200" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">Estimated Weekly Volume (kg)</label>
                  <select required className="w-full bg-[#fcfbf7] dark:bg-stone-950 border border-stone-200 dark:border-stone-800 px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-500 transition-colors dark:text-stone-200">
                    <option value="">Select an option</option>
                    <option value="10-50">10 - 50 kg</option>
                    <option value="50-200">50 - 200 kg</option>
                    <option value="200+">200+ kg</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0b4228] hover:bg-[#072d1a] text-white rounded-lg text-sm font-medium tracking-widest uppercase transition-all duration-300 shadow-md disabled:bg-stone-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Submit Inquiry"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
