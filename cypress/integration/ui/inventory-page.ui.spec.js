let selectedProducts = []
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

    it('Inventory Page: Then each product should have a valid name', () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/4

      const checkForInvalidTitles = false // Toggle to enable content validation
      const invalidPatterns = [/Test\.allTheThings/i]

      cy.get('.inventory_item_name').each(($el) => {
        cy.wrap($el)
          .should('be.visible')
          .and('not.be.empty')
          .invoke('text')
          .then((text) => {
            if (checkForInvalidTitles) {
              invalidPatterns.forEach((pattern) => {
                expect(text).not.to.match(pattern)
              })
            }
          })
      })
    })

    it('Inventory Page: Then each product should have a valid description', () => {
      // TODO: https://github.com/MikitaZhyhadla/cypress-tests/issues/5

      const checkPatterns = false // Toggle to enable content validation
      const invalidPatterns = [/carry\.allTheThings/i]

      cy.get('.inventory_item_desc').each(($el) => {
        cy.wrap($el)
          .should('be.visible')
          .and('not.be.empty')
          .invoke('text')
          .then((text) => {
            if (checkPatterns) {
              invalidPatterns.forEach((pattern) => {
                expect(text).not.to.match(pattern)
              })
            }
          })
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

    it('Inventory Page: Then the cart badge should not show the number of products', () => {
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
        const names = [...$items].map((el) => el.textContent.trim())
        const sorted = [...names].sort((a, b) => a.localeCompare(b))
        expect(names).to.deep.equal(sorted)
      })
    })

    context('Inventory Page: When user interacts with filter dropdown', () => {
      it('Then filter dropdown should show filter options', () => {
        const expectedOptions = ['az', 'za', 'lohi', 'hilo']
        cy.get('.product_sort_container option').then(($options) => {
          const actualOptions = [...$options].map((el) => el.value)
          expect(actualOptions).to.include.members(expectedOptions)
        })
      })

      it('Then selecting "Name (Z to A)" sorts items correctly', () => {
        cy.get('.product_sort_container').select('za')
        cy.get('.inventory_item_name').then(($items) => {
          const names = [...$items].map((el) => el.textContent.trim())
          const sorted = [...names].sort((a, b) => b.localeCompare(a))
          expect(names).to.deep.equal(sorted)
        })
      })

      it('Then selecting "Price (low to high)" sorts items correctly', () => {
        cy.get('.product_sort_container').select('lohi')
        cy.get('.inventory_item_price').then(($prices) => {
          const numbers = [...$prices].map((el) =>
            parseFloat(el.textContent.replace('$', '').trim())
          )
          const sorted = [...numbers].sort((a, b) => a - b)
          expect(numbers).to.deep.equal(sorted)
        })
      })

      it('Then selecting "Price (high to low)" sorts items correctly', () => {
        cy.get('.product_sort_container').select('hilo')
        cy.get('.inventory_item_price').then(($prices) => {
          const numbers = [...$prices].map((el) =>
            parseFloat(el.textContent.replace('$', '').trim())
          )
          const sorted = [...numbers].sort((a, b) => b - a)
          expect(numbers).to.deep.equal(sorted)
        })
      })
    })

    context('Inventory Page: When user clicks Add to cart on first random product', () => {
      before(() => {
        cy.get('.inventory_item').eq(0).as('product0')
        cy.get('@product0')
          .find('.inventory_item_name')
          .invoke('text')
          .then((name) => selectedProducts.push(name.trim()))
        cy.get('@product0').find('button').contains('Add to cart').click()
      })

      it('Inventory Page: Then Cart badge shows 1', () => {
        cy.get('.shopping_cart_badge').should('have.text', '1').and('be.visible')
      })

      it('Inventory Page: Then Add to cart button is changed to Remove button', () => {
        cy.get('.inventory_item')
          .eq(0)
          .find('button')
          .should('have.text', 'Remove')
          .and('be.visible')
      })
    })

    context('Inventory Page: When user clicks Add to cart on second random product', () => {
      before(() => {
        cy.get('.inventory_item').eq(1).as('product1')
        cy.get('@product1')
          .find('.inventory_item_name')
          .invoke('text')
          .then((name) => selectedProducts.push(name.trim()))
        cy.get('@product1').find('button').contains('Add to cart').click()
      })

      it('Inventory Page: Then Cart badge shows 2', () => {
        cy.get('.shopping_cart_badge').should('have.text', '2').and('be.visible')
      })
    })

    context('Inventory Page: When user clicks Cart icon', () => {
      before(() => {
        cy.get('.shopping_cart_link').click()
      })

      it('Inventory Page: Then user should be redirected to the cart page', () => {
        cy.url().should('include', '/cart.html')
        cy.get('.title').should('have.text', 'Your Cart')
      })

      it('Inventory Page: Then the correct products are displayed', () => {
        cy.get('.inventory_item_name')
          .should('have.length', selectedProducts.length)
          .each(($el) => {
            const name = $el.text().trim()
            expect(selectedProducts).to.include(name)
          })
      })

      it('Inventory Page: Then the number of items is correct', () => {
        cy.get('.cart_item').should('have.length', selectedProducts.length)
      })
    })

    context('Inventory Page: When user clicks "Continue Shopping" button', () => {
      before(() => {
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', '/cart')
        cy.get('[data-test="continue-shopping"]').click()
      })

      it('Inventory Page: Then user is navigated back to inventory page', () => {
        cy.url().should('include', '/inventory')
        cy.get('.title').should('have.text', 'Products')
      })

      it('Inventory Page: Then the Remove button is displayed for the products added to the cart', () => {
        selectedProducts.forEach((productName) => {
          cy.contains('.inventory_item', productName).find('button').should('have.text', 'Remove')
        })
      })

      it('Inventory Page: Then Cart badge shows 2', () => {
        cy.get('.shopping_cart_badge').should('have.text', '2').and('be.visible')
      })
    })

    context('Inventory Page: When user removes all products from cart', () => {
      before(() => {
        cy.get('.inventory_item').each(($el) => {
          cy.wrap($el)
            .find('button')
            .then(($btn) => {
              if ($btn.text().includes('Remove')) {
                cy.wrap($btn).click()
              }
            })
        })
      })

      it('Inventory Page: Then all products should have "Add to cart" button', () => {
        cy.get('.inventory_item').each(($el) => {
          cy.wrap($el).find('button').should('have.text', 'Add to cart').and('be.visible')
        })
      })

      it('Inventory Page: Then the cart badge should not show the number of products', () => {
        cy.get('.shopping_cart_badge').should('not.exist')
      })
    })

    context('Inventory Page: When user clicks on empty Cart badge', () => {
      before(() => {
        cy.get('.shopping_cart_link').click()
      })

      it('Inventory Page: Then user is redirected to the cart page', () => {
        cy.url().should('include', '/cart')
        cy.get('.title').should('have.text', 'Your Cart')
      })

      it('Inventory Page: Then cart should have no products', () => {
        cy.get('.cart_item').should('have.length', 0)
        cy.get('.shopping_cart_badge').should('not.exist')
      })
    })

    context('Inventory Page: When user clicks on Continue Shopping button in empty cart', () => {
      before(() => {
        cy.get('[data-test="continue-shopping"]').click()
      })

      it('Inventory Page: Then user is navigated back to inventory page', () => {
        cy.url().should('include', '/inventory')
        cy.get('.title').should('have.text', 'Products')
      })
    })
  })
})
