import Reveal from "./Reveal";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experiencia" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Experiencia
        </h2>
        <p className="mt-4 max-w-xl text-zinc-400">
          Ocho años entre el sector público y privado, en Colombia y en equipos
          remotos internacionales.
        </p>
      </Reveal>

      <div className="mt-14">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-6 border-t border-white/10 py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-4">
                <div className="font-mono text-sm text-accent-bright">
                  {job.period}
                </div>
                <h3 className="mt-3 text-xl font-medium text-white">
                  {job.role}
                </h3>
                <div className="mt-1 text-sm text-zinc-400">{job.company}</div>
                <div className="mt-0.5 text-sm text-zinc-600">{job.place}</div>
              </div>

              <ul className="space-y-4 md:col-span-8">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-zinc-300">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-accent"
                    />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
