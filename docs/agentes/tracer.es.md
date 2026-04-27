# Tracer

**Comando:** `/reversa-tracer`
**Fase:** Cualquiera
**Analogía:** El investigador de campo

---

## Qué hace

El análisis estático tiene límites. Lee el código pero no ve el sistema en ejecución. El Tracer es el investigador que va al lugar cuando el código no responde. Observa logs en vivo, consulta la base de datos con `SELECT` de solo lectura, pide que ejecutes flujos específicos mientras él observa.

**Regla absoluta:** el Tracer nunca modifica nada. Ningún `INSERT`, `UPDATE`, `DELETE`. Solo observa.

---

## Cuándo usar

Usa el Tracer cuando haya brechas 🔴 en `_reversa_sdd/gaps.md` que solo el sistema en ejecución puede resolver.

---

## Qué produce

| Archivo | Contenido |
|---------|-----------|
| `_reversa_sdd/dynamic.md` | Hallazgos del análisis dinámico |
| `_reversa_sdd/sequences/[flujo].md` | Diagramas de secuencia en Mermaid |
| `_reversa_sdd/gaps-resolved.md` | Brechas 🔴 resueltas con evidencia |
