# Site União em React

Implementação em React inspirada no site original [uniao.com.br](https://uniao.com.br), com rotas, componentes reutilizáveis e foco em boas práticas de Lighthouse.

## Pré-requisitos
- Node.js 18+
- npm ou yarn

## Scripts
- `npm install` – instala dependências.
- `npm run dev` – inicia servidor de desenvolvimento (Vite).
- `npm run build` – gera build de produção.
- `npm run preview` – serve build gerado.
- `npm run lint` – executa ESLint.

## Estrutura de pastas
- `src/components` – componentes reutilizáveis (Header, Footer, Hero, cartões, formulários etc.).
- `src/pages` – páginas com rotas e seções específicas.
- `src/data` – conteúdo mockado que reflete sessões do site original.
- `src/styles` – estilos globais e variáveis de tema.
- `public` – assets estáticos, incluindo o logo da marca.

## Observações de fidelidade
- Paleta de cores, tipografia Montserrat/Playfair e layout seguem o visual da marca.
- Imagens usam carregamento preguiçoso e textos alternativos para acessibilidade.
- Rotas replicam a navegação principal: produtos, receitas, história, sustentabilidade, blog e contato.
- Componentes são carregados de forma lazy para melhorar performance.
