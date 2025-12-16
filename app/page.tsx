import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { Card } from "@/components/Card";
import { GitHubPanel } from "@/components/GitHubPanel";
import { ContributionsHeatmap } from "@/components/ContributionsHeatmap";
import { AdminDashboardDemo } from "@/components/AdminDashboardDemo";
import Playground from "@/components/Playground";
import { TechStack } from "@/components/TechStack";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />

      <Playground />

      <Section title="Proof of work" kicker="Projects that shipped">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <Card
              key={p.slug}
              title={p.title}
              desc={p.tagline}
              href={`/projects#${p.slug}`}
              tags={p.stack.slice(0, 4)}
            />
          ))}
        </div>
      </Section>

      <Section title="GitHub activity" kicker="Consistency, not repo list">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <GitHubPanel username="Kheraditya" />
          <ContributionsHeatmap username="Kheraditya" />
        </div>
      </Section>
      <Section title="Tech Stack" kicker="Tools & Technologies">
        <TechStack />
      </Section>

      <div className="hidden lg:block">
        <Section title="Admin dashboard demo" kicker="Interactive mock">
          <AdminDashboardDemo />
        </Section>
      </div>

      <Section title="How I work" kicker="Leadership + engineering">
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title="Ownership"
            desc="From requirements to release — I lead delivery and own the outcome."
            tags={["Project Lead", "Delivery", "Quality"]}
          />
          <Card
            title="Backend first"
            desc="APIs, database modeling, performance, reliability, and clean architecture."
            tags={[".NET 8", "Node.js", "SQL"]}
          />
          <Card
            title="Mobile impact"
            desc="React Native apps with real-world features like SOS alerts and notifications."
            tags={["React Native", "FCM", "SMS/Email"]}
          />
        </div>
      </Section>
    </div>
  );
}
