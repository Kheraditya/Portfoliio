export function Section(props: { title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section className="py-10">
      {props.kicker ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400" />
          {props.kicker}
        </div>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{props.title}</h2>
      <div className="mt-6">{props.children}</div>
    </section>
  );
}
