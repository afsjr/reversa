# Redactor

**Comando:** `/reversa-redator`
**Fase:** 4 - Generación
**Analogía:** El notario

---

## Qué hace

El Redactor transforma lo descubierto en las tres fases anteriores en contratos formales: precisos, trazables y lo suficientemente detallados para que un agente de IA, sin acceso al código original, pueda reimplementar la funcionalidad fielmente.

Las specs no son documentación para que los humanos lean en una tarde tranquila. Son contratos operacionales.

---

## El flujo de trabajo

El Redactor nunca genera todo de una vez. Monta un plan, lo presenta para tu aprobación, y luego genera un archivo a la vez esperando tu confirmación antes de continuar. Esto permite revisión incremental.

---

## Formato de las specs SDD

Cada spec sigue una plantilla fija con secciones obligatorias, incluyendo criterios de aceptación en formato `Dado / Cuando / Entonces`. Cada afirmación se marca con 🟢, 🟡 o 🔴. Sin excepciones.

---

## Archivos generados

| Archivo | Contenido |
|---------|-----------|
| `_reversa_sdd/sdd/[componente].md` | Spec por componente |
| `_reversa_sdd/openapi/[api].yaml` | Spec de API (si aplica) |
| `_reversa_sdd/user-stories/[flujo].md` | User stories (si aplica) |
| `_reversa_sdd/traceability/code-spec-matrix.md` | Matriz código-spec |
