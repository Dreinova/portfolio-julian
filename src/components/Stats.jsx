import Reveal from "./Reveal";
import { profile, stats } from "../data";

export default function Stats() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* About paragraph + numbers, one composed band */}
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <Reveal className="lg:col-span-7">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Sobre mí
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:col-span-5">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="font-mono text-4xl font-semibold text-white md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm leading-snug text-zinc-500">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
