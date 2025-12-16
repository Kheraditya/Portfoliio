import Link from "next/link";
import { Section } from "@/components/Section";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndexPage() {
  const posts = getAllPosts();
  return (
    <Section title="Blog" kicker="Build logs + lessons">
      <div className="grid gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block rounded-3xl border border-white/10 bg-white/[0.04] p-6 no-underline hover:bg-white/[0.06]">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-lg font-semibold">{p.meta.title}</h3>
              <span className="text-xs text-zinc-400">{new Date(p.meta.date).toLocaleDateString()}</span>
            </div>
            <p className="mt-2 text-sm text-zinc-300">{p.meta.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(p.meta.tags ?? []).map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
