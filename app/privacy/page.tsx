// app/privacy/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const lastUpdated = "May 20, 2026";

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[#faf9f5] text-stone-800 pt-32 pb-24 font-sans selection:bg-[#0b4228]/10 selection:text-[#0b4228]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          
          {/* Header Block */}
          <div className="border-b border-stone-200 pb-10 mb-12">
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-stone-900 mb-4">
              Privacy Paradigm
            </h1>
            <p className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              Last Institutional Review: {lastUpdated}
            </p>
          </div>

          {/* Document Content Hierarchy */}
          <div className="space-y-12 text-sm leading-relaxed text-stone-600 font-light tracking-wide">
            
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                1. Alignment of Principles
              </h2>
              <p>
                At <strong>MAA JALAPA FRUIT</strong>, we operate an agile, tech-integrated direct-to-consumer allocation platform. This Privacy Policy outlines how your personal markers, location parameters, and communication records are compiled, secured, and safely processed when interacting with our digital interface or booking fulfillment services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                2. Data Procurement Fields
              </h2>
              <p>
                To execute precise on-demand organic distributions across the Kathmandu Valley grid, we securely process the following user data models:
              </p>
              <ul className="list-disc pl-5 space-y-2 max-w-2xl">
                <li>
                  <strong className="text-stone-800 font-normal">Identity Information:</strong> Full legal or transactional name, active telecommunication channels, and electronic correspondence vectors (such as WhatsApp routing handles).
                </li>
                <li>
                  <strong className="text-stone-800 font-normal">Geographic Nodes:</strong> Exact physical delivery coordinates, residence properties, or municipal ward locations required for localized fleet allocation.
                </li>
                <li>
                  <strong className="text-stone-800 font-normal">Technical Traces:</strong> Analytical markers, including device metadata, caching profiles, and interaction timestamps processed during network browsing.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                3. Third-Party Logistics & Fleet Integration
              </h2>
              <p>
                As part of our commitment to maintaining a flexible, asset-light distribution loop, we do not operate internal distribution vehicles. Fulfillment execution requires sharing relevant delivery details with trusted external logistics partners:
              </p>
              <blockquote className="border-l-2 border-[#0b4228] pl-4 italic text-stone-500 bg-stone-100/50 py-3 pr-4 rounded-r-xl">
                "Your physical location mapping, package details, and contact markers are shared dynamically with local fulfillment networks—specifically <strong>Pathao</strong> and <strong>InDrive</strong> delivery systems—solely to handle immediate transport and route navigation."
              </blockquote>
              <p>
                These independent logistical nodes are contractually bounded from utilizing, retaining, or distributing your coordinate markers for any auxiliary tracking external to your requested drop-off loop.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                4. Data Protection & Structural Safeguards
              </h2>
              <p>
                Your structured personal markers are hosted behind encrypted environment arrays. We never rent, trade, or monetize consumer profiles to data brokers. Access to database tables containing customer information is strictly limited to verified system engineers managing direct operational workflows.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="text-xl font-serif text-stone-900 font-medium">
                5. System Storage and Purge Rights
              </h2>
              <p>
                You retain complete governance over your digital footprint. At any stage, you have the right to request a complete extraction or immediate deletion of your operational history from our databases. 
              </p>
              <p>
                For direct database corrections or profile modification inquiries, please submit an official request to our administrative portal at{" "}
                <Link href="/contact" className="text-[#0b4228] underline underline-offset-4 hover:text-stone-900 transition-colors font-medium">
                  Contact Inquiries
                </Link>.
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