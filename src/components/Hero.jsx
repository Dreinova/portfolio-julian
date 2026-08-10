import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin } from "@phosphor-icons/react";
import { profile } from "../data";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* soft radial backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[70vh] w-[70vh] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.35), transparent 62%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <motion.p
            {...rise(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-zinc-400"
          >
            <MapPin size={13} weight="fill" className="text-accent-bright" />
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Interfaces web y móviles que la gente{" "}
            <span className="text-accent-bright">disfruta usar</span>.
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            React y React Native. Más de {profile.years} años transformando
            diseños en productos rápidos, accesibles y bien construidos.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-zinc-950 transition-transform active:scale-[0.97] hover:bg-accent-bright"
            >
              Ver proyectos
              <ArrowDown
                size={16}
                weight="bold"
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-zinc-100 transition-colors active:scale-[0.97] hover:bg-white/5"
            >
              Trabajemos juntos
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </motion.div>
        </div>

        {/* Right — portrait / workspace visual (placeholder photo, swap for a real one) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10">
            <img
              src="https://picsum.photos/seed/julian-frontend-workspace/900/1100"
              alt="Espacio de trabajo de desarrollo frontend"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
              <div className="font-mono text-xs text-zinc-300">
                <span className="text-accent-bright">{"</>"}</span> React · React Native
              </div>
              <div className="rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-1 font-mono text-[11px] text-zinc-300 backdrop-blur">
                +{profile.years} años
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
