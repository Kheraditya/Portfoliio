"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fade = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } };

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 shadow-2xl shadow-black/30 md:p-12">
      <div className="absolute -left-24 -top-24 h-72 w-72 animate-floaty rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-72 w-72 animate-floaty rounded-full bg-cyan-500/20 blur-3xl" />

      <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 }}}}>
        <motion.p variants={fade} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Available for backend / full‑stack / mobile roles
        </motion.p>

        <motion.h1 variants={fade} className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
          I build <span className="bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">backend systems</span> and{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">mobile apps</span> that ship.
        </motion.h1>

        <motion.p variants={fade} className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
          Associate Software Developer • Project lead early in my career. I work with <b>.NET 8 / C#</b>, <b>Node.js</b>, and <b>SQL</b> for backend,
          and build safety-focused mobile apps with <b>React Native</b>.
        </motion.p>

        <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className="rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 no-underline hover:bg-zinc-200">
            View Projects
          </Link>
          <Link href="/blog" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm no-underline hover:bg-white/10">
            Read Blog
          </Link>
          <a href="/resume.pdf" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm no-underline hover:bg-white/10">
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
