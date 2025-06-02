// login-page.ui.spec.js

describe('Login Page: Given user is on the login page', { testIsolation: false }, () => {
  before(() => {
    cy.visit('/');
  });

  context('Login Page: When user submits valid standard credentials', () => {
    beforeEach(() => {
      cy.loginAs(Cypress.env('users').standardUser);
    });

    it('Login Page: Then login page title should be visible', () => {
      // Given login page
      // When user opens login page
      // Then title should be visible
      cy.get('#login_button_container .login_logo').should('have.text', 'Swag Labs').and('be.visible');
    });

    it('Login Page: Then user should be redirected to inventory page', () => {
      // Given login page
      // When user logs in with standard credentials
      // Then user should be redirected to inventory page
      cy.url().should('include', '/inventory.html');
    });
  });

  context('Login Page: When user submits empty credentials', () => {
    it.skip('Then user should see error for empty fields', () => {
      // Given login form
      // When user submits without input
      // Then should show correct error for empty fields
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/2
      // Expected message: "Epic sadface: Username and password are required"
    });
  });

  context.skip('Login Page: When user submits locked out credentials', () => {
    it.skip('Then user should see locked out error', () => {
      // Given login form
      // When user logs in with locked out user
      // Then should show locked out error
    });
  });

  context.skip('Login Page: When user submits invalid credentials', () => {
    it.skip('Then user should see invalid login error', () => {
      // Given login form
      // When user submits incorrect credentials
      // Then should show invalid login error
    });
  });
});
