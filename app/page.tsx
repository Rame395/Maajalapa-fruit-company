// app/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#fcfbf7]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen grid lg:grid-cols-2 items-stretch">
        <div className="flex flex-col">
          <div className="pt-44 pb-24 px-8 sm:px-16 xl:px-24 flex items-center justify-center lg:justify-start flex-grow">
            <div className="max-w-xl text-center lg:text-left space-y-8">
              <h1 className="text-5xl md:text-6xl font-serif font-light text-[#0b4228] tracking-tight">
                Freshness and
                <br />
                <span className="block pl-8 md:pl-16 mt-3">Quality</span>
                <span className="block mt-3">Guaranteed</span>
              </h1>

              <p className="text-stone-600 font-light max-w-sm mx-auto lg:mx-0 text-sm tracking-wide leading-relaxed">
                Delivering the freshest organic fruits straight to your home.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-3.5 bg-[#1e4620] hover:bg-[#143216] text-white rounded-full text-sm font-medium tracking-wider transition-all duration-300 shadow-sm"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[380px] lg:h-[420px] w-full overflow-hidden border-t border-stone-200/40 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center will-change-transform"
              style={{ 
                backgroundImage: "url('/hero2_image.jpeg')",
                transform: `scale(${zoomScale})`
              }}
            />
          </div>
        </div>

        <div className="relative min-h-[550px] lg:min-h-full w-full overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ 
              backgroundImage: "url('/hero1_img.jpeg')",
              transform: `scale(${zoomScale})`
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-[#faf9f5] pt-24 pb-0">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 mb-20">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-[#112316] tracking-tight">
            About
          </h2>
          
          <p className="text-xs uppercase tracking-widest text-stone-500 font-medium">
            Our Story
          </p>

          <div className="max-w-2xl mx-auto space-y-6 text-stone-600 font-light text-sm md:text-base leading-relaxed tracking-wide">
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

          <div className="pt-4">
            <Link 
              href="/about"
              className="inline-block px-8 py-3 bg-[#1e4620] hover:bg-[#143216] text-white text-xs font-medium tracking-widest rounded-full transition-colors duration-300 shadow-sm"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="w-full h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden relative">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out hover:scale-105"
            style={{ 
              backgroundImage: "url('/orange.jpeg')", 
              backgroundPosition: "center 45%"
            }}
          />
        </div>
      </section>

     
      <section className="py-24 md:py-14 bg-[#fcfbf7] pt-24  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
        
          <div className="text-center max-w-xl mx-auto mb-24">
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#112316] tracking-tight">
            Why Choose Us
          </h2>
          </div>

        
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            
            <div className="lg:col-span-6 bg-[#faf6ee] rounded-[48px] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden border border-stone-200/40 min-h-[580px]">
              
             
              <div className="relative w-full flex items-center justify-center h-72 mb-8">
                
                <div className="w-1/2 aspect-square rounded-[32px] overflow-hidden border border-stone-900/10 rotate-[-4deg] translate-x-4">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: "url('/orange.avif')" }} 
                  />
                </div>
               
                <div className="w-64 aspect-square rounded-[120px] rounded-br-[40px] overflow-hidden absolute left-1/3 shadow-md border border-stone-900/10 rotate-[6deg]">
                  <div 
                    className="w-full h-full bg-cover bg-center" 
                    style={{ backgroundImage: "url('/aboutus.jpg')" }} 
                  />
                </div>

                
                <div className="absolute bottom-4 left-12 bg-white/95 backdrop-blur-sm border border-stone-200/80 px-4 py-2.5 rounded-2xl shadow-sm flex items-center gap-3 animate-pulse">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-emerald-800 tracking-wider font-sans uppercase">Pathao</span>
                    <span className="text-[10px] font-bold text-lightgreen-700 font-sans uppercase flex items-center gap-1">
                      <span className="w-1 h-1 bg-green-500 rounded-full inline-block"></span> InDrive
                    </span>
                  </div>
                  <div className="w-4 h-4 bg-emerald-700 text-white rounded-full flex items-center justify-center text-[9px]">✓</div>
                </div>
              </div>

              
              <div className="space-y-4 max-w-lg relative z-10">
                <h3 className="text-3xl font-serif font-light text-[#0b4228] tracking-tight">Variety</h3>
                <p className="text-[#0b4228]/80 font-light text-sm md:text-base leading-relaxed tracking-wide">
                  MAA JALAPA FRUIT guarantees an agile, asset-light direct-to-consumer platform delivering premium organic fruit varieties across Kathmandu. Our curated selection changes weekly to reflect the best available seasonal availability.
                </p>
              </div>
            </div>

        
            <div className="lg:col-span-6 flex flex-col gap-8">
              
             
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch flex-grow">
                
             
                <div className="bg-[#faf6ee] rounded-[48px] rounded-tl-[140px] overflow-hidden relative border border-stone-200/40 min-h-[260px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 hover:scale-105" 
                    style={{ backgroundImage: "url('/hero2_image.jpeg')" }} 
                  />
                
                  <div className="absolute bottom-4 right-4 bg-white/90 border border-[#0b4228]/20 px-3 py-1.5 rounded-full text-[9px] uppercase tracking-widest text-[#0b4228] font-bold backdrop-blur-sm">
                    Certified Organic
                  </div>
                </div>

                
                <div className="bg-[#faf6ee] rounded-[48px] rounded-br-[140px] overflow-hidden relative border border-stone-200/40 min-h-[260px]">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-95 transition-transform duration-1000 hover:scale-105" 
                    style={{ backgroundImage: "url('/mangos.jpg')" }} 
                  />
                </div>
              </div>

              
              <div className="bg-[#faf6ee]/70 rounded-[48px] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start relative border border-stone-200/30">
                
                
                <div className="flex-shrink-0 bg-white border border-stone-200/80 p-4 rounded-3xl shadow-sm flex items-center justify-center gap-3">
                  <span className="text-xl">📞</span>
                  <span className="text-xl text-emerald-600">💬</span>
                </div>

              
                <div className="space-y-3 flex-grow">
                  <h3 className="text-2xl font-serif font-light text-[#0b4228] tracking-tight">Service</h3>
                  <p className="text-[#0b4228]/80 font-light text-sm md:text-base leading-relaxed tracking-wide">
                    If you are ready to place a fresh order, jump straight into a secure live chat session with our dedicated customer care desk. For investors, this institutional portal highlights our highly scalable B2B operations and corporate roadmap.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        
        <div className="absolute top-1/3 left-[-10%] w-[45%] h-[45%] bg-[#faf6ee]/50 rounded-full filter blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-[-5%] w-[35%] h-[35%] bg-[#0b4228]/5 rounded-full filter blur-[90px] pointer-events-none z-0" />
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="container mx-auto px-6 sm:px-12 lg:px-16 max-w-4xl">
          <div className="text-center mb-16 space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-[#0b4228] font-semibold block">
              Operations & FAQ
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-[#112316] tracking-tight">
            Frequently Asked Questions
          </h2>
          </div>

          <div className="divide-y divide-stone-300/60 border-t border-b border-stone-300/60">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-5 transition-all">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left cursor-pointer group focus:outline-none bg-transparent"
                  >
                    <h3 className="text-base font-sans font-medium text-[#0b4228] group-hover:text-stone-600 transition-colors duration-200 pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-xl font-light text-[#0b4228] flex-shrink-0 ml-4 transition-transform duration-300">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out text-stone-600 font-light text-sm leading-relaxed tracking-wide ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-2 max-w-3xl text-stone-600 font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}