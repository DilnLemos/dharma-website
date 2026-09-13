import Persona1 from "@/assets/Persona1.webp";
import Persona2 from "@/assets/Persona2.webp";
import Persona3 from "@/assets/Persona3.webp";

const PILLARS = ["Comunidad", "Disciplina", "Entrenamiento"] as const;

// Mancha de pintura con brocha en colores de marca, detrás del collage.
function PaintSplash() {
  return (
    <svg
      viewBox="0 0 560 640"
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden="true"
    >
      {/* Barrido principal en petróleo: pincelada que recorre la base del collage */}
      <path
        fill="var(--color-petrol)"
        d="M30 480C10 400 70 330 150 300c50-20 90 0 130-10 60-18 130-40 190-22 50 15 75 62 40 112-32 45-90 68-140 90-50 22-60 65-115 90-75 35-200 5-225-80Z"
      />
      {/* Acento lima: trazo corto y seco, arriba a la derecha, como marca de brocha */}
      <path
        fill="var(--color-lime)"
        d="M350 150c60-20 120 10 150 50 10 15 5 30-10 40-20 12-50 0-70-20-30-30-70-50-70-70Z"
      />
      {/* Mano de brocha en lima oscuro cerca de la base */}
      <path
        fill="var(--color-lime-dark)"
        d="M120 220c-15-10-25-25-15-40 10-15 30-15 40-2 10 12 3 27-10 32-5 4-10 16-15 10Z"
      />
      {/* Salpicaduras puntuales */}
      <circle cx="78" cy="120" r="6" fill="var(--color-lime)" />
      <circle cx="512" cy="300" r="5" fill="var(--color-lime-dark)" />
      <circle cx="300" cy="610" r="7" fill="var(--color-lime-dark)" />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="nosotros"
      className="pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-20 lg:pb-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <div>
          <p className="font-display text-fg-muted text-sm font-medium tracking-[0.25em] uppercase">
            <span className="text-lime">¿</span> Quiénes somos{" "}
            <span className="text-lime">?</span>
          </p>

          <h2 className="font-display text-fg mt-6 text-6xl leading-[0.92] font-bold tracking-tight uppercase sm:text-7xl">
            Entrena<span className="text-lime">.</span>
            <br />
            Evoluciona<span className="text-lime">.</span>
          </h2>

          {/* TODO: confirmar redacción final con el box (§12) */}
          <div className="text-fg-muted mt-6 max-w-lg space-y-4 text-base leading-relaxed sm:text-lg">
            <p>
              Dharma no es un gimnasio más. Es el box donde el caucho huele a
              esfuerzo, cada rep más cuenta y una comunidad entera se exige ser
              mejor cada día.
            </p>
            <p>
              Aquí la disciplina se entrena, se comparte y se celebra. Cada
              entreno es la excusa perfecta para evolucionar un poco más.
            </p>
          </div>

          <div className="border-border mt-10 border-t pt-6">
            <ul className="flex flex-wrap gap-x-10 gap-y-4">
              {PILLARS.map((pillar) => (
                <li
                  key={pillar}
                  className="font-display text-fg/90 flex items-center gap-3 text-base font-semibold tracking-widest uppercase"
                >
                  <span
                    aria-hidden="true"
                    className="bg-lime h-2 w-2 [clip-path:polygon(2px_0,100%_0,100%_100%,0_100%,0_2px)]"
                  />
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mx-auto aspect-4/5 w-full max-w-lg lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rotate-[-4deg] sm:-inset-8 lg:-inset-10"
          >
            <PaintSplash />
          </div>

          <div
            aria-hidden="true"
            className="from-bg via-bg/85 pointer-events-none absolute inset-x-[-20%] bottom-[-2%] z-20 h-40 bg-linear-to-t to-transparent blur-[5px]"
          />

          <img
            src={Persona1}
            alt="Miembro de la comunidad Dharma CrossFit en una sesión de entrenamiento en el box"
            className="absolute right-[60%] bottom-0 z-1 h-[95%] w-auto rotate-2"
            width={1080}
            height={1350}
            loading="lazy"
          />
          <img
            src={Persona2}
            alt="Deportista de Dharma CrossFit entrenando en el box de Roldanillo"
            className="absolute bottom-[-10%] left-[-10%] z-10 h-full w-auto"
            width={1080}
            height={2196}
            loading="lazy"
          />
          <img
            src={Persona3}
            alt="Deportista de Dharma CrossFit entrenando en el box de Roldanillo"
            className="absolute bottom-[5%] left-[50%] z-0 h-[95%] w-auto"
            width={1080}
            height={2196}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
