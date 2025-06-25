

// Define o grupo de testes com o nome "Login"
describe('Get Elements', () => {
  
  // Caso de teste: verifica o login com sucesso
  it('Usando o get()', () => {

    // Visita a URL base definida no cypress.config.js 
    cy.visit('/')

    // Seleciona o elemento com a classe "logo" (geralmente o logotipo da página)
    cy.get('.logo')

    // Seleciona o segundo item da lista do cabeçalho e dá um apelido (@cabecalho)
    cy.get('#top_header ul > li:nth-child(2) > a')
      .as('cabecalho')  // cria um atalho para reutilizar depois
      .contains('Cadastro')  // verifica se esse item contém o texto "Cadastro"

    // Dentro do segundo div do cabeçalho, procura uma <ul> que contenha um ícone de cadeado (fa-lock)
    cy.get('#top_header div:nth-child(2) ul')
      .find('.fa.fa-lock')  
  })
})
