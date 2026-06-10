Article
Projeto de estudo de um site de artigos de notícias, desenvolvido com Next.js.

https://article-roan.vercel.app
https://github.com/caadu999/article

Tecnologias -

Next.js
TypeScript
Axios
SCSS Modules

Variáveis de ambiente -

Crie um arquivo .env.local na raiz do projeto com as seguintes variáveis:

API_URL=https://sua-api-url-aqui.com
_Você pode usar o arquivo .env.example como referência._

Como rodar localmente

1 Clone o repositório:
git clone https://github.com/seu-usuario/article.git
cd article

2 Instale as dependências:
npm install

3 Configure as variáveis de ambiente:
cp .env.example .env.local

\*Edite o .env.local com a URL real da API.

4 Rode o servidor de desenvolvimento:
npm run dev

5 Acesse http://localhost:3000 no navegador.
