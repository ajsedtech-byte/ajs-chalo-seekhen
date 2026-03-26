"use client";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <section className="relative min-h-[calc(100vh-48px)] flex items-center justify-center overflow-hidden bg-white">
      <div className={`relative z-10 text-center max-w-[900px] mx-auto px-6 transition-all duration-700 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>

        {/* Badge */}
        <div className="mb-5">
          <span className="badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Ecosystem 2.0 — Now Live
          </span>
        </div>

        {/* Main heading — Apple-sized */}
        <h1 className="text-[56px] md:text-[80px] lg:text-[96px] font-semibold tracking-[-0.03em] leading-[1.05] text-[#1d1d1f] mb-2">
          AJ&apos;s Chalo Seekhen
        </h1>

        {/* Colored subline */}
        <h2 className="text-[28px] md:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1] gt mb-6">
          The Learning Ecosystem.
        </h2>

        <p className="text-[17px] md:text-[21px] text-[#6e6e73] max-w-[600px] mx-auto mb-8 leading-[1.5] font-normal">
          LearnX. Santulan AI. GroerX. Academics, life skills, and AI-powered growth — everything students need, in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#products" className="btn-p">Explore Products</a>
          <a href="#modules" className="btn-s">View Modules</a>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-4 gap-6 max-w-[500px] mx-auto">
          {[{ n: "3+", l: "Products" }, { n: "12+", l: "Modules" }, { n: "1K+", l: "Students" }, { n: "∞", l: "Possibilities" }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-[28px] md:text-[36px] font-semibold text-[#1d1d1f]">{s.n}</div>
              <div className="text-[11px] text-[#86868b] font-medium uppercase tracking-[0.06em]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
