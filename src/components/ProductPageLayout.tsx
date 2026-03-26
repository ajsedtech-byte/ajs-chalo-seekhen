"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductPageLayout({ product }: { product: Product }) {
  const hasLogo = !!product.logo;
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden hero-bg py-24 px-6">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-[850px] mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[14px] text-indigo-600 font-semibold mb-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Back
          </Link>
          <div className="animate-scale-in opacity-0">
            {hasLogo ? (
              <Image src={product.logo!} alt={product.name} width={400} height={200} className="mx-auto mb-8 w-auto h-auto max-w-[70%] md:max-w-[380px] drop-shadow-lg" priority />
            ) : (
              <>
                <span className="text-6xl block mb-4">{product.icon}</span>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">{product.name}</h1>
                <p className={`text-lg font-bold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}>{product.tagline}</p>
              </>
            )}
          </div>
          <p className="text-slate-500 text-[17px] max-w-xl mx-auto mb-8 leading-relaxed">{product.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            {product.externalUrl ? (
              <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-p px-7 py-3.5 text-[15px]">
                Open {product.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            ) : (
              <button className="btn-p px-7 py-3.5 text-[15px]">{product.status === "live" ? "Open " + product.name : "Join Waitlist"}</button>
            )}
            <button className="btn-s px-7 py-3.5 text-[15px]">Learn More</button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-soft">
        <div className="max-w-[850px] mx-auto">
          <p className="text-indigo-600 font-semibold text-[14px] mb-3 tracking-wide text-center">FEATURES</p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-extrabold tracking-tight mb-10 text-center">Everything you need</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.features.map((f, i) => (
              <div key={f} className="card p-5">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-3`}>
                  <span className="text-white text-[12px] font-bold">{i + 1}</span>
                </div>
                <p className="text-[14px] font-medium text-slate-700">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-dark text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight">Ready to explore {product.name}?</h2>
        <p className="text-slate-400 mb-8">Join thousands of students already learning.</p>
        <Link href="/" className="btn-accent px-7 py-3.5 text-[15px]">Explore Ecosystem</Link>
      </section>
    </main>
  );
}
