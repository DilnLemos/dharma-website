# AGENTS.md
 
## Project
 
Vortex — React 19 + Vite 8 + TypeScript 7 + Tailwind CSS v4 single-page landing site for **Dharma CrossFit**, a CrossFit box in Roldanillo, Valle del Cauca, Colombia. Not a monorepo; `pnpm-workspace.yaml` only declares `.` as a package.
 
Entry point: `src/main.tsx` → `src/App.tsx` (renders all section components).
 
This is not a generic gym template — every visual and copy decision should trace back to the brand identity doc referenced in **§9**.
 
## Commands
 
```bash
pnpm dev          # Vite dev server on localhost:5173
pnpm build        # tsc -b && vite build (runs typecheck first)
pnpm lint         # eslint .
pnpm format       # prettier --write src/**/*.ts
```
 
**No test runner is configured.** `pnpm test` echoes an error placeholder.
 
## Pre-commit hooks (Husky)
 
`.husky/pre-commit` runs in order: `format` → `test` → `lint` → `build`.
`.husky/commit-msg` runs `pnpm dlx commitlint --edit`.
 
Commit messages must follow **conventional commits** (`feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `revert`). Scope is optional.
 
## Path alias
 
`@/` maps to `src/`. Both Vite (`vite.config.ts`) and TypeScript (`tsconfig.app.json`) define this — use `@/components/Foo` everywhere.
 
## TypeScript
 
Strict mode with `noUnusedLocals`, `noUnusedParameters`, and `verbatimModuleSyntax`. Build runs `tsc -b` (project references) before Vite build — type errors will fail the build.
 
## Style conventions
 
- Prettier: double quotes, semicolons, 2-space indent, trailing commas, LF line endings.
- `prettier-plugin-tailwindcss` auto-sorts Tailwind classes on save/commit.
- ESLint targets `**/*.{ts,tsx}` with React Hooks and React Refresh rules.
## Environment
 
- `.env` file exists at root (do not commit secrets).
- Package manager: **pnpm** (required for workspace config).
- Node >= 18.
---
 
## 1. Brand direction
 
**Concept:** `DHARMA // RAW PERFORMANCE` — athletic + industrial + editorial. Dark, angular, human, local (Roldanillo).
 
**Master rule:** don't design "a CrossFit website." Design *specifically* Dharma CrossFit — the logo, the real photography, the local identity of Roldanillo, and the community are what must differentiate the site. When a component reads as a generic gym-template default, that's a signal to revisit it against the identity doc, not to ship it.
 
The logo is the primary visual reference. Never redesign or reinterpret it; give it space and let the site amplify its traits (dark/lime contrast, angular geometry, athletic composition) rather than compete with it.
 
## 2. Design tokens
 
Reference values derived from the current logo — treat as a starting palette, not a locked brand spec. Define them once as Tailwind v4 theme variables (e.g. in `src/index.css`):
 
```css
@theme {
  --color-bg: #080a0a;        /* main background */
  --color-petrol: #062c3b;    /* secondary sections / details */
  --color-lime: #b7d900;      /* CTAs, accents, interaction */
  --color-lime-dark: #718700; /* subtle accent variation */
  --color-fg: #f5f5f5;        /* headings, primary text */
  --color-fg-muted: #a5a9a8;  /* secondary text */
  --color-border: #222727;    /* borders, separators, card edges */
  --color-card-bg: #0d1111;   /* card background, slightly off from --color-bg */
}
```
 
Rule of thumb: **dark background + white + lime**, with lime used strategically to direct attention — it should never become the dominant fill color of the interface. Avoid rounded-corner/soft-shadow "SaaS card" defaults; the angular, high-contrast, minimal-elevation look in §25 of the identity doc is intentional, not a gap to fill in later.
 
## 3. Typography
 
- **Headings:** one condensed, high-impact display face — pick one from Barlow Condensed / Bebas Neue / Oswald / Archivo Narrow and lock it in early rather than mixing. Uppercase, large, compact tracking, used as a graphic element, not just information.
- **Body:** one clean sans-serif — Inter / Manrope / DM Sans. Prioritize legibility and contrast.
- Keep body line lengths readable (<80 characters where practical).
## 4. Layout & spacing
 
- Spacing scale in multiples of 8px.
- Max content width ≈ 1200–1280px on large screens.
- Mobile horizontal padding ≈ 20–24px.
- Generous vertical space around high-impact sections (Hero, CTA final).
- Mobile is the priority breakpoint — most traffic is expected from social media.
## 5. Section order
 
Build and keep sections in this order unless explicitly told otherwise (the user journey is: descubrir → conocer → entender → horarios → confianza → ambiente → propuesta → ubicación → contactar):
 
1. Navbar
2. Hero
3. Sobre Dharma (`01 — QUIÉNES SOMOS`)
4. Entrenamientos (`02 — ¿QUÉ HACEMOS?`)
5. Horarios
6. Coach
7. Galería
8. ¿Por qué Dharma? (lime block, inverted contrast)
9. Ubicación
10. CTA final
11. Footer
Numbered section labels (`01 —`, `02 —`) are part of this brand's editorial system by explicit request in the identity doc — keep using them here even though numbered markers aren't a default choice for every project.
 
## 6. Content rules — do not invent
 
Never fabricate: horarios, precios, planes, certificaciones, nombres o experiencia de coaches, número de miembros, testimonios, resultados deportivos, o equipamiento específico. Only the three training categories from the identity doc (CrossFit, Entrenamiento Funcional, Clases Grupales) are confirmed — don't add "Fuerza", "Cardio", "Movilidad", etc. as separate services unless confirmed.
 
When real data isn't available yet, use an explicitly marked placeholder (comment, `TODO`, or a visually distinct "pendiente de confirmar" state) — never present fabricated content as if it were real.
 
**Confirmed data to use as-is:**
- Nombre: Dharma CrossFit Box · Gimnasio
- Ubicación: Roldanillo, Valle del Cauca, Colombia · Cra. 2 #11B-21
- Teléfono: +57 314 833 1777
- Calificación: 5,0/5 (5 reseñas)
- Instagram: @dharma.crsfit
## 7. CTA hierarchy
 
1. WhatsApp / "Empieza a entrenar" (primary — dark text on lime, uppercase, angular corners)
2. Consultar horarios
3. Conocer el box (secondary — transparent, white/gray border, hover to lime)
4. Instagram (discovery/social proof channel, not the primary conversion path)
Keep a persistent/floating WhatsApp CTA on mobile as long as it doesn't block navigation.
 
## 8. Motion & photography
 
- Motion stays discrete and functional: gradual content reveal, small entrance shifts, subtle hover zoom on photos, lime border on hover, smooth button/navbar transitions. No parallax, particles, spinning text, or bouncing elements.
- Use real Dharma CrossFit photography (box, athletes, coaches, community) over stock. High contrast, natural dramatic light, real texture (metal, rubber, chalk, rope) — avoid heavy filters or converting everything to black-and-white.
## 9. Reference
 
The full identity brief — `Dharma_CrossFit_Documento_Identidad_y_Landing.md` — is the source of truth for anything not covered above (per-section copy direction, photography layout for the gallery grid, button/card specs, etc.). Keep it in the repo (e.g. `docs/`) so it stays available as agent context, and consult it before adding or restructuring a section.
 
For actual UI implementation, also follow the project's `frontend-design` process (token plan → review against brief → build → self-critique) — since this brief already pins down a specific visual direction, follow it exactly rather than defaulting to generic patterns.
