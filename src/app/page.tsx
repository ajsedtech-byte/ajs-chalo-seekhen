import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import ModulesSection from "@/components/ModulesSection";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <ModulesSection />

      {/* Vision */}
      <section className="py-24 px-6 bg-indigo-soft">
        <ScrollReveal>
          <div className="max-w-[750px] mx-auto text-center">
            <p className="text-emerald-600 font-semibold text-[14px] mb-3 tracking-wide">VISION</p>
            <h2 className="text-[2.2rem] md:text-[2.8rem] font-extrabold tracking-tight leading-tight mb-5">
              Education is not just about marks. It&apos;s about building <span className="gt">complete humans</span>.
            </h2>
            <p className="text-slate-500 text-[17px] leading-relaxed">
              Academics, life skills, values, creativity, and leadership — all in one unified platform.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-dark relative overflow-hidden">
        <div className="absolute top-0 right-[20%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] animate-float" />
        <ScrollReveal>
          <div className="max-w-[650px] mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Ready to start learning?</h2>
            <p className="text-slate-400 text-lg mb-8">Join thousands of students already on the journey.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="#products" className="btn-accent px-7 py-3.5 text-[15px]">Get Started</a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-slate-400 hover:text-white border border-slate-700 rounded-[10px] hover:border-slate-500 transition-all">Talk to Us</Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Marquee */}
      <section className="py-4 border-y border-slate-100 bg-white overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-14 mx-7">
              {["LearnX", "Santulan AI", "GroerX", "Vaani", "Pratibimb", "Nirmaan", "Prajna", "Shikha", "Artha", "Sangam", "Guru", "Mitra"].map(n => (
                <span key={`${n}-${i}`} className="text-[11px] font-bold text-slate-200 tracking-[0.15em] uppercase">{n}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
