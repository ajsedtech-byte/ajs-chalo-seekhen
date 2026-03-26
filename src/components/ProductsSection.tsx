"use client";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

export default function ProductsSection() {
  const learnx = products.find(p => p.id === "learnx");
  const others = products.filter(p => p.id !== "learnx");

  return (
    <section id="products" className="py-20 px-6 bg-white">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] leading-[1.07] mb-4">
              The Ecosystem.
            </h2>
            <p className="text-[21px] text-[#6e6e73] max-w-[500px] mx-auto">
              Three products. One mission. The most complete learning experience ever built.
            </p>
          </div>
        </ScrollReveal>

        {learnx && (
          <ScrollReveal>
            <div className="mb-4">
              <ProductCard product={learnx} index={0} featured />
            </div>
          </ScrollReveal>
        )}

        <div className="grid md:grid-cols-2 gap-4">
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
