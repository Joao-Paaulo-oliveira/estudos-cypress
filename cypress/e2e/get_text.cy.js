describe('Get texts', () => {
   it('Obter um texto de um elemento', () => {
   
    cy.visit('/')
    cy.get('.top_header_left')
  

    cy.get('.top_header_left > p')
      .then((Element) => {
           console.log(Element.text()) 
      })


  })
})