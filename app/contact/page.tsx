import { Section } from "@/components/Section";

export default function ContactPage() {
  return (
    <Section title="Contact" kicker="Let’s build something">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="mt-2 text-sm text-zinc-300">Fastest way to reach me.</p>
          <a className="mt-4 inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm no-underline hover:bg-white/10" href="mailto:adityakher303@gmail.com">
            adityakher303@gmail.com
          </a>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-zinc-200">Links</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              <a className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm no-underline hover:bg-white/10" href="https://github.com/Kheraditya" target="_blank">GitHub ↗</a>
              <a className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm no-underline hover:bg-white/10" href="https://www.linkedin.com/" target="_blank">LinkedIn ↗</a>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <h3 className="text-lg font-semibold">Terminal message</h3>
          <p className="mt-2 text-sm text-zinc-300">Because normal forms are boring.</p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-950/60 p-4 font-mono text-sm text-zinc-200">
            <p className="text-zinc-400">$ send-message</p>
            <p className="mt-3">To: <span className="text-white">adityakher303@gmail.com</span></p>
            <p className="mt-1">Subject: <span className="text-white">Let’s talk</span></p>
            <p className="mt-3 text-zinc-300">I’ll reply quickly. Include what you’re building + timeline.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
