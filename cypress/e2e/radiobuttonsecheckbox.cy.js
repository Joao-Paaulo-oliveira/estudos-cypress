describe('Checkbox e radium buttons', () => {
  it('Selecionando checkbox e radium buttons', () => {
    cy.visit('/')
  
      cy.get('.footer_one_widget')
      .contains('Checkout View One')
      .click()
 
  // Selecionndo checkbox
    
      cy.get('#materialUnchecked')
        .check()
        .uncheck()
  
  // Selecionando Radium buttons
  
      cy.get('#javascript')
      .check()
  })
})