import Link from "next/link";
import Image from "next/image";
import { modules } from "@/data/products";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() { return modules.map(m => ({ id: m.id })); }
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params; const m = modules.find(x => x.id === id);
  return m ? { title: `${m.name} — ${m.description}` } : { title: "Not Found" };
}

export default async function ModulePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const mod = modules.find(m => m.id === id);
  if (!mod) notFound();
  return (
    <main className="min-h-screen">
      <section className="py-24 px-6 hero-bg relative">
        <div className="absolute top-[-10%] left-[20%] w-[350px] h-[350px] bg-violet-100/30 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-[750px] mx-auto">
          <Link href="/#modules" className="inline-flex items-center gap-1.5 text-[14px] text-indigo-600 font-semibold mb-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Modules
          </Link>
          <div className="text-center">
            {mod.logo ? (
              <div className="mb-6 flex justify-center"><Image src={mod.logo} alt={mod.name} width={144} height={144} className="w-28 h-28 rounded-2xl object-contain drop-shadow-lg" /></div>
            ) : (
              <div className="text-6xl mb-6">{mod.icon}</div>
            )}
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">{mod.name}</h1>
            <p className="text-slate-400 text-lg mb-2">{mod.hindi}</p>
            <p className={`text-lg font-bold bg-gradient-to-r ${mod.color} bg-clip-text text-transparent mb-6`}>{mod.description}</p>
            <span className="badge bg-indigo-50 text-indigo-600 border-indigo-100"><span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" /> Coming Soon</span>

            <div className="mt-12 card p-7 text-left">
              <h2 className="text-lg font-bold mb-3">About {mod.name}</h2>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-4">{mod.name} ({mod.hindi}) focuses on <strong className="text-slate-700">{mod.description.toLowerCase()}</strong>, providing structured content as part of LearnX.</p>
              <div className="grid grid-cols-2 gap-3">
                {[{ l: "Platform", v: "LearnX" }, { l: "Status", v: "Coming Soon" }, { l: "Category", v: mod.description }, { l: "Access", v: "Free with LearnX" }].map(x => (
                  <div key={x.l} className="p-3 rounded-lg bg-slate-50 border border-slate-100"><p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">{x.l}</p><p className="text-[13px] font-semibold">{x.v}</p></div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/products/learnx" className="btn-p px-7 py-3.5 text-[15px]">Explore LearnX</Link>
              <Link href="/contact" className="btn-s px-7 py-3.5 text-[15px]">Get Notified</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
