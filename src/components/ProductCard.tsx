"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

const stMap: Record<string, { t: string; c: string }> = {
  live: { t: "Live", c: "bg-[#e8f5e9] text-[#1b5e20]" },
  beta: { t: "Beta", c: "bg-[#fff3e0] text-[#e65100]" },
  "coming-soon": { t: "Coming Soon", c: "bg-[#e3f2fd] text-[#1565c0]" },
  "coming-q3": { t: "Q3 2025", c: "bg-[#f3e5f5] text-[#6a1b9a]" },
};

export default function ProductCard({ product, featured }: { product: Product; index: number; featured?: boolean }) {
  const img = product.cardLogo || product.logo;
  const st = stMap[product.status];

  if (featured) {
    return (
      <Link href={product.href} className="group block">
        <div className="bg-[#f5f5f7] rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.005]">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-[280px] md:h-[380px] relative flex items-center justify-center">
              {img ? <Image src={img} alt={product.name} width={240} height={240} className="w-44 h-44 md:w-56 md:h-56 object-contain rounded-2xl group-hover:scale-[1.03] transition-transform duration-500" />
                : <span className="text-[100px]">{product.icon}</span>}
              <div className="absolute top-4 left-4"><span className={`px-3 py-1 text-[11px] font-semibold rounded-full ${st.c}`}>{st.t}</span></div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <h3 className="text-[32px] font-bold text-[#1d1d1f] tracking-tight mb-1">{product.name}</h3>
              <p className="text-[17px] text-[#6e6e73] mb-2 font-medium">{product.tagline}</p>
              <p className="text-[15px] text-[#86868b] leading-[1.6] mb-6">{product.description}</p>
              <div className="space-y-1.5 mb-6">
                {product.features.slice(0, 4).map(f => (
                  <div key={f} className="flex items-center gap-2 text-[14px] text-[#6e6e73]">
                    <svg className="w-4 h-4 text-[#0071e3] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {f}
                  </div>
                ))}
              </div>
              <span className="text-[#0071e3] text-[17px] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore {product.name} <span className="text-[20px]">&rsaquo;</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={product.href} className="group block h-full">
      <div className="bg-[#f5f5f7] rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.005] h-full text-center">
        <div className="h-[240px] relative flex items-center justify-center">
          {img ? <Image src={img} alt={product.name} width={180} height={180} className="w-36 h-36 object-contain rounded-2xl group-hover:scale-[1.03] transition-transform duration-500" />
            : <span className="text-[80px]">{product.icon}</span>}
          <div className="absolute top-4 right-4"><span className={`px-3 py-1 text-[11px] font-semibold rounded-full ${st.c}`}>{st.t}</span></div>
        </div>
        <div className="p-8 pt-2">
          <h3 className="text-[24px] font-bold text-[#1d1d1f] tracking-tight mb-1">{product.name}</h3>
          <p className="text-[15px] text-[#6e6e73] mb-1 font-medium">{product.tagline}</p>
          <p className="text-[14px] text-[#86868b] leading-[1.6] mb-4">{product.description}</p>
          <span className="text-[#0071e3] text-[17px] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn more <span className="text-[20px]">&rsaquo;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
