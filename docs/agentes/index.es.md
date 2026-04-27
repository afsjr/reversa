# Agentes

Reversa coordina un equipo de 14 especialistas. Cada agente hace una cosa y la hace bien.

---

## Agentes obligatorios

| Agente | Fase | Analogía | Función |
|--------|------|----------|---------|
| [Reversa](reversa.md) | Orquestación | El director de orquesta | Coordina todos los agentes, guarda checkpoints, guía al usuario |
| [Scout](scout.md) | Reconocimiento | El agente inmobiliario | Mapea la superficie: carpetas, lenguajes, frameworks, dependencias |
| [Arqueólogo](arqueologo.md) | Excavación | El excavador | Análisis profundo módulo a módulo: algoritmos, flujos, estructuras de datos |
| [Detective](detetive.md) | Interpretación | Sherlock Holmes | Extrae reglas de negocio implícitas, ADRs, máquinas de estado, permisos |
| [Arquitecto](arquiteto.md) | Interpretación | El cartógrafo | Sintetiza todo en diagramas C4, ERD y mapa de integraciones |
| [Redactor](redator.md) | Generación | El notario | Genera specs SDD, OpenAPI y user stories con trazabilidad de código |

---

## Agentes opcionales

| Agente | Analogía | Cuándo usar |
|--------|----------|-------------|
| [Revisor](revisor.md) | El revisor de specs | Después del Redactor: revisa specs críticamente y valida brechas |
| [Tracer](tracer.md) | El investigador de campo | Cuando hay brechas 🔴 que solo el sistema en ejecución resuelve |
| [Visor](visor.md) | El ilustrador forense | Cuando tengas screenshots del sistema disponibles |
| [Data Master](data-master.md) | El geólogo | Cuando haya DDL, migrations o modelos ORM disponibles |
| [Design System](design-system.md) | El estilista | Cuando haya archivos CSS, temas o screenshots de interfaz |
| [Chronicler](chronicler.md) | El escriba | Para documentar cambios de código durante el desarrollo |
| [Guía de Agentes](agents-help.md) | El guía | Para entender qué hace cada agente y cuándo usarlo |

---

## Secuencia recomendada

```
/reversa → orquesta todo automáticamente

O manualmente:
Scout → Arqueólogo (N sesiones) → Detective → Arquitecto → Redactor → Revisor

Opcionales en cualquier fase:
Visor · Data Master · Design System · Tracer · Chronicler
```
