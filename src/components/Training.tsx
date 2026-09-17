const TRAINING_TYPES = [
  {
    number: "01",
    title: "CrossFit",
    description:
      "Movimientos funcionales, intensidad y variedad para desafiarte en cada sesión.",
  },
  {
    number: "02",
    title: "Entrenamiento funcional",
    description:
      "Desarrolla tus capacidades físicas mediante movimientos funcionales y trabajo constante.",
  },
  {
    number: "03",
    title: "Clases grupales",
    description:
      "Entrena acompañado y forma parte de la comunidad que impulsa tu evolución.",
  },
] as const;

export default function Training() {
  return (
    <section id="entrenamientos" className="py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-display text-lime text-sm font-semibold tracking-[0.2em] uppercase">
            ¿Qué hacemos?
          </p>
          <h2 className="font-display text-fg mt-5 text-5xl leading-[0.9] font-bold tracking-tight uppercase sm:text-7xl">
            Entrenamientos para superarte.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3 lg:gap-6">
          {TRAINING_TYPES.map((training) => (
            <article
              key={training.number}
              className="border-border bg-card-bg group hover:border-lime relative flex min-h-72 flex-col justify-between border p-6 transition-colors duration-300 sm:p-8"
            >
              <span className="font-display text-lime text-5xl leading-none font-bold opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                {training.number}
              </span>
              <div>
                <h3 className="font-display text-fg text-3xl font-bold tracking-wide uppercase sm:text-4xl">
                  {training.title}
                </h3>
                <p className="text-fg-muted mt-4 max-w-sm text-sm leading-relaxed sm:text-base">
                  {training.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
