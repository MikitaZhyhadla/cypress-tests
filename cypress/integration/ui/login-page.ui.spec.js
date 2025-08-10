describe('Login Page: Given user is on the login page', { testIsolation: false }, () => {
  context('Login Page: When user reviews the login page', () => {
    before(() => {
      cy.visit('/')
    })

    it('Login Page: Then login page title should be visible', () => {
      cy.get(loginPage.title).should('have.text', l10n.login.title).and('be.visible')
    })

    it('Login Page: Then username input should be visible', () => {
      cy.get(loginPage.usernameInput).should('be.visible')
    })

    it('Login Page: Then password input should be visible', () => {
      cy.get(loginPage.passwordInput).should('be.visible')
    })

    it('Login Page: Then login button should be visible', () => {
      cy.get(loginPage.loginButton).should('be.visible')
    })
  })

  context('Login Page: When user submits empty credentials', () => {
    it.skip('Then user should see error for empty fields', () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/2
      cy.get(loginPage.loginButton).click()
      cy.get(loginPage.errorMessage)
        .should('be.visible')
        .and('have.text', 'Epic sadface: Username and password are required')
    })
  })

  context('Login Page: When user submits locked out credentials', () => {
    before(() => {
      cy.visit('/')
    })

    it('Then user should see locked out error', () => {
      cy.get(loginPage.usernameInput).type('locked_out_user')
      cy.get(loginPage.passwordInput).type('secret_sauce')
      cy.get(loginPage.loginButton).click()

      cy.get(loginPage.errorContainer)
        .should('be.visible')
        .and('contain.text', 'Sorry, this user has been locked out.')
    })
  })

  context('Login Page: When user submits invalid credentials', () => {
    it('Then user should see invalid login error', () => {
      cy.visit('/')
      cy.get(loginPage.usernameInput).type('standard')
      cy.get(loginPage.passwordInput).type('secret_sauce')
      cy.get(loginPage.loginButton).click()
      cy.get(loginPage.errorContainer)
        .should('be.visible')
        .and(
          'have.text',
          'Epic sadface: Username and password do not match any user in this service'
        )
    })
  })

  context('Login Page: When user submits valid standard credentials', () => {
    before(() => {
      cy.loginAs(Cypress.env('users').standardUser)
    })

    it('Login Page: Then user should be redirected to inventory page', () => {
      cy.url().should('include', '/inventory.html')
    })
  })
  
  context('Login Page: When user logs out', () => {
    before(() => {
      cy.get('#react-burger-menu-btn').click()
      cy.get('#logout_sidebar_link').click()
    })

    it('Login Page: Then login page title should be visible', () => {
      cy.get(loginPage.title).should('have.text', l10n.login.title).and('be.visible')
    })

    it('Login Page: Then username input should be visible', () => {
      cy.get(loginPage.usernameInput).should('be.visible')
    })

    it('Login Page: Then password input should be visible', () => {
      cy.get(loginPage.passwordInput).should('be.visible')
    })

    it('Login Page: Then login button should be visible', () => {
      cy.get(loginPage.loginButton).should('be.visible')
    })
  })
})
