describe('Login Page: Given no preconditions', { testIsolation: false }, () => {
  context('Login Page: When user navigates to the page', () => {
    before(() => {
      cy.visit('/');
    });

    it('Login Page: Then login page title should be visible', () => {
      cy.get(loginPage.title).should('have.text', l10n.login.title).and('be.visible');
    });

    it('Login Page: Then username input should be visible', () => {
      cy.get(loginPage.usernameInput).should('be.visible');
    });

    it('Login Page: Then password input should be visible', () => {
      cy.get(loginPage.passwordInput).should('be.visible');
    });

    it('Login Page: Then login button should be visible', () => {
      cy.get(loginPage.loginButton).should('be.visible');
    });
  });

  context('Login Page: When user submits valid standard credentials', () => {
    before(() => {
      cy.loginAs(users.standardUser);
    });

    it('Login Page: Then user should be redirected to inventory page', () => {
      cy.url().should('include', '/inventory.html');
    });
  });

  context('Login Page: When user submits empty credentials', () => {
    it.skip('Then user should see error for empty fields', () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/2
    });
  });

  context.skip('Login Page: When user submits locked out credentials', () => {
    it.skip('Then user should see locked out error', () => {});
  });

  context.skip('Login Page: When user submits invalid credentials', () => {
    it.skip('Then user should see invalid login error', () => {});
  });
});
