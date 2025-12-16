import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { Badge } from "@/components/Badge";

export default function ProjectsPage() {
  return (
    <Section title="Projects" kicker="Case-study style">
      <div className="grid gap-6">
        {projects.map((p) => (
          <article key={p.slug} id={p.slug} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 max-w-3xl text-sm text-zinc-300">{p.tagline}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h4 className="text-sm font-semibold text-zinc-200">What it does</h4>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  {p.impact.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-200">Stack</h4>
                <div className="mt-3 flex flex-wrap gap-2">{p.stack.map((s) => <Badge key={s}>{s}</Badge>)}</div>
                {/* <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 font-mono text-xs text-zinc-300">
                  <p className="text-zinc-400">$ notes</p>
                  <p className="mt-2">Ask me about architecture decisions, tradeoffs, and reliability.</p>
                </div> */}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
