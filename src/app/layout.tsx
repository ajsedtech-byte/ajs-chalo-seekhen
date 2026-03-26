import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "AJ's Chalo Seekhen | Learning Ecosystem", template: "%s | AJ's Chalo Seekhen" },
  description: "A complete learning ecosystem — LearnX, Santulan AI, GroerX, and more.",
  icons: { icon: "/favicon.svg" },
  metadataBase: new URL("https://ajs-chalo-seekhen.vercel.app"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-slate-900`}>
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
