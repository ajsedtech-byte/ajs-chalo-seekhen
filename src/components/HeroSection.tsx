"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 150); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Floating gradient orbs */}
      <div className="absolute top-[5%] right-[10%] w-[300px] h-[300px] bg-indigo-400/[0.08] rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] bg-violet-400/[0.06] rounded-full blur-[80px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[40%] left-[60%] w-[200px] h-[200px] bg-pink-400/[0.05] rounded-full blur-[70px] animate-pulse-glow" />

      <div className={`relative z-10 text-center max-w-[880px] mx-auto px-6 transition-all duration-1000 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="mb-8">
          <span className="badge bg-white text-indigo-600 border-indigo-100 shadow-sm shadow-indigo-100/50">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Ecosystem 2.0 — Now Live
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[clamp(2.8rem,6.5vw,5.375rem)] font-extrabold tracking-[-0.035em] leading-[1.05] mb-6">
          <span className="gt-shimmer">AJ&apos;s</span>{" "}Chalo Seekhen
        </h1>

        <p className="text-[clamp(1rem,2.2vw,1.2rem)] text-slate-500 max-w-[540px] mx-auto mb-10 leading-[1.7]">
          The complete learning ecosystem — academics, life skills, AI-powered growth. Everything students need, in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#products" className="btn-p px-7 py-3.5 text-[15px]">
            Explore Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#modules" className="btn-s px-7 py-3.5 text-[15px]">View Modules</a>
        </div>

        {/* Stats */}
        <div className="mt-20 flex items-center justify-center gap-10 md:gap-14 flex-wrap">
          {[{ n:"4+", l:"Products" }, { n:"12+", l:"Modules" }, { n:"1K+", l:"Students" }, { n:"∞", l:"Possibilities" }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-[2rem] md:text-[2.5rem] font-extrabold gt">{s.n}</div>
              <div className="text-[11px] text-slate-400 mt-1 font-semibold uppercase tracking-[0.1em]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
