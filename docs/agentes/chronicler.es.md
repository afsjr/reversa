# Chronicler

**Comando:** `/reversa-doc` (o `/reversa-chronicler`)
**Fase:** Cualquiera, durante el desarrollo
**Analogía:** El escriba

---

## Qué hace

El Chronicler captura el conocimiento sobre un cambio de código *justo después de que ocurre*, antes de que el contexto se pierda en el historial de la conversación.

¿Conoces ese momento en que haces un cambio, sabes exactamente por qué lo hiciste, cuál es el impacto, qué puede romperse... y dos días después ya no lo recuerdas? El Chronicler documenta ese momento mientras todavía está fresco.

**Regla absoluta:** el Chronicler solo documenta. Nunca modifica código, nunca sugiere cambios, nunca opina sobre la implementación.

---

## Cómo funciona

1. Ejecuta `git diff HEAD` para identificar los archivos modificados
2. Hace tres preguntas rápidas: ¿Por qué fue necesario? ¿Hay algún breaking change? ¿Algún contexto extra?
3. Crea o actualiza `_reversa_sdd/changelog/YYYY-MM-DD.md` con la entrada documentada
4. Si el cambio afecta un componente con spec, agrega una nota de cambio al final de la spec

---

## Cuándo usar

Úsalo siempre que hagas un cambio relevante durante el desarrollo. El costo es de dos minutos. La ganancia es no perder el contexto que solo existe ahora.
