describe('Login Page: Given user is on the login page', { testIsolation: false }, () => {
  const closeErrorIfVisible = () => {
    cy.get('body').then(($body) => {
      const $btn = $body.find(loginPage.errorCloseButton)
      if ($btn.length) cy.wrap($btn).click()
    })
  }

  const assertErrorWasClosed = () => {
    cy.get(loginPage.errorContainer).should('not.exist')
    cy.get(loginPage.usernameInput).should('be.visible')
    cy.get(loginPage.passwordInput).should('be.visible')
  }

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
    before(() => {
      cy.visit('/')
      cy.get(loginPage.loginButton).click()
    })

    it.skip('Then error message should say "Epic sadface: Username and password are required"', () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/2
      cy.get(loginPage.errorMessage)
        .should('be.visible')
        .and('have.text', l10n.login.errorMessageRequired)
    })

    it('Then error close button should be shown', () => {
      cy.get(loginPage.errorButton).should('be.visible')
    })

    it('Then username field should be highlighted and contain error icon', () => {
      cy.get(loginPage.usernameInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
    })

    it('Then password field should be highlighted and contain error icon', () => {
      cy.get(loginPage.passwordInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
    })

    it('Then user can close the error and clear field state', () => {
      closeErrorIfVisible()
      assertErrorWasClosed()
    })
  })

  context('Login Page: When user submits valid username but empty password', () => {
    before(() => {
      cy.visit('/')
      cy.get(loginPage.usernameInput).type(Cypress.env('users').standardUser.username)
      cy.get(loginPage.loginButton).click()
    })

    it('Login Page: Then error message should say "Epic sadface: Password is required"', () => {
      cy.get(loginPage.errorMessage)
        .should('be.visible')
        .and('have.text', l10n.login.errorMessagePasswordRequired)
    })

    it('Then error close button should be shown', () => {
      cy.get(loginPage.errorButton).should('be.visible')
    })

    it('Then username field should be highlighted and contain error icon', () => {
      cy.get(loginPage.usernameInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
    })

    it('Then password field should be highlighted and contain error icon', () => {
      cy.get(loginPage.passwordInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
    })

    it('Then user can close the error and clear field state', () => {
      closeErrorIfVisible()
      assertErrorWasClosed()
    })
  })

  context('Login Page: When user submits valid password but empty username', () => {
    before(() => {
      cy.visit('/')
      cy.get(loginPage.passwordInput).type(Cypress.env('users').standardUser.password)
      cy.get(loginPage.loginButton).click()
    })

    it('Login Page: Then error message should say "Epic sadface: Username is required"', () => {
      cy.get(loginPage.errorMessage)
        .should('be.visible')
        .and('have.text', l10n.login.errorMessageUsernameRequired)
    })

    it('Then error close button should be shown', () => {
      cy.get(loginPage.errorButton).should('be.visible')
    })

    it('Then username field should be highlighted and contain error icon', () => {
      cy.get(loginPage.usernameInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
    })

    it('Then password field should be highlighted and contain error icon', () => {
      cy.get(loginPage.passwordInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
    })

    it('Then user can close the error and clear field state', () => {
      closeErrorIfVisible()
      assertErrorWasClosed()
    })
  })

  context('Login Page: When user submits locked out credentials', () => {
    before(() => {
      cy.loginAs(Cypress.env('users').lockedOutUser)
    })

    it('Then user should see locked out error', () => {
      cy.get(loginPage.errorContainer)
        .should('be.visible')
        .and('contain.text', l10n.login.errorMessageLockedOut)
    })

    it('Then error close button should be shown', () => {
      cy.get(loginPage.errorButton).should('be.visible')
    })

    it('Then username field should be highlighted and contain error icon', () => {
      cy.get(loginPage.usernameInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
    })

    it('Then password field should be highlighted and contain error icon', () => {
      cy.get(loginPage.passwordInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
    })

    it('Then user can close the error and clear field state', () => {
      closeErrorIfVisible()
      assertErrorWasClosed()
    })
  })

  context('Login Page: When user submits invalid credentials', () => {
    before(() => {
      cy.loginAs(Cypress.env('users').invalidUser)
    })

    it('Then user should see invalid login error', () => {
      cy.get(loginPage.errorContainer)
        .should('be.visible')
        .and('have.text', l10n.login.errorMessage)
    })

    it('Then error close button should be shown', () => {
      cy.get(loginPage.errorButton).should('be.visible')
    })

    it('Then username field should be highlighted and contain error icon', () => {
      cy.get(loginPage.usernameInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
    })

    it('Then password field should be highlighted and contain error icon', () => {
      cy.get(loginPage.passwordInput).should('have.class', 'input_error')
      cy.get(loginPage.errorContainer).find(loginPage.errorIcon).should('exist')
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
})
