import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans, Caveat, Special_Elite, Alex_Brush, Parisienne } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwriting",
});

const typewriter = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-typewriter",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fountain-pen",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-calligraphy",
});

export const metadata: Metadata = {
  title: "MAINA — The Birthday Issue | Special Edition 04 SEP",
  description: "A special romantic editorial magazine issue created for Maina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${jakarta.variable} ${caveat.variable} ${typewriter.variable} ${alexBrush.variable} ${parisienne.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full w-full bg-[#F3E8D8] text-[#211B1D] m-0 p-0 selection:bg-[#6B3045] selection:text-[#F3E8D8]">{children}</body>
    </html>
  );
}


