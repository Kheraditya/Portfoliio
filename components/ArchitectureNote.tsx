import React from "react";

export default function ArchitectureNote({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-2xl border border-slate-300/15 bg-slate-900/40 px-5 py-4 shadow-sm">
      <div className="text-sm font-semibold text-slate-100">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-200/90">
        {children}
      </div>
    </div>
  );
}
