"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Section } from "@/components/Section";

export default function Playground({ initial = "help" }: { initial?: string }) {
  const [input, setInput] = useState(initial);
  const router = useRouter();

  const output = useMemo(() => {
    const cmd = input.trim().toLowerCase();
    if (cmd === "help")
      return "Try: projects | github | contact | experience | blog | resume";
    if (cmd === "projects")
      return "Navigate to /projects — case studies are waiting.";
    if (cmd === "github") return "GitHub: https://github.com/Kheraditya";
    if (cmd === "contact") return "Email: adityakher303@gmail.com";
    if (cmd === "experience")
      return "Navigate to /experience — my work history.";
    if (cmd === "blog") return "Navigate to /blog — my thoughts and ideas.";
    if (cmd === "resume") return "Opening resume...";
    return `Unknown command: ${cmd}. Type 'help'.`;
  }, [input]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    const cmd = input.trim().toLowerCase();
    if (cmd === "resume") {
      router.push("/resume");
      return;
    }
    if (cmd === "projects") {
      router.push("/projects");
      return;
    }
    if (cmd === "experience") {
      router.push("/experience");
      return;
    }
    if (cmd === "blog") {
      router.push("/blog");
      return;
    }
    if (cmd === "github") {
      window.open("https://github.com/Kheraditya", "_blank");
      return;
    }
    if (cmd === "contact") {
      router.push("/contact");
      return;
    }
  }

  return (
    <Section title="Playground" kicker="Tiny interactive flex">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
        <p className="text-sm text-zinc-300">
          A mini CLI. Because portfolios should be fun.
        </p>

        <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-950/60 p-4 font-mono text-sm text-zinc-200">
          <div className="text-xs text-zinc-400">$ kher-cli</div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-zinc-400">➜</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-transparent outline-none"
              aria-label="command input"
            />
          </div>
          <div className="mt-4 whitespace-pre-wrap">{output}</div>
        </div>
      </div>
    </Section>
  );
}
