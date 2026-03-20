import Link from "next/link";
import { products, modules } from "@/data/products";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (<main className="min-h-screen pt-16"><Navbar />
    <section className="py-24 px-6 hero-bg relative"><div className="absolute top-[-10%] left-[20%] w-[350px] h-[350px] bg-indigo-100/30 rounded-full blur-[100px]" />
      <div className="relative z-10 max-w-[750px] mx-auto text-center">
        <Link href="/" className="inline-flex items-center gap-1.5 text-[14px] text-indigo-600 font-semibold mb-10"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Back</Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">About <span className="gt">Us</span></h1>
        <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">Building the most comprehensive learning ecosystem for students everywhere.</p>
      </div>
    </section>
    <section className="py-20 px-6 bg-soft"><ScrollReveal><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      <div className="card p-7"><p className="text-emerald-600 font-semibold text-[13px] tracking-wide mb-3">OUR MISSION</p><h2 className="text-2xl font-extrabold tracking-tight mb-3">Empowering every student to become a <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">complete learner</span></h2><p className="text-slate-500 leading-relaxed text-[15px]">Education is more than textbooks. We&apos;re creating an ecosystem where academics, values, and growth come together.</p></div>
      <div className="card p-7"><p className="text-violet-600 font-semibold text-[13px] tracking-wide mb-3">OUR VISION</p><h2 className="text-2xl font-extrabold tracking-tight mb-3">A world where <span className="gt">learning has no limits</span></h2><p className="text-slate-500 leading-relaxed text-[15px]">Every student deserves holistic education. We&apos;re making it real, one module at a time.</p></div>
    </div></ScrollReveal></section>
    <section className="py-16 px-6 bg-dark"><ScrollReveal><div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[{ n:`${products.length}`, l:"Products" }, { n:`${modules.length}+`, l:"Modules" }, { n:"1K+", l:"Students" }, { n:"2024", l:"Founded" }].map(s => (
        <div key={s.l}><div className="text-3xl md:text-4xl font-extrabold text-white">{s.n}</div><div className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">{s.l}</div></div>
      ))}</div></ScrollReveal></section>
    <section className="py-20 px-6 bg-white"><div className="max-w-5xl mx-auto">
      <ScrollReveal><div className="text-center mb-10"><p className="text-rose-600 font-semibold text-[14px] tracking-wide mb-3">VALUES</p><h2 className="text-3xl font-extrabold tracking-tight">What Drives Us</h2></div></ScrollReveal>
      <div className="grid md:grid-cols-3 gap-5">
        {[{ t:"Holistic Growth", d:"Developing the complete individual.", i:"🌱" }, { t:"Innovation", d:"AI-powered personalized learning.", i:"⚡" }, { t:"Accessibility", d:"World-class education for all.", i:"🌍" }].map((v,i) => (
          <ScrollReveal key={v.t} delay={i*100}><div className="card p-6"><div className="text-2xl mb-3">{v.i}</div><h3 className="font-bold mb-1">{v.t}</h3><p className="text-slate-500 text-[14px] leading-relaxed">{v.d}</p></div></ScrollReveal>
        ))}
      </div>
    </div></section>
    <section className="py-16 px-6 bg-indigo-soft text-center">
      <h2 className="text-2xl font-extrabold tracking-tight mb-4">Join the journey</h2>
      <p className="text-slate-500 mb-6">We&apos;re looking for passionate people.</p>
      <div className="flex items-center justify-center gap-3"><Link href="/careers" className="btn-p px-7 py-3 text-[15px]">Careers</Link><Link href="/contact" className="btn-s px-7 py-3 text-[15px]">Contact</Link></div>
    </section>
  </main>);
}
