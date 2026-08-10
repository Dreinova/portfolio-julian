import Reveal from "./Reveal";
import {
  EnvelopeSimple,
  Phone,
  MapPin,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { profile } from "../data";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-white/10 bg-white/[0.02]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[80vh] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.35), transparent 62%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl">
            ¿Construimos algo{" "}
            <span className="text-accent-bright">juntos</span>?
          </h2>
          <p className="mt-5 max-w-lg text-lg text-zinc-400">
            Estoy abierto a nuevos proyectos y colaboraciones. Escríbeme y
            respondo lo antes posible.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/40 p-6 transition-colors hover:border-white/25 sm:col-span-2"
            >
              <div className="flex items-center justify-between">
                <EnvelopeSimple size={22} className="text-accent-bright" />
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  className="text-zinc-600 transition-colors group-hover:text-white"
                />
              </div>
              <div className="mt-10">
                <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Email
                </div>
                <div className="mt-1 break-all text-lg text-white">
                  {profile.email}
                </div>
              </div>
            </a>

            <div className="flex flex-col gap-4">
              <a
                href={`tel:+57${profile.phone.replace(/\s/g, "")}`}
                className="group flex flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/40 p-5 transition-colors hover:border-white/25"
              >
                <Phone size={20} className="text-accent-bright" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    Teléfono
                  </div>
                  <div className="mt-0.5 text-white">{profile.phone}</div>
                </div>
              </a>
              <div className="flex flex-1 items-center gap-4 rounded-2xl border border-white/10 bg-zinc-950/40 p-5">
                <MapPin size={20} className="text-accent-bright" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    Ubicación
                  </div>
                  <div className="mt-0.5 text-white">{profile.location}</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
