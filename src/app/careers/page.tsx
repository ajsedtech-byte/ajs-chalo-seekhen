import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "Careers" };
const jobs = [
  { title: "Frontend Developer", type: "Full-time", team: "Engineering", desc: "React, Next.js, Tailwind.", g: "from-blue-500 to-cyan-500" },
  { title: "Backend Developer", type: "Full-time", team: "Engineering", desc: "Scalable APIs & systems.", g: "from-purple-500 to-indigo-500" },
  { title: "AI/ML Engineer", type: "Full-time", team: "Santulan AI", desc: "Adaptive learning models.", g: "from-teal-500 to-emerald-500" },
  { title: "Content Creator", type: "Part-time", team: "Content", desc: "Educational materials.", g: "from-orange-500 to-amber-500" },
  { title: "UI/UX Designer", type: "Full-time", team: "Design", desc: "Learning experiences.", g: "from-pink-500 to-rose-500" },
  { title: "Community Manager", type: "Part-time", team: "Growth", desc: "Student community.", g: "from-green-500 to-lime-500" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <section className="py-24 px-6 hero-bg relative">
        <div className="absolute top-[-10%] right-[10%] w-[350px] h-[350px] bg-emerald-100/30 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-[750px] mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[14px] text-indigo-600 font-semibold mb-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Back
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Join <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Our Team</span></h1>
          <p className="text-slate-500 text-lg max-w-lg mx-auto mb-8">Help us build the future of education. Remote-first, mission-driven.</p>
          <a href="#jobs" className="btn-p px-7 py-3.5 text-[15px]">View Positions</a>
        </div>
      </section>

      <section className="py-20 px-6 bg-soft">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal><div className="text-center mb-10"><p className="text-amber-600 font-semibold text-[14px] tracking-wide mb-3">PERKS</p><h2 className="text-3xl font-extrabold tracking-tight">Why join us</h2></div></ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[{ t: "Remote First", i: "🏠" }, { t: "Learn & Grow", i: "📚" }, { t: "Impact", i: "🌟" }, { t: "Flexible", i: "⏰" }, { t: "Great Team", i: "🤝" }, { t: "Early Stage", i: "🚀" }].map((p, i) => (
              <ScrollReveal key={p.t} delay={i * 60}><div className="card p-5"><span className="text-xl">{p.i}</span><h3 className="font-bold mt-2 text-[14px]">{p.t}</h3></div></ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="py-20 px-6 bg-white">
        <div className="max-w-[850px] mx-auto">
          <ScrollReveal><div className="text-center mb-10"><p className="text-indigo-600 font-semibold text-[14px] tracking-wide mb-3">POSITIONS</p><h2 className="text-3xl font-extrabold tracking-tight">Open roles</h2></div></ScrollReveal>
          <div className="space-y-3">
            {jobs.map((j, i) => (
              <ScrollReveal key={j.title} delay={i * 60}>
                <div className="card p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1"><div className={`w-2 h-2 rounded-full bg-gradient-to-r ${j.g}`} /><h3 className="font-bold">{j.title}</h3></div>
                    <p className="text-slate-500 text-[13px]">{j.desc}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">{j.type}</span>
                      <span className="text-[10px] font-semibold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">Remote</span>
                      <span className={`text-[10px] font-semibold text-white px-2 py-0.5 rounded bg-gradient-to-r ${j.g}`}>{j.team}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-accent px-5 py-2 text-[13px] shrink-0">Apply</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-dark text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">Don&apos;t see your role?</h2>
        <p className="text-slate-400 mb-6">Send us your profile.</p>
        <Link href="/contact" className="btn-accent px-7 py-3 text-[15px]">Get in Touch</Link>
      </section>
    </main>
  );
}
