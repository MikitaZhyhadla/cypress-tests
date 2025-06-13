// cypress/support/commands.js

// Custom command to perform login with given user credentials
Cypress.Commands.add('loginAs', (user) => {
  const { username, password } = user;
  cy.visit('/');
  cy.then(()=>{
    cy.get(loginPage.usernameInput).type(username);
    cy.get(loginPage.passwordInput).type(password);
  });
  cy.then(()=>{
    cy.get(loginPage.loginButton).click();
  });
});

// You can add more custom commands below as needed
