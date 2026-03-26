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
      <section className="py-24 px-6 bg-white">
        <ScrollReveal>
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tight text-[#1d1d1f] leading-[1.05] mb-5">
              Education is not just about marks.
            </h2>
            <p className="text-[19px] text-[#6e6e73] leading-[1.5]">
              It&apos;s about building complete humans. Academics, life skills, values, creativity, and leadership — all in one unified platform.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <ScrollReveal>
          <div className="max-w-[580px] mx-auto text-center">
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#1d1d1f] tracking-tight leading-[1.07] mb-4">Ready to start?</h2>
            <p className="text-[#6e6e73] text-[19px] mb-8">Join thousands of students already on the journey.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#products" className="inline-flex items-center gap-2 bg-[#0071e3] text-white font-semibold text-[17px] px-8 py-3.5 rounded-full hover:bg-[#0077ed] transition-all">Get Started</a>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#0071e3] font-semibold text-[17px] hover:underline">
                Talk to Us &rsaquo;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Marquee */}
      <section className="py-4 border-y border-[#e5e5e5] bg-white overflow-hidden">
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
