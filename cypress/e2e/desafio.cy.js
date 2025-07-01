/// <reference types="cypress" />

describe('Cadastro de Usuario', () => {
  it('Validar campo de nome vazio', () => {
    // Acessar a página inicial
    cy.visit('/');

    cy.get('.header-logo') // Verifica se o logo está visível
      .get('.fa-lock') // Verifica se o ícone de bloqueio está visível
      .click() // Clica no ícone de bloqueio para acessar o login
      .get('#user') // Verifica se o campo de usuário está visível
      .should('be.visible'); // Verifica se o campo de usuário está visível

    cy.get('#btnRegister') // Verifica se o botão de cadastro está visível
      .click(); // Clica no botão de registro

    cy.get('.errorLabel') // Verifica se o rótulo de erro está visível
      .should('have.text', 'O campo nome deve ser prenchido'); // Verifica se o texto do rótulo de erro é o esperado
  });

  it('Validar campo e-mail vazio', () => {
    cy.visit('/'); // Acessa a página inicial

    cy.get('.header-logo') // Verifica se o logo está visível
      .get('.fa-lock') // Verifica se o ícone de bloqueio está visível
      .click() // Clica no ícone de bloqueio para acessar o login

      .get('#user') // Verifica se o campo de usuário está visível
      .should('be.visible') // Verifica se o campo de usuário está visível
      .type('João Paulo'); // Digita o nome de usuário no campo

    cy.get('#email') // Verifica se o campo de e-mail está visível
      .should('be.visible') // Verifica se o campo de e-mail está visível
      .type(' '); // Limpa o campo de e-mail para simular um campo vazio

    cy.get('#btnRegister') // Verifica se o botão de cadastro está visível
      .click(); // Clica no botão de registro

    cy.get('#errorMessageFirstName') // Verifica se o rótulo de erro do campo de e-mail está visível
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente'); // Verifica se o texto do rótulo de erro é o esperado
  });

  it('Validar campo e-mail inválido', () => {
    cy.visit('/');

    cy.get('.header-logo') // Verifica se o logo está visível
      .get('.fa-lock') // Verifica se o ícone de bloqueio está visível
      .click() // Clica no ícone de bloqueio para acessar o login

      .get('#user') // Verifica se o campo de usuário está visível
      .should('be.visible') // Verifica se o campo de usuário está visível
      .type('João Paulo'); // Digita o nome de usuário no campo

    cy.get('#email') // Verifica se o campo de e-mail está visível
      .should('be.visible') // Verifica se o campo de e-mail está visível
      .type('joao.ppaulo.com.br '); // Limpa o campo de e-mail para simular um campo vazio

    cy.get('#btnRegister') // Verifica se o botão de cadastro está visível
      .click(); // Clica no botão de registro

    cy.get('#errorMessageFirstName') // Verifica se o rótulo de erro do campo de e-mail está visível
      .should('have.text', 'O campo e-mail deve ser prenchido corretamente'); // Verifica se o texto do rótulo de erro é o esperado
  });

  it('Campo senha vazio', () => {
    cy.visit('/');

    cy.get('.header-logo') // Verifica se o logo está visível
      .get('.fa-lock') // Verifica se o ícone de bloqueio está visível
      .click() // Clica no ícone de bloqueio para acessar o login

      .get('#user') // Verifica se o campo de usuário está visível
      .should('be.visible') // Verifica se o campo de usuário está visível
      .type('João Paulo'); // Digita o nome de usuário no campo

    cy.get('#email') // Verifica se o campo de e-mail está visível
      .should('be.visible') // Verifica se o campo de e-mail está visível
      .type('joao.ppaulo@qa.com.br'); // Limpa o campo de e-mail para simular um campo vazio

    cy.get('#password').should('be.visible').type(' '); // Limpa o campo de senha para simular um campo vazio

    cy.get('#btnRegister') // Verifica se o botão de cadastro está visível
      .click(); // Clica no botão de registro

  cy.get('.errorLabel').should(
    'have.text',
    'O campo senha deve ter pelo menos 6 dígitos'
  );
});

it('Campo senha invalido', () => {
  cy.visit('/');

    cy.get('.header-logo') // Verifica se o logo está visível
      .get('.fa-lock') // Verifica se o ícone de bloqueio está visível
      .click() // Clica no ícone de bloqueio para acessar o login

      .get('#user') // Verifica se o campo de usuário está visível
      .should('be.visible') // Verifica se o campo de usuário está visível
      .type('João Paulo'); // Digita o nome de usuário no campo

    cy.get('#email') // Verifica se o campo de e-mail está visível
      .should('be.visible') // Verifica se o campo de e-mail está visível
      .type('joao.ppaulo@qa.com.br'); // Limpa o campo de e-mail para simular um campo vazio

    cy.get('#password').should('be.visible').type('1234'); // digita uma senha inválida (menos de 6 dígitos)

    cy.get('#btnRegister') // Verifica se o botão de cadastro está visível
      .click(); // Clica no botão de registro
  cy.get('.errorLabel').should(
    'have.text',
    'O campo senha deve ter pelo menos 6 dígitos'
  );
});

it.only('Cadastro realizado com sucesso', () => {
  cy.visit('/');
    cy.visit('/');

    cy.get('.header-logo') // Verifica se o logo está visível
      .get('.fa-lock') // Verifica se o ícone de bloqueio está visível
      .click() // Clica no ícone de bloqueio para acessar o login

      .get('#user') // Verifica se o campo de usuário está visível
      .should('be.visible') // Verifica se o campo de usuário está visível
      .type('João Paulo'); // Digita o nome de usuário no campo

    cy.get('#email') // Verifica se o campo de e-mail está visível
      .should('be.visible') // Verifica se o campo de e-mail está visível
      .type('joao.ppaulo@qa.com.br'); // Limpa o campo de e-mail para simular um campo vazio

    cy.get('#password')
    .should('be.visible')
    .type('123456'); // digita uma senha válida (6 dígitos)

    cy.get('#btnRegister') // Verifica se o botão de cadastro está visível
      .click(); // Clica no botão de registro
    cy.get('.swal2-title').should(
      'have.text',
      'Cadastro realizado!'
    );
  });

});
