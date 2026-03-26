"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { products } from "@/data/products";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setSc] = useState(false);
  useEffect(() => {
    const h = () => setSc(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.08)]" : "bg-white/60 backdrop-blur-md"}`}>
      <div className="max-w-[1024px] mx-auto px-6 flex items-center justify-between h-12">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#1d1d1f] flex items-center justify-center">
            <span className="text-white font-bold text-[9px]">AJ</span>
          </div>
          <span className="font-semibold text-[14px] text-[#1d1d1f]">Chalo Seekhen</span>
        </Link>
        <div className="hidden lg:flex items-center gap-7">
          {products.map(p => (
            <Link key={p.id} href={p.href} className="text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors font-medium">{p.name}</Link>
          ))}
          <Link href="/about" className="text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors font-medium">About</Link>
          <Link href="/careers" className="text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors font-medium">Careers</Link>
          <Link href="/contact" className="text-[12px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors font-medium">Contact</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-1.5 text-[#1d1d1f]">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-white border-t border-[#d2d2d7] px-6 pb-4">
          {products.map(p => <Link key={p.id} href={p.href} onClick={() => setOpen(false)} className="block py-2 text-[14px] text-[#1d1d1f] font-medium">{p.name}</Link>)}
          <div className="border-t border-[#d2d2d7] mt-2 pt-2">
            <Link href="/about" onClick={() => setOpen(false)} className="block py-2 text-[14px] text-[#6e6e73]">About</Link>
            <Link href="/careers" onClick={() => setOpen(false)} className="block py-2 text-[14px] text-[#6e6e73]">Careers</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block py-2 text-[14px] text-[#0071e3] font-semibold">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
