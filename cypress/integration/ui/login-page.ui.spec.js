// login-page.ui.spec.js

describe('Login Page', { testIsolation: false }, () => {
  context('Empty credentials', () => {
    it.skip(`Given I am on login page
When I submit the form with empty fields
Then I should see an error message about missing credentials`, () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/2
      // Expected message: "Epic sadface: Username and password are required"
    });
  });

  context.skip('Locked out user', () => {
    it.skip(`Given I am on login page
When I log in as a locked out user
Then I should see a locked out message`, () => {
      // Not implemented yet
    });
  });

  context.skip('Valid login', () => {
    it.skip(`Given I am on login page
When I enter valid credentials
Then I should be redirected to the inventory page`, () => {
      // Not implemented yet
    });
  });

  context.skip('Invalid credentials', () => {
    it.skip(`Given I am on login page
When I enter incorrect username or password
Then I should see an error message`, () => {
      // Not implemented yet
    });
  });
});
