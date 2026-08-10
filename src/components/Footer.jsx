import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <div className="font-mono text-sm font-semibold text-white">
            julián<span className="text-accent-bright">.dev</span>
          </div>
          <div className="mt-1 text-sm text-zinc-500">
            {profile.name} · {profile.role}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <a href="#proyectos" className="hover:text-white">
            Proyectos
          </a>
          <a href="#experiencia" className="hover:text-white">
            Experiencia
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-white">
            {profile.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-5 sm:px-8">
        <div className="mx-auto max-w-6xl text-xs text-zinc-600">
          © {year} {profile.name}. Hecho con React, Vite y Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
