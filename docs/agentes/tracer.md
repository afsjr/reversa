# Tracer

**Command:** `/reversa-tracer`
**Phase:** Any
**Analogy:** The field investigator

---

## What it does

Static analysis has limits. It reads the code but doesn't see the system running. Certain behaviors only exist when there's real data, real users, real logs.

The Tracer is the investigator who goes on-site when the code doesn't answer. Observes live logs, queries the database with read-only `SELECT`, asks you to run specific flows while it watches what happens.

**Absolute rule:** the Tracer never modifies anything. No `INSERT`, `UPDATE`, `DELETE`. Only observes.

---

## When to use

Use the Tracer when there are 🔴 gaps in `_reversa_sdd/gaps.md` that only the running system can resolve. For example:

- "What's the behavior when the payment gateway returns timeout?"
- "Is this endpoint actually called? How often?"
- "What's the real distribution of values in the `status` field?"

---

## What it analyzes

### Historical logs

If log files exist:

- Real usage patterns: most called endpoints, most executed flows
- Event sequences that reveal undocumented user flows
- Frequent errors and their contexts
- Confirmation or refutation of rules marked as 🟡 INFERRED

### Real data (read-only)

If you grant database access:

- `SELECT` only
- Value distribution in status fields
- Records with unexpected values (real production edge cases)
- Cardinality confirmation

### Execution tracing

If the system can be started locally:

- It asks you to run specific flows
- Watches logs in real time
- Maps the actual sequence of calls

---

## What it produces

| File | Content |
|------|---------|
| `_reversa_sdd/dynamic.md` | Dynamic analysis findings |
| `_reversa_sdd/sequences/[flow].md` | Sequence diagrams in Mermaid |
| `_reversa_sdd/gaps-resolved.md` | 🔴 gaps resolved with evidence |

Specs in `_reversa_sdd/sdd/` are updated: where Tracer found real evidence, 🔴 becomes 🟢.
