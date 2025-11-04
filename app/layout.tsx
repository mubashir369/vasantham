import "./globals.css";
import { Playfair_Display } from "next/font/google";
import ClientLayout from "./ClientLayout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Vasantham Wedding Castle | Premium Sarees & Textiles in Palakkad",
  description:
    "Vasantham Wedding Castle — Malabar’s finest textile and fashion destination in Palakkad. Discover premium silk sarees, wedding collections, designer fabrics, and traditional wear crafted with heritage and elegance.",
  keywords: [
    "Vasantham Textiles",
    "Vasantham Wedding Castle",
    "Vasantham Sarees",
    "Vasantham Silks",
    "Vasantham Palakkad",
    "Vasantham Textile Shop",
    "Wedding Sarees Palakkad",
    "Designer Sarees Kerala",
    "Silk Sarees Malabar",
    "Traditional Wear Kerala",
    "Luxury Sarees Palakkad",
    "Bridal Sarees Palakkad",
  ],
  authors: [{ name: "Vasantham Wedding Castle" }],
  openGraph: {
    title: "Vasantham Wedding Castle | Malabar’s Finest Textile & Saree Collection",
    description:
      "Explore the world of elegance and tradition at Vasantham Wedding Castle — Palakkad’s leading textile and saree showroom. Silk sarees, bridal wear, designer fabrics, and more.",
    url: "https://vasantham.co.in.com",
    siteName: "Vasantham Wedding Castle",
    images: [
      {
        url: "/og-image.jpg", // Optional: Add a social preview image (1200x630)
        width: 1200,
        height: 630,
        alt: "Vasantham Wedding Castle - Saree & Textile Showroom in Palakkad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasantham Wedding Castle | Luxury Sarees & Textiles in Palakkad",
    description:
      "Shop luxurious silk sarees, bridal collections, and designer fabrics from Vasantham Wedding Castle — Palakkad’s most trusted name in fashion.",
    images: ["/og-image.jpg"], // Optional
  },
  metadataBase: new URL("https://vasanthamweddingcastle.com"),
  alternates: {
    canonical: "https://vasanthamweddingcastle.com",
  },
  themeColor: "#7d0a0a", // matches your red theme
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
      </body>
    </html>
  );
}
