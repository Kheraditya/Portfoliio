import Link from "next/link";

export function Card(props: {
  title: string;
  desc?: string;
  href?: string;
  tags?: string[];
  right?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const Inner = (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-xl shadow-black/20">
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -inset-24 animate-shimmer bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.10),transparent)] bg-[length:200%_100%]" />
      </div>
      <div className="relative flex items-start justify-between gap-4">
        <div className="w-full">
          <h3 className="text-lg font-semibold tracking-tight">{props.title}</h3>
          {props.desc && (
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">
              {props.desc}
            </p>
          )}
          {props.children && <div className="mt-4">{props.children}</div>}
          {props.tags?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {props.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {props.right}
      </div>
    </div>
  );
  return props.href ? (
    <Link className="block no-underline" href={props.href}>
      {Inner}
    </Link>
  ) : (
    Inner
  );
}
