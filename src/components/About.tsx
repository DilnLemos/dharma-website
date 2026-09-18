import { m } from "motion/react";
import Diseño1 from "@/assets/Diseño_ind.svg";
import Diseño2 from "@/assets/Diseño_ind2.svg";
import Persona1 from "@/assets/Persona1.webp";
import Persona2 from "@/assets/Persona2.webp";
import Persona3 from "@/assets/Persona3.webp";
import Persona4 from "@/assets/Persona4.webp";

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
      className="overflow-x-clip pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-20 lg:pb-32"
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

          <motion.img
            src={Persona1}
            alt="Miembro de la comunidad Dharma CrossFit en una sesión de entrenamiento en el box"
            className="absolute bottom-0 left-[-2%] z-20 h-[90%] w-auto rotate-2 sm:right-[60%] sm:left-auto sm:h-[95%]"
            width={1080}
            height={1350}
            loading="lazy"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            aria-hidden="true"
            className="via-bg/10 to-bg/45 pointer-events-none absolute bottom-0 left-[-2%] z-25 h-[24%] w-[48%] bg-linear-to-t from-transparent sm:right-[80%] sm:left-auto sm:w-[32%]"
          />
          <motion.img
            src={Persona2}
            alt="Deportista de Dharma CrossFit entrenando en el box de Roldanillo"
            className="absolute bottom-[-9%] left-2 z-30 h-[90%] w-auto sm:bottom-[-10%] sm:left-[-10%] sm:h-full"
            width={1080}
            height={2196}
            loading="lazy"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
          <div
            aria-hidden="true"
            className="via-bg/8 to-bg/55 pointer-events-none absolute bottom-[-9%] left-2 z-35 h-[28%] w-[52%] bg-linear-to-t from-transparent sm:bottom-[-10%] sm:left-[-10%] sm:w-[58%]"
          />
          <motion.img
            src={Persona3}
            alt="Deportista de Dharma CrossFit entrenando en el box de Roldanillo"
            className="absolute bottom-[5%] left-[48%] z-20 h-[90%] w-auto sm:left-[50%] sm:h-[95%]"
            width={1080}
            height={2196}
            loading="lazy"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            aria-hidden="true"
            className="via-bg/10 to-bg/45 pointer-events-none absolute bottom-[5%] left-[48%] z-25 h-[22%] w-[42%] bg-linear-to-t from-transparent sm:left-[50%] sm:w-[38%]"
          />
          <motion.img
            src={Persona4}
            alt="Deportista de Dharma CrossFit entrenando en el box de Roldanillo"
            className="absolute bottom-[39%] left-[15%] z-10 h-[90%] w-auto sm:left-[22%] sm:h-[47%]"
            width={1080}
            height={2196}
            loading="lazy"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <img
            src={Diseño1}
            alt="Deportista de Dharma CrossFit entrenando en el box de Roldanillo"
            className="absolute right-[54%] bottom-[70%] z-0 h-[6%] w-auto"
            style={{ transform: "rotate(-35deg)" }}
            width={1080}
            height={2196}
            loading="lazy"
          />

          <img
            src={Diseño1}
            alt="Deportista de Dharma CrossFit entrenando en el box de Roldanillo"
            className="absolute right-[57%] bottom-[60%] z-0 h-[6%] w-auto"
            style={{ transform: "rotate(-35deg)" }}
            width={1080}
            height={2196}
            loading="lazy"
          />

          <img
            src={Diseño2}
            alt="Deportista de Dharma CrossFit entrenando en el box de Roldanillo"
            className="absolute bottom-[77%] left-[63%] z-0 h-[4%] w-auto"
            style={{ transform: "rotate(35deg)" }}
            width={1080}
            height={2196}
            loading="lazy"
          />

          <img
            src={Diseño2}
            alt="Deportista de Dharma CrossFit entrenando en el box de Roldanillo"
            className="absolute bottom-[80%] left-[48%] z-0 h-[4%] w-auto"
            style={{ transform: "rotate(35deg)" }}
            width={1080}
            height={2196}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
