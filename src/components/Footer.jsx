import { profile } from "../data";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div aria-hidden className="nova-rule h-0.5" />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <Logo descriptor={profile.role} className="h-12 w-12" />

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
