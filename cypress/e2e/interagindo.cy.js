describe('Preenchendo campos com o cypress', () => {
  it('Preenchendo', () => {
   
    cy.visit('/')
    cy.get('.form-control')
      .type('joao.ppaulo92@qa.com')
    



  })
})