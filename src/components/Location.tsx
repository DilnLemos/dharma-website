import type { MouseEvent } from "react";

const ADDRESS = "Cra. 2 #11B-21, Roldanillo, Valle del Cauca, Colombia";
const PHONE = "+57 314 833 1777";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Dharma+CrossFit+Box/data=!4m2!3m1!1s0x0:0x688308c6ac7aa57f?sa=X&ved=1t:2428&ictx=111";
const MAP_COORDINATES = "4.4154744,-76.1487263";
const MOBILE_MAPS_URL = `geo:${MAP_COORDINATES}?q=${encodeURIComponent(`Dharma CrossFit Box, ${ADDRESS}`)}`;
const EMBED_MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(`Dharma CrossFit Box, ${ADDRESS}`)}&z=17&output=embed`;

function handleDirectionsClick(event: MouseEvent<HTMLAnchorElement>) {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    event.preventDefault();
    window.location.href = MOBILE_MAPS_URL;
  }
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="text-lime h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="text-lime h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="text-lime h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M6.5 3.5 9 3l2 5-2.5 1.5a15 15 0 0 0 6.5 6.5l1.5-2.5 5 2-.5 2.5c-.3 1.5-1.7 2.5-3.2 2.3C10.6 19.5 4.5 13.4 3.7 5.7 3.5 4.2 5 3.8 6.5 3.5Z" />
    </svg>
  );
}

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <p className="font-display text-lime text-sm font-semibold tracking-[0.2em] uppercase">
            Ubicación
          </p>
          <h2 className="font-display text-fg mt-4 text-5xl leading-[0.9] font-bold tracking-tight uppercase sm:text-7xl">
            Encuéntranos en Roldanillo.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch lg:gap-12">
          <div className="border-border min-h-80 overflow-hidden border sm:min-h-96">
            <iframe
              title="Mapa de Dharma CrossFit en Roldanillo"
              src={EMBED_MAP_URL}
              className="h-full min-h-80 w-full grayscale-[0.35] sm:min-h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="border-border bg-bg flex flex-col justify-between border p-6 sm:p-8">
            <div>
              <p className="font-display text-lime text-sm font-semibold tracking-[0.18em] uppercase">
                Información
              </p>

              <div className="mt-8 space-y-7">
                <div className="flex items-start gap-4">
                  <PinIcon />
                  <div>
                    <h3 className="font-display text-fg text-lg font-semibold tracking-wide uppercase">
                      Dirección
                    </h3>
                    <p className="text-fg-muted mt-1 text-sm leading-relaxed">
                      Cra. 2 #11B-21
                      <br />
                      Roldanillo, Valle del Cauca
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ClockIcon />
                  <div>
                    <h3 className="font-display text-fg text-lg font-semibold tracking-wide uppercase">
                      Horarios
                    </h3>
                    <p className="text-fg-muted mt-1 text-sm leading-relaxed">
                      Lunes a viernes
                      <br />
                      7:00–10:00 y 15:00–20:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <PhoneIcon />
                  <div>
                    <h3 className="font-display text-fg text-lg font-semibold tracking-wide uppercase">
                      Teléfono
                    </h3>
                    <a
                      href="tel:+573148331777"
                      className="text-fg-muted hover:text-lime focus-visible:outline-lime mt-1 inline-block text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      {PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                onClick={handleDirectionsClick}
                className="bg-lime font-display text-bg focus-visible:outline-fg inline-flex w-full items-center justify-center px-5 py-3 text-sm font-bold tracking-wider uppercase transition-[filter] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
