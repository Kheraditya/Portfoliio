import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import experience from "@/data/experience";

export default function ExperiencePage() {
  return (
    <Section title="Experience" kicker="Leadership early">
      <div className="grid gap-4">
        {experience.map((job) => (
          <Card
            key={job.company}
            title={`${job.role} — ${job.company}`}
            right={
              <span className="shrink-0 text-xs text-zinc-400">
                {job.start} — {job.end}
              </span>
            }
          >
            <ul className="ml-4 list-disc space-y-2 text-sm text-zinc-300">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <Card title="Client handling" desc="Requirements → clarifications → delivery updates → trust." tags={["Communication", "Delivery"]} />
        <Card title="Project management" desc="Planning, task breakdown, reviews, and release discipline." tags={["Ownership", "Process"]} />
        <Card title="Engineering craft" desc="Clean APIs, data modeling, performance tuning, and reliability." tags={["Quality", "Scale"]} />
      </div>
    </Section>
  );
}
