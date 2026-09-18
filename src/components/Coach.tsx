import { m } from "motion/react";

import CoachImage from "@/assets/Coach.webp";

export default function Coach() {
  return (
    <section id="coach" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
        <p className="font-display text-lime flex items-center justify-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
          <span
            aria-hidden="true"
            className="bg-lime h-0.75 w-10 [clip-path:polygon(5px_0,100%_0,100%_100%,0_100%,0_5px)]"
          />
          Nuestro coach
          <span
            aria-hidden="true"
            className="bg-lime h-0.75 w-10 [clip-path:polygon(5px_0,100%_0,100%_100%,0_100%,0_5px)]"
          />
        </p>

        <h2 className="font-display text-fg mt-5 text-5xl leading-[0.9] font-bold tracking-tight uppercase sm:text-7xl">
          Conoce a quien te acompaña.
        </h2>

        <div className="mx-auto mt-12 grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <m.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="border-border bg-card-bg relative mx-auto w-full max-w-xl border p-3 sm:p-4"
          >
            <div
              aria-hidden="true"
              className="border-lime pointer-events-none absolute inset-3 border sm:inset-4"
            />
            <m.img
              initial={{ opacity: 0, y: 48, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 3.2,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              src={CoachImage}
              alt="Coach de Dharma CrossFit"
              className="mx-auto block aspect-4/5 w-full mask-[linear-gradient(to_bottom,black_78%,transparent_100%)] object-contain object-bottom [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]"
              width={768}
              height={960}
              loading="lazy"
            />
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1.2,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center lg:text-left"
          >
            <p className="font-display text-lime text-sm font-semibold tracking-[0.2em] uppercase">
              Coach
            </p>
            <h3 className="font-display text-fg mt-2 text-4xl font-bold tracking-tight uppercase sm:text-5xl">
              Haider Castañeda
            </h3>
            <p className="text-fg-muted mx-auto mt-4 max-w-lg text-base leading-relaxed sm:text-lg">
              La persona que acompaña cada sesión, guía tu entrenamiento y
              comparte el camino de evolución en Dharma CrossFit.
            </p>
            {/* <p className="text-fg-muted/70 mt-5 text-xs tracking-[0.16em] uppercase">
              Especialidad y certificaciones por confirmar
            </p> */}
          </m.div>
        </div>
      </div>
    </section>
  );
}
