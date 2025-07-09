describe('Inventory Page: Given user is authenticated', { testIsolation: false }, () => {
  context('Inventory Page: When user lands on inventory page', () => {
    before(() => {
      cy.loginAs(Cypress.env('users').standardUser)
    })

    it('Inventory Page: Then the page title should be "Products"', () => {
      cy.get('.title').should('be.visible').and('have.text', 'Products')
    })

    it('Inventory Page: Then there should be exactly 6 inventory items', () => {
      cy.get('.inventory_item').should('have.length', 6)
    })

    it('Inventory Page: Then each product should have a name', () => {
      cy.get('.inventory_item_name').each(($el) => {
        cy.wrap($el).should('be.visible').and('not.be.empty')
      })
    })

    it('Inventory Page: Then each product should have a description', () => {
      cy.get('.inventory_item_desc').each(($el) => {
        cy.wrap($el).should('be.visible').and('not.be.empty')
      })
    })

    it('Inventory Page: Then each product should have a price', () => {
      cy.get('.inventory_item_price').each(($el) => {
        cy.wrap($el)
          .should('be.visible')
          .invoke('text')
          .should('match', /^\$\d+\.\d{2}$/)
      })
    })

    it('Inventory Page: Then each product should have an "Add to cart" button', () => {
      cy.get('.inventory_item').each(($el) => {
        cy.wrap($el).contains('Add to cart').should('be.visible')
      })
    })

    it('Inventory Page: Then each product should have an image', () => {
      cy.get('.inventory_item_img img')
        .should('have.length', 6)
        .each(($img) => {
          cy.wrap($img)
            .should('be.visible')
            .and(($el) => {
              expect($el[0].naturalWidth).to.be.greaterThan(0)
            })
        })
    })

    it.skip('Inventory Page: Then product title "Test.allTheThings() T-Shirt (Red)" should match expected name', () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/4
      cy.get('.inventory_item_name')
        .contains('Test.allTheThings() T-Shirt (Red)')
        .should('have.text', 'Sauce Labs T-Shirt (Red)') // example expected name
    })

    it.skip('Inventory Page: Then product description for "Sauce Labs Backpack" should match expected content', () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/5
      cy.get('.inventory_item')
        .contains('.inventory_item_name', 'Sauce Labs Backpack')
        .parents('.inventory_item')
        .find('.inventory_item_desc')
        .should('have.text', 'Sleek and protective laptop backpack for everyday use.') // Example expected description
    })

    it('Inventory Page: Then the cart badge should not be visible when no items are added', () => {
      cy.get('.shopping_cart_badge').should('not.exist')
    })

    it('Inventory Page: Then the burger menu should be visible', () => {
      cy.get('#react-burger-menu-btn').should('be.visible')
    })

    it('Inventory Page: Then the Twitter icon should be visible in the footer', () => {
      cy.get('.social_twitter').should('be.visible')
    })

    it('Inventory Page: Then the Facebook icon should be visible in the footer', () => {
      cy.get('.social_facebook').should('be.visible')
    })

    it('Inventory Page: Then the LinkedIn icon should be visible in the footer', () => {
      cy.get('.social_linkedin').should('be.visible')
    })

    it('Inventory Page: Then the footer text should be visible and correct', () => {
      cy.get('.footer_copy')
        .should('be.visible')
        .and(
          'contain.text',
          '© 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy'
        )
    })

    it('Inventory Page: Then the filter should default to "Name (A to Z)" and sort items correctly', () => {
      cy.get('.product_sort_container').should('have.value', 'az')
      cy.get('.inventory_item_name').then(($items) => {
        const names = [...$items].map((el) => el.innerText)
        const sortedNames = [...names].sort()
        expect(names).to.deep.equal(sortedNames)
      })
    })

    it('Inventory Page: Then the filter dropdown should show all filter options', () => {
      cy.get('.product_sort_container option').should(($options) => {
        const values = [...$options].map((opt) => opt.value)
        expect(values).to.include.members(['az', 'za', 'lohi', 'hilo'])
      })
    })

    it('Inventory Page: Then selecting "Name (Z to A)" sorts items correctly', () => {
      cy.get('.product_sort_container').select('za')
      cy.get('.inventory_item_name').then(($items) => {
        const names = [...$items].map((el) => el.innerText)
        const sortedNames = [...names].sort().reverse()
        expect(names).to.deep.equal(sortedNames)
      })
    })

    it('Inventory Page: Then selecting "Price (low to high)" sorts items correctly', () => {
      cy.get('.product_sort_container').select('lohi')
      cy.get('.inventory_item_price').then(($items) => {
        const prices = [...$items].map((el) => parseFloat(el.innerText.replace('$', '')))
        const sortedPrices = [...prices].sort((a, b) => a - b)
        expect(prices).to.deep.equal(sortedPrices)
      })
    })

    it('Inventory Page: Then selecting "Price (high to low)" sorts items correctly', () => {
      cy.get('.product_sort_container').select('hilo')
      cy.get('.inventory_item_price').then(($items) => {
        const prices = [...$items].map((el) => parseFloat(el.innerText.replace('$', '')))
        const sortedPrices = [...prices].sort((a, b) => b - a)
        expect(prices).to.deep.equal(sortedPrices)
      })
    })
  })
})
