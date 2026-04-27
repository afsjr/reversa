# Agents

Reversa coordinates a team of 14 specialists. Each agent does one thing and does it well. None of them try to do everything.

The central orchestrator (Reversa itself) coordinates who enters when, in what order, and at what pace. But you can also trigger any agent directly when you need to.

---

## Required agents

These are part of the main pipeline. The orchestrator runs them in the right sequence.

| Agent | Phase | Analogy | Role |
|-------|-------|---------|------|
| [Reversa](reversa.md) | Orchestration | The orchestra conductor | Coordinates all agents, saves checkpoints, guides the user |
| [Scout](scout.md) | Reconnaissance | The real estate agent | Maps the surface: folders, languages, frameworks, dependencies, entry points |
| [Archaeologist](arqueologo.md) | Excavation | The excavator | Deep module-by-module analysis: algorithms, flows, data structures |
| [Detective](detetive.md) | Interpretation | Sherlock Holmes | Extracts implicit business rules, ADRs, state machines, permissions |
| [Architect](arquiteto.md) | Interpretation | The cartographer | Synthesizes everything into C4 diagrams, ERD, and integration map |
| [Writer](redator.md) | Generation | The notary | Generates SDD specs, OpenAPI, and user stories with code traceability |

---

## Optional agents

Installed by default, but can be triggered independently at any time.

| Agent | Analogy | When to use |
|-------|---------|-------------|
| [Reviewer](revisor.md) | The spec reviewer | After the Writer: critically reviews specs and validates gaps |
| [Tracer](tracer.md) | The field investigator | When there are 🔴 gaps only the running system can resolve |
| [Visor](visor.md) | The forensic illustrator | When screenshots of the system are available |
| [Data Master](data-master.md) | The geologist | When DDL, migrations, or ORM models are available |
| [Design System](design-system.md) | The stylist | When CSS files, themes, or interface screenshots are available |
| [Chronicler](chronicler.md) | The scribe | To document code changes during development |
| [Agents Help](agents-help.md) | The guide | To understand what each agent does and when to use it |

---

## Recommended sequence

```
/reversa → orchestrates everything automatically

Or manually, if you prefer to control each step:

Scout → Archaeologist (N sessions) → Detective → Architect → Writer → Reviewer

Optional at any phase:
Visor · Data Master · Design System · Tracer · Chronicler
```

---

## Guide with analogies

Want to understand each agent's role in a more visual and fun way? The [Guide with analogies](agents-help.md) explains each one using real-world metaphors.
