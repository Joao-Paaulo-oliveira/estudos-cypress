/// <reference types="cypress" /> 

// Importa biblioteca faker para gerar dados dinâmicos
import { faker } from '@faker-js/faker';

// Importa massa de dados do arquivo JSON localizado na pasta fixtures
const user_data = require('../fixtures/deafio.json');

describe('Cadastro de Usuario', () => {
  
  beforeEach('Acessando a tela de cadastro', () => {
    cy.acessandoTelaCadastro(); 
    
  });

  it('Validar campo de nome vazio', () => {
   
    cy.botaoRegistro() // Clica no botão de registro sem preencher
    cy.checarMensagem('O campo nome deve ser prenchido')//Verifica se a mensagem de erro é exibida corretamente
    
  });

  it('Validar campo e-mail vazio', () => {
    
    cy.preencherNome(user_data.name); // Preenche o campo de nome
    cy.preencherEmail(' ').clear(); // Limpa o campo de e-mail (campo vazio)
    cy.botaoRegistro(); // Clica no botão de cadastro
    cy.checarMensagem('O campo e-mail deve ser prenchido corretamente');//Verifica se a mensagem de erro de e-mail aparece
  });

  it('Validar campo e-mail inválido', () => {
   
    cy.preencherNome(user_data.name);//Preenche o nome
    cy.preencherEmail('emailinvalido.com');//Insere um e-mail incorreto
    cy.botaoRegistro();//Clica no botão de cadastro
    cy.checarMensagem('O campo e-mail deve ser prenchido corretamente')//Valida se a mensagem de erro de e-mail inválido aparece
 
  });

  it('Campo senha vazio', () => {
   
    cy.preencherNome(user_data.name);//Preenche nome
    cy.preencherEmail(user_data.email);//Preenche e-mail
    cy.campoSenha(' ');//Deixa senha em branco
    cy.botaoRegistro();//Clica no botão de cadastro
    cy.checarMensagem('O campo senha deve ter pelo menos 6 dígitos')//Valida a mensagem de erro para campo senha vazio

  });

  it('Campo senha invalido', () => {
   
    cy.preencherNome(user_data.name);//Preenche nome
    cy.preencherEmail(user_data.email)//Preenche e-mail
    cy.campoSenha('1234');//Insere senha inválida (menos de 6 dígitos)
    cy.botaoRegistro();//Clica no botão de cadastr
    cy.checarMensagem('O campo senha deve ter pelo menos 6 dígitos')//Valida a mensagem de erro de senha inválida
  
  });

  it('Cadastro realizado com sucesso', () => {
   
    const name = faker.person.fullName(); // Gera nome dinâmico
   
    // Preenche todos os campos com dados válidos
    cy.preencherNome(user_data.name);
    cy.preencherEmail(faker.internet.email());
    cy.campoSenha(user_data.password);
    cy.botaoRegistro();
    cy.cadastroRealizado('Cadastro realizado!'); // Verifica se a mensagem de sucesso aparece
  });
});