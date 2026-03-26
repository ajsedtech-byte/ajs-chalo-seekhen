"use client";
import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setError("");
    const fd = new FormData(e.currentTarget);
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: fd.get("name"), email: fd.get("email"), subject: fd.get("subject"), message: fd.get("message") }) });
      if (!r.ok) throw new Error((await r.json()).error || "Failed");
      setDone(true);
    } catch (err) { setError(err instanceof Error ? err.message : "Error"); } finally { setLoading(false); }
  }
  const inp = "w-full px-4 py-3 bg-[#f5f5f7] border border-[#d2d2d7] rounded-xl text-[15px] text-[#1d1d1f] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 focus:border-[#0071e3] transition-all placeholder-[#86868b]";

  return (
    <main>
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-[780px] mx-auto">
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center gap-1 text-[14px] text-[#0071e3] font-medium mb-10 hover:underline">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Back
            </Link>
            <h1 className="text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-4">Get in Touch</h1>
            <p className="text-[21px] text-[#6e6e73]">Questions, feedback, or partnerships — we&apos;d love to hear from you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white rounded-2xl p-7">
                {done ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-[#e8f5e9] flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-[#1b5e20]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-[20px] font-semibold text-[#1d1d1f] mb-1">Sent!</h3>
                    <p className="text-[#6e6e73]">We&apos;ll reply soon.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div><label className="block text-[13px] font-medium text-[#1d1d1f] mb-1">Name</label><input name="name" required className={inp} placeholder="Your name" /></div>
                    <div><label className="block text-[13px] font-medium text-[#1d1d1f] mb-1">Email</label><input name="email" type="email" required className={inp} placeholder="you@email.com" /></div>
                    <div><label className="block text-[13px] font-medium text-[#1d1d1f] mb-1">Subject</label><select name="subject" className={inp}><option>General</option><option>Feedback</option><option>Partnership</option><option>Bug Report</option><option>Careers</option></select></div>
                    <div><label className="block text-[13px] font-medium text-[#1d1d1f] mb-1">Message</label><textarea name="message" required rows={4} className={`${inp} resize-none`} placeholder="Your message..." /></div>
                    {error && <p className="text-red-600 text-[13px] font-medium">{error}</p>}
                    <button disabled={loading} className="w-full btn-p justify-center disabled:opacity-50">{loading ? "Sending..." : "Send Message"}</button>
                  </form>
                )}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="space-y-3">
                {[{ i: "✉️", t: "Email", v: "hello@chaloseekhen.com" }, { i: "📍", t: "Location", v: "India" }, { i: "💬", t: "Social", v: "Coming Soon" }].map(c => (
                  <div key={c.t} className="bg-white rounded-2xl p-5 flex items-center gap-4"><span className="text-xl">{c.i}</span><div><h3 className="font-semibold text-[15px] text-[#1d1d1f]">{c.t}</h3><p className="text-[#6e6e73] text-[14px]">{c.v}</p></div></div>
                ))}
                <div className="bg-white rounded-2xl p-5">
                  <h3 className="font-semibold text-[15px] text-[#1d1d1f] mb-1">Want to join us?</h3>
                  <p className="text-[#6e6e73] text-[14px] mb-2">Check our open positions.</p>
                  <Link href="/careers" className="text-[14px] font-medium text-[#0071e3] hover:underline inline-flex items-center gap-1">View Careers <span>&rsaquo;</span></Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
