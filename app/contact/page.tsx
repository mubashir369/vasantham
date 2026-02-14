
import { Playfair_Display } from "next/font/google";

import Script from "next/script";
import ClientLayout from "../ClientLayout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Vasantham Wedding Castle | Premium Sarees & Textiles in Palakkad",
  description:
    "Vasantham Wedding Castle — Malabar’s finest textile and fashion destination in Palakkad. Explore silk sarees, bridal wear, designer fabrics, and ethnic collections crafted with elegance and tradition.",
  keywords: [
    "Vasantham Textiles",
    "Vasantham Wedding Castle",
    "Vasantham Sarees",
    "Vasantham Silks",
    "Vasantham Palakkad",
    "Wedding Sarees Palakkad",
    "Designer Sarees Kerala",
    "Luxury Sarees Palakkad",
    "Bridal Sarees Palakkad",
    "Kerala Textiles",
    "Vasantham Wedding Castle Palakkad",
  ],
  authors: [{ name: "Vasantham Wedding Castle" }],
  openGraph: {
    title: "Vasantham Wedding Castle | Malabar’s Finest Textile & Saree Collection",
    description:
      "Discover timeless elegance at Vasantham Wedding Castle — Palakkad’s most trusted name for sarees, wedding wear, and designer fabrics.",
    url: "https://vasantham.co.in",
    siteName: "Vasantham Wedding Castle",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Vasantham Wedding Castle - Palakkad Textile & Saree Showroom",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasantham Wedding Castle | Premium Sarees & Textiles in Palakkad",
    description:
      "Luxury silk sarees, bridal collections, and designer fabrics — experience the elegance of Vasantham Wedding Castle in Palakkad.",
    images: ["/og-image.jpg"],
  },
  metadataBase: new URL("https://vasantham.co.in"),
  alternates: {
    canonical: "https://vasantham.co.in",
  },
  themeColor: "#7d0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} pt-20 bg-black text-white`}>
        <ClientLayout>{children}</ClientLayout>

        {/* 🧭 JSON-LD Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Vasantham Wedding Castle",
              image: "https://vasanthamweddingcastle.com/og-image.jpg",
              "@id": "https://vasanthamweddingcastle.com",
              url: "https://vasanthamweddingcastle.com",
              telephone: "+91 8606360066",
              email: "vasanthammkd@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Opposite KTM High School, Kozhikode Road",
                addressLocality: "Palakkad",
                addressRegion: "Kerala",
                postalCode: "678001",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/vasanthamweddingcastle/",
                "https://www.instagram.com/vasanthamweddingcastle/",
                "https://wa.me/918606360066",
              ],
              openingHours: "Mo-Su 09:00-21:00",
              priceRange: "₹₹",
              brand: {
                "@type": "Brand",
                name: "Vasantham Textiles",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
