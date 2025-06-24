# 📚 Estudos sobre Testes Automatizados com Cypress

![Cypress.io](https://img.shields.io/badge/Cypress-^13.0.0-brightgreen) ![GitHub last commit](https://img.shields.io/github/last-commit/Joao-Paaulo-oliveira/estudos-cypress) ![Linguagem](https://img.shields.io/github/languages/top/Joao-Paaulo-oliveira/estudos-cypress)

Repositório dedicado ao aprendizado e à prática de testes automatizados de ponta a ponta (E2E) utilizando o framework **Cypress**.

##  Objetivo do Projeto

O objetivo principal deste repositório é servir como um diário de bordo dos meus estudos em automação de testes com Cypress. Aqui, desenvolvo e armazeno exemplos de testes, desde os mais básicos até cenários mais complexos, explorando as diversas funcionalidades que a ferramenta oferece.

##  Status do Projeto

O projeto está em sua fase inicial. Os arquivos de configuração básicos do Cypress foram adicionados e a estrutura de pastas está pronta para receber os primeiros arquivos de teste (`specs`).


##  Como Começar

Para executar os testes contidos neste repositório, siga os passos abaixo.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en/) instalado.
* [Git](https://git-scm.com/) instalado.

**Passos:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Joao-Paaulo-oliveira/estudos-cypress.git](https://github.com/Joao-Paaulo-oliveira/estudos-cypress.git)
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd estudos-cypress
    ```

3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

4.  **Execute o Cypress:**

    * Para abrir a interface gráfica do Cypress e executar os testes interativamente:
        ```bash
        npx cypress open
        ```
    * Para executar os testes em modo *headless* (sem interface gráfica) via terminal:
        ```bash
        npx cypress run
        ```

##  Roadmap de Estudos

-   [ ] Comandos básicos (`cy.visit`, `cy.get`, `cy.click`, `.type()`)
-   [ ] Assertivas e verificações (`should`, `and`, `expect`)
-   [ ] Trabalhando com `fixtures` para mockar dados
-   [ ] Comandos customizados para reutilização de código
-   [ ] Page Objects
-   [ ] Testando diferentes ambientes e resoluções
-   [ ] Integração Contínua (CI) com GitHub Actions

## 👨‍💻 Autor

**João Paulo Oliveira**

* **GitHub:** [@Joao-Paaulo-oliveira](https://github.com/Joao-Paaulo-oliveira)
