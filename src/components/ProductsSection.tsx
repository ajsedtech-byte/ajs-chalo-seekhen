"use client";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

export default function ProductsSection() {
  const learnx = products.find(p => p.id === "learnx");
  const others = products.filter(p => p.id !== "learnx");

  return (
    <section id="products" className="py-24 px-6 bg-soft">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-indigo-600 font-semibold text-[14px] mb-3 tracking-wide">THE ECOSYSTEM</p>
            <h2 className="text-[2.5rem] md:text-[3rem] font-extrabold tracking-tight mb-4 leading-tight">Built for Tomorrow&apos;s <span className="gt">Learners</span></h2>
            <p className="text-slate-500 text-[17px] max-w-lg mx-auto leading-relaxed">Three products. One mission. The most complete learning experience ever built.</p>
          </div>
        </ScrollReveal>

        {/* LearnX — full width hero card */}
        {learnx && (
          <ScrollReveal>
            <div className="mb-6">
              <ProductCard product={learnx} index={0} featured />
            </div>
          </ScrollReveal>
        )}

        {/* GroerX & Santulan AI — side by side */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((p, i) => (
            <ScrollReveal key={p.id} delay={(i + 1) * 100}>
              <ProductCard product={p} index={i + 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
