"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

const stMap: Record<string, { t: string; c: string }> = { live: { t:"Live", c:"bg-emerald-50 text-emerald-700 border-emerald-200" }, beta: { t:"Beta", c:"bg-amber-50 text-amber-700 border-amber-200" }, "coming-soon": { t:"Coming Soon", c:"bg-indigo-50 text-indigo-700 border-indigo-200" }, "coming-q3": { t:"Q3 2025", c:"bg-purple-50 text-purple-700 border-purple-200" } };

export default function ProductCard({ product }: { product: Product; index: number }) {
  const img = product.cardLogo || product.logo;
  const st = stMap[product.status];
  return (
    <Link href={product.href} className="group block">
      <div className="card card-shine">
        <div className="h-56 relative bg-gradient-to-br from-slate-50 to-white overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-500`} />
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br ${product.gradient} opacity-[0.05] rounded-full blur-[50px] group-hover:opacity-[0.12] group-hover:scale-150 transition-all duration-700`} />
          <div className="absolute inset-0 flex items-center justify-center">
            {img ? <Image src={img} alt={product.name} width={180} height={180} className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500 drop-shadow-lg" />
              : <span className="text-7xl group-hover:scale-105 transition-transform duration-500">{product.icon}</span>}
          </div>
          <div className="absolute top-3 right-3 z-20"><span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border ${st.c}`}>{st.t}</span></div>
        </div>
        <div className="p-6">
          <h3 className="text-[20px] font-bold text-slate-900 mb-1">{product.name}</h3>
          <p className={`text-[13px] font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-2`}>{product.tagline}</p>
          <p className="text-[13px] text-slate-500 leading-relaxed mb-4">{product.description}</p>
          <div className="grid grid-cols-2 gap-1 mb-4">
            {product.features.slice(0,4).map(f => (
              <div key={f} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${product.gradient} shrink-0`} /><span className="truncate">{f}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-[14px] font-semibold text-indigo-600 group-hover:gap-2.5 transition-all">
            Learn more <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
