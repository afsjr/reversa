# Generated outputs

Everything Reversa produces goes to the `_reversa_sdd/` folder (or whatever name you configure in `config.toml`). The legacy project is never touched.

---

## Full structure

```
_reversa_sdd/
├── inventory.md              # Project inventory (Scout)
├── dependencies.md           # Dependencies with versions (Scout)
├── code-analysis.md          # Technical analysis per module (Archaeologist)
├── data-dictionary.md        # Complete data dictionary (Archaeologist)
├── domain.md                 # Glossary and business rules (Detective)
├── state-machines.md         # State machines in Mermaid (Detective)
├── permissions.md            # Permission matrix (Detective)
├── architecture.md           # General architectural overview (Architect)
├── c4-context.md             # C4 Diagram: Context (Architect)
├── c4-containers.md          # C4 Diagram: Containers (Architect)
├── c4-components.md          # C4 Diagram: Components (Architect)
├── erd-complete.md           # Full ERD in Mermaid (Architect)
├── confidence-report.md      # Confidence report 🟢🟡🔴 (Reviewer)
├── gaps.md                   # Unresolved gaps (Reviewer)
├── questions.md              # Human validation questions (Reviewer)
├── dynamic.md                # Dynamic analysis findings (Tracer)
│
├── sdd/                      # Specs per component (Writer)
│   └── [component].md
│
├── openapi/                  # API specs (Writer)
│   └── [api].yaml
│
├── user-stories/             # User stories (Writer)
│   └── [flow].md
│
├── adrs/                     # Retroactive architectural decisions (Detective)
│   └── [number]-[title].md
│
├── flowcharts/               # Mermaid flowcharts (Archaeologist)
│   └── [module].md
│
├── sequences/                # Sequence diagrams (Tracer)
│   └── [flow].md
│
├── ui/                       # Interface specs (Visor)
│   ├── inventory.md
│   ├── flow.md
│   └── screens/
│       └── [screen].md
│
├── database/                 # Database specs (Data Master)
│   ├── erd.md
│   ├── data-dictionary.md
│   ├── relationships.md
│   ├── business-rules.md
│   └── procedures.md
│
├── design-system/            # Design tokens (Design System)
│   ├── color-palette.md
│   ├── typography.md
│   ├── spacing.md
│   ├── tokens.md
│   └── design-system.md
│
├── changelog/                # Documented changes (Chronicler)
│   └── YYYY-MM-DD.md
│
└── traceability/
    ├── spec-impact-matrix.md # Which spec impacts which (Architect)
    └── code-spec-matrix.md   # Code file to corresponding spec (Writer)
```

---

## Traceability

Two files connect everything:

**`traceability/code-spec-matrix.md`:** maps each code file to its corresponding spec, with coverage level. You know what's covered and what isn't.

**`traceability/spec-impact-matrix.md`:** maps which component impacts which. Before changing something, you know the blast radius of the change.

---

## What not to commit

Suggested `.gitignore` to avoid versioning Reversa outputs alongside code (unless you want to):

```gitignore
# Reversa outputs (optional: remove if you want to version the specs)
_reversa_sdd/

# Personal Reversa configuration (never commit)
.reversa/config.user.toml
```
