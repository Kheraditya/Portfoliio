import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-zinc-400">© {year} Aditya Kher • Built with Next.js • Funk mode always on ✨</p>
        <div className="flex gap-4 text-sm">
          <Link className="text-zinc-300 hover:text-white" href="/blog">Blog</Link>
          <Link className="text-zinc-300 hover:text-white" href="/projects">Projects</Link>
          <a className="text-zinc-300 hover:text-white" href="mailto:adityakher303@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
