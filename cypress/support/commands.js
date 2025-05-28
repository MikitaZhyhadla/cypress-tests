// cypress/support/commands.js

// Custom command to perform login with given user credentials
Cypress.Commands.add('loginAs', (user) => {
  cy.visit('/');
  cy.get(Cypress.env('selectors').login.usernameInput).type(user.username);
  cy.get(Cypress.env('selectors').login.passwordInput).type(user.password);
  cy.get(Cypress.env('selectors').login.loginButton).click();
});

// You can add more custom commands below as needed
