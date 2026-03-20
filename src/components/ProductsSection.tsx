"use client";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 px-6 bg-soft">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal><div className="text-center mb-14">
          <p className="text-indigo-600 font-semibold text-[14px] mb-3 tracking-wide">THE ECOSYSTEM</p>
          <h2 className="text-[2.5rem] md:text-[3rem] font-extrabold tracking-tight mb-4 leading-tight">Built for Tomorrow&apos;s <span className="gt">Learners</span></h2>
          <p className="text-slate-500 text-[17px] max-w-lg mx-auto leading-relaxed">Four products. One mission. The most complete learning experience ever built.</p>
        </div></ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p,i) => <ScrollReveal key={p.id} delay={i*100}><ProductCard product={p} index={i} /></ScrollReveal>)}
        </div>
      </div>
    </section>
  );
}
