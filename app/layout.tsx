import "./globals.css";
import { Playfair_Display } from "next/font/google";
import ClientLayout from "./ClientLayout";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Vasantham Textiles",
  description: "Luxury textiles crafted with heritage and elegance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} pt-20`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
