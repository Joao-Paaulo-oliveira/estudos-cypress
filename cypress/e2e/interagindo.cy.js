
// Preenchendo Campos

      it('Preenchendo', () => {
   
    cy.visit('/')
    cy.get('.form-control')
      .type('joao.ppaulo92@qa.com')
    

  })

// Clicando em um botão

describe('Clicando ', () => {
      it('Click', () => {
   
    cy.visit('/')
    cy.get('.fa-user')
      .click()
    
  })
})

// Duplo click em botão

describe('Duplo click', () => {
      it('Duplo click', () => {
   
    cy.visit('/')
    cy.get('.fa-user')
      .dblclick()
    
  })
})

// Clicando com o botão direito 

describe('Click botão direito', () => {
      it('Click botão direito', () => {
   
    cy.visit('/')
    cy.get('.fa-user')
      .rightclick()
    
  })
})

// Clicando por cordenada 

describe('click por cordenada', () => {
      it('click por cordenada', () => {
   
    cy.visit('/')
    cy.get('.fa-user')
      .click(100, 100, {force: true})
    
  })
})

 // Apertando enter


describe('Apertando enter', () => {
   it('Apertando enter', () => {
   
    cy.visit('/')
    cy.get('.form-control')
      .type('joao.ppaulo92@qa.com{enter}')
    

  })

})

// Clicando com Select 

describe('Select', () => {
   it('Apertando Select', () => {
   
    cy.visit('/')
    cy.get('.footer_one_widget')
      .contains('Checkout View Two')
      .click()
   
    
    cy.get('#country')
      .select('Algeria')
  })

})

