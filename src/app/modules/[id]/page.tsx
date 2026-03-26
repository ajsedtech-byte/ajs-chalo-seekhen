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
    <main>
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-[680px] mx-auto">
          <Link href="/#modules" className="inline-flex items-center gap-1 text-[14px] text-[#0071e3] font-medium mb-10 hover:underline">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Modules
          </Link>
          <div className="text-center">
            {mod.logo ? (
              <div className="mb-6 flex justify-center"><Image src={mod.logo} alt={mod.name} width={144} height={144} className="w-28 h-28 rounded-2xl object-contain" /></div>
            ) : (
              <div className="text-[64px] mb-6">{mod.icon}</div>
            )}
            <h1 className="text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-2">{mod.name}</h1>
            <p className="text-[#86868b] text-[19px] mb-1">{mod.hindi}</p>
            <p className="text-[21px] text-[#6e6e73] font-medium mb-6">{mod.description}</p>
            <span className="inline-flex items-center gap-2 bg-[#e3f2fd] text-[#0071e3] text-[13px] font-semibold px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 bg-[#0071e3] rounded-full animate-pulse" /> Coming Soon
            </span>

            <div className="mt-12 bg-white rounded-2xl p-7 text-left">
              <h2 className="text-[19px] font-semibold text-[#1d1d1f] mb-3">About {mod.name}</h2>
              <p className="text-[#6e6e73] text-[15px] leading-relaxed mb-5">
                {mod.name} ({mod.hindi}) focuses on <strong className="text-[#1d1d1f]">{mod.description.toLowerCase()}</strong>, providing structured content as part of LearnX.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[{ l: "Platform", v: "LearnX" }, { l: "Status", v: "Coming Soon" }, { l: "Category", v: mod.description }, { l: "Access", v: "Free with LearnX" }].map(x => (
                  <div key={x.l} className="p-3 rounded-xl bg-[#f5f5f7]">
                    <p className="text-[11px] text-[#86868b] font-medium uppercase tracking-wide mb-0.5">{x.l}</p>
                    <p className="text-[14px] font-semibold text-[#1d1d1f]">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products/learnx" className="btn-p">Explore LearnX</Link>
              <Link href="/contact" className="btn-s">Get Notified</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
