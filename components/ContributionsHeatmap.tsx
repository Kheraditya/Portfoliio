"use client";

import { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

type DayValue = { date: string; count: number };

export function ContributionsHeatmap({ username }: { username: string }) {
  const [values, setValues] = useState<DayValue[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setError(null);
      setValues(null);
      try {
        const res = await fetch(
          `/api/github-contributions?username=${encodeURIComponent(username)}`
        );
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        const mapped = data.map((d: any) => ({ date: d.date, count: d.count }));
        if (mounted) setValues(mapped);
      } catch (err: any) {
        if (mounted) setError(err.message || String(err));
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [username]);

  const start = new Date();
  start.setDate(start.getDate() - 364);
  const startStr = start.toISOString().slice(0, 10);
  const endStr = new Date().toISOString().slice(0, 10);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:col-span-2">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-zinc-400">GitHub contributions</p>
          <p className="mt-1 text-lg font-semibold">Commit heatmap</p>
          <p className="mt-2 text-sm text-zinc-300">
            A quick view of consistency and momentum — without listing
            repositories.
          </p>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm no-underline hover:bg-white/10"
        >
          @{username} ↗
        </a>
      </div>

      <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
        {error && (
          <div className="py-8 text-center text-sm text-rose-400">
            Error: {error}
          </div>
        )}

        {!values && !error && (
          <div className="py-8 text-center text-sm text-zinc-400">
            Loading...
          </div>
        )}

        {values && (
          <div className="max-w-full">
            <CalendarHeatmap
              startDate={startStr}
              endDate={endStr}
              values={values}
              showWeekdayLabels={true}
              classForValue={(value) => {
                if (!value || value.count === 0) return "color-empty";
                if (value.count >= 20) return "color-git-4";
                if (value.count >= 10) return "color-git-3";
                if (value.count >= 4) return "color-git-2";
                return "color-git-1";
              }}
            />
          </div>
        )}
      </div>

      <p className="mt-3 text-xs text-zinc-500">
        Tip: If the heatmap ever fails to load due to rate limits, refresh or
        open GitHub directly.
      </p>
    </div>
  );
}
