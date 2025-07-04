


describe('Asserts', () => {
  it('Usando asserts', () => {
   
    cy.visit('/')
   
   
    cy.get('.footer_one_widget')
      .contains('Checkout View Two')
      .click()
 

    cy.get('row').eq(0)
      .should('be.visible')
      .type('João Paulo')



  })
})