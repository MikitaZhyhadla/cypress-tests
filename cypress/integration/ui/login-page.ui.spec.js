// login-page.ui.spec.js

describe('Login Page', { testIsolation: false }, () => {
  context('Valid Login', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.loginAs(Cypress.env('users').standardUser);
    });

    it('Then user should be redirected to inventory page', () => {
      // Given login page
      // When user logs in with standard credentials
      // Then user should be redirected to inventory page
      cy.url().should('include', '/inventory.html');
    });
  });

  context('Empty credentials', () => {
    it.skip('Should show correct error for empty credentials', () => {
      // Given login form
      // When user submits without input
      // Then should show correct error for empty fields
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/2
      // Expected message: "Epic sadface: Username and password are required"
    });
  });

  context.skip('Locked out user', () => {
    it.skip('Should show locked out error', () => {
      // Given login form
      // When user logs in with locked out user
      // Then should show locked out error
      // Not implemented yet
    });
  });

  context.skip('Invalid credentials', () => {
    it.skip('Should show invalid login error', () => {
      // Given login form
      // When user submits incorrect credentials
      // Then should show invalid login error
      // Not implemented yet
    });
  });
});
