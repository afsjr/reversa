# Pipeline de análisis

Reversa transforma un sistema heredado en especificaciones ejecutables en 5 fases.

---

## Visión general

```
Fase 1          Fase 2        Fase 3              Fase 4        Fase 5
Reconocimiento  Excavación    Interpretación      Generación    Revisión
   Scout        Arqueólogo    Detective           Redactor      Revisor
                               Arquitecto
```

**Agentes independientes** que corren en cualquier fase: **Visor**, **Data Master**, **Design System**, **Tracer**

---

## Fase 1: Reconocimiento

**Agente:** Scout

El Scout hace el primer tour del proyecto. Como un agente inmobiliario visitando una propiedad por primera vez: no abre cajones, no lee todos los documentos, solo mapea el territorio.

---

## Fase 2: Excavación

**Agente:** Arqueólogo

El Arqueólogo excava el código módulo por módulo. Con paciencia y precisión, cataloga cada artefacto: funciones, algoritmos, estructuras de datos, flujos de control. Sin interpretaciones. Solo describe con precisión lo que hay.

**Importante:** el Arqueólogo analiza un módulo por sesión, a propósito. Intentar analizarlo todo de una vez consume contexto y reduce la calidad del análisis.

---

## Fase 3: Interpretación

**Agentes:** Detective + Arquitecto

**El Detective** es el Sherlock Holmes del equipo. Mira lo que el Arqueólogo catalogó y pregunta: *"¿Por qué está esto aquí? ¿Quién tomó esta decisión? ¿Qué revela el historial de git?"* Extrae reglas de negocio implícitas, ADRs retroactivos, máquinas de estado y matrices de permisos.

**El Arquitecto** es el cartógrafo. Sintetiza todo en documentación arquitectónica formal: diagramas C4, ERD completo, mapa de integraciones y deuda técnica.

---

## Fase 4: Generación

**Agente:** Redactor

El Redactor transforma todo lo descubierto en contratos formales: specs SDD por componente, specs OpenAPI para las APIs, user stories para los flujos de usuario. Cada afirmación se marca con la [escala de confianza](escala-confianca.md). Genera un archivo a la vez, con tu aprobación antes de continuar.

---

## Fase 5: Revisión

**Agente:** Revisor

El Revisor intenta romper las specs: busca contradicciones internas, conflictos entre specs, afirmaciones marcadas como 🟢 que son inferencias, comportamientos obvios no especificados. Luego recopila las brechas 🔴 y las presenta como preguntas para validación humana.

---

## Agentes independientes

| Agente | Cuándo usar |
|--------|-------------|
| **Visor** | Cuando tengas screenshots del sistema disponibles |
| **Data Master** | Cuando haya DDL, migrations o modelos ORM disponibles |
| **Design System** | Cuando haya archivos CSS, temas o screenshots de interfaz |
| **Tracer** | Cuando haya brechas 🔴 que solo el sistema en ejecución puede resolver |
| **Chronicler** | Para documentar cambios de código durante el desarrollo |
