"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setScrollY(window.scrollY);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const zoomScale = 1 + scrollY * 0.0004;

  const faqs = [
    {
      question: "How can I place an order for immediate delivery?",
      answer: "To maintain maximum transaction speed and a personalized experience, we route all retail deliveries directly through our customer care line and instant WhatsApp portal. Once verified, orders are dynamically dispatched via our local on-demand fulfillment partners, Pathao and InDrive, ensuring your fresh produce reaches your doorstep within hours across the Kathmandu Valley.",
    },
    {
      question: "How do you guarantee the quality and freshness of your fruits?",
      answer: "Our commitment to quality is uncompromised. We source our selection directly from premium, certified organic micro-climates, bypassing long warehouse storage cycles entirely. Each piece of fruit is meticulously hand-inspected for peak flavor, optimal ripeness, and zero chemical residue immediately before it is package-sealed for your delivery.",
    },
    {
      question: "Why does the company leverage third-party networks like Pathao and InDrive?",
      answer: "MAA JALAPA FRUIT operates on a highly scalable, asset-light distribution framework. By utilizing the mature, hyper-localized logistics infrastructure of Pathao and InDrive, we completely eliminate traditional corporate fleet overhead liabilities. This agile strategy keeps our operating costs low and allows us to focus capital entirely on sourcing premium-tier organic inventory.",
    },
    {
      question: "Is this website integrated with a direct e-commerce payment gateway?",
      answer: "This corporate platform serves strictly as our primary interface for brand identity, product catalogs, institutional B2B wholesale tracking, and investor relations. By keeping retail purchasing within real-time communication channels like WhatsApp, we sustain a premium direct-to-consumer relationship while keeping digital conversion rates significantly higher.",
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#fcfbf7] dark:bg-[#0a0a0a] transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen grid lg:grid-cols-2 items-stretch">
        <div className="flex flex-col">
          <div className="pt-44 pb-24 px-8 sm:px-16 xl:px-24 flex items-center justify-center lg:justify-start flex-grow z-10">
            <div className="max-w-xl text-center lg:text-left space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[#0b4228] dark:text-stone-100 tracking-tight leading-tight">
                Freshness and
                <br />
                <span className="block lg:pl-16 mt-2">Quality</span>
                <span className="block mt-2">Guaranteed</span>
              </h1>

              <p className="text-stone-600 dark:text-stone-400 font-light max-w-sm mx-auto lg:mx-0 text-base tracking-wide leading-relaxed">
                Delivering the freshest organic fruits straight to your home across Kathmandu Valley.
              </p>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#0b4228] dark:bg-emerald-800 hover:bg-[#072d1a] dark:hover:bg-emerald-700 text-white rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contact us
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[280px] sm:h-[340px] lg:h-[420px] w-full overflow-hidden border-t border-stone-200/40 dark:border-white/10 relative">
            <Image 
              src="/hero2_image.jpeg"
              alt="Fresh fruits assortment"
              fill
              priority
              className="object-cover will-change-transform transform-gpu"
              style={{ transform: `scale(${zoomScale})` }}
            />
            <div className="absolute inset-0 bg-black/40 hidden dark:block pointer-events-none transition-opacity duration-300" />
          </div>
        </div>

        <div className="relative min-h-[350px] md:min-h-[450px] lg:min-h-full w-full overflow-hidden border-t lg:border-t-0 lg:border-l border-stone-200/40 dark:border-white/10">
          <Image 
            src="/hero1_img.jpeg"
            alt="Organic fruit harvest"
            fill
            priority
            className="object-cover will-change-transform transform-gpu"
            style={{ transform: `scale(${zoomScale})` }}
          />
          <div className="absolute inset-0 bg-black/40 hidden dark:block pointer-events-none transition-opacity duration-300" />
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        id="about" 
        className="bg-[#faf9f5] dark:bg-[#0a0a0a] py-32 border-t border-stone-200/50 dark:border-white/10"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 mb-24">
          <p className="text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-semibold">
            Our Story
          </p>
          <h2 className="text-5xl md:text-6xl font-serif font-light text-[#112316] dark:text-stone-100 tracking-tight">
            About Maa Jalapa
          </h2>

          <div className="max-w-2xl mx-auto space-y-6 text-stone-600 dark:text-stone-400 font-light text-base md:text-lg leading-relaxed tracking-wide pt-4">
            <p>
              MAA JALAPA FRUIT is dedicated to providing a wide selection of
              top-quality organic fruits, carefully curated to ensure
              freshness and flavor.
            </p>
            <p>
              We prioritize customer satisfaction by offering premium
              products and exceptional service. Our commitment to organic
              farming practices reflects in every bite, promoting a
              healthier lifestyle for our customers.
            </p>
          </div>

          <div className="pt-8">
            <Link 
              href="/about"
              className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border border-[#0b4228] dark:border-emerald-500 text-[#0b4228] dark:text-emerald-500 hover:bg-[#0b4228] dark:hover:bg-emerald-500 hover:text-white dark:hover:text-stone-900 text-xs font-medium tracking-widest uppercase rounded-full transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="w-full h-[280px] sm:h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden relative">
          <Image 
            src="/orange.jpeg"
            alt="Fresh oranges"
            fill
            className="object-cover will-change-transform transform-gpu"
            style={{ transform: `scale(${zoomScale})` }}
          />
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-32 bg-[#fcfbf7] dark:bg-[#0a0a0a] relative overflow-hidden border-t border-stone-200/50 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-semibold block">
              Our Excellence
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#112316] dark:text-stone-100 tracking-tight">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Bento Card 1: Variety & Delivery */}
            <div className="bg-[#faf6ee] dark:bg-stone-900/50 rounded-[40px] p-10 md:p-14 flex flex-col justify-between relative overflow-hidden border border-stone-200/50 dark:border-stone-800 shadow-sm transition-shadow hover:shadow-md">
              <div className="relative w-full h-80 mb-10">
                <div className="absolute top-0 left-0 w-3/5 aspect-square rounded-[32px] overflow-hidden border-[6px] border-[#faf6ee] dark:border-stone-900 shadow-lg rotate-[-3deg] z-10">
                  <Image src="/orange.avif" alt="Fresh orange" fill className="object-cover" />
                </div>
                <div className="absolute top-12 right-0 w-3/5 aspect-square rounded-[32px] overflow-hidden border-[6px] border-[#faf6ee] dark:border-stone-900 shadow-lg rotate-[4deg] z-0">
                  <Image src="/aboutus.jpg" alt="Dragon fruit" fill className="object-cover" />
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-black/90 backdrop-blur-md border border-stone-200 dark:border-stone-700 px-5 py-4 rounded-2xl shadow-xl flex items-center gap-4 z-20">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold text-stone-800 dark:text-stone-300 tracking-wider uppercase flex items-center gap-2">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full"></span> Pathao
                    </span>
                    <span className="text-[10px] font-bold text-stone-800 dark:text-stone-300 tracking-wider uppercase flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span> InDrive
                    </span>
                  </div>
                  <div className="w-8 h-8 bg-emerald-700 text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4 max-w-lg relative z-10 mt-auto">
                <h3 className="text-3xl font-serif font-light text-[#0b4228] dark:text-emerald-400 tracking-tight">Agile Variety</h3>
                <p className="text-[#0b4228]/80 dark:text-stone-400 font-light text-base leading-relaxed tracking-wide">
                  MAA JALAPA FRUIT guarantees an agile, asset-light direct-to-consumer platform delivering premium organic fruit varieties across Kathmandu. Our curated selection changes weekly.
                </p>
              </div>
            </div>

            {/* Right Column Bento */}
            <div className="flex flex-col gap-8">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch flex-grow">
                <div className="bg-[#faf6ee] dark:bg-stone-900/50 rounded-[40px] overflow-hidden relative border border-stone-200/50 dark:border-stone-800 shadow-sm min-h-[280px]">
                  <Image 
                    src="/hero2_image.jpeg" 
                    alt="Organic grapes" 
                    fill 
                    className="object-cover transition-transform duration-1000 hover:scale-105 will-change-transform" 
                  />
                  <div className="absolute bottom-5 left-5 bg-white/95 dark:bg-black/90 border border-stone-200 dark:border-stone-700 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest text-[#0b4228] dark:text-emerald-400 font-bold backdrop-blur-md shadow-sm">
                    Certified Organic
                  </div>
                </div>

                <div className="bg-[#faf6ee] dark:bg-stone-900/50 rounded-[40px] overflow-hidden relative border border-stone-200/50 dark:border-stone-800 shadow-sm min-h-[280px]">
                  <Image 
                    src="/mangos.jpg" 
                    alt="Fresh mangos" 
                    fill 
                    className="object-cover transition-transform duration-1000 hover:scale-105 will-change-transform" 
                  />
                </div>
              </div>

              <div className="bg-[#0b4228] dark:bg-emerald-950 rounded-[40px] p-10 flex flex-col sm:flex-row gap-8 items-start relative shadow-sm justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-[#072d1a] dark:bg-emerald-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex-shrink-0 bg-white/10 p-5 rounded-2xl flex items-center justify-center relative z-10 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>

                <div className="space-y-4 flex-grow text-white relative z-10">
                  <h3 className="text-2xl font-serif font-light tracking-tight">Direct Service</h3>
                  <p className="text-white/80 font-light text-sm leading-relaxed tracking-wide">
                    Ready to order? Connect straight into a secure live chat session with our customer care desk via WhatsApp for instant, personalized service.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 bg-[#0b4228] dark:bg-[#071c11] text-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold block mb-12">
            Trusted by the Best
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#072d1a] dark:bg-[#0a2918] p-8 rounded-[32px] text-left border border-white/10">
              <div className="flex gap-1 mb-4 text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-white/90 font-light leading-relaxed mb-6">
                "The quality of organic citrus we received was unparalleled. Maa Jalapa has become our exclusive sourcing partner for all our boutique cafe locations across Kathmandu."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-serif text-lg">A</div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide">Aarav Sharma</h4>
                  <p className="text-xs text-white/50">Owner, The Himalayan Roast</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#072d1a] dark:bg-[#0a2918] p-8 rounded-[32px] text-left border border-white/10">
              <div className="flex gap-1 mb-4 text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-white/90 font-light leading-relaxed mb-6">
                "I ordered dragon fruit in the morning and it arrived beautifully packaged by the evening. The freshness is exactly as promised. Highly recommended for families."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-serif text-lg">S</div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide">Sneha Thapa</h4>
                  <p className="text-xs text-white/50">Verified Buyer</p>
                </div>
              </div>
            </div>

            <div className="bg-[#072d1a] dark:bg-[#0a2918] p-8 rounded-[32px] text-left border border-white/10">
              <div className="flex gap-1 mb-4 text-emerald-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <p className="text-white/90 font-light leading-relaxed mb-6">
                "As a chef, sourcing authentic organic produce locally is tough. Maa Jalapa changed the game for our seasonal tasting menus. Pure, unadulterated flavor."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-serif text-lg">K</div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide">Kiran Gurung</h4>
                  <p className="text-xs text-white/50">Executive Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 md:py-32 bg-stone-50 dark:bg-[#0a0a0a] border-t border-stone-200/50 dark:border-white/10"
      >
        <div className="container mx-auto px-6 sm:px-12 lg:px-16 max-w-4xl">
          <div className="text-center mb-20 space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-semibold block">
              Operations & FAQ
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#112316] dark:text-stone-100 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-stone-200 dark:divide-white/10 border-t border-b border-stone-200 dark:border-white/10">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-6 transition-all">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left cursor-pointer group focus:outline-none bg-transparent"
                  >
                    <h3 className="text-lg font-sans font-medium text-[#0b4228] dark:text-stone-200 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors duration-200 pr-4">
                      {faq.question}
                    </h3>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${isOpen ? 'border-[#0b4228] dark:border-emerald-500 bg-[#0b4228] dark:bg-emerald-500 text-white dark:text-stone-900' : 'border-stone-300 dark:border-stone-700 text-stone-400 dark:text-stone-500 group-hover:border-[#0b4228] dark:group-hover:border-emerald-500 group-hover:text-[#0b4228] dark:group-hover:text-emerald-500'}`}>
                      <span className="text-xl font-light leading-none">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out text-stone-600 dark:text-stone-400 font-light text-base leading-relaxed tracking-wide ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-2 max-w-3xl text-stone-600 dark:text-stone-400 font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Social Feed Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-white dark:bg-[#0a0a0a] border-t border-stone-200/50 dark:border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="mb-12 space-y-4">
            <span className="text-xs uppercase tracking-widest text-emerald-800 dark:text-emerald-500 font-semibold block">
              Follow the Harvest
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#112316] dark:text-stone-100 tracking-tight">
              @maajalapafruit
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-transparent dark:border-white/5">
              <Image src="/hero1_img.jpeg" alt="Instagram post" fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-transparent dark:border-white/5">
              <Image src="/orange.jpeg" alt="Instagram post" fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-transparent dark:border-white/5">
              <Image src="/aboutus.jpg" alt="Instagram post" fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-transparent dark:border-white/5">
              <Image src="/mangos.jpg" alt="Instagram post" fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}