"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Gradient hero bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d1f] via-[#2d1b69] to-[#1d1d1f]" />
      {/* Glow effects */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7c3aed]/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-[#3b82f6]/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-[10%] right-[20%] w-[300px] h-[300px] bg-[#ec4899]/10 rounded-full blur-[80px]" />

      <div className={`relative z-10 text-center max-w-[980px] mx-auto px-6 pt-24 pb-20 transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 text-[13px] font-semibold px-5 py-2 rounded-full border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Ecosystem 2.0 — Now Live
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[48px] md:text-[72px] lg:text-[86px] font-bold tracking-[-0.04em] leading-[1] text-white mb-3">
          AJ&apos;s Chalo Seekhen
        </h1>
        <h2 className="text-[24px] md:text-[36px] font-semibold tracking-[-0.02em] leading-[1.2] bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#f472b6] bg-clip-text text-transparent mb-6">
          The Learning Ecosystem.
        </h2>

        <p className="text-[17px] md:text-[20px] text-white/60 max-w-[560px] mx-auto mb-10 leading-[1.6]">
          LearnX. Santulan AI. GroerX. Academics, life skills, and AI-powered growth — everything students need.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a href="#products" className="inline-flex items-center gap-2 bg-white text-[#1d1d1f] font-semibold text-[17px] px-8 py-3.5 rounded-full hover:bg-white/90 transition-all">
            Explore Products
          </a>
          <a href="#modules" className="inline-flex items-center gap-2 text-white/80 font-semibold text-[17px] px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 transition-all">
            View Modules
          </a>
        </div>

        {/* Product logos showcase */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-16">
          {[
            { src: "/logos/Modules_logo/14.png", name: "LearnX" },
            { src: "/logos/Modules_logo/13.png", name: "Santulan AI" },
            { src: "/logos/Modules_logo/15.png", name: "GroerX" },
          ].map(p => (
            <div key={p.name} className="text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-2 group-hover:bg-white/15 group-hover:scale-105 transition-all duration-300">
                <Image src={p.src} alt={p.name} width={64} height={64} className="w-14 h-14 md:w-16 md:h-16 rounded-xl object-contain" />
              </div>
              <span className="text-[12px] text-white/50 font-medium">{p.name}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 max-w-[480px] mx-auto">
          {[{ n: "3+", l: "Products" }, { n: "12+", l: "Modules" }, { n: "1K+", l: "Students" }, { n: "∞", l: "Possibilities" }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-[28px] md:text-[34px] font-bold text-white">{s.n}</div>
              <div className="text-[10px] text-white/40 font-semibold uppercase tracking-[0.1em]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
