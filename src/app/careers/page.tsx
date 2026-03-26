import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = { title: "Careers" };
const jobs = [
  { title: "Frontend Developer", type: "Full-time", team: "Engineering", desc: "React, Next.js, Tailwind." },
  { title: "Backend Developer", type: "Full-time", team: "Engineering", desc: "Scalable APIs & systems." },
  { title: "AI/ML Engineer", type: "Full-time", team: "Santulan AI", desc: "Adaptive learning models." },
  { title: "Content Creator", type: "Part-time", team: "Content", desc: "Educational materials." },
  { title: "UI/UX Designer", type: "Full-time", team: "Design", desc: "Learning experiences." },
  { title: "Community Manager", type: "Part-time", team: "Growth", desc: "Student community." },
];

export default function CareersPage() {
  return (
    <main>
      <section className="py-20 px-6 bg-[#f5f5f7]">
        <div className="max-w-[680px] mx-auto text-center">
          <Link href="/" className="inline-flex items-center gap-1 text-[14px] text-[#0071e3] font-medium mb-10 hover:underline">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Back
          </Link>
          <h1 className="text-[48px] md:text-[56px] font-semibold tracking-tight text-[#1d1d1f] mb-4">Join Our Team</h1>
          <p className="text-[21px] text-[#6e6e73] mb-8">Help us build the future of education. Remote-first, mission-driven.</p>
          <a href="#jobs" className="btn-p">View Positions</a>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-[900px] mx-auto">
          <ScrollReveal><h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] text-center mb-10">Why join us</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[{ t: "Remote First", i: "🏠" }, { t: "Learn & Grow", i: "📚" }, { t: "Real Impact", i: "🌟" }, { t: "Flexible Hours", i: "⏰" }, { t: "Great Team", i: "🤝" }, { t: "Early Stage", i: "🚀" }].map((p, i) => (
              <ScrollReveal key={p.t} delay={i * 60}>
                <div className="bg-[#f5f5f7] rounded-2xl p-5"><span className="text-[24px]">{p.i}</span><h3 className="font-semibold text-[15px] text-[#1d1d1f] mt-2">{p.t}</h3></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="py-16 px-6 bg-[#f5f5f7]">
        <div className="max-w-[780px] mx-auto">
          <ScrollReveal><h2 className="text-[32px] font-semibold tracking-tight text-[#1d1d1f] text-center mb-10">Open roles</h2></ScrollReveal>
          <div className="space-y-3">
            {jobs.map((j, i) => (
              <ScrollReveal key={j.title} delay={i * 60}>
                <div className="bg-white rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:shadow-md">
                  <div>
                    <h3 className="font-semibold text-[17px] text-[#1d1d1f]">{j.title}</h3>
                    <p className="text-[#6e6e73] text-[14px] mb-2">{j.desc}</p>
                    <div className="flex gap-2">
                      <span className="text-[11px] font-medium bg-[#f5f5f7] text-[#6e6e73] px-2.5 py-0.5 rounded-full">{j.type}</span>
                      <span className="text-[11px] font-medium bg-[#f5f5f7] text-[#6e6e73] px-2.5 py-0.5 rounded-full">Remote</span>
                      <span className="text-[11px] font-medium bg-[#e3f2fd] text-[#0071e3] px-2.5 py-0.5 rounded-full">{j.team}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-p text-[15px] px-5 py-2.5 shrink-0">Apply</Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 bg-[#1d1d1f] text-center">
        <h2 className="text-[28px] font-semibold text-white mb-3">Don&apos;t see your role?</h2>
        <p className="text-[#86868b] text-[17px] mb-6">Send us your profile.</p>
        <Link href="/contact" className="btn-accent">Get in Touch</Link>
      </section>
    </main>
  );
}
