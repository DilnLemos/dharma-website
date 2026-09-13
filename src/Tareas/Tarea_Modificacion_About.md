

### CONTEXTO
Estás trabajando en Vortex (landing de Dharma CrossFit). Antes de escribir código:
- Lee AGENTS.md completo (convenciones técnicas + sistema de diseño, §1–9).
- Lee la sección correspondiente en Dharma_CrossFit_Documento_Identidad_y_Landing.md:
  [12. Sobre Dharma]

### TAREA
Implementa ña correcion en el componente [Sobre nosotros] (`src/components/About.tsx`).

Objetivo de la sección: Rediseñar el aspecto visual de las imagenes en la sección de "quienes somos"

Contenido confirmado a usar (no inventar nada fuera de esto):
Usa las nuevas imagenes llamadas "Persona3.webp" y "Persona4.webp" y "Persona5.webp" encontradas en la carpeta "assets" que servirá para
referencia visual natural del ambiente de entrenamientos del box, eliminando las fotos anteriores usadas.

La estructura de las imagenes deben ser una sobre la otra de forma solapada pero de manera sutil, como un collage, para que no
se sientan vacias las imágenes agrega detrás de ellas un fondo al estilo mancha de pintura con brocha de forma irregular con los colores 
predefinidos de la marca encontrados en Dharma_CrossFit_Documento_Identidad_y_Landing.

Las imágenes deben tener un tamaño más grande del normal, acorde a la sección donde estas no queden "perdidas en el espacio" dando impresión de que hay más fondo vacio que contenido, sino que tengan presencia en la sección, que ayuden a resaltar el ambiente, donde su visualización sea agradable 


Reducir la cantidad de espaciado negro al momento de pasar de la sección del "Hero" al "Sobre nosotros".

### QUE NO HACER

- Modificar el contendio textual ya hecho
- Modificar diseño ya planteado anteriormente

### INVESTIGACIÓN PREVIA (context7 MCP)
Antes de implementar, usa context7 para consultar documentación actualizada de: las herramientas que necesites para el desarrollo
No asumas APIs de memoria si hay dudas de versión — verifica contra la doc real.

### DISEÑO (skill frontend-design)
Sigue el proceso de dos pasadas del skill:
1. Plan corto: sigue el patrón de diseño de la identidad de la marca encontradas en Dharma_CrossFit_Documento_Identidad_y_Landing
2. Revisión: ¿algo de tu plan es el default genérico que pondrías en cualquier
   landing de gimnasio? Si sí, ajústalo y di qué cambiaste y por qué.
Solo después de la revisión, escribe el código.

### IMPLEMENTACIÓN
- Sigue las convenciones de AGENTS.md (path alias `@/`, TypeScript estricto,
  Prettier/ESLint, nomenclatura de componentes).
- Componentiza si la sección tiene piezas repetidas (tarjetas, días de horario, etc.).
- Respeta el orden de sección y el sistema de numeración editorial si aplica (§5).
- Usa las reglas dadas en la identidad de la amrca para que toda la landing page sea coherente visualmente
### DOCUMENTACIÓN DE DECISIONES
Al terminar, entrega un resumen breve en un nuevo documento llamado "DOC.md" con:
- Qué tipografía/color/layout específico elegiste para esta sección y por qué.
- Qué alternativa consideraste y descartaste, y por qué.
- Qué contenido quedó como placeholder pendiente de confirmar.
Si el archivo ya existe continua sobre el.


### VALIDACIÓN RESPONSIVE
Verifica y reporta el comportamiento en al menos estos anchos: 375px (móvil),
768px (tablet), 1280px (desktop). Señala explícitamente cualquier ajuste hecho
para móvil (según AGENTS.md, prioridad de tráfico social/móvil).

### VALIDACIÓN DE ACCESIBILIDAD
Antes de dar la tarea por terminada, verifica:
- Contraste de texto sobre fondo oscuro y sobre el bloque lima (mínimo AA).
- Jerarquía semántica de encabezados (h1–h3 coherente con el resto de la página).
- Navegación por teclado y foco visible en botones/links/CTA.
- Textos alternativos en imágenes reales (no genéricos tipo "imagen1").
- `prefers-reduced-motion` respetado si la sección tiene animación de entrada.
Reporta cualquier hallazgo, no solo "quedó accesible".

### TESTS
No hay test runner configurado en el proyecto (`pnpm test` es un placeholder).
Para esta sección:
- Si el componente tiene lógica no trivial (ej. horarios interactivos, formulario),
  proponme si vale la pena añadir Vitest + Testing Library antes de escribir tests,
  no lo asumas por tu cuenta.
- Si es principalmente presentacional, en vez de tests automatizados entrega un
  checklist manual de QA (contenido correcto, CTA funcional, responsive, a11y).

### DEFINITION OF DONE
- [ ] `pnpm build` pasa sin errores de tipo.
- [ ] `pnpm lint` sin warnings nuevos.
- [ ] Sección revisada contra el documento de identidad (no solo contra AGENTS.md).
- [ ] Documentación de decisiones entregada.
- [ ] Validación responsive + accesibilidad reportada.
- [ ] Ningún dato inventado fuera de lo confirmado.
