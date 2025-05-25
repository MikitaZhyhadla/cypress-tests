// login-page.ui.spec.js

describe('Login Page', { testIsolation: false }, () => {
  context('Empty credentials', () => {
    it.skip('Should show correct error when both fields are empty', () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/2
      // Expected message: "Epic sadface: Username and password are required"
    });
  });

  context.skip('Locked out user', () => {
    // Not implemented yet
  });

  context.skip('Valid login', () => {
    // Not implemented yet
  });

  context.skip('Invalid credentials', () => {
    // Not implemented yet
  });
});
