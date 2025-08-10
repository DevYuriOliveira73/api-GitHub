# GitHub User Finder

Aplicação React desenvolvida como desafio técnico para vaga de Desenvolvedor React Júnior.

## Objetivo

Buscar perfis de desenvolvedores na API pública do GitHub e exibir seus repositórios com scroll infinito, respeitando os requisitos do desafio.

## Funcionalidades

- Pesquisa de usuário pelo username do GitHub.
- Exibição dos dados do perfil do usuário.
- Mensagem clara quando usuário não é encontrado.
- Listagem dos repositórios com scroll infinito (10 por página).
- Opção de ordenar os repositórios com todos os parâmetros disponíveis na API do GitHub.
- Nomes dos repositórios são links para os repositórios originais no GitHub.
- Botões para acessar site pessoal e Twitter do usuário, se disponíveis.
- Layout responsivo para desktop e mobile.
- Internacionalização (i18Next) com suporte a Português e Inglês.
- Duas rotas principais:
  - `/home` — página de busca.
  - `/profile/:username` — página de perfil acessível via link direto.

## Tecnologias Utilizadas

- React
- Chakra UI v2
- i18Next
- Zod para validação e modelagem das entidades
- API REST do GitHub

## Como Rodar

1. Clone o repositório:

   ```bash
   git clone https://github.com/DevYuriOliveira73/api-GitHub.git

   ```

2. Instale as dependências:

   ```bash
   npm i

   ```

3. Rode o projeto:

   ```bash
   npm run dev

   ```
