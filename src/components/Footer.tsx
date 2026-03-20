import Link from "next/link";
import { products } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-400 flex items-center justify-center"><span className="text-white font-extrabold text-[9px]">AJ</span></div>
              <span className="font-bold text-[14px]">Chalo Seekhen</span>
            </div>
            <p className="text-[13px] text-slate-500 leading-relaxed">Empowering students with holistic education.</p>
          </div>
          <div><h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-4">Products</h4><div className="space-y-2.5">{products.map(p => <Link key={p.id} href={p.href} className="block text-[13px] text-slate-400 hover:text-white transition-colors">{p.name}</Link>)}</div></div>
          <div><h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-4">Features</h4><div className="space-y-2.5">{["SPARK","Daily Blueprint","Mastery Genome","Life Skills","Revision"].map(f => <Link key={f} href="/products/learnx" className="block text-[13px] text-slate-400 hover:text-white transition-colors">{f}</Link>)}</div></div>
          <div><h4 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-4">Company</h4><div className="space-y-2.5">
            <Link href="/about" className="block text-[13px] text-slate-400 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="block text-[13px] text-slate-400 hover:text-white transition-colors">Contact</Link>
            <Link href="/careers" className="block text-[13px] text-slate-400 hover:text-white transition-colors">Careers</Link>
          </div></div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-slate-600">&copy; {new Date().getFullYear()} AJ&apos;s Chalo Seekhen</p>
          <p className="text-[12px] text-slate-700">Built with passion for education</p>
        </div>
      </div>
    </footer>
  );
}
