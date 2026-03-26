"use client";
import Image from "next/image";
import Link from "next/link";
import { modules } from "@/data/products";
import ScrollReveal from "./ScrollReveal";

export default function ModulesSection() {
  return (
    <section id="modules" className="py-20 px-6 bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] leading-[1.07] mb-4">
              12+ Modules.
            </h2>
            <p className="text-[21px] text-[#6e6e73] max-w-[500px] mx-auto">
              Each module powers a unique dimension of growth within the ecosystem.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {modules.map((m, i) => (
            <ScrollReveal key={m.id} delay={i * 40}>
              <Link href={`/modules/${m.id}`}>
                <div className="bg-white rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-pointer group">
                  {m.logo ? (
                    <div className="mb-3 flex justify-center">
                      <Image src={m.logo} alt={m.name} width={96} height={96} className="w-20 h-20 rounded-xl object-contain group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  ) : (
                    <div className="text-4xl mb-3">{m.icon}</div>
                  )}
                  <h3 className="font-semibold text-[15px] text-[#1d1d1f] mb-0.5">{m.name}</h3>
                  <p className="text-[#86868b] text-[12px] mb-1">{m.hindi}</p>
                  <p className="text-[#6e6e73] text-[13px] mb-2">{m.description}</p>
                  <span className="text-[10px] font-semibold text-[#0071e3] bg-[#e3f2fd] px-2.5 py-0.5 rounded-full tracking-wide uppercase">Coming Soon</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
