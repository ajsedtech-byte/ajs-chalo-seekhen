"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { products } from "@/data/products";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sc, setSc] = useState(false);
  useEffect(() => { const h = () => setSc(window.scrollY > 10); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${sc ? "bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm" : ""}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-md shadow-indigo-600/15">
            <span className="text-white font-extrabold text-[10px]">AJ</span>
          </div>
          <span className="font-bold text-[15px] text-slate-900">Chalo Seekhen</span>
        </Link>
        <div className="hidden lg:flex items-center gap-1">
          {products.map(p => <Link key={p.id} href={p.href} className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-slate-50">{p.name}</Link>)}
          <div className="w-px h-5 bg-slate-200 mx-1.5" />
          <Link href="/about" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-slate-50">About</Link>
          <Link href="/careers" className="text-[14px] text-slate-500 hover:text-slate-900 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-slate-50">Careers</Link>
          <Link href="/contact" className="btn-accent px-5 py-2 text-[13px] ml-2">Contact</Link>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-slate-500"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}</svg></button>
      </div>
      {open && <div className="lg:hidden px-6 pb-4 bg-white border-b border-slate-100 shadow-lg">
        {products.map(p => <Link key={p.id} href={p.href} onClick={() => setOpen(false)} className="block py-2.5 text-[15px] text-slate-500 hover:text-slate-900">{p.name}</Link>)}
        <div className="border-t border-slate-100 mt-2 pt-2 space-y-1">
          <Link href="/about" onClick={() => setOpen(false)} className="block py-2 text-[15px] text-slate-500">About</Link>
          <Link href="/careers" onClick={() => setOpen(false)} className="block py-2 text-[15px] text-slate-500">Careers</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block py-2 text-[15px] font-semibold text-indigo-600">Contact</Link>
        </div>
      </div>}
    </nav>
  );
}
