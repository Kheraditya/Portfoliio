"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 -mx-4 border-b border-white/10 bg-zinc-950/70 px-4 backdrop-blur">
      <div className="flex items-center justify-between py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 no-underline"
          onClick={() => setIsOpen(false)}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500/70 to-cyan-500/70 shadow-lg shadow-fuchsia-500/10 ring-1 ring-white/10">
            <span className="font-mono text-sm">AK</span>
          </span>
          <span className="text-sm tracking-wide text-zinc-200 group-hover:text-white">
            Aditya Kher
          </span>
        </Link>

        {/* Desktop Nav */}
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

        {/* Desktop GitHub Link */}
        <div className="hidden md:block">
          <Link
            href="https://github.com/Kheraditya"
            target="_blank"
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm no-underline hover:bg-white/10"
          >
            GitHub ↗
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block rounded-lg p-2 text-zinc-400 hover:bg-white/5 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-zinc-950 md:hidden"
          >
            <nav className="flex flex-col gap-2 p-4">
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "block rounded-xl px-4 py-3 text-base font-medium transition",
                      active
                        ? "bg-white/10 text-white"
                        : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                href="https://github.com/Kheraditya"
                target="_blank"
                onClick={() => setIsOpen(false)}
                className="mt-2 block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-base font-medium text-white hover:bg-white/10"
              >
                GitHub ↗
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
