// Marca de sección: los 4 cuadrantes del logo con el de la sección encendido.
// Orden N·O / V·A: 0 rojo, 1 amarillo, 2 verde, 3 cian.
export default function Quadrant({ cell }) {
  return (
    <span aria-hidden className="mb-5 grid w-fit grid-cols-2 gap-0.5">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-2 w-2 ${i === cell ? "bg-accent" : "bg-white/15"}`}
        />
      ))}
    </span>
  );
}
