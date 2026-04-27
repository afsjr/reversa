# Chronicler

**Command:** `/reversa-doc` (or `/reversa-chronicler`)
**Phase:** Any, during development
**Analogy:** The scribe

---

## What it does

The Chronicler captures knowledge about a code change *right after it happens*, before the context gets lost in the conversation history or forgotten until the next session.

You know that moment when you make a change, know exactly why you did it, what the impact is, what might break... and two days later you can't remember anymore? The Chronicler documents that moment while it's still fresh.

**Absolute rule:** the Chronicler only documents. Never changes code, never suggests modifications, never opines on the implementation.

---

## How it works

When you activate the Chronicler right after a change, it:

### 1. Discovers what changed

Runs `git diff HEAD` to identify modified files. If there's no diff yet, it asks which files were modified.

### 2. Asks three quick questions

```
Found changes in: `src/payments/gateway.js`, `src/payments/retry.js`

Three quick questions to document:
1. Why was this change necessary?
2. Is there any breaking change or side effect someone should know about?
3. Any important extra context? (can skip if none)
```

### 3. Generates the changelog entry

Creates or updates `_reversa_sdd/changelog/YYYY-MM-DD.md` with the documented entry.

### 4. Updates the corresponding spec

If the change affects a component that already has a spec in `_reversa_sdd/sdd/`, the Chronicler adds a change note at the end of the spec to maintain traceability.

---

## Changelog format

```markdown
## 14:32 — Add exponential backoff retry in payment gateway

**What:** Added `retryWithBackoff` and `calculateDelay` functions in gateway.js
**Why:** Gateway was returning timeout under load spikes and the app wasn't retrying
**Impact:** May increase latency in failure scenarios (max 3 attempts: 1s, 2s, 4s)
**Files:** src/payments/gateway.js, src/payments/retry.js
```

---

## When to use

Use whenever you make a relevant change during development: new implementations, bug fixes, impactful refactors. The cost is two minutes. The gain is not losing the context that only exists right now.
