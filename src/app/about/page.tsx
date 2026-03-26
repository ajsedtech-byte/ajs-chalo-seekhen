import Link from "next/link";
import { products, modules } from "@/data/products";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <main>
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-[680px] mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-1 text-[14px] text-[#0071e3] font-medium mb-10 hover:underline">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Back
          </Link>
          <h1 className="text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-4">About Us</h1>
          <p className="text-[21px] text-[#6e6e73]">Building the most comprehensive learning ecosystem for students everywhere.</p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <ScrollReveal>
          <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-4">
            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <p className="text-[#0071e3] font-semibold text-[12px] tracking-wide uppercase mb-3">Our Mission</p>
              <h2 className="text-[24px] font-semibold tracking-tight text-[#1d1d1f] mb-3">Empowering every student to become a complete learner</h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed">Education is more than textbooks. We&apos;re creating an ecosystem where academics, values, and growth come together.</p>
            </div>
            <div className="bg-[#f5f5f7] rounded-2xl p-8">
              <p className="text-[#0071e3] font-semibold text-[12px] tracking-wide uppercase mb-3">Our Vision</p>
              <h2 className="text-[24px] font-semibold tracking-tight text-[#1d1d1f] mb-3">A world where learning has no limits</h2>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed">Every student deserves holistic education. We&apos;re making it real, one module at a time.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="py-14 px-6 bg-[#1d1d1f]">
        <ScrollReveal>
          <div className="max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ n: `${products.length}`, l: "Products" }, { n: `${modules.length}+`, l: "Modules" }, { n: "1K+", l: "Students" }, { n: "2024", l: "Founded" }].map(s => (
              <div key={s.l}><div className="text-[32px] font-semibold text-white">{s.n}</div><div className="text-[12px] text-[#86868b] uppercase tracking-wide font-medium">{s.l}</div></div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal><h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] text-center mb-10">What Drives Us</h2></ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[{ t: "Holistic Growth", d: "Developing the complete individual.", i: "🌱" }, { t: "Innovation", d: "AI-powered personalized learning.", i: "⚡" }, { t: "Accessibility", d: "World-class education for all.", i: "🌍" }].map((v, i) => (
              <ScrollReveal key={v.t} delay={i * 100}>
                <div className="bg-[#f5f5f7] rounded-2xl p-6"><div className="text-[28px] mb-3">{v.i}</div><h3 className="font-semibold text-[17px] text-[#1d1d1f] mb-1">{v.t}</h3><p className="text-[#6e6e73] text-[15px] leading-relaxed">{v.d}</p></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#f5f5f7] text-center">
        <h2 className="text-[28px] font-semibold tracking-tight text-[#1d1d1f] mb-4">Join the journey</h2>
        <p className="text-[#6e6e73] text-[17px] mb-6">We&apos;re looking for passionate people.</p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/careers" className="btn-p">Careers</Link>
          <Link href="/contact" className="btn-s">Contact</Link>
        </div>
      </section>
    </main>
  );
}
