describe('Inventory Page: Given user is authenticated', { testIsolation: false }, () => {
  context('Inventory Page: When user lands on inventory page', () => {
    before(() => {
      cy.loginAs(Cypress.env('users').standardUser);
    });

    it('Inventory Page: Then the page title should be "Products"', () => {
      cy.get('.title').should('be.visible').and('have.text', 'Products');
    });

    it('Inventory Page: Then there should be exactly 6 inventory items', () => {
      cy.get('.inventory_item').should('have.length', 6);
    });

    it('Inventory Page: Then each product should have name, description, price and Add to Cart button', () => {
      cy.get('.inventory_item').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('.inventory_item_name').should('be.visible');
          cy.get('.inventory_item_desc').should('be.visible');
          cy.get('.inventory_item_price').should('be.visible');
          cy.contains('Add to cart').should('be.visible');
        });
      });
    });
  });
});
