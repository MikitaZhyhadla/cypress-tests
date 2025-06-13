describe('Login Page: Given no preconditions', {testIsolation: false}, () => {
    context('Login Page: When user navigates to the page', () => {
        before(() => {
            cy.visit('/');
        });
        it('Login Page: Then login page title should be visible', () => {
            cy.get(loginPage.title).should('have.text', l10n.login.title).and('be.visible');
        });
        it('Login Page: Then username field with label should be visible', () => {
            cy.get(loginPage.usernameInput).should('be.visible');
        });
        it('Login Page: Then password field with label should be visible', () => {
            cy.get(loginPage.passwordInput).should('be.visible');
        });
        it('Login Page: Then login button should be visible', () => {
            cy.get(loginPage.loginButton).should('be.visible');
        });
    });

    context('Login Page: When user submits valid standard credentials', () => {
        before(() => {
            cy.loginAs(users.StandardUser);
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
