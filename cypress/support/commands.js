// cypress/support/commands.js

// Custom command to perform login with given user credentials
Cypress.Commands.add('loginAs', (user) => {
  cy.visit('/');
  cy.then(()=>{
    cy.get(Cypress.env('selectors').loginPage.usernameInput).type(user.username);
    cy.get(Cypress.env('selectors').loginPage.passwordInput).type(user.password);
  });
  cy.then(()=>{
    cy.get(Cypress.env('selectors').loginPage.loginButton).click();
  });
});

// You can add more custom commands below as needed
