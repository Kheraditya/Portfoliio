export type GitHubUser = {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
};

export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
};

const GH = "https://api.github.com";

export async function getGitHubUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`${GH}/users/${username}`, {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`GitHub user fetch failed: ${res.status}`);
  return res.json();
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${GH}/users/${username}/repos?per_page=100&sort=pushed`,
    {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) throw new Error(`GitHub repos fetch failed: ${res.status}`);
  const repos: GitHubRepo[] = await res.json();
  return repos.sort(
    (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
  );
}

export type ContributionDay = {
  date: string;
  count: number;
  weekday?: number;
  color?: string;
};

export async function getGitHubContributions(
  username: string,
  days = 365
): Promise<ContributionDay[]> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is not set in environment.");

  const to = new Date();
  const from = new Date();
  from.setDate(to.getDate() - days);

  const query = `
    query ($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
                weekday
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
    },
    body: JSON.stringify({
      query,
      variables: {
        login: username,
        from: from.toISOString(),
        to: to.toISOString(),
      },
    }),
  });

  if (!res.ok) throw new Error(`GitHub GraphQL request failed: ${res.status}`);
  const payload = await res.json();
  if (payload.errors) throw new Error(JSON.stringify(payload.errors));

  const weeks =
    payload.data.user.contributionsCollection.contributionCalendar.weeks;
  const daysArr: ContributionDay[] = [];
  for (const w of weeks) {
    for (const d of w.contributionDays) {
      daysArr.push({
        date: d.date,
        count: d.contributionCount,
        weekday: d.weekday,
        color: d.color,
      });
    }
  }
  return daysArr;
}
