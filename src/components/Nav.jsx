import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const links = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-zinc-950/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2">
          <span className="font-mono text-sm font-semibold tracking-tight text-white">
            julián<span className="text-accent-bright">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-transform active:scale-[0.97] hover:bg-zinc-200"
          >
            Trabajemos juntos
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-zinc-300 md:hidden"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-zinc-950"
            >
              Trabajemos juntos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
