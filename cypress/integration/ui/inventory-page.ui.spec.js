describe('Inventory Page: Given user is authenticated', { testIsolation: false }, () => {
  context('Inventory Page: When user lands on inventory page', () => {
    before(() => {
      cy.loginAs(Cypress.env('users').standardUser)
    })

    it('Inventory Page: Then the page title should be "Products"', () => {
      cy.get('.title').should('be.visible').and('have.text', 'Products')
    })

    it('Inventory Page: Then there should be exactly 6 inventory items', () => {
      cy.get('.inventory_item').should('have.length', 6)
    })

    it('Inventory Page: Then each product should have name, description, price and Add to Cart button', () => {
      cy.get('.inventory_item').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('.inventory_item_name').should('be.visible')
          cy.get('.inventory_item_desc').should('be.visible')
          cy.get('.inventory_item_price').should('be.visible')
          cy.contains('Add to cart').should('be.visible')
        })
      })
    })
    it('Inventory Page: Then each product should have an image', () => {
      cy.get('.inventory_item_img img')
        .should('have.length', 6)
        .each(($img) => {
          cy.wrap($img)
            .should('be.visible')
            .and(($el) => {
              expect($el[0].naturalWidth).to.be.greaterThan(0)
            })
        })
    })
  })
  it.skip('Inventory Page: Then product title "Test.allTheThings() T-Shirt (Red)" should match expected name', () => {
    // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/4
    cy.get('.inventory_item_name')
      .contains('Test.allTheThings() T-Shirt (Red)')
      .should('have.text', 'Sauce Labs T-Shirt (Red)') // example expected name
  })
  it.skip('Inventory Page: Then product description for "Sauce Labs Backpack" should match expected content', () => {
    // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/5
    cy.get('.inventory_item')
      .contains('.inventory_item_name', 'Sauce Labs Backpack')
      .parents('.inventory_item')
      .find('.inventory_item_desc')
      .should('have.text', 'Sleek and protective laptop backpack for everyday use.') // Example expected description
  })
})
