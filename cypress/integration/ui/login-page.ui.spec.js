// login-page.ui.spec.js

describe('Login Page', { testIsolation: false }, () => {
  context('Valid login', () => {
    it('Should login successfully with standard user credentials', () => {
      cy.visit('/');
      cy.get(selectors.login.usernameInput).type(envUsers.standard.username);
      cy.get(selectors.login.passwordInput).type(envUsers.standard.password);
      cy.get(selectors.login.loginButton).click();
      cy.url().should('include', '/inventory.html');
    });
  });

  context('Empty credentials', () => {
    it.skip('Should show correct error when both fields are empty', () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/2
      // Expected message: "Epic sadface: Username and password are required"
    });
  });

  context.skip('Locked out user', () => {
    // Not implemented yet
  });

  context.skip('Invalid credentials', () => {
    // Not implemented yet
  });
});
