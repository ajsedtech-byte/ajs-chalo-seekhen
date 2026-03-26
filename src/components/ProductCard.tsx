"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

const stMap: Record<string, { t: string; c: string }> = {
  live: { t: "Live", c: "bg-green-500/20 text-green-300 border-green-500/30" },
  beta: { t: "Beta", c: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  "coming-soon": { t: "Coming Soon", c: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  "coming-q3": { t: "Q3 2025", c: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
};

const bgColors: Record<string, string> = {
  learnx: "from-indigo-600 via-purple-600 to-indigo-700",
  "santulan-ai": "from-teal-600 via-cyan-600 to-teal-700",
  groerx: "from-emerald-600 via-green-600 to-emerald-700",
};

export default function ProductCard({ product, featured }: { product: Product; index: number; featured?: boolean }) {
  const img = product.cardLogo || product.logo;
  const st = stMap[product.status];
  const bg = bgColors[product.id] || "from-gray-700 to-gray-800";

  if (featured) {
    return (
      <Link href={product.href} className="group block">
        <div className={`bg-gradient-to-br ${bg} rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:scale-[1.01]`}>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-[280px] md:h-[380px] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-white/5" />
              {img ? <Image src={img} alt={product.name} width={240} height={240} className="relative z-10 w-44 h-44 md:w-56 md:h-56 object-contain rounded-2xl group-hover:scale-[1.05] transition-transform duration-500 drop-shadow-2xl" />
                : <span className="text-[100px] relative z-10">{product.icon}</span>}
              <div className="absolute top-4 left-4 z-20"><span className={`px-3 py-1 text-[11px] font-semibold rounded-full border ${st.c}`}>{st.t}</span></div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-[32px] font-bold text-white tracking-tight mb-1">{product.name}</h3>
              <p className="text-[17px] text-white/60 mb-2 font-medium">{product.tagline}</p>
              <p className="text-[15px] text-white/40 leading-[1.6] mb-6">{product.description}</p>
              <div className="space-y-1.5 mb-6">
                {product.features.slice(0, 4).map(f => (
                  <div key={f} className="flex items-center gap-2 text-[14px] text-white/50">
                    <svg className="w-3.5 h-3.5 text-white/70 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </div>
                ))}
              </div>
              <span className="text-white font-semibold text-[17px] inline-flex items-center gap-1 group-hover:gap-2.5 transition-all">
                Explore {product.name} <span className="text-[22px]">&rsaquo;</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={product.href} className="group block h-full">
      <div className={`bg-gradient-to-br ${bg} rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:scale-[1.01] h-full text-center`}>
        <div className="h-[220px] relative flex items-center justify-center">
          <div className="absolute inset-0 bg-white/5" />
          {img ? <Image src={img} alt={product.name} width={180} height={180} className="relative z-10 w-36 h-36 object-contain rounded-2xl group-hover:scale-[1.05] transition-transform duration-500 drop-shadow-2xl" />
            : <span className="text-[80px] relative z-10">{product.icon}</span>}
          <div className="absolute top-4 right-4 z-20"><span className={`px-3 py-1 text-[11px] font-semibold rounded-full border ${st.c}`}>{st.t}</span></div>
        </div>
        <div className="p-8 pt-4">
          <h3 className="text-[24px] font-bold text-white tracking-tight mb-1">{product.name}</h3>
          <p className="text-[15px] text-white/60 mb-1 font-medium">{product.tagline}</p>
          <p className="text-[14px] text-white/40 leading-[1.6] mb-5">{product.description}</p>
          <span className="text-white font-semibold text-[17px] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn more <span className="text-[20px]">&rsaquo;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
