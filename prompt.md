# prompts.md — Documentação de Consulta às IAs

## Atividade
Criação de uma aplicação web de CRUD com login, usando HTML, CSS e JavaScript puro (sem frameworks).

---

## Prompt Utilizado

### Prompt inicial

> Preciso criar uma aplicação web simples usando apenas HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas. A aplicação deve ter:
> - Uma tela de login com usuário `aluno` e senha `fiap2025`. Se as credenciais estiverem erradas ou os campos vazios, exibir mensagem de erro na tela (não no console).
> - Após o login, exibir uma lista de itens (tema livre — pode ser jogos favoritos) com operações de CRUD completo:
>   - Adicionar item ao final da lista
>   - Adicionar item ao início da lista
>   - Editar item individualmente (pelo índice, não pelo valor)
>   - Remover item individualmente (pelo índice, para evitar remoção duplicada em itens iguais)
> - A lista deve começar com pelo menos 3 itens
> - Os dados devem ser armazenados em um array de strings (não objetos)
> - Toda a lógica deve ser organizada em funções nomeadas — sem código solto fora de funções, exceto declaração de variáveis e chamada inicial de renderização
> - Validações: campo vazio no login ou na adição/edição deve exibir mensagem de erro na tela
> - Ao editar, se o usuário cancelar ou deixar o campo vazio, o item original deve ser mantido

### Prompt refinado (após primeiras respostas)

O prompt acima foi mantido, mas adicionei ao final:

> Separe o código em três arquivos: `index.html`, `style.css` e `script.js`. No JavaScript, use `var` e `for` clássico (sem `const`, `let` ou `forEach`), já que esses são os recursos trabalhados em aula.

---

## IAs Consultadas

### 1. ChatGPT (OpenAI — GPT-4o)

**Problemas encontrados:**
- Usou `const` e `let` em todo o código JavaScript, que são recursos ainda não abordados nas aulas da disciplina.
- Utilizou `forEach` e arrow functions (`=>`), que também fogem do conteúdo visto em aula.
- A estilização CSS ficou muito simples e genérica (fundo branco, fonte Arial), sem nenhuma preocupação visual.
- A remoção de itens foi feita pelo valor (`indexOf`), o que causaria bug ao remover itens com texto duplicado.

---

### 2. Gemini (Google)

**Problemas encontrados:**
- A validação de login foi implementada corretamente, mas a mensagem de erro aparecia como `alert()` em vez de elemento visual na tela, descumprindo o requisito.
- A edição de itens usava `prompt()` corretamente, porém não tratava o caso de o usuário cancelar (retornava `null` sem verificação, causando erro).
- Os três arquivos foram entregues separados, o que foi um ponto positivo.
- Também fez uso de `let`/`const` e template literals, recursos fora do escopo da aula.

---

### 3. Claude (Anthropic — claude-sonnet-4-6)

**Problemas encontrados:**
- A primeira resposta usou alguns recursos modernos como `addEventListener` com arrow functions.
- Foi necessário refinar o prompt para especificar o uso de `var` e `for` clássico.
- Após o refinamento, a resposta ficou bem alinhada com os requisitos.

---

## IA Escolhida como Base

**Claude (Anthropic)** foi escolhido como base principal.

**Justificativa:**
- Foi a única IA que, após o refinamento do prompt, entregou um código com separação adequada dos três arquivos e respeitou as restrições de sintaxe solicitadas.
- A lógica de remoção por índice (usando `splice(indice, 1)`) foi implementada corretamente, evitando o bug de itens duplicados.
- O tratamento de `null` no `prompt()` de edição foi feito de forma explícita e segura.
- A organização do código em funções nomeadas e sem código solto fora de funções foi seguida à risca.
- O código final foi modificado para ajustar o visual e adicionar a animação de entrada dos cards, além de um tema escuro personalizado.