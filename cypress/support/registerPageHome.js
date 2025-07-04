/// <reference types="cypress" />

Cypress.Commands.add('botaoRegistro', () => {
  cy.get('#btnRegister').should('be.visible').click(); // Clica no botão de registro sem preencher
});

Cypress.Commands.add('preencherNome', (name) => {
  cy.get('#user').should('be.visible').type(name); // Preenche o campo de nome
});

Cypress.Commands.add('preencherEmail', (email) => {
  cy.get('#email').should('be.visible').type(email);
});

Cypress.Commands.add('campoSenha', (password) => {
  cy.get('#password').should('be.visible').type(password);
});


Cypress.Commands.add('checarMensagem', (message) => {
    cy.get('.errorLabel')
    .should('have.text', message)

});



Cypress.Commands.add('cadastroRealizado', (message) => {
    cy.get('.swal2-title', {timeout:5000})
    .should('have.text', message)

});
