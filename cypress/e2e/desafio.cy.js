/// <reference types="cypress" />

// Importa biblioteca faker para gerar dados dinâmicos
import { faker } from '@faker-js/faker';

// Importa massa de dados do arquivo JSON localizado na pasta fixtures
const user_data = require('../fixtures/deafio.json');

describe('Cadastro de Usuario', () => {
  // Executa antes de cada teste individual
  beforeEach('Acessando a tela de cadastro', () => {
    cy.visit('/'); // Acessa a página inicial do sistema

    // Garante que o logo está visível e clica no ícone de login (cadeado)
    cy.get('.header-logo'); // (opcional) valida que existe
    cy.get('.fa-lock').click(); // Clica no ícone de login

    // Aguarda o campo de usuário aparecer após clicar no login
    cy.get('#user', { timeout: 10000 }) // aumenta tempo de espera para garantir que carregou
      .should('be.visible'); // Verifica que o campo de usuário está visível
  });

  it('Validar campo de nome vazio', () => {
    cy.get('#btnRegister').click(); // Clica no botão de registro sem preencher

    // Verifica se a mensagem de erro é exibida corretamente
    cy.get('.errorLabel').should(
      'have.text',
      'O campo nome deve ser prenchido'
    );
  });

  it('Validar campo e-mail vazio', () => {
    cy.get('#user').type(user_data.name); // Preenche o campo de nome

    cy.get('#email').should('be.visible').clear(); // Limpa o campo de e-mail (campo vazio)

    cy.get('#btnRegister').click(); // Tenta cadastrar

    // Verifica se a mensagem de erro de e-mail aparece
    cy.get('#errorMessageFirstName').should(
      'have.text',
      'O campo e-mail deve ser prenchido corretamente'
    );
  });

  it('Validar campo e-mail inválido', () => {
    cy.get('#user').type(user_data.name); // Preenche o nome

    cy.get('#email').should('be.visible').type('emailinvalido'); // Insere um e-mail incorreto

    cy.get('#btnRegister').click(); // Tenta cadastrar

    // Valida se a mensagem de erro de e-mail inválido aparece
    cy.get('.errorLabel').should(
      'have.text',
      'O campo e-mail deve ser prenchido corretamente'
    );
  });

  it('Campo senha vazio', () => {
    cy.get('#user').type(user_data.name); // Preenche nome
    cy.get('#email').type(user_data.email); // Preenche e-mail
    cy.get('#password').clear(); // Deixa senha em branco

    cy.get('#btnRegister').click(); // Clica no botão de cadastro

    // Valida a mensagem de erro para campo senha vazio
    cy.get('.errorLabel').should(
      'have.text',
      'O campo senha deve ter pelo menos 6 dígitos'
    );
  });

  it('Campo senha invalido', () => {
    cy.get('#user').type(user_data.name); // Preenche nome
    cy.get('#email').type(user_data.email); // Preenche e-mail
    cy.get('#password').type('1234'); // Insere senha inválida (menos de 6 dígitos)

    cy.get('#btnRegister').click(); // Clica no botão de cadastro

    // Valida a mensagem de erro de senha inválida
    cy.get('.errorLabel').should(
      'have.text',
      'O campo senha deve ter pelo menos 6 dígitos'
    );
  });

  it('Cadastro realizado com sucesso', () => {
    cy.visit('/'); // Recarrega a página principal

    cy.get('.fa-lock').click(); // Isso abre o formulário de cadastro

    // Espera o campo de usuário aparecer
    cy.get('#user', { timeout: 10000 }).should('be.visible');

    const name = faker.person.fullName(); // Gera nome dinâmico

    // Preenche todos os campos com dados válidos
    cy.get('#user').type(name);
    cy.get('#email').type(faker.internet.email());
    cy.get('#password').type(user_data.password);

    cy.get('#btnRegister').click();

    // Verifica se a mensagem de sucesso aparece
    cy.get('.swal2-title').should('have.text', 'Cadastro realizado!');
  });
});
