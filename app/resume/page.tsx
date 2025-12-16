import Link from "next/link";
import experience from "@/data/experience";
import { projects } from "@/data/projects";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Resume</h1>
          <p className="mt-2 text-zinc-400">
            Experience and selected projects.
          </p>
        </div>
        <a
          href="/resume.pdf"
          target="_blank"
          download
          className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
        >
          Download PDF
        </a>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <div className="space-y-6">
          {experience.map((exp) => (
            <article
              key={`${exp.company}-${exp.role}`}
              className="rounded-xl border border-white/6 bg-white/[0.02] p-5"
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-zinc-400">
                    {exp.company} • {exp.start} — {exp.end}
                  </p>
                </div>
              </div>

              <ul className="mt-3 list-disc list-inside text-sm text-zinc-300 space-y-1">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
        <div className="grid gap-6">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="rounded-xl border border-white/6 bg-white/[0.02] p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-zinc-400">{p.tagline}</p>
                </div>
                {p.links && p.links.length > 0 && (
                  <div>
                    <Link
                      href={p.links[0].href}
                      className="text-sm text-zinc-300 underline"
                    >
                      {p.links[0].label}
                    </Link>
                  </div>
                )}
              </div>

              <div className="mt-3 text-sm text-zinc-300">
                <ul className="list-disc list-inside space-y-1">
                  {p.impact.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>

                <div className="mt-3 text-xs text-zinc-400">
                  <strong>Stack:</strong> {p.stack.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
