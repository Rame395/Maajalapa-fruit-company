import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "sonner";
import Providers from "@/components/Providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: true, // Prevents layout shifts during load
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: true,
});

// Expanded Premium Global Metadata
export const metadata: Metadata = {
  title: {
    default: "MAA JALAPA FRUIT | Premium Organic Fruit Delivery Kathmandu",
    template: "%s | MAA JALAPA FRUIT"
  },
  description: "An agile, asset-light direct-to-consumer platform delivering premium organic fruit varieties across Kathmandu with guaranteed freshness and uncompromised quality.",
  keywords: [
    "Maa Jalapa Fruit", 
    "Organic Fruits Kathmandu", 
    "Premium Fruits Nepal", 
    "Fresh Fruit Delivery Kathmandu", 
    "Budhanilkantha fruit store", 
    "On-demand organic produce"
  ],
  alternates: {
    canonical: "https://maajalapafruit.com", 
  },
  openGraph: {
    title: "MAA JALAPA FRUIT | Curated Organic Varieties",
    description: "Carefully selecting and delivering the finest premium organic fruits straight to your doorstep across Kathmandu.",
    url: "https://maajalapafruit.com",
    siteName: "MAA JALAPA FRUIT",
    images: [
      {
        url: "/hero1_img.jpeg", 
        width: 1200,
        height: 630,
        alt: "MAA JALAPA FRUIT Premium Branding Layout",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // Professional Local Business Schema Definition Object
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MAA JALAPA FRUIT",
    "image": [
      "https://maajalapafruit.com/hero1_img.jpeg",
      "https://maajalapafruit.com/hero2_image.jpeg",
      "https://maajalapafruit.com/aboutus.jpg"
    ],
    "@id": "https://maajalapafruit.com/#corporate-identity",
    "url": "https://maajalapafruit.com",
    "telephone": "+977-9848795482", 
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Budhanilkantha",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati",
      "postalCode": "44600",
      "addressCountry": "NP"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.7770, 
      "longitude": 85.3582
    },
    "description": "An agile, tech-integrated distribution platform providing certified organic produce on-demand directly via localized rapid network assets.",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Kathmandu Valley"
      }
    ]
  };

return (
    <html lang="en" className="selection:bg-[#0b4228]/10 selection:text-[#0b4228] dark:selection:bg-emerald-900/30 dark:selection:text-emerald-400" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/hero1_img.jpeg" as="image" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body 
        className={`${playfair.variable} ${jakarta.variable} font-sans antialiased min-h-screen bg-[#faf9f5] dark:bg-[#0a0a0a] text-stone-800 dark:text-stone-100 transition-colors duration-300 subpixel-antialiased`}
        style={{ scrollBehavior: 'auto' }}
        suppressHydrationWarning
      >
        <Providers>
          <Toaster position="bottom-right" />
          {children}
        </Providers>
      </body>
    </html>
  );
}