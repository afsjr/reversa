# Salidas generadas

Todo lo que Reversa produce va a la carpeta `_reversa_sdd/`. El proyecto heredado nunca es tocado.

---

## Estructura completa

```
_reversa_sdd/
├── inventory.md              # Inventario del proyecto (Scout)
├── dependencies.md           # Dependencias con versiones (Scout)
├── code-analysis.md          # Análisis técnico por módulo (Arqueólogo)
├── data-dictionary.md        # Diccionario completo de datos (Arqueólogo)
├── domain.md                 # Glosario y reglas de negocio (Detective)
├── state-machines.md         # Máquinas de estado en Mermaid (Detective)
├── permissions.md            # Matriz de permisos (Detective)
├── architecture.md           # Visión arquitectónica general (Arquitecto)
├── c4-context.md             # Diagrama C4: Contexto (Arquitecto)
├── c4-containers.md          # Diagrama C4: Containers (Arquitecto)
├── c4-components.md          # Diagrama C4: Componentes (Arquitecto)
├── erd-complete.md           # ERD completo en Mermaid (Arquitecto)
├── confidence-report.md      # Reporte de confianza 🟢🟡🔴 (Revisor)
├── gaps.md                   # Brechas sin resolver (Revisor)
├── questions.md              # Preguntas para validación humana (Revisor)
├── dynamic.md                # Hallazgos del análisis dinámico (Tracer)
├── sdd/                      # Specs por componente (Redactor)
├── openapi/                  # Specs de API (Redactor)
├── user-stories/             # User stories (Redactor)
├── adrs/                     # Decisiones arquitectónicas retroactivas (Detective)
├── flowcharts/               # Diagramas de flujo en Mermaid (Arqueólogo)
├── sequences/                # Diagramas de secuencia (Tracer)
├── ui/                       # Specs de interfaz (Visor)
├── database/                 # Specs de base de datos (Data Master)
├── design-system/            # Tokens de diseño (Design System)
├── changelog/                # Cambios documentados (Chronicler)
└── traceability/
    ├── spec-impact-matrix.md # Qué spec impacta a cuál (Arquitecto)
    └── code-spec-matrix.md   # Archivo de código a spec correspondiente (Redactor)
```

---

## Trazabilidad

**`traceability/code-spec-matrix.md`:** mapea cada archivo de código a su spec correspondiente, con el nivel de cobertura.

**`traceability/spec-impact-matrix.md`:** mapea qué componente impacta a cuál. Antes de cambiar algo, sabes el radio de impacto del cambio.
