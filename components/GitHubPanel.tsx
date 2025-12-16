import Image from "next/image";
import { getGitHubUser } from "@/lib/github";

export async function GitHubPanel({ username }: { username: string }) {
  const user = await getGitHubUser(username);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex items-center gap-4">
        <Image
          src={user.avatar_url}
          alt={user.login}
          width={56}
          height={56}
          className="h-14 w-14 rounded-2xl ring-1 ring-white/10"
        />
        <div>
          <p className="text-sm text-zinc-400">GitHub</p>
          <a
            href={user.html_url}
            target="_blank"
            className="text-lg font-semibold no-underline hover:underline"
          >
            @{user.login}
          </a>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {user.public_repos} repos (hidden here)
            </span>
            {/* <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {user.followers} followers
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              {user.following} following
            </span> */}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/60 p-4 font-mono text-xs text-zinc-300">
        <p className="text-zinc-400">$ git log --oneline -n 1</p>
        <p className="mt-2">
          <span className="text-white">1f3a9c2</span> — shipped a portfolio
          upgrade (heatmap + dashboard demo)
        </p>
      </div>
    </div>
  );
}
