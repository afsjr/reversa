# Configuración

Reversa guarda toda su configuración y estado del análisis dentro de la carpeta `.reversa/` en la raíz del proyecto.

---

## Estructura de la carpeta `.reversa/`

```
.reversa/
├── state.json          ← estado del análisis entre sesiones
├── config.toml         ← configuración del proyecto
├── config.user.toml    ← tus preferencias personales (no commitear)
├── plan.md             ← plan de exploración (puedes editarlo)
├── version             ← versión instalada de Reversa
├── context/
│   ├── surface.json    ← datos generados por Scout
│   └── modules.json    ← datos generados por Arqueólogo
└── _config/
    ├── manifest.yaml           ← metadatos de la instalación
    └── files-manifest.json     ← hashes SHA-256 para updates seguros
```

---

## `config.toml`: configuración del proyecto

```toml
[project]
name = "mi-proyecto"
language = "es"

[agents]
installed = ["reversa", "scout", "arqueologo", "detetive", "arquiteto", "redator", "revisor"]

[output]
folder = "_reversa_sdd"

[engines]
active = ["claude-code"]
```

---

## `config.user.toml`: preferencias personales

```toml
[user]
name = "Tu Nombre"
answer_mode = "chat"  # "chat" o "file"
```

!!! warning "No commitear"
    Agrega `config.user.toml` al `.gitignore`. Cada miembro del equipo puede tener sus propias preferencias sin afectar a los demás.

---

## Modo de respuesta (`answer_mode`)

| Modo | Comportamiento |
|------|----------------|
| `chat` (por defecto) | Las preguntas aparecen en el chat, una a una. Respondes en la conversación. |
| `file` | El Revisor genera un archivo `_reversa_sdd/questions.md` con todas las preguntas. Lo rellenas y avisas cuando termines. |
