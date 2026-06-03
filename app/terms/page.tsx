// app/terms/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  const lastUpdated = "May 20, 2026";

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[#faf9f5] text-stone-800 pt-32 pb-24 font-sans selection:bg-[#0b4228]/10 selection:text-[#0b4228]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Header Block */}
          <div className="border-b border-stone-200 pb-10 mb-12">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-stone-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Document Effective Date: {lastUpdated}
            </p>
          </div>

          {/* Document Content Hierarchy */}
          <div className="space-y-12 text-sm leading-relaxed text-stone-600 font-light tracking-wide">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                1. Acceptance of Operational Terms
              </h2>
              <p>
                By interacting with the <strong>MAA JALAPA FRUIT</strong> digital store interfaces, automated routing configurations, or ordering mechanics, you agree to be bound by these Terms of Service. If you do not align with these systemic parameters, you must cease all platform utilization immediately.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                2. On-Demand Procurement & Product Nature
              </h2>
              <p>
                We specialize in premium, perishable organic fruit distributions. Because agricultural supply lines are dynamic, product stock, specific varieties, and physical characteristics are subject to change based on daily seasonal availability without prior notification. We guarantee optimal harvest freshness at the point of fulfillment dispatch.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                3. Third-Party Fulfillment & Logistical Boundaries
              </h2>
              <p>
                Our operational blueprint relies entirely on a localized, asset-light distribution matrix. MAA JALAPA FRUIT coordinates allocations but utilizes external, independent transportation networks to manage physical transit:
              </p>
              <blockquote className="border-l-2 border-[#0b4228] pl-4 italic text-stone-500 bg-stone-100/50 py-3 pr-4 rounded-r-xl">
                "All spatial dispatches and door-to-door transport are executed using third-party on-demand delivery networks, specifically including <strong>Pathao</strong> and <strong>InDrive</strong>. Logistical variations, traffic delays, or local route obstructions within the Kathmandu Valley are governed by their respective operational parameters."
              </blockquote>
              <p>
                Consequently, while we actively mediate and monitor your order pipeline, we are not directly liable for transport stutters caused independently by these external fleet riders during delivery windows.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                4. User Commitments & Delivery Coordinates
              </h2>
              <p>
                When finalizing a procurement request, you agree to provide completely accurate identity parameters, working communication channels, and exact geometric delivery markers. If a delivery failure occurs because an invalid telephone handle or incorrect physical location node was provided, the customer remains responsible for any secondary transit routing costs incurred by the fulfillment rider.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                5. Cancellation & Quality Adjustments
              </h2>
              <p>
                Due to the fragile nature of fresh organic produce, order cancellations must be initiated immediately before a delivery rider is assigned and dispatched via our logistics interfaces. If you encounter any structural quality discrepancies upon arrival, you must report them directly to our routing team within 2 hours of delivery to qualify for an immediate inventory adjustment or resolution.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                6. Governing Framework
              </h2>
              <p>
                These terms are governed and interpreted in accordance with the regulatory legal frameworks of Nepal. For questions regarding our service conditions, system variables, or to resolve an active invoice discrepancy, please connect with us at our{" "}
                <Link href="/contact" className="text-[#0b4228] underline underline-offset-4 hover:text-stone-900 transition-colors font-medium">
                  Contact Inquiries
                </Link> portal.
              </p>
            </section>

          </div>

          {/* Quick Return Action Row */}
          <div className="border-t border-stone-200 mt-16 pt-8 flex items-center justify-between">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-black transition-colors font-medium group"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span>Return to Platform Home</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}