import { notFound } from "next/navigation";
import { Section } from "@/components/Section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Callout from "@/components/Callout";
import ArchitectureNote from "@/components/ArchitectureNote";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <Section
      title={post.meta.title}
      kicker={new Date(post.meta.date).toLocaleDateString()}
    >
      <article
        className="
  prose
  prose-invert
  max-w-none
  prose-headings:tracking-tight
  prose-h2:mt-10
  prose-h3:mt-6
  prose-p:text-zinc-300
  prose-li:text-zinc-300
  prose-strong:text-white
  prose-code:text-fuchsia-300
  prose-pre:bg-zinc-950/70
  prose-pre:border
  prose-pre:border-white/10
  prose-img:rounded-2xl
  prose-img:border
  prose-img:border-white/10
"
      >
        <MDXRemote
          source={post.content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          components={{ Callout, ArchitectureNote }}
        />
      </article>
    </Section>
  );
}
// import fs from "node:fs";
// import path from "node:path";
// import { notFound } from "next/navigation";

// const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// export default async function BlogPostPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
//   if (!fs.existsSync(filePath)) return notFound();

//   // MDX file is treated as a module by Next when imported dynamically.
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   const Post = (await import(`@/content/blog/${slug}.mdx`)).default;

//   return (
//     <main className="mx-auto max-w-3xl px-4 py-10 prose prose-invert">
//       <Post />
//     </main>
//   );
// }
