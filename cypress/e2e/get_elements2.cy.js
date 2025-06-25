describe('Estudos', () => {
 
  it('Estudos ', () => {
   
   cy.visit('/')

   
    cy.get('#top_header')
      .contains('Login')



    cy.get('#top_header')
      .find('.fa-lock')


  })
})