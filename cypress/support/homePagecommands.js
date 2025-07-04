// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('acessandoTelaCadastro', () => {
  cy.visit('/'); // Acessa a página inicial do sistema

  // Garante que o logo está visível e clica no ícone de login (cadeado)
  cy.get('.header-logo'); // (opcional) valida que existe
  cy.get('.fa-lock').click(); // Clica no ícone de login

  // Aguarda o campo de usuário aparecer após clicar no login
  cy.get('#user', { timeout: 10000 }) // aumenta tempo de espera para garantir que carregou
    .should('be.visible'); // Verifica que o campo de usuário está visível
});
