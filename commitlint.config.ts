export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Permitir scope opcional
    "scope-empty": [0],
    // Asegurar que el tipo esté entre los válidos
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "chore",
        "revert",
      ],
    ],
  },
};
// Este archivo de configuración de commitlint se utiliza para validar los mensajes de los commits
/*¿Qué formatos acepta?
Con esta configuración, commitlint permitirá:

* feat(archivos): mensaje commit

* feat: mensaje commit

* feat(archivos): mensaje commit\n\ndescripcion

Es decir: acepta con o sin scope, y acepta cuerpo adicional (descripcion).*/
