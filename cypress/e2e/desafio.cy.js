/// <reference types="cypress" />

describe('Cadastro de Usuario', () => {
  
  
  
  it('Validar campo de nome vazio', () => {
  // Acessar a página inicial
     cy.visit('/')
  
     cy.get('.header-logo') // Verifica se o logo está visível
        .get('.fa-lock') // Verifica se o ícone de bloqueio está visível
        .click() // Clica no ícone de bloqueio para acessar o login
        .get('#user')  // Verifica se o campo de usuário está visível
        .should('be.visible') // Verifica se o campo de usuário está visível

     cy.get('#btnRegister') // Verifica se o botão de registro está visível
         .click() // Clica no botão de registro

     cy.get('.errorLabel') // Verifica se o rótulo de erro está visível
         .should('have.text' , 'O campo nome deve ser prenchido') // Verifica se o texto do rótulo de erro é o esperado
  })
})