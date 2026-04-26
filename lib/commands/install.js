export default async function install(args) {
  const { default: chalk } = await import('chalk');
  const { default: ora } = await import('ora');
  const { default: inquirer } = await import('inquirer');

  console.log(chalk.bold('\n  Reversa — Instalação\n'));

  // TODO: implementar fluxo completo de instalação
  // 1. Detectar engines instaladas (detector.js)
  // 2. Verificar instalação existente (validator.js)
  // 3. Sequência de perguntas (prompts.js):
  //    - Diretório de instalação
  //    - Engines a suportar (com ⭐ para Claude Code, Codex, Cursor)
  //    - Agentes a instalar (todos marcados por padrão, obrigatórios não desmarcáveis)
  //    - Modo Express / Avançado
  //    - Nome do projeto
  //    - Nome do usuário ("Como os agentes devem te chamar?")
  //    - Idioma do chat (como agentes se comunicam com você)
  //    - Idioma dos documentos (idioma das specs geradas)
  //    - Pasta de saída (padrão: _reversa_sdd)
  //    - Adicionar ao .gitignore ou commitar artefatos?
  //    - Modo de resposta a lacunas (chat ou arquivo)
  // 4. Escrever arquivos (writer.js):
  //    - Copiar agents/reversa-*/ → .agents/skills/reversa-*/ (universal)
  //    - Copiar agents/reversa-*/ → .claude/skills/reversa-*/ (se Claude Code)
  //    - Gerar .cursor/rules/reversa-*.mdc (se Cursor)
  //    - Criar/mesclar CLAUDE.md, AGENTS.md, GEMINI.md (NUNCA sobrescrever sem confirmação)
  //    - Criar .reversa/config.toml a partir do template
  //    - Criar .reversa/state.json e .reversa/plan.md
  //    - Registrar todos os arquivos criados em state.json.created_files
  // 5. Gerar manifest com hashes SHA-256 de todos os arquivos instalados

  console.log(chalk.yellow('  Em desenvolvimento — disponível em breve.\n'));
}
