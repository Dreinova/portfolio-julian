import Reveal from "./Reveal";
import { skillGroups, education } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Skills */}
        <div className="lg:col-span-8">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Stack &amp; habilidades
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.04}>
                <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-12 sm:items-center">
                  <div className="font-mono text-sm text-accent-bright sm:col-span-3">
                    {group.label}
                  </div>
                  <div className="flex flex-wrap gap-2 sm:col-span-9">
                    {group.items.map((it) => (
                      <span
                        key={it}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-300"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education aside */}
        <div className="lg:col-span-4">
          <Reveal>
            <h3 className="font-mono text-sm uppercase tracking-widest text-zinc-500">
              Educación
            </h3>
            <div className="mt-6 space-y-6">
              {education.map((e) => (
                <div key={e.title}>
                  <div className="text-white">{e.title}</div>
                  <div className="mt-1 text-sm text-zinc-500">
                    {e.place ? `${e.place} · ${e.year}` : e.year}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
