import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gourmemo - Find your favorite restaurant",
  description: "A beautifully designed restaurant discovery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-stone-50 text-stone-900 antialiased`}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
