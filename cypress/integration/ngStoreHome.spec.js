 beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('Has an H1 heading', function() {
    cy.get('h1')
    .should('contain','Welcome to the SportsStore')
  })

  it('Has navbar checkout brand', () => {
    cy.get('.checkout-brand')
    .should('contain', 'SPORTS STORE')
  })

  it('Has navbar with an empty cart', () => {
    cy.get('cart-summary')
    .should('contain', '(empty)')
  })
