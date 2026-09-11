# DOC — Navbar (Dharma CrossFit)

Documentación de decisiones para la implementación de la barra de navegación.
Fuentes: `AGENTS.md` (§1–9) y `Dharma_CrossFit_Documento_Identidad_y_Landing.md` (§3, §4, §5, §10, §21, §22, §23).

## Decisiones de diseño

### Tipografía
- **Display / navegación:** Barlow Condensed (500/600/700), mayúsculas, `tracking-wide`, `text-sm` en desktop y `text-lg` en el menú móvil. Es una de las opciones de la identidad (§5) y refuerza el carácter editorial/atleético del logo.
- **Body global:** Inter, definido en `@theme` como `--font-sans`. Se cargan ambas vía Google Fonts en `index.html`.

### Color
- Tokens definidos una sola vez en `src/index.css` inside `@theme` (paleta exacta de AGENTS.md §2), no valores arbitrarios por componente.
- Navbar transparente sobre el Hero en la parte superior; al hacer scroll (≈8px) pasa a `bg-bg/85 + backdrop-blur-sm + border-b border-border` — el "fondo oscuro translúcido y desenfoque sutil" que pide §10/§23, sin caer en glassmorphism protagonista.
- CTA **EMPEZAR**: fondo llamativo (**lime**) con texto oscuro (`text-bg`), como exige §10 y §7 de AGENTS.md (texto oscuro sobre lima, no lima sobre texto blanco). El acento queda siempre en el 5% de la interfaz, nunca como color dominante.

### Layout
- `header` fijo, `h-16` (64px), contenedor `max-w-7xl` (1280px), padding móvil `px-5` (20px) → `lg:px-8`.
- Desktop (`lg:` ≥1024px): logo izquierda, 6 enlaces centrados-derecha, CTA derecha, **una sola línea** (pre-flight de diseño: nav de una línea, ≤80px de alto).
- Móvil/tablet (<1024px): logo + **EMPEZAR siempre visible** + hamburguesa. El panel de enlaces se despliega bajo la barra superior. Así se cumple el CTA persistente hacia WhatsApp de §22 sin un botón flotante separado que compita con el contenido.

### Geometría angular
- CTA con esquina biselada vía `clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)` — esquinas no redondeadas, respuesta directa a la geometría angular del logo (§3) y a la regla "angular corners" de AGENTS.md §7.

## Alternativas consideradas y descartadas
- **Botón "pill" redondeado** → descartado: es el default genérico de gimnasio; se usó la esquina biselada angular.
- **FAB flotante de WhatsApp en móvil** → descartado porque duplicaría la intención del CTA **EMPEZAR** (regla "no duplicate CTA intent" de design-taste): el CTA ya está persistente en la barra superior móvil.
- **Scroll-spy con resaltado de sección activa** → descartado: agrega lógica sin que el brief lo pida; la nav debe ser "limpia, fuerte y funcional".
- **Logo + wordmark centrados (centrado de agencia)** → descartado: layout alineado a la izquierda, más deportivo y menos genérico.
- **Fondo glass fuerte (`backdrop-blur-md` con `bg-bg/60`)** → descartado por legibilidad y para no volverse protagonista.

## Contenido pendiente / placeholders
- **Anclas de sección (`#inicio`, `#nosotros`, `#entrenamientos`, `#horarios`, `#galeria`, `#contacto`):** convención de IDs documentada para que las secciones (About→`nosotros`, Training→`entrenamientos`, Schedule→`horarios`, Gallery→`galeria`, Contact→`contacto`, Hero→`inicio`) usen el mismo contrato. Los targets aún no existen (componentes placeholder).
- **Logo:** `src/assets/DharmaLogo.jpg` (renombrado de `DharmaLogo` sin extensión para que Vite/TS lo resuelvan). Se usa a 44px; si el archivo es opaco sobre fondo petróleo, revisar si requiere recorte + canal alfa cuando se disponga de la versión en SVG/PNG limpio.
- **Skip link** a `#main-content`: pendiente, coordinado con la creación del landmark `<main>` (fuera del alcance del Navbar).

## Validación responsive
Comportamiento verificado por revisión de código (sin navegador headless disponible en el entorno):
- **375px (móvil):** logo solitario (wordmark oculto `sm:`), **EMPEZAR** compacto (~100px) y hamburguesa 44×44 caben en la barra (≈254px de contenido útil < 375px). Menú apilado con `py-3`, tap-targets ≥48px de alto. Padding lateral 20px.
- **768px (tablet):** aparece el wordmark junto al logo; la navegación sigue en hamburguesa (<1024px). Sin desbordes.
- **1280px (desktop):** nav de una sola línea. Estimación de uso: logo ≈190px + 6 enlaces ≈760px + CTA ≈110px ≈ 1076px < 1216px útiles. Cabida folgada.
- **Ajustes hechos por móvil:** CTA persistente en barra superior (sin FAB), wordmark oculto, enlaces a panel, toggler 44px, y `onResize` cierra el menú al subir a ≥1024px.

## Accesibilidad (hallazgos)
- **Contraste:** enlaces `text-fg/80` sobre `#080a0a` → ≈11.7:1 (AA). **EMPEZAR** `text-bg` sobre `#b7d900` → ≈12.3:1 (AA/AAA). Todos los estados hover (lima) superan 4.5:1.
- **Hallazgo corregido:** el focus ring lima del botón lima era invisible (mismo color) → se cambió a `outline-fg` blanco.
- **Hierarquía semántica:** el Navbar no emite h1–h3 (el wordmark es un enlace, no encabezado). Alt descriptivo en el logo: "Logo Dharma CrossFit".
- **Teclado:** todos los elementos interactivos tienen `focus-visible:outline-2` con offset. Escape cierra el menú y devuelve el foco al toggle. Foco mueve al primer enlace al abrir el panel; no se roba foco al cargar la página.
- **`prefers-reduced-motion`:** `scroll-behavior: smooth` se desactiva bajo `@media (prefers-reduced-motion: reduce)` en `index.css`. El panel no tiene animación de entrada.
- **Pendiente (deuda técnica, no bloqueante):** skip link a `#main-content` cuando exista `<main>`.

## QA checklist manual (sin test runner)
- [ ] `pnpm build` pasa sin errores de tipo.
- [ ] Enlaces: los 6 anclas existen en la página una vez implementadas las secciones; EMPEZAR abarca `https://wa.me/573148331777` en pestaña nueva.
- [ ] Scroll: navbar transparente arriba → `bg-bg/85 + blur + borde` al bajar.
- [ ] 375px/768px: menú hamburguesa abre/cierra, cierra con Escape, al hacer click en un enlace, y al redimensionar a ≥1024px.
- [ ] 1280px: nav en una sola línea, sin desborde.
- [ ] Tab: foco visible en logo, enlaces, CTA y toggle; Enter activa.
- [ ] Logo alt legible por lector de pantalla.

## Recomendación de tests
El Navbar es principalmente presentacional con estado UI trivial (abrir/cerrar menú, flag de scroll). **No recomiendo añadir Vitest + Testing Library en esta etapa**; el checklist manual cubre el riesgo real. Si se añade Vitest más adelante, el primer caso que valdría la pena sería "menu toggle + focus management + Escape" del menú móvil.---
# DOC — Hero (Dharma CrossFit)

Second section built (after Navbar). Sources: `AGENTS.md` (§2, §3, §5, §7, §8) y `Dharma_CrossFit_Documento_Identidad_y_Landing.md` (§11, §5, §6, §22, §23).

## Decisiones de diseño

### Layout — la fotografía es la protagonista (§11)
- `<section id="inicio">` a `min-h-svh`, imagen `DharmaHero.webp` (1920×1125, 402 KB) como fondo full-bleed con `object-cover`. Cumple "la fotografía ocupa la mitad o más de la composición".
- Dos capas de overlay aria-hidden (sin interferir con lectores de pantalla):
  1. Horizontal `from-bg → via-bg/70 → to-bg/10` para legibilidad de la columna de texto (izquierda).
  2. Vertical `from-bg → via-bg/40 → transparent` para fundir con la sección de abajo y asegurar legibilidad en móvil (texto abajo).
- Contenido: columna izquierda `max-w-2xl`, alineación izquierda (no centrada — evita el default de gym). Móvil `items-end` (texto abajo, alcance del pulgar); desktop `items-center`.

### Tipografía
- H1 `SUPERA TUS LÍMITES.` en **Barlow Condensed 700**, `text-5xl/7xl/8xl`, `leading-[0.9]`, mayúsculas — titular-as-gráfico (§5). **Titular íntegro en blanco**; descarté acentuar una palabra en lima (tell de plantilla "accent a single word").
- Wordmark `DHARMA CROSSFIT` en la misma familia, tracking amplio (`0.28em`), sin ser heading (el h1 es el titular) — jerarquía h1 única y limpia.
- Subtítulo/pie en Inter (`--font-sans`), `text-fg-muted`.

### Color
- Overlay en el color de marca `--color-bg` (no negro genérico). §4: fondo oscuro + blanco + lima estratégico. Lima solo en: rule-marcador del eyebrow, estrella de valoración y CTA primario — nunca color dominante.
- CTA primario **EMPIEZA A ENTRENAR**: lima con texto oscuro y **esquina biselada** `clip-path` (mismo lenguaje angular del Navbar + §7 "angular corners"). CTA secundario **CONOCE EL BOX**: outline cuadrado afilado, hover a lima (§7 jerarquía secundaria).

### Motion
- Una sola animación de entrada orquestada (fade + rise 16px, 700ms) sobre todo el bloque de contenido con `motion-safe:animate-rise` — no stagger por elemento (default AI). Bajo `prefers-reduced-motion` la animación no se aplica. Sin flechas de scroll ni elementos decorativos en movimiento.

## Alternativas consideradas y descartadas
- **Hero centrado** (todo al medio, típico de plantillas de gym) → descartado por genérico; se eligió bloque editorial izquierdo alineado.
- **Titular con una palabra resaltada en lima** → descartado (tell de plantilla); titular 100% blanco.
- **`linear-gradient` con neón/violetas** → descartado por salirse de la paleta.
- **Flecha/icono de scroll** → descartado: decoración sin función (§7 §23).
- **Imagen en CSS `background-image`** → descartado: se usó `<img>` real con `width/height` (1920×1125), `fetchPriority="high"`, `decoding="async"` para LCP y CLS de hero.
- **Reducir a `min-h-screen`** → descartado: `min-h-svh` (small viewport height) evita el doble salto del 100vh en navegadores móviles.

## Contenido pendiente / placeholders
- Ningún dato inventado: todo el copy proviene de §11 (etiqueta, marca, titular, subtítulo, prueba social, CTA).
- **Ancla `#nosotros`** (CTA "CONOCE EL BOX"): documento de contrato de anclas con About (aún placeholder). No hay target aún.
- **Alt de la imagen**: no visible para este modelo; se usó una descripción segura de la escena ("Entrenamiento de CrossFit en el box de Dharma CrossFit, Roldanillo"). Revisar contra la foto real cuando se pueda ver.
- **Consistencia de CTA primario**: el Navbar usa "Empezar" (§10) y el Hero "Empieza a entrenar" (§11). Ambos vienen del brief, pero la regla "one label per intent" de design-taste recomienda unificarlos en una sola etiqueta para todo el sitio. **Pendiente de decisión del cliente** (sugerido: "EMPIEZA A ENTRENAR" en ambos).

## Validación responsive
Verificación por geometría y revisión de código (sin navegador headless en el entorno).
- **375px (móvil):** texto abajo (`items-end`), `pt-28` (112px) deja claro el navbar fijo. H1 a 48px condensa a 2 líneas ("SUPERA TUS / LÍMITES.") con `leading-[0.9]`. CTAs apilados en columna, cada uno con altura ≥56px (touch). La prueba social no desborda. Overlay vertical asegura legibilidad sobre la foto.
- **768px (tablet):** H1 a 72px, CTAs en fila (`sm:flex-row`), wordmark aparece con tracking amplio. Columna `max-w-2xl` sin desbordes.
- **1280px (desktop):** H1 a 96px, columna centrada verticalmente, gradiente horizontal deja la derecha con la foto visible (protagonismo fotográfico §11).
- **Ajustes hechos para móvil:** `min-h-svh`, contenido bottom-aligned, CTA apilados, H1 contenido a 48px (suaviza saturación, §22), `pt-28` sobre el navbar.

## Accesibilidad (hallazgos)
- **Contraste:** H1/wordmark/CTA-secundario `#f5f5f5`/`text-fg` sobre overlay oscuro ≈18.9:1 (AAA). Subtítulo `text-fg-muted` ≈8:1 (AA). CTA primario `text-bg` sobre lima ≈12.3:1 (AA). Estrella lima sobre oscuro ≈12:1. Todos pasan AA.
- **Jerarquía de encabezados:** h1 único en la página (Hero). El Navbar no emite headings; el wordmark del hero no es heading. Coherente con el resto (secciones usarán h2/h3 al construirse).
- **Foco visible:** ambos CTA y enlaces con `focus-visible:outline-2` + offset. En el CTA lima el ring es **blanco** (`outline-fg`) — same-color bug heredado del navbar, corregido. El secundario usa ring lima.
- **Teclado:** todo es navegable por Tab; los anclas `#` reciben el foco al activarse (scroll-margin global del CSS).
- **Alt:** descriptivo y no genérico; imagen `aria-hidden` no aplica (es `<img>` real con alt). Overlays decorativos con `aria-hidden="true"`.
- **reduced motion:** la entrada usa `motion-safe:*`; `scroll-behavior: smooth` ya está desactivado globalmente bajo `prefers-reduced-motion`. Sin animaciones de fondo.

## QA checklist manual (sin test runner)
- [ ] `pnpm build` pasa sin errores de tipo.
- [ ] Hero ocupa al menos la altura del viewport en móvil y desktop; foto se ve completa por `object-cover`.
- [ ] Overlay deja el texto legible sobre la foto en las 3 anchos; la derecha conserva la foto visible (desktop).
- [ ] CTA primario abre `https://wa.me/573148331777` en pestaña nueva; CTA secundario hace scroll a `#nosotros` (cuando exista).
- [ ] 375px: CTAs apilados, texto abajo, sin overflow horizontal.
- [ ] Tab: foco visible en ambos CTAs; Enter activa.
- [ ] H1 legible por lector de pantalla como único encabezado de nivel 1.
- [ ] Sin animación de entrada si el SO reporta `prefers-reduced-motion`.

## Recomendación de tests
Hero es 100% presentacional (sin estado ni interacción propia). **No recomiendo Vitest/TLR en esta etapa**; el checklist manual cubre el riesgo (overlay/legibilidad y enlaces son los puntos frágiles). Si se añade el stack más adelante, el caso de valor sería "los dos CTA renderizan el href correcto".
