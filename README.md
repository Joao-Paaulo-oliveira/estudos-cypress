Estudos sobre Testes Automatizados com Cypress
Repositório dedicado ao aprendizado e à prática de testes automatizados de ponta a ponta (E2E) utilizando o framework Cypress.

🎯 Objetivo do Projeto
O objetivo principal deste repositório é servir como um diário de bordo dos meus estudos em automação de testes com Cypress. Aqui, desenvolvo e armazeno exemplos de testes, desde os mais básicos até cenários mais complexos, explorando as diversas funcionalidades que a ferramenta oferece.

🚀 Status do Projeto
O projeto está em sua fase inicial. Os arquivos de configuração básicos do Cypress foram adicionados e a estrutura de pastas está pronta para receber os primeiros arquivos de teste (specs).

📁 Estrutura de Arquivos
A estrutura inicial do projeto contém os seguintes arquivos e diretórios:

/
├── cypress/                # Pasta principal que conterá os testes, fixtures, etc.
├── .gitignore              # Arquivo para ignorar arquivos e pastas (ex: node_modules).
├── cypress.config.js       # Arquivo de configuração principal do Cypress.
├── package.json            # Define as dependências e scripts do projeto.
├── package-lock.json       # Registra a versão exata de cada dependência instalada.
└── README.md
🛠️ Como Começar
Para executar os testes contidos neste repositório, siga os passos abaixo:

1. Clone o repositório:

Bash

git clone https://github.com/Joao-Paaulo-oliveira/estudos-cypress.git
2. Navegue até o diretório do projeto:

Bash

cd estudos-cypress
3. Instale as dependências:
Certifique-se de ter o Node.js instalado.

Bash

npm install
4. Execute o Cypress:

Para abrir a interface gráfica do Cypress e executar os testes interativamente:

Bash

npx cypress open
Ou, para executar os testes em modo headless (sem interface gráfica) no terminal:

Bash

npx cypress run
✨ O que estou aprendendo
[ ] Comandos básicos do Cypress (cy.visit, cy.get, cy.click, .type()).
[ ] Assertivas e verificações (should, and, expect).
[ ] Trabalhando com fixtures para mockar dados.
[ ] Comandos customizados para reutilização de código.
[ ] Testando diferentes ambientes e resoluções.
[ ] Integração Contínua (CI) com GitHub Actions.

👨‍💻 Autor
João Paulo Oliveira

GitHub: Joao-Paaulo-oliveira
