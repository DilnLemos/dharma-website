import { useEffect, useState } from "react";
import {
  AFTERNOON_SCHEDULES,
  DAYS,
  MORNING_SCHEDULES,
  WHATSAPP_URL,
} from "@/utils";
import { Anim, Presence, useMotionReduced } from "./MotionProvider";

export default function Schedule() {
  const [scheduleIndex, setScheduleIndex] = useState(0);
  const [scheduleStarted, setScheduleStarted] = useState(false);
  const reduceMotion = useMotionReduced();
  // Animations are lazy-loaded; keep static fallbacks here.

  useEffect(() => {
    if (!scheduleStarted) return;

    const intervalId = window.setInterval(() => {
      setScheduleIndex((currentIndex) => currentIndex + 1);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [scheduleStarted]);

  const morningSchedule =
    MORNING_SCHEDULES[scheduleIndex % MORNING_SCHEDULES.length];
  const afternoonSchedule =
    AFTERNOON_SCHEDULES[scheduleIndex % AFTERNOON_SCHEDULES.length];

  return (
    <section id="horarios" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-display text-lime flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
              <span
                aria-hidden="true"
                className="bg-lime h-0.75 w-10 [clip-path:polygon(5px_0,100%_0,100%_100%,0_100%,0_5px)]"
              />
              Horarios
            </p>
            <h2 className="font-display text-fg mt-5 max-w-lg text-5xl leading-[0.9] font-bold tracking-tight uppercase sm:text-7xl">
              Encuentra tu horario.
            </h2>
            <p className="text-fg-muted mt-6 max-w-md text-base leading-7 sm:text-lg">
              Las clases tienen una duración de 1 hora. Elige el horario que
              mejor se adapte a tu ritmo.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-lime font-display text-bg focus-visible:outline-fg mt-8 inline-flex items-center justify-center px-7 py-4 text-sm font-bold tracking-wider uppercase transition-[filter] duration-200 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 active:brightness-95"
            >
              Preguntar por horarios
            </a>
          </div>

          <Anim
            tag="div"
            motionProps={{
              initial: { opacity: 0, y: -18 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: reduceMotion ? 0 : 0.9 },
            }}
            onViewportEnter={() => setScheduleStarted(true)}
            className="border-border bg-card-bg mt-12 border"
          >
            <div className="border-border grid border-b sm:grid-cols-2">
              <div className="border-border border-b p-6 sm:border-r sm:border-b-0 sm:p-8">
                <p className="font-display text-fg-muted text-sm font-semibold tracking-[0.18em] uppercase">
                  Mañana
                </p>
                <div className="mt-3 min-h-12 sm:min-h-15">
                  <Presence>
                    <Anim
                      tag="p"
                      motionProps={{
                        key: morningSchedule,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: reduceMotion ? 0 : 0.45 },
                      }}
                      className="font-display text-lime text-4xl font-bold tracking-tight sm:text-5xl"
                    >
                      {morningSchedule}
                    </Anim>
                  </Presence>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <p className="font-display text-fg-muted text-sm font-semibold tracking-[0.18em] uppercase">
                  Tarde
                </p>
                <div className="mt-3 min-h-12 sm:min-h-15">
                  <Presence>
                    <Anim
                      tag="p"
                      motionProps={{
                        key: afternoonSchedule,
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: reduceMotion ? 0 : 0.45 },
                      }}
                      className="font-display text-lime text-4xl font-bold tracking-tight sm:text-5xl"
                    >
                      {afternoonSchedule}
                    </Anim>
                  </Presence>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="font-display text-fg text-xl font-semibold tracking-wide uppercase">
                  Todos los días
                </h3>
                <span className="text-fg-muted flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
                  <span aria-hidden="true" className="bg-fg-muted h-2 w-2" />
                  Disponible
                </span>
              </div>
              <div className="grid grid-cols-5 gap-x-1 sm:gap-x-4">
                {DAYS.map((day) => (
                  <div
                    key={day}
                    className="border-border text-lime min-w-0 border-t py-4 text-center text-xs tracking-tight whitespace-nowrap sm:text-sm sm:tracking-normal"
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </Anim>
        </div>
      </div>
    </section>
  );
}
