# Cómo usar

## Activar Reversa

Después de instalar, abre el proyecto en tu agente de IA y activa Reversa:

=== "Claude Code / Cursor / Gemini CLI"

    ```
    /reversa
    ```

=== "Codex y motores sin slash commands"

    ```
    reversa
    ```

Eso es todo. Reversa toma el control y coordina todo el análisis desde ahí.

---

## Qué ocurre al activarlo

Reversa verifica si hay un análisis en curso:

**Primera vez:** crea un plan de exploración personalizado para tu proyecto, lo presenta para aprobación y comienza el análisis en la fase 1.

**Sesión retomada:** lee el checkpoint guardado en `.reversa/state.json` y continúa exactamente donde se quedó. No importa si cerraste el editor, reiniciaste la máquina o lo dejaste dormido tres días.

---

## Flujo típico de un análisis completo

```
Escribes /reversa
        ↓
Reversa crea el plan de exploración
        ↓
Revisas y apruebas el plan
        ↓
Scout mapea la superficie del proyecto
        ↓
Arqueólogo analiza módulo por módulo
        ↓
Detective y Arquitecto interpretan lo encontrado
        ↓
Redactor genera las especificaciones (una a la vez, con tu aprobación)
        ↓
Revisor revisa todo y plantea preguntas de validación
        ↓
Especificaciones listas en _reversa_sdd/
```

El proceso es incremental y conversacional. No necesitas estar presente todo el tiempo: Reversa te avisa cuando te necesita.

---

## ¿Cuánto tiempo lleva?

Depende del tamaño del proyecto, pero una regla general:

| Tamaño del proyecto | Estimado |
|---------------------|----------|
| Pequeño (< 10 módulos) | 2 a 4 sesiones |
| Mediano (10 a 30 módulos) | 5 a 10 sesiones |
| Grande (30+ módulos) | 10+ sesiones |

El Arqueólogo analiza un módulo por sesión a propósito, para conservar contexto. Para proyectos grandes retomarás varias veces, pero cada retomada es automática y sin pérdida de progreso.

---

## Consejo: desbordamiento de contexto

Si la sesión se alarga y el contexto empieza a agotarse, Reversa guarda el checkpoint automáticamente y avisa:

> "Voy a pausar aquí. Todo está guardado. Escribe `/reversa` en una nueva sesión para continuar."

Sin drama. Sin pérdida. Solo continúa después.

---

## Activar un agente específico manualmente

Si quieres ejecutar un agente suelto, sin pasar por el orquestador:

```
/reversa-scout
/reversa-detetive
/reversa-data-master
```

Útil cuando ya tienes un análisis en curso y quieres ejecutar un agente específico por alguna razón puntual.
