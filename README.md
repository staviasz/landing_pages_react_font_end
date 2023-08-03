# Documentação do Projeto de Landing Pages em TypeScript (TSX)

O projeto de Landing Pages em TypeScript (TSX) é uma aplicação que permite criar landing pages dinâmicas consumindo uma API para obter informações sobre a estrutura das seções, links de menus e dados/metadados das páginas. O projeto adota a componentização do React para facilitar a criação e exibição de páginas de destino de forma modular.

## Requisitos

O projeto de Landing Pages foi desenvolvido com as seguintes dependências:

### Dependências Principais

- React: Biblioteca para construção de interfaces de usuário.
- React DOM: Biblioteca para renderização de elementos React no DOM.
- React Router DOM: Biblioteca para roteamento em aplicações React.
- Styled Icons (Material Outlined): Ícones estilizados para componentes React.

### Dependências de Desenvolvimento

- Storybook: Ferramenta para desenvolvimento e teste de componentes de UI.
- Jest Styled Components: Plugin para testar componentes estilizados com Jest.
- Prop Types: Biblioteca para verificação de tipos das propriedades dos componentes.

## Funcionalidades Principais

O projeto de Landing Pages oferece as seguintes funcionalidades principais:

1. Criação de Landing Pages: Os usuários podem criar landing pages personalizadas utilizando a estrutura e dados da API.
2. Componentização de UI: Utiliza a componentização do React para criar e reutilizar componentes de interface de usuário.
3. Consumo de API: As landing pages consomem a API para obter informações sobre a estrutura das seções, links de menus e dados das páginas.
4. Testes de Componentes: Utiliza o Storybook e o Jest para testar componentes de UI de forma isolada e automatizada.

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte maneira:

- /
- |-- src/
- | |-- components/
- | | |-- ...
- | |-- templates/
- | | |-- ...
- | |-- api/
- | |-- styles/
- | | |-- ...
- |-- .storybook/
- | |-- ...
- |-- public/
- | |-- ...
- |-- package.json
- |-- tsconfig.json
- |-- ...

  
## Tecnologias Utilizadas

O projeto de Landing Pages utiliza as seguintes tecnologias e ferramentas:

- React: Biblioteca para construção de interfaces de usuário.
- React Router DOM: Biblioteca para gerenciamento de rotas em aplicações React.
- Styled Components: Biblioteca para estilização de componentes com CSS-in-JS.
- Storybook: Ferramenta para desenvolvimento e teste de componentes de UI.
- Prop Types: Biblioteca para especificação e verificação de tipos de propriedades dos componentes.

## Execução e Desenvolvimento

Para executar o projeto de Landing Pages e iniciar o desenvolvimento, siga os passos abaixo:

1. Clone o repositório do projeto para o seu ambiente local.
2. Navegue até a pasta raiz do projeto e execute `npm install` para instalar as dependências.
3. Execute `npm start` para iniciar o servidor de desenvolvimento e visualizar a aplicação no navegador.
4. Para desenvolvimento de componentes isolados, utilize `npm run storybook` para iniciar o Storybook.

## API Utilizada

O projeto consome a API disponibilizada no seguinte repositório: [Landing Pages Strapi Back-End](https://github.com/staviasz/landing_pages_strapi_back_end).

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com melhorias ou adicionar novos recursos ao projeto, sinta-se à vontade para criar um fork do repositório e abrir um pull request.

## Licença

Este projeto é disponibilizado sob a licença MIT. Desenvolvido por Erick Staviasz como parte do curso de React e Nestxjs ministrado por Otávio Miranda.

