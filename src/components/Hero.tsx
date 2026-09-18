import { motion } from "motion/react";

import DharmaHero from "@/assets/DharmaHero.webp";
import { WHATSAPP_URL } from "@/utils";

const heroItemVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

const heroButtonVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-end overflow-hidden lg:items-center"
    >
      <img
        src={DharmaHero}
        alt="Entrenamiento de CrossFit en el box de Dharma CrossFit, Roldanillo"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1125}
        fetchPriority="high"
        decoding="async"
      />

      <div
        aria-hidden="true"
        className="from-bg via-bg/70 to-bg/10 absolute inset-0 bg-linear-to-r"
      />
      <div
        aria-hidden="true"
        className="from-bg via-bg/40 absolute inset-0 bg-linear-to-t to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-12 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.16, delayChildren: 0.15 },
            },
          }}
          className="max-w-2xl"
        >
          <motion.p
            variants={heroItemVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-fg-muted flex items-center gap-3 text-sm font-medium tracking-[0.2em] uppercase"
          >
            <span
              aria-hidden="true"
              className="bg-lime h-0.75 w-10 [clip-path:polygon(5px_0,100%_0,100%_100%,0_100%,0_5px)]"
            />
            Roldanillo · Valle del Cauca
          </motion.p>

          <motion.p
            variants={heroItemVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-fg/90 mt-7 text-xl font-semibold tracking-[0.28em] uppercase sm:text-2xl"
          >
            Dharma CrsFit
          </motion.p>

          <motion.h1
            variants={heroItemVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-fg mt-2 text-5xl leading-[0.9] font-bold tracking-tight uppercase sm:text-7xl lg:text-8xl"
          >
            Eres tú <br></br>contra ti.
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-fg-muted mt-5 max-w-xl text-base sm:text-lg"
          >
            Tiempo para todo, menos para rendirte.
          </motion.p>

          <motion.p
            variants={heroItemVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-fg mt-6 flex items-center gap-2 text-sm sm:text-base"
          ></motion.p>

          <motion.div
            variants={heroButtonVariants}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-lime font-display text-bg focus-visible:outline-fg inline-flex items-center justify-center px-8 py-4 text-base font-bold tracking-wider uppercase transition-[filter] duration-200 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 active:brightness-95"
            >
              Empieza a entrenar
            </a>
            <a
              href="#nosotros"
              className="border-fg/40 font-display text-fg hover:border-lime hover:text-lime focus-visible:outline-lime inline-flex items-center justify-center border px-8 py-4 text-base font-bold tracking-wider uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Conoce el box
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
