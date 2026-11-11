const ISOTYPE = `${import.meta.env.BASE_URL}brand/jd-isotipo.svg`;

export function Isotype({ className = "" }) {
  return <img src={ISOTYPE} alt="" className={className} />;
}

// Versión horizontal de la marca. El nombre va en HTML (no en el SVG) porque
// un <img> no carga Geist; el descriptor reemplaza al "Desarrollo · Fotografía"
// del logo original, que aquí no aplica.
export default function Logo({ descriptor, className = "h-9 w-9" }) {
  return (
    <span className="flex items-center gap-3">
      <Isotype className={`flex-none ${className}`} />
      <span className="flex flex-col">
        <span className="font-semibold leading-tight tracking-[-0.025em] text-white">
          Julián Delgado
        </span>
        {descriptor && (
          <span className="mt-1 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-white/60">
            {descriptor}
          </span>
        )}
      </span>
    </span>
  );
}
