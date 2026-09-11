<h1 align="center">🌪️ Vortex 🌪️</h1>

<p align="center">
  Es un starter template moderno para aplicaciones React basado en Vite + TypeScript con las mejores prácticas y listo para producción.
</p>

## ¿Qué incluye este template?

⚡️ **React 19** con las últimas características y **TypeScript 5** para desarrollo type-safe.

🚀 **Vite 8** como build tool ultra-rápido con Hot Module Replacement (HMR) instantáneo.

👷 **SWC** para compilación y Fast Refresh optimizados, sin Babel.

🎨 **Tailwind CSS v4** integrado con plugin de Vite para estilos modernos y responsive.

💅 **Prettier** con **prettier-plugin-tailwindcss** para formateo automático y ordenamiento de clases Tailwind CSS.

🐶 **Husky** integrado para mantener calidad de código y convenciones durante el desarrollo:

- 💅 Ejecuta el linter sobre archivos modificados
- 💬 Conventional commits para mantener historial limpio
- ⚙️ Verificación automática de errores de TypeScript
- 🎨 Formateo automático de código y clases Tailwind

🔧 **ESLint** moderno con reglas específicas para React:

- React Hooks rules para mejores prácticas
- React Refresh para desarrollo óptimo
- TypeScript-ESLint para análisis estático avanzado

🐦‍🔥 **Módulos ES nativos** siguiendo el estándar moderno de JavaScript.

📌 **Rutas personalizadas** con path aliases - usa `@/components/Button` en lugar de `../../../src/components/Button`.

📦 **pnpm** como gestor de paquetes para instalaciones más rápidas y eficientes.

🎯 **TypeScript estricto** con configuración optimizada para aplicaciones React modernas.

🌐 **Configuración dual de TypeScript** separando configuración de app y herramientas de desarrollo.

## Características

- **React 19** con TypeScript 5 y importaciones absolutas
- **Vite 8** para desarrollo ultra-rápido y builds optimizados
- **Tailwind CSS v4** con plugin oficial de Vite para mejor rendimiento
- **SWC** para compilación rápida sin overhead de Babel
- **ESLint moderno** con reglas específicas para React y TypeScript
- **Prettier + prettier-plugin-tailwindcss** para formateo automático y ordenamiento de clases Tailwind
- **Husky + Commitlint** para conventional commits y calidad de código
- **Hot Module Replacement** instantáneo para desarrollo fluido
- **Path aliases** para importaciones limpias y mantenibles

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** v18 o superior - [Descargar Node.js](https://nodejs.org/)
- **pnpm** (recomendado) o **npm** - Gestor de paquetes
  ```bash
  npm install -g pnpm
  ```
- **Git** - Para control de versiones y hooks de Husky

### ¿Por qué pnpm?

Aunque este template es **100% compatible con npm**, recomendamos pnpm por:

- **⚡ Velocidad**: Instalaciones hasta 2x más rápidas
- **💾 Espacio**: Usa symlinks, ahorrando gigabytes de espacio en disco
- **🔒 Seguridad**: Mejor resolución de dependencias y menos vulnerabilidades
- **🎯 Eficiencia**: Caché global compartido entre proyectos

## Getting started

Utiliza este repositorio como [GitHub template](https://github.com/SyntaxSquadOf/Vortex/generate) o usa [degit](https://github.com/Rich-Harris/degit) para clonarlo en tu máquina con un historial git vacío:

```bash
npx degit SyntaxSquadOf/Vortex#main my-react-app
```

o

```bash
pnpm dlx degit SyntaxSquadOf/Vortex#main my-react-app
```

### Con pnpm (recomendado):

```bash
cd my-react-app
pnpm install
pnpm dev
```

### Con npm:

```bash
cd my-react-app
npm install
npm run dev
```

¡Tu aplicación estará ejecutándose en `http://localhost:5173`! 🎉

## Scripts

**Con pnpm:**

- `pnpm dev` - inicia servidor de desarrollo con HMR en puerto 5173
- `pnpm build` - compila TypeScript y construye para producción con Vite
- `pnpm preview` - previsualiza localmente la build de producción
- `pnpm lint` - ejecuta ESLint en todos los archivos del proyecto
- `pnpm format` - formatea código y clases Tailwind con Prettier
- `pnpm prepare` - inicializa Husky y configura git hooks automáticamente

**Con npm (equivalentes):**

- `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`, `npm run format`, `npm run prepare`

## Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables (botones, inputs, layouts, etc.)
├── context/             # Contextos de React (Auth, Theme, etc.)
├── assets/              # Imágenes, iconos, fuentes, etc.
├── hooks/               # Custom hooks de React
├── pages/               # Vistas principales o páginas (si usas routing)
├── utils/               # Utilidades y helpers
├── services/            # Lógica de acceso a APIs o servicios externos
├── App.tsx              # Componente principal de la app
├── App.css              # Estilos del componente principal
├── main.tsx             # Punto de entrada de la aplicación
├── index.css            # Estilos globales
└── vite-env.d.ts        # Tipos de Vite
public/
├── vite.svg             # Logo de Vite u otros recursos públicos
```

> **ℹ️ Nota:**
>
> - La estructura de carpetas sugerida es solo una guía inicial y no es restrictiva. Siéntete libre de modificar, eliminar o agregar carpetas y archivos según las necesidades de tu proyecto. Adapta la organización a tu propio flujo de trabajo y preferencias.
> - Este template **no incluye `pnpm-lock.yaml`** intencionalmente para que siempre obtengas las últimas versiones compatibles de las dependencias al instalar. Despues de clonar, instalar modificar el gitignore para que te tracke el pnpm-lock.yaml

<!-- ## Configuración avanzada

### ESLint para producción

Para aplicaciones de producción, recomendamos habilitar reglas type-aware más estrictas en `eslint.config.js`:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // O para reglas más estrictas:
    ...tseslint.configs.strictTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### Tailwind CSS

Tailwind está configurado con el plugin oficial de Vite para mejor rendimiento. Puedes personalizar tu configuración en los archivos de Tailwind según tus necesidades.

### Prettier + Tailwind CSS

El proyecto incluye **prettier-plugin-tailwindcss** que automáticamente:

- **Ordena las clases Tailwind** según el orden recomendado oficial
- **Formatea el código** manteniendo consistencia en todo el proyecto
- **Detecta conflictos** de clases y los resuelve automáticamente -->
