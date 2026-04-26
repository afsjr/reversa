# Passo 2 — Retomada de sessão

## 1. Leitura do estado

Leia `.reversa/state.json` e `.reversa/plan.md`.

## 2. Saudação

Diga: "[Nome], bem-vindo de volta ao Reversa! 🎼"

## 3. Resumo de progresso

Mostre:
- ✅ Fases concluídas (campo `completed` do state.json)
- 🔄 Fase atual (campo `phase`)
- ⏳ Próximas tarefas (campo `pending`)

Exemplo:
> "Progresso atual:
> ✅ Reconhecimento concluído
> 🔄 Escavação em andamento — módulo `auth` pendente
> ⏳ Interpretação, Geração, Revisão"

## 4. Confirmação

Pergunte: "Continuamos de onde paramos?"

Após confirmação, retome a próxima tarefa pendente no plano.
