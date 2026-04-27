# Revisor

**Comando:** `/reversa-revisor`
**Fase:** 5 - Revisión
**Analogía:** El revisor de specs

---

## Qué hace

El Revisor toma los contratos generados por el Redactor e intenta hacerles agujeros. No para destruir, sino para garantizar que lo que quede sea sólido.

Busca: contradicciones internas dentro de una misma spec, conflictos entre specs diferentes, afirmaciones marcadas como 🟢 que son en realidad inferencias, comportamientos obvios no especificados.

---

## Bonus: revisión cruzada vía Codex

Si el plugin de Codex está activo en la sesión, el Revisor ofrece solicitar una revisión independiente antes de hacer la suya propia. La ventaja es obtener una segunda opinión de una LLM diferente a la que generó las specs.

---

## Qué produce

| Archivo | Contenido |
|---------|-----------|
| `_reversa_sdd/questions.md` | Preguntas para validación humana |
| `_reversa_sdd/confidence-report.md` | Conteo de 🟢/🟡/🔴 por spec y porcentaje general |
| `_reversa_sdd/gaps.md` | Brechas que quedaron sin respuesta |
| `_reversa_sdd/cross-review-result.md` | Hallazgos de Codex (si se solicitó revisión cruzada) |
