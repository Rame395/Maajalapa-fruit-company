// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setStatusMessage("Thank you! Your message has been securely sent. Our team will review your inquiry and email you shortly.");
        setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Submission failed.");
      }
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage("Something went wrong processing your request. Please try again or reach out directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-configured instant WhatsApp chat URL for the sidebar card link
  const directWhatsappUrl = `https://wa.me/9779818840763?text=${encodeURIComponent(
    "Hello MAA JALAPA FRUIT, I would like to make an instant inquiry about your premium fruits."
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5]">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Main Layout Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch relative">
            
           
          <div className="space-y-12 flex flex-col justify-start pt-4">
           
            <div className="space-y-6">
              <h1 className="text-[72px] font-serif font-light text-[#0b4228] tracking-tight leading-none">
                Contact
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-sm uppercase tracking-widest text-[#0b4228] font-medium">
                  MAA JALAPA FRUIT
                </h2>
                <div className="max-w-md space-y-4 text-stone-600 font-light text-sm md:text-base leading-relaxed tracking-wide">
                  <p>
                    Premium Organic Delivery. Our Commitment to Freshness and Flavor.
                  </p>
                  <p>
                    Have questions or want to place an order? Select an option below.
                  </p>
                </div>
              </div>
            </div>

          
            <div className="space-y-4 max-w-md w-full pt-4">
             
              <a 
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#0b4228] hover:bg-[#072d1b] text-white text-xs uppercase tracking-widest font-medium rounded-sm transition-all duration-200 shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.447 4.95a10.193 10.193 0 0 0 5.488-1.594l.394-.234 3.656.958-.975-3.563.256-.408a10.174 10.174 0 0 0 1.554-5.421c.002-5.428-4.418-9.846-9.855-9.846-5.432 0-9.85 4.416-9.852 9.848a9.814 9.814 0 0 0 1.503 5.234l.277.465-1.031 3.766 3.86-.1l.375-.222zm13.14-5.263c-.314-.157-1.858-.917-2.143-1.021-.285-.104-.493-.157-.7.157-.207.314-.8.1-1.011.314s-.422.365-.722.208c-.3-.157-1.266-.466-2.411-1.487-.891-.795-1.492-1.777-1.667-2.078-.175-.3-.019-.463.13-.619.135-.14.314-.365.47-.548.157-.183.208-.313.313-.522.105-.208.052-.391-.026-.548-.078-.157-.7-1.687-.958-2.313-.252-.607-.51-.522-.7-.522-.182 0-.39-.017-.599-.017s-.547.078-.835.391c-.288.313-1.1.1-1.1 2.392s1.642 4.512 1.867 4.826c.225.313 3.23 4.931 7.824 6.917 1.093.473 1.946.756 2.611.967 1.097.348 2.096.3 2.886.182.88-.13 1.858-.756 2.117-1.457.26-.7.26-1.3.182-1.426-.078-.13-.285-.208-.6-.365z"/>
                </svg>
                CONTACT ON WHATSAPP
              </a>

             

            </div>

           
            <div className="pt-8 text-xs font-light text-stone-500 tracking-wide">
              A better way to fresh. | Kathmandu, Nepal
            </div>

          </div>

          
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-stone-300/80 transform -translate-x-1/2" />

           
            <div className="w-full lg:pl-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-light text-stone-700 tracking-wide">
                      First name *
                    </label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 bg-transparent border border-stone-300 rounded-sm focus:border-stone-500 focus:outline-none text-stone-800 text-sm font-light transition-colors" 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-light text-stone-700 tracking-wide">
                      Last name
                    </label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-stone-300 rounded-sm focus:border-stone-500 focus:outline-none text-stone-800 text-sm font-light transition-colors" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-light text-stone-700 tracking-wide">
                    Phone
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-stone-400 text-sm flex items-center gap-1 select-none pointer-events-none">
                   
                    </span>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-14 pr-4 py-3 bg-transparent border border-stone-300 rounded-sm focus:border-stone-500 focus:outline-none text-stone-800 text-sm font-light transition-colors" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-light text-stone-700 tracking-wide">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 bg-transparent border border-stone-300 rounded-sm focus:border-stone-500 focus:outline-none text-stone-800 text-sm font-light transition-colors" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-light text-stone-700 tracking-wide">
                    Write a message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-stone-300 rounded-sm focus:border-stone-500 focus:outline-none text-stone-800 text-sm font-light transition-colors resize-none leading-relaxed" 
                  />
                </div>

                {statusMessage && (
                  <div className={`text-xs px-4 py-2.5 rounded border tracking-wide font-light transition-all ${
                    isSuccess 
                      ? "text-emerald-800 bg-emerald-50/50 border-emerald-100" 
                      : "text-rose-800 bg-rose-50/50 border-rose-100"
                  }`}>
                    {statusMessage}
                  </div>
                )}

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="px-10 py-3 bg-[#346e51] hover:bg-[#25503b] text-white text-xs uppercase tracking-widest font-medium rounded-md transition-all duration-200 cursor-pointer disabled:bg-stone-300"
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}