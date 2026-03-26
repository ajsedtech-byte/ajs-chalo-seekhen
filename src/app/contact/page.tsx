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
  const inp = "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-[15px] focus:outline-none focus:ring-2 focus:ring-indigo-500/15 focus:border-indigo-300 transition-all placeholder-slate-400";

  return (
    <main className="min-h-screen">
      <section className="py-24 px-6 hero-bg relative">
        <div className="absolute top-[-10%] right-[15%] w-[350px] h-[350px] bg-violet-100/30 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-[850px] mx-auto">
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center gap-1.5 text-[14px] text-indigo-600 font-semibold mb-10">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Back
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Get in <span className="gt">Touch</span></h1>
            <p className="text-slate-500 text-lg max-w-md mx-auto">Questions, feedback, or partnerships — we&apos;d love to hear from you.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card p-7">
                {done ? (
                  <div className="text-center py-10">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                      <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-1">Sent!</h3>
                    <p className="text-slate-500">We&apos;ll reply soon.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div><label className="block text-[13px] font-semibold text-slate-700 mb-1">Name</label><input name="name" required className={inp} placeholder="Your name" /></div>
                    <div><label className="block text-[13px] font-semibold text-slate-700 mb-1">Email</label><input name="email" type="email" required className={inp} placeholder="you@email.com" /></div>
                    <div><label className="block text-[13px] font-semibold text-slate-700 mb-1">Subject</label><select name="subject" className={inp}><option>General</option><option>Feedback</option><option>Partnership</option><option>Bug Report</option><option>Careers</option></select></div>
                    <div><label className="block text-[13px] font-semibold text-slate-700 mb-1">Message</label><textarea name="message" required rows={4} className={`${inp} resize-none`} placeholder="Your message..." /></div>
                    {error && <p className="text-red-500 text-[13px] font-semibold">{error}</p>}
                    <button disabled={loading} className="w-full btn-p py-3.5 text-[15px] justify-center disabled:opacity-50">{loading ? "Sending..." : "Send Message"}</button>
                  </form>
                )}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="space-y-4">
                {[{ i: "✉️", t: "Email", v: "hello@chaloseekhen.com" }, { i: "📍", t: "Location", v: "India" }, { i: "💬", t: "Social", v: "Coming Soon" }].map(c => (
                  <div key={c.t} className="card p-5 flex items-center gap-4"><span className="text-xl">{c.i}</span><div><h3 className="font-bold text-[14px]">{c.t}</h3><p className="text-slate-500 text-[13px]">{c.v}</p></div></div>
                ))}
                <div className="card p-5 bg-indigo-50 border-indigo-100">
                  <h3 className="font-bold text-[14px] mb-1">Want to join us?</h3>
                  <p className="text-slate-500 text-[13px] mb-2">Check our open positions.</p>
                  <Link href="/careers" className="text-[13px] font-semibold text-indigo-600 inline-flex items-center gap-1">Careers <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
