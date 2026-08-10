import Reveal from "./Reveal";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "../data";

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
      {children}
    </span>
  );
}

function FeaturedCard({ p }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${p.seed}/1000/640`}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-medium text-white">{p.title}</h3>
            <div className="mt-1 text-sm text-zinc-500">{p.client}</div>
          </div>
          <span className="rounded-full border border-white/10 p-2 text-zinc-400 transition-colors group-hover:bg-accent group-hover:text-zinc-950">
            <ArrowUpRight size={18} weight="bold" />
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-zinc-400">{p.blurb}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

function CompactCard({ p }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-2xl transition-opacity group-hover:opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.30), transparent 65%)",
        }}
      />
      <div className="flex items-start justify-between">
        <span className="font-mono text-xs text-zinc-600">{p.year}</span>
        <ArrowUpRight
          size={16}
          weight="bold"
          className="text-zinc-600 transition-colors group-hover:text-accent-bright"
        />
      </div>
      <h3 className="mt-4 text-lg font-medium text-white">{p.title}</h3>
      <div className="mt-1 text-sm text-zinc-500">{p.client}</div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {p.blurb}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="proyectos"
      className="border-t border-white/10 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Proyectos
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Una selección de productos web y móviles para clientes públicos y
            privados en Colombia, Estados Unidos y Perú.
          </p>
        </Reveal>

        {/* Featured row */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <FeaturedCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* Compact row */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <CompactCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
