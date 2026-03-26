import Link from "next/link";
import { products } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7]">
      <div className="max-w-[980px] mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-[#1d1d1f] flex items-center justify-center"><span className="text-white font-bold text-[8px]">AJ</span></div>
              <span className="font-semibold text-[13px] text-[#1d1d1f]">Chalo Seekhen</span>
            </div>
            <p className="text-[12px] text-[#86868b] leading-relaxed">Empowering students with holistic education.</p>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-4">Products</h4>
            <div className="space-y-2">{products.map(p => <Link key={p.id} href={p.href} className="block text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{p.name}</Link>)}</div>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-4">Features</h4>
            <div className="space-y-2">{["SPARK", "Daily Blueprint", "Mastery Genome", "Life Skills", "Revision"].map(f => <Link key={f} href="/products/learnx" className="block text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{f}</Link>)}</div>
          </div>
          <div>
            <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">About</Link>
              <Link href="/contact" className="block text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Contact</Link>
              <Link href="/careers" className="block text-[12px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">Careers</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-[#d2d2d7] pt-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-[#86868b]">&copy; {new Date().getFullYear()} AJ&apos;s Chalo Seekhen. All rights reserved.</p>
          <p className="text-[12px] text-[#86868b]">Built with passion for education</p>
        </div>
      </div>
    </footer>
  );
}
