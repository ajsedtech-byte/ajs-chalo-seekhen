"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

export default function ProductPageLayout({ product }: { product: Product }) {
  const hasLogo = !!product.logo;
  return (
    <main>
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-[780px] mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-1 text-[14px] text-[#0071e3] font-medium mb-10 hover:underline">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Back
          </Link>
          <div className="animate-scale-in opacity-0">
            {hasLogo ? (
              <Image src={product.logo!} alt={product.name} width={400} height={200} className="mx-auto mb-8 w-auto h-auto max-w-[70%] md:max-w-[360px]" priority />
            ) : (
              <>
                <span className="text-[72px] block mb-4">{product.icon}</span>
                <h1 className="text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-2">{product.name}</h1>
                <p className="text-[21px] text-[#6e6e73] font-medium mb-4">{product.tagline}</p>
              </>
            )}
          </div>
          <p className="text-[17px] text-[#6e6e73] max-w-[520px] mx-auto mb-8 leading-[1.5]">{product.description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {product.externalUrl ? (
              <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="btn-p">
                Open {product.name}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            ) : (
              <button className="btn-p">{product.status === "live" ? "Open " + product.name : "Join Waitlist"}</button>
            )}
            <button className="btn-s">Learn More</button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-[780px] mx-auto">
          <h2 className="text-[40px] font-semibold tracking-tight text-[#1d1d1f] text-center mb-3">Features</h2>
          <p className="text-[17px] text-[#86868b] text-center mb-12">Everything you need. Nothing you don&apos;t.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {product.features.map((f, i) => (
              <div key={f} className="bg-[#f5f5f7] rounded-2xl p-5 transition-all hover:shadow-md">
                <div className="w-8 h-8 rounded-full bg-[#0071e3] flex items-center justify-center mb-3">
                  <span className="text-white text-[12px] font-bold">{i + 1}</span>
                </div>
                <p className="text-[15px] font-medium text-[#1d1d1f]">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#1d1d1f] text-center">
        <h2 className="text-[32px] font-semibold text-white tracking-tight mb-4">Ready to explore {product.name}?</h2>
        <p className="text-[#86868b] text-[17px] mb-8">Join thousands of students already learning.</p>
        <Link href="/" className="btn-accent">Explore Ecosystem</Link>
      </section>
    </main>
  );
}
