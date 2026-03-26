"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle gradient accents */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-indigo-100/60 via-purple-50/40 to-transparent rounded-full blur-[80px]" />
      <div className="absolute top-[30%] left-[10%] w-[200px] h-[200px] bg-blue-100/40 rounded-full blur-[60px]" />
      <div className="absolute top-[30%] right-[10%] w-[200px] h-[200px] bg-pink-100/30 rounded-full blur-[60px]" />

      <div className={`relative z-10 text-center max-w-[980px] mx-auto px-6 pt-24 pb-24 transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-[#f5f5f7] text-[#1d1d1f] text-[13px] font-semibold px-5 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Ecosystem 2.0 — Now Live
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[48px] md:text-[72px] lg:text-[86px] font-bold tracking-[-0.04em] leading-[1] text-[#1d1d1f] mb-3">
          AJ&apos;s Chalo Seekhen
        </h1>
        <h2 className="text-[24px] md:text-[36px] font-semibold tracking-[-0.02em] leading-[1.2] text-[#6e6e73] mb-6">
          The Learning Ecosystem.
        </h2>

        <p className="text-[17px] md:text-[20px] text-[#6e6e73] max-w-[560px] mx-auto mb-10 leading-[1.6]">
          LearnX. Santulan AI. GroerX. Academics, life skills, and AI-powered growth — everything students need.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#products" className="inline-flex items-center gap-2 bg-[#0071e3] text-white font-semibold text-[17px] px-8 py-3.5 rounded-full hover:bg-[#0077ed] transition-all">
            Explore Products
          </a>
          <a href="#modules" className="inline-flex items-center gap-2 text-[#0071e3] font-semibold text-[17px] px-8 py-3.5 rounded-full border-2 border-[#0071e3] hover:bg-[#0071e3] hover:text-white transition-all">
            View Modules
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-4 gap-6 max-w-[480px] mx-auto">
          {[{ n: "3+", l: "Products" }, { n: "12+", l: "Modules" }, { n: "1K+", l: "Students" }, { n: "∞", l: "Possibilities" }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-[28px] md:text-[34px] font-bold text-[#1d1d1f]">{s.n}</div>
              <div className="text-[10px] text-[#86868b] font-semibold uppercase tracking-[0.1em]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
