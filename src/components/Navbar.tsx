import { useEffect, useRef, useState } from "react";
import DharmaLogo from "@/assets/DharmaLogo.jpg";
import { WHATSAPP_URL } from "@/utils";

const NAV_ITEMS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Entrenamientos", href: "#entrenamientos" },
  { label: "Horarios", href: "#horarios" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  };

  const headerClasses = [
    "fixed inset-x-0 top-0 z-50",
    "bg-transparent",
    "transition-colors duration-300",
    scrolled && "border-b border-border bg-bg/85 backdrop-blur-sm",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <a
          href="#inicio"
          className="focus-visible:outline-lime flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4"
          onClick={closeMenu}
        >
          <img
            src={DharmaLogo}
            alt="Logo Dharma CrossFit"
            className="h-11 w-11 object-contain"
            width={44}
            height={44}
          />
          <span className="font-display text-fg hidden text-lg font-semibold tracking-wider uppercase sm:block">
            Dharma CrsFit
          </span>
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-fg/80 hover:text-lime focus-visible:outline-lime text-sm font-medium tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="font-display text-bg bg-lime focus-visible:outline-fg px-5 py-2.5 text-sm font-semibold tracking-wider uppercase transition-[filter] duration-200 [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 active:brightness-95"
          >
            Vamo' a darle
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="text-fg hover:text-lime focus-visible:outline-lime flex h-11 w-11 items-center justify-center transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden"
          >
            {menuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        tabIndex={-1}
        hidden={!menuOpen}
        className="border-border bg-bg border-t lg:hidden"
      >
        <nav
          aria-label="Menú móvil"
          className="mx-auto flex max-w-7xl flex-col px-5 py-4 lg:px-8"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-border/60 font-display text-fg/85 hover:text-lime focus-visible:outline-lime border-b py-3 text-lg font-medium tracking-wide uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
