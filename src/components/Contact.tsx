import DharmaLogo from "@/assets/DharmaLogoHD.webp";
import cardImg from "@/assets/fondo_card.webp";
import instagramIcon from "@/assets/Instagram.svg";
import whatsappIcon from "@/assets/Whatsapp.svg";
import { INSTAGRAM_URL, WHATSAPP_CTA_URL } from "@/utils";

export default function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-titulo"
      className="bg-petrol relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <img
        src={DharmaLogo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover blur-[15px]"
        loading="lazy"
      />

      <div
        aria-hidden="true"
        className="from-bg pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b to-transparent sm:h-28 lg:h-32"
      />

      <div
        aria-hidden="true"
        className="to-bg pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-b from-transparent sm:h-28 lg:h-32"
      />

      <div className="relative mx-auto w-[92%] max-w-153.75">
        <div className="relative overflow-hidden lg:aspect-[1226/652]">
          <img
            src={cardImg}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
            loading="lazy"
          />

          <div className="relative flex h-auto flex-col items-center justify-center gap-3 px-5 py-10 text-center sm:px-8 sm:py-12 lg:h-full lg:px-0 lg:py-0">
            <h2
              id="contacto-titulo"
              className="font-bangers text-bg text-[clamp(1.5rem,5.5vw,2.5rem)] leading-[1.1] uppercase lg:text-[48px] lg:leading-[1.1]"
            >
              <span className="block lg:whitespace-nowrap">
                ¿Qué día es que vas
              </span>
              <span className="block lg:whitespace-nowrap">
                a empezar a entrenar?
              </span>
            </h2>

            <p className="font-bangers text-olive text-[clamp(1.25rem,4.5vw,1.75rem)] leading-tight lg:text-[28px]">
              Vamo&apos; a darle
            </p>

            <div className="mt-2 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:gap-4 lg:flex-row lg:items-center lg:gap-3.5">
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noreferrer"
                className="font-bangers focus-visible:outline-fg bg-bg inline-flex h-11.5 items-center justify-center gap-2 px-6 text-[22px] leading-none tracking-wide text-white uppercase transition-[background-color] duration-200 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] hover:bg-[#1a2121] focus-visible:outline-2 focus-visible:outline-offset-4 active:bg-[#0e1313]"
              >
                <img
                  src={whatsappIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5.25 shrink-0"
                />
                Escríbenos
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="font-bangers focus-visible:outline-fg bg-bg inline-flex h-11.5 items-center justify-center gap-2 px-6 text-[22px] leading-none tracking-wide text-white uppercase transition-[background-color] duration-200 [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%,0_10px)] hover:bg-[#1a2121] focus-visible:outline-2 focus-visible:outline-offset-4 active:bg-[#0e1313]"
              >
                <img
                  src={instagramIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0"
                />
                Síguenos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
