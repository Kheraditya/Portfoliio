import React from "react";

type CalloutType = "info" | "success" | "warning" | "danger";

const styles: Record<CalloutType, string> = {
  info: "border-blue-400/30 bg-blue-500/10 text-blue-50",
  success: "border-emerald-400/30 bg-emerald-500/10 text-emerald-50",
  warning: "border-amber-400/30 bg-amber-500/10 text-amber-50",
  danger: "border-rose-400/30 bg-rose-500/10 text-rose-50",
};

export default function Callout({
  type = "info",
  children,
}: {
  type?: CalloutType;
  children: React.ReactNode;
}) {
  return (
    <div
      className={[
        "my-6 rounded-2xl border px-4 py-3 shadow-sm",
        "backdrop-blur",
        styles[type],
      ].join(" ")}
    >
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
