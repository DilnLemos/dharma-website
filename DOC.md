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
---

# DOC — About / Sobre Dharma (Dharma CrossFit)

Tercera sección construida (tras Navbar y Hero). Fuentes: `AGENTS.md` (§2, §3, §5, §6, §8) y `Dharma_CrossFit_Documento_Identidad_y_Landing.md` (§12, §5, §7, §8).

## Decisiones de diseño

### Layout — collage + mancha de pintura

- `<section id="nosotros">` (ancla del Navbar "Nosotros" y del CTA del Hero "CONOCE EL BOX"). Grid 2 columnas en `lg` (texto | collage); en móvil el texto va primero y el collage debajo, `max-w-md` centrado.
- **Collage exigido por el cliente:** `Persona1.webp` (1199×1599) abajo-izquierda al 86% de altura; `Persona2.webp` (1247×1599) arriba-derecha al 62%, con `z-10` sobre la primera — solape sutil y controlado que dibuja una diagonal dinámica (tensión §8). Ambas son recortes con canal alpha, así el fondo se ve a través.
- **Mancha de pintura con brocha:** SVG con dos manchas orgánicas (petróleo grande + lima más pequeña, arriba-derecha) y 5 salpicaduras circulares en lima/lima oscuro. Va detrás de las fotos (`z` inferior), rotada `-4deg`, y **sangra fuera del collage** (`-inset-4/-6`) para que no se sienta un contenedor "recortado". Es el elemento memorable de la sección; el resto se mantiene disciplinado.

### Tipografía

- h2 `ENTRENA. EVOLUCIONA.` en **Barlow Condensed 700**, `text-6xl→7xl`, `leading-[0.92]`, mayúsculas (titular-as-gráfico §5). Único h2 en la página hasta ahora — jerarquía coherente (h1 solo en Hero).
- **Motivo tipográfico:** solo los puntos finales (".") van en lima — acento mínimo, evita el tell de resaltar palabras enteras. Es un motivo de puntuación, no una palabra coloreada.
- Label `01 — QUIÉNES SOMOS` (§12 exacto) con el número en lima, en la misma voz Barlow/mayúsculas/tracking que el eyebrow del Hero.

### Color

- Sección sobre `--color-bg` (la mancha aporta el color). Lima únicamente en: número del label, puntos del titular, ticks de los pilares y mancha/salpicaduras SVG. Petróleo en la mancha (rectificado del logo §3). Nunca lima dominante (§4).

### Pilares (no tarjetas)

- COMUNIDAD / DISCIPLINA / ENTRENAMIENTO como lista editorial: `border-t` hairline arriba, items en fila con un tick lima angular (chamfer 2px, eco del sistema de esquinas).
- No son servicios, son atributos de la experiencia (§12), así que **no** usan tarjetas numeradas.

### Motion

- Sin animación de entrada: el Hero ya posee el momento de carga de página (regla "un solo momento orquestado" del skill). No hay animación que desactivar bajo `prefers-reduced-motion`, lo cual se reporta en a11y.

## Alternativas consideradas y descartadas

- **Pilares como 3 tarjetas oscuras** (default de gimnasio) → descartado: se confundirían con los servicios de la sección 13 y caen en el patrón "SaaS-card".
- **Titular con una palabra en lima** (p.ej. "ENTRENA." entero) → descartado: tell de plantilla; el acento se limita a los puntos.
- **Foto única grande con marco angular** → descartado: el cliente pidió explícitamente el solape sutil + mancha; además el marco "recuadro" habría sido más genérico.
- **Mancha con `border-radius` puro (blob CSS)** → descartado por previsibilidad: un SVG con trazados orgánicos + salpicaduras controla mejor la forma y escala.
- **Animación reveal al scroll (IntersectionObserver)** → descartado: lógica extra sin aporte al brief; Hero ya tiene la entrada.

## Contenido pendiente / placeholders

- **Redacción de los 2 párrafos:** redactados en línea con los 5 conceptos de §12 (entrenamiento, disciplina, comunidad, superación, evolución) y el tono cercano/energético. Marcados con `TODO` en el código: **pendiente de confirmar la redacción definitiva con el box** (no se inventaron datos de hecho: precios, coaches, logros, recuentos).
- **Alt de las imágenes:** no verificables visualmente por este modelo; se usaron descripciones neutrales ("Atleta de Dharma CrossFit…"). Revisar contra las fotos reales (género/acción) cuando se pueda ver.
- **Ancla `#nosotros`:** ahora resuelve aquí (Contact/Gallery/etc. siguen pendientes).

## Validación responsive

Verificación por geometría y código (sin navegador headless en el entorno).

- **375px:** texto primero, collage debajo centrado `max-w-md` (≈365px). Mancha sangra a los lados sin overflow horizontal (`-inset-4` con `max-w-md` dentro de un `px-5`). h2 a 60px: "EVOLUCIONA." ≈277px < 343px útiles, una línea. Pilares hacen wrap a 2 líneas con `gap-y` 16px.
- **768px:** h2 a 72px; collage `max-w-md` aún centrado; pilares caben holgados en una fila.
- **1280px:** grid `lg:grid-cols-2` con `lg:gap-20`, collage derecho a altura completa de la columna; mancha con `-inset-6` y rotación sin clipping (overflow visible por defecto).
- **Ajustes móvil:** sección `py-20` (80px) vs `lg:py-32`; texto antes que imagen; collage limitado a `max-w-md`; ticks/pilares con wrap.

## Accesibilidad (hallazgos)

- **Contraste:** titular/label `text-fg` y `text-fg-muted` sobre `#080a0a` → AA/AAA (≈18.9:1 y ≈8:1). Número "01 —" lima ≈12:1. Ticks lime decorativos con `aria-hidden`. Todos los estados superan AA 4.5:1.
- **Jerarquía:** h1 único (Hero), primer h2 aquí (`ENTRENA. EVOLUCIONA.`). Coherente con el esquema de la página.
- **Teclado/foco:** no hay controles interactivos en esta sección; las imágenes `loading="lazy"` no afectan navegación. Ancla `#nosotros` recibe foco por scroll-margin global.
- **Alt:** descriptivos y específicos (no "imagen1"); el SVG de mancha y los ticks son `aria-hidden` (puramente decorativos) — sin ruido para lectores de pantalla.
- **reduced motion:** sin animaciones en la sección; no aplica gating adicional.
- **Hallazgo pendiente (deuda):** los alt de Persona1/2 deberían revalidarse con visión humana; si las fotos contienen texto o marcas, requerirán descripción exacta.

## QA checklist manual (sin test runner)

- [ ] `pnpm build` pasa sin errores de tipo.
- [ ] Las dos fotos se ven recortadas (alpha) con solape sutil; la mancha petróleo/lima queda detrás y sangra fuera del collage.
- [ ] En 375px el h2 no se desborda y los pilares hacen wrap limpio.
- [ ] Sin overflow horizontal en ninguna columna/salpicadura.
- [ ] Alt presentes y legibles por lector de pantalla; mancha silenciosa.
- [ ] Ancla `#nosotros` visible al llegar (scroll-margin-top).

## Recomendación de tests

Sección 100% presentacional, sin estado ni interacción. **No recomiendo Vitest/TLR ahora**; el checklist manual cubre el riesgo (render de imágenes, solape y alts). Si se añade el stack, el caso de valor sería "la sección renderiza el h2 único y las dos imágenes con sus alt".
---

# DOC — About v2 / Collage de imágenes nuevas (Dharma CrossFit)

Actualización de la sección Sobre Dharma. Fuentes: `AGENTS.md` (§2, §3, §5, §8) y `Dharma_CrossFit_Documento_Identidad_y_Landing.md` (§12, §4, §6, §7, §8, §26). Tarea: `src/Tareas/Tarea_Modificacion_About.md`.

## Decisiones de diseño (segunda pasada del skill frontend-design)

### Tipografía / color / layout elegidos y por qué

- **Tipografía:** sin cambios. Barlow Condensed (h2 `ENTRENA. EVOLUCIONA.`) + Inter body; el motivo de puntos en lima se mantiene. El brief no pedía tocar texto, y cambiarla habría roto la coherencia visual de la landing (§26 numera la sección; no se altera).
- **Color:** solo tokens existentes (`--color-petrol`, `--color-lime`, `--color-lime-dark`). La mancha es petróleo (barrido base, mismo verde/azul del fondo del logo §3), con un trazo seco lima arriba-derecha y una mano lima oscuro en la base + 3 salpicaduras. Lima nunca dominante (§4).
- **Layout (collage):** contenedor `aspect-[4/5]` más grande que el anterior (`max-w-lg`, en `lg` llena la columna ≈ 568px de ancho → 710px de alto). Tres capas con z-ordering:
  - `Persona5.webp` (1080×1350, 4:5) abajo-izquierda, `h-[95%]`, rotada `+2deg` — figura base/ancorada.
  - `Persona4.webp` (725×1474, tal) arriba-derecha, `h-[85%]`, vertical — segunda figura, cara descubierta.
  - `Persona3.webp` (480×409, horizontal) al frente, `w-[52%]` centrada en x=38%, `-rotate-3deg` — pieza de acción que se solapa con la silueta de la figura inferior (collage real, no tres recortes flotando).
  - El solape es deliberadamente sutil: solo la figura frontal cruza la inferior; las dos traseras ocupan esquinas opuestas (tensión diagonal §8).
- **Mancha más grande y con gesto de brocha:** nuevo SVG 560×640 con barrido orgánico largo (sugiere trazo de brocha), trazo seco lima y 3 salpicaduras. Sangra fuera del collage (`-inset-6/8/10`, rotación `-4deg`) para que no parezca contenedor recortado y cubra el vacío que pedía el cliente.
- **Reducción del espaciado negro Hero→About:** padding superior de About `pt-20` → `pt-10 sm:pt-14 lg:pt-20`, y `pb-16/20/28` del Hero → `pb-12/16/20`. En desktop el hueco total pasa de ~192px a ~160px; en móvil de ~144px a ~88px. Sin tocar copy ni CTA.

### Alternativas consideradas y descartadas

- **Reencuadrar/recortar las fotos vía CSS (`object-cover` en marcos)** → descartado: son recortes con canal alpha; un marco las apilaría como cartas y mataría el collage "sobre" que pide el cliente.
- **Muchas salpicaduras de pintura (5+)** → descartado: con tres figuras grandes el ruido compite (regla "quítate un accesorio" del skill); se dejaron 3.
- **Rotar las tres imágenes igual** → descartado: se ve como pegatina-mosaico genérica; cada capa tiene rotación propia (`+2`, `0`, `-3`).
- **Gran CSS blob con `border-radius` en lugar de SVG** → descartado: el SVG con trazo/cola de brocha controla la forma "pincelada" mejor que un blob previsible.
- **Animación de entrada al hacer scroll** → descartado: Hero ya posee el momento de carga orquestado; insights del skill (una sola entrada).

### Contenido placeholder pendiente

- Redacción de párrafos: sin tocar (el mismo `TODO` de confirmar con el box persiste).
- Alts de Persona3/4/5: descripciones neutrales ('Atleta de Dharma…', 'Deportista de Dharma…', 'Miembro de la comunidad…'); **revalidar con visión humana** (género/acción exacta; este modelo no verifica las fotos).
- Las tres fotos eran bytes PNG con extensión `.webp` → re-codificadas a WebP real con alpha (quality 90; Persona3 214→37 KB, Persona4 1028→161 KB, Persona5 666→100 KB) para evitar mismatch de content-type.

### Notas de la tarea
- **`pnpm lint`:** falla previo a esta tarea (verificado con `git stash` en el estado limpio): `typescript-eslint@8.70.0` no soporta la `typescript@7.0.2` instalada (error al cargar el plugin, no del código). `pnpm build` (typecheck `tsc -b` + vite) pasa sin errores. No se modificaron dependencias; pendiente alineación de versiones en otro momento.

- **context7 MCP:** no disponible en el entorno (API key inválida `Invalid API key`). No se pudo consultar documentación actualizada; se siguieron los patrones ya usados y verificados del propio repositorio (Tailwind v4, clip-path, aspect, z, transforms).
- **Frontend-design (pasada 2 / anti-slop):** se confirmó que la mancha+borde asimétrico+rotaciones distintas evitan el default "3 stickers de gym". No hay numeración decorativa inventada (los `01 —` vienen de §26/AGENTS.md §5).

## Validación responsive (por geometría/código, sin navegador headless)

- **375px:** collage ~335px de ancho (px-5) → 419px de alto centrado bajo el texto. Persona5 ≈318px de alto, Persona4 ≈356px, Persona3 ≈174px de ancho. Sin overflow horizontal (todo `absolute` dentro del contenedor; la mancha sangra pero no desplaza layout).
- **768px:** `max-w-lg` (512px) centrado en la tabla de 768px: collage 512×640, las tres figuras con presencia clara. Texto abajo-izquierda, collage abajo-derecha.
- **1280px:** columna izquierda texto ≈568px; collage `lg:max-w-none` ≈ altura 710px, `items-center` lo centra verticalmente con la columna de texto → las imágenes ganan presencia (requisito del cliente de "no perdidas en el espacio").
- **Ajustes móviles hechos:** collage ceñido con `max-w-lg`; `pt-10` (40px) para recortar el hueco negro tras el Hero; rotaciones reducidas a grados pequeños para que no se desborde.

## Accesibilidad (hallazgos)

- **Contraste:** sin cambios en texto (AA mantiene: h2 ≈18.9:1, muted ≈8:1, lima en puntos/etiqueta ≈12:1). La mancha es decorativa `aria-hidden`.
- **Jerarquía:** h2 único por sección, h1 solo en Hero — coherente.
- **Teclado/foco:** sección sin elementos interactivos; ancla `#nosotros` conserva `scroll-margin-top`.
- **Alts:** descriptivos por figura, no genéricos ("imagen1"). A revalidar con visión humana (deuda ya documentada).
- **`prefers-reduced-motion`:** la sección no tiene animación; la rotación de imágenes es estática (no animada), por lo que no aplica gating.
- **Hallazgo:** persona frontal (Persona3) se solapa con la parte media de la figura trasera — lectores de pantalla leen alt independientes por figura; el solape no genera ruido.

## QA checklist manual (sin test runner, sección presentacional)

- [ ] `pnpm build` sin errores.
- [ ] 375px: collage sin overflow, figuras visibles, hueco tras Hero reducido.
- [ ] 768px: collage centrado, texto y collage en columnas.
- [ ] 1280px: collage grande con presencia; mancha petróleo/lima detrás visible.
- [ ] Alt legibles y mancha silenciosa para lectores de pantalla.
- [ ] Las tres imágenes cargan (WebP real, alpha conservada).
- [ ] El solape de Persona3 sobre la figura inferior se ve sutil (no tapa caras).

## Recomendación de tests

Sección 100% presentacional. **No recomiendo Vitest/TLR ahora**; el checklist manual cubre el riesgo real (render de las 3 imágenes WebP con alpha, solape y alts).
