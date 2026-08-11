import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowUpRight } from "@phosphor-icons/react";
import { projects } from "../data";

const BASE = import.meta.env.BASE_URL;

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-zinc-400">
      {children}
    </span>
  );
}

// Screenshot con placeholder de respaldo si la imagen aún no existe.
function Shot({ image, domain, alt }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
      {ok ? (
        <img
          src={`${BASE}projects/${image}.jpg`}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          onLoad={(e) => {
            // Algunos hosts devuelven 200 + HTML para archivos ausentes;
            // una imagen real siempre tiene ancho > 0.
            if (e.currentTarget.naturalWidth === 0) setOk(false);
          }}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(16,185,129,0.22), transparent 60%)",
          }}
        >
          <span className="font-mono text-sm text-zinc-500">{domain}</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
    </div>
  );
}

function FeaturedCard({ p }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/25"
    >
      <Shot image={p.image} domain={p.domain} alt={`Captura de ${p.title}`} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-medium text-white">{p.title}</h3>
            <div className="mt-1 font-mono text-xs text-zinc-500">
              {p.domain}
            </div>
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
    </a>
  );
}

function CompactCard({ p }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors hover:border-white/25"
    >
      <Shot image={p.image} domain={p.domain} alt={`Captura de ${p.title}`} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-medium text-white">{p.title}</h3>
            <div className="mt-0.5 font-mono text-[11px] text-zinc-500">
              {p.domain}
            </div>
          </div>
          <ArrowUpRight
            size={16}
            weight="bold"
            className="mt-0.5 flex-none text-zinc-600 transition-colors group-hover:text-accent-bright"
          />
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {p.blurb}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="proyectos" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Proyectos
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            Una selección de sitios y productos en producción, en turismo,
            cultura, educación y música. Toca cualquiera para visitarlo.
          </p>
        </Reveal>

        {/* Destacados */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <FeaturedCard p={p} />
            </Reveal>
          ))}
        </div>

        {/* Resto */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <CompactCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
