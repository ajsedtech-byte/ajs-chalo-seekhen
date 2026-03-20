"use client";
import Image from "next/image";
import Link from "next/link";
import { modules } from "@/data/products";
import ScrollReveal from "./ScrollReveal";

export default function ModulesSection() {
  return (
    <section id="modules" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal><div className="text-center mb-14">
          <p className="text-violet-600 font-semibold text-[14px] mb-3 tracking-wide">MODULES</p>
          <h2 className="text-[2.5rem] md:text-[3rem] font-extrabold tracking-tight mb-4 leading-tight">12+ Learning <span className="gt">Modules</span></h2>
          <p className="text-slate-500 text-[17px] max-w-lg mx-auto">Each module powers a unique dimension of growth within the ecosystem.</p>
        </div></ScrollReveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {modules.map((m,i) => (
            <ScrollReveal key={m.id} delay={i*40}><Link href={`/modules/${m.id}`}>
              <div className="card card-shine p-5 text-center group cursor-pointer">
                {m.logo ? <div className="mb-3 flex justify-center"><Image src={m.logo} alt={m.name} width={96} height={96} className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-contain group-hover:scale-105 transition-transform duration-400 drop-shadow-sm" /></div>
                  : <div className="text-4xl mb-3">{m.icon}</div>}
                <h3 className="font-bold text-[14px] text-slate-900 mb-0.5">{m.name}</h3>
                <p className="text-slate-300 text-[11px] mb-1">{m.hindi}</p>
                <p className="text-slate-400 text-[12px] mb-2">{m.description}</p>
                <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded tracking-wider uppercase">Coming Soon</span>
              </div>
            </Link></ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
