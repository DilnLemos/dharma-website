import DharmaLogo from "@/assets/DharmaLogo.webp";
import GithubIcon from "@/assets/github.svg";
import InstagramIcon from "@/assets/Instagram.svg";
import WhatsappIcon from "@/assets/Whatsapp.svg";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/utils";

const FOOTER_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Entrenamientos", href: "#entrenamientos" },
  { label: "Horarios", href: "#horarios" },
  { label: "Coach", href: "#coach" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
] as const;

const CHANNELS = [
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    icon: WhatsappIcon,
  },
] as const;

const TEAM_MEMBERS = [
  {
    name: "Dilan Lemos",
    instagram: "https://www.instagram.com/dilnlemos",
    github: "https://github.com/DilnLemos",
  },
  {
    name: "Álvaro José",
    instagram: "https://www.instagram.com/alvarito_personal1357",
    github: "https://github.com/AlvaroJose1357",
  },
] as const;

const linkClasses =
  "font-display text-fg/80 hover:text-lime focus-visible:outline-lime text-sm font-medium tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4";

export default function Footer() {
  return (
    <footer className="border-border bg-bg border-t">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr_0.9fr] lg:gap-0">
          <div className="lg:pr-10">
            <a
              href="#inicio"
              className="focus-visible:outline-lime inline-flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <img
                src={DharmaLogo}
                alt="Logo Dharma CrossFit"
                className="h-12 w-12 object-contain"
                width={48}
                height={48}
              />
              <span className="font-display text-fg text-2xl leading-none font-bold tracking-wider uppercase">
                Dharma
                <br />
                CrossFit
              </span>
            </a>
            <p className="text-fg-muted mt-5 max-w-[24ch] text-sm leading-relaxed">
              Roldanillo,
              <br />
              Valle del Cauca
            </p>
          </div>

          <div className="lg:border-border lg:border-l lg:px-10">
            <p className="font-display text-fg-muted text-sm font-semibold tracking-[0.2em] uppercase">
              <span aria-hidden="true" className="text-lime">
                {"//"}
              </span>{" "}
              Enlaces
            </p>
            <nav aria-label="Enlaces del sitio">
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={linkClasses}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:border-border lg:border-l lg:px-10">
            <p className="font-display text-fg-muted text-sm font-semibold tracking-[0.2em] uppercase">
              <span aria-hidden="true" className="text-lime">
                {"//"}
              </span>{" "}
              Canales
            </p>
            <nav aria-label="Redes y contacto">
              <ul className="mt-6 space-y-4">
                {CHANNELS.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Abrir ${channel.label} de Dharma CrossFit`}
                      className="font-display text-fg/80 hover:text-lime focus-visible:outline-lime flex items-center gap-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4"
                    >
                      <img
                        src={channel.icon}
                        alt=""
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0"
                      />
                      {channel.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-border mt-12 flex flex-col gap-3 border-t pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Team members" className="order-2 sm:order-1">
            <h2 className="sr-only">Team members</h2>
            <ul className="text-fg-muted flex flex-col gap-3 text-xs tracking-[0.12em] uppercase">
              {TEAM_MEMBERS.map((member) => (
                <li key={member.name} className="flex items-center gap-4">
                  <span className="min-w-28">{member.name}</span>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime focus-visible:outline-lime transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    <span className="sr-only">
                      Instagram profile of {member.name}
                    </span>
                    <img
                      src={InstagramIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime focus-visible:outline-lime transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
                  >
                    <span className="sr-only">
                      GitHub profile of {member.name}
                    </span>
                    <img
                      src={GithubIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-8 w-8"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-fg-muted order-1 text-xs tracking-wider sm:order-2">
            © {new Date().getFullYear()} Dharma CrossFit - Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
