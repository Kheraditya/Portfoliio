"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 -mx-4 border-b border-white/10 bg-zinc-950/70 px-4 backdrop-blur">
      <div className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 no-underline"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/70 to-cyan-500/70 shadow-lg shadow-fuchsia-500/10 ring-1 ring-white/10">
            <span className="font-mono text-sm">AK</span>
          </span>
          <span className="text-sm tracking-wide text-zinc-200 group-hover:text-white">
            Aditya Kher
          </span>
        </Link>

        <nav className="hidden gap-2 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded-2xl px-3 py-2 text-sm no-underline transition",
                  "hover:bg-white/5 hover:text-white",
                  active ? "bg-white/10 text-white" : "text-zinc-300",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="https://github.com/Kheraditya"
          target="_blank"
          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm no-underline hover:bg-white/10"
        >
          GitHub ↗
        </Link>
      </div>
    </header>
  );
}
