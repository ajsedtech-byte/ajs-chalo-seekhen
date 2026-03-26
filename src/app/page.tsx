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

      {/* Vision — bold dark section */}
      <section className="py-24 px-6 bg-[#1d1d1f]">
        <ScrollReveal>
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-white leading-[1.05] mb-5">
              Education is not just about marks.
            </h2>
            <p className="text-[21px] text-white/50 leading-[1.5]">
              It&apos;s about building complete humans. Academics, life skills, values, creativity, and leadership — all in one unified platform.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA — gradient section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#a855f7]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wOCkiLz48L3N2Zz4=')] opacity-50" />
        <ScrollReveal>
          <div className="max-w-[580px] mx-auto text-center relative z-10">
            <h2 className="text-[40px] md:text-[52px] font-bold text-white tracking-tight leading-[1.05] mb-4">Ready to start?</h2>
            <p className="text-white/70 text-[19px] mb-8">Join thousands of students already on the journey.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#products" className="inline-flex items-center gap-2 bg-white text-[#4f46e5] font-semibold text-[17px] px-8 py-3.5 rounded-full hover:bg-white/90 transition-all shadow-lg">Get Started</a>
              <Link href="/contact" className="inline-flex items-center gap-2 text-white font-semibold text-[17px] px-8 py-3.5 rounded-full border-2 border-white/30 hover:bg-white/10 transition-all">
                Talk to Us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Marquee */}
      <section className="py-4 border-y border-[#e5e5e5] bg-[#f5f5f7] overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-6">
              {["LearnX", "Santulan AI", "GroerX", "Vaani", "Pratibimb", "Nirmaan", "Prajna", "Shikha", "Artha", "Sangam", "Guru", "Mitra"].map(n => (
                <span key={`${n}-${i}`} className="text-[12px] font-bold text-[#86868b] tracking-[0.08em] uppercase">{n}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
