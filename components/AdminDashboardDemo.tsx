"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Alert = {
  id: string;
  user: string;
  channel: "SMS" | "PUSH" | "EMAIL";
  status: "New" | "Acknowledged" | "Resolved";
  time: string;
  location: string;
};

const seedAlerts: Alert[] = [
  {
    id: "ALRT-1042",
    user: "Priya",
    channel: "PUSH",
    status: "New",
    time: "12:14",
    location: "Noida Sector 62",
  },
  {
    id: "ALRT-1041",
    user: "Aisha",
    channel: "SMS",
    status: "Acknowledged",
    time: "11:58",
    location: "Dwarka, Delhi",
  },
  {
    id: "ALRT-1040",
    user: "Neha",
    channel: "EMAIL",
    status: "Resolved",
    time: "11:31",
    location: "Gurugram, Haryana",
  },
  {
    id: "ALRT-1039",
    user: "Riya",
    channel: "SMS",
    status: "New",
    time: "10:44",
    location: "South Delhi",
  },
];

const tabs = ["Overview", "Alerts", "Users", "Settings"] as const;
type Tab = (typeof tabs)[number];

function Pill({
  active,
  children,
}: {
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs",
        active
          ? "border-white/20 bg-white/10 text-white"
          : "border-white/10 bg-white/5 text-zinc-300",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

export function AdminDashboardDemo() {
  const [tab, setTab] = useState<Tab>("Alerts");
  const [q, setQ] = useState("");
  const [alerts, setAlerts] = useState<Alert[]>(seedAlerts);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return alerts;
    return alerts.filter((a) =>
      [a.id, a.user, a.channel, a.status, a.location].some((v) =>
        v.toLowerCase().includes(s)
      )
    );
  }, [alerts, q]);

  const stats = useMemo(() => {
    const total = alerts.length;
    const by = (st: Alert["status"]) =>
      alerts.filter((a) => a.status === st).length;
    return {
      total,
      newCount: by("New"),
      ack: by("Acknowledged"),
      res: by("Resolved"),
    };
  }, [alerts]);

  const act = (id: string, next: Alert["status"]) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: next } : a))
    );
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8 ">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm text-zinc-400">Admin dashboard demo</p>
          <h3 className="mt-1 text-xl font-semibold">Safety Ops Console</h3>
          <p className="mt-2 max-w-2xl text-sm text-zinc-300">
            An interactive mock of the admin dashboard for the Women Safety App
            — alerts, users, and operational control.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={[
                "rounded-2xl border px-3 py-2 text-sm transition",
                tab === t
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10",
              ].join(" ")}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-4">
          <p className="text-xs text-zinc-400">Total alerts</p>
          <p className="mt-2 text-2xl font-semibold">{stats.total}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-4">
          <p className="text-xs text-zinc-400">New</p>
          <p className="mt-2 text-2xl font-semibold">{stats.newCount}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-4">
          <p className="text-xs text-zinc-400">Acknowledged</p>
          <p className="mt-2 text-2xl font-semibold">{stats.ack}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-zinc-950/60 p-4">
          <p className="text-xs text-zinc-400">Resolved</p>
          <p className="mt-2 text-2xl font-semibold">{stats.res}</p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-zinc-950/60 p-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Pill active={tab === "Alerts"}>Live queue</Pill>
            <Pill>Multi-channel</Pill>
            <Pill>Audit-ready</Pill>
          </div>

          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search alerts, user, location…"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 outline-none placeholder:text-zinc-500 md:w-[320px]"
          />
        </div>

        {tab === "Overview" ? (
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">Dispatch policy</p>
              <p className="mt-2 text-sm text-zinc-200">
                PUSH → SMS fallback → EMAIL audit
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">SLA</p>
              <p className="mt-2 text-sm text-zinc-200">
                Ack within 2 mins • Resolve within 10 mins
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs text-zinc-400">Abuse controls</p>
              <p className="mt-2 text-sm text-zinc-200">
                Rate limit + idempotency + audit logs
              </p>
            </div>
          </div>
        ) : null}

        {tab === "Users" ? (
          <div className="mt-5 grid gap-3">
            {["Verified users", "Emergency contacts", "Device sessions"].map(
              (x) => (
                <div
                  key={x}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200"
                >
                  {x} — <span className="text-zinc-400">demo panel</span>
                </div>
              )
            )}
          </div>
        ) : null}

        {tab === "Settings" ? (
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium">Notification channels</p>
              <p className="mt-2 text-sm text-zinc-300">
                Enable/disable SMS, PUSH, EMAIL and configure fallback order.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium">Verification</p>
              <p className="mt-2 text-sm text-zinc-300">
                Email verification required before SOS activation.
              </p>
            </div>
          </div>
        ) : null}

        {tab === "Alerts" ? (
          <div className="mt-5 overflow-hidden rounded-3xl border border-white/10">
            <div className="grid grid-cols-12 gap-2 bg-white/5 px-4 py-3 text-xs text-zinc-400">
              <div className="col-span-2">Alert</div>
              <div className="col-span-2">User</div>
              <div className="col-span-2">Channel</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-3">Location</div>
              <div className="col-span-1 text-right">Action</div>
            </div>

            <div className="divide-y divide-white/10">
              {filtered.map((a) => (
                <motion.div
                  key={a.id}
                  layout
                  className="grid grid-cols-12 gap-2 px-4 py-3 text-sm"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="col-span-2 font-mono text-xs text-zinc-300">
                    {a.id} <span className="text-zinc-500">({a.time})</span>
                  </div>
                  <div className="col-span-2 text-zinc-200">{a.user}</div>
                  <div className="col-span-2 text-zinc-200">{a.channel}</div>
                  <div className="col-span-2">
                    <span
                      className={[
                        "inline-flex rounded-full border px-3 py-1 text-xs",
                        a.status === "New"
                          ? "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-200"
                          : a.status === "Acknowledged"
                          ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-200"
                          : "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
                      ].join(" ")}
                    >
                      {a.status}
                    </span>
                  </div>
                  <div className="col-span-3 text-zinc-300">{a.location}</div>
                  <div className="col-span-1 flex justify-end gap-2">
                    {a.status === "New" ? (
                      <button
                        onClick={() => act(a.id, "Acknowledged")}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs hover:bg-white/10"
                      >
                        Ack
                      </button>
                    ) : null}
                    {a.status !== "Resolved" ? (
                      <button
                        onClick={() => act(a.id, "Resolved")}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs hover:bg-white/10"
                      >
                        Resolve
                      </button>
                    ) : (
                      <span className="text-xs text-zinc-500">—</span>
                    )}
                  </div>
                </motion.div>
              ))}

              {!filtered.length ? (
                <div className="px-4 py-6 text-sm text-zinc-400">
                  No matching alerts.
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
