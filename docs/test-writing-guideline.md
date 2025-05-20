# Test Writing Guideline

## Rules

### Naming Conventions

Follow the established naming conventions.

### Test Independence

- Define all use cases to be covered, even if not yet implemented, to create live documentation.
- Structure use cases properly within files and ensure they are connected (dependent). Use cases from different files should not overlap.
- Test scenarios (files) should be independent of each other.
- To keep browser and session data, configure the `describe` block with `{ testIsolation: false }`.
- Include only **one `describe` block per file**.

### Do Not Automate Manual Test Cases

Avoid directly replicating manual test cases. Focus on identifying and implementing the most valuable specifications.

## Test Structure

### `it` Block

- Specifies the **expected result** and contains only verification steps.
- Use **detailed descriptions** to make requirements unique.
- Avoid generic descriptions like "Should return 401 Unauthorized error".
- Instead, use:  
  _"Should display '401 Unauthorized' error when credentials are incorrect"_
- **Only one check per `it` block**

### `context` Block

- Outlines conditions
- Groups common steps and logically related `it` blocks

### `describe` Block

- Defines the functionality under test and optimized scenarios

## Skipped Blocks for Non-automated Use Cases

```js
it.skip('Should display an error when submitting invalid data', () => {
  // Not implemented yet
})
```

## General Rules

- ❌ **No hard-coded values**  
  Store all constants (requirements, localization values, selectors) in dedicated files

- ❌ **Do not hide selectors**  
  Use `selectors.js`, grouped by page/component. Example:

  ```js
  cy.get(cartPage.continueShopping).click()
  ```

- ✅ **Use Gherkin keywords**  
  Describe scenarios and steps using `Given`, `When`, `Then`

- ✅ **Test data isolation**  
  Keep test data isolated for each test file

- ✅ **Test data management**  
  Store in `cypress/test-data/`, organized by feature

- ✅ **Test data randomization**  
  Prefer randomly generated data over hard-coded

## External Resource Handling

```js
cy.get(selector).invoke('removeAttr', 'target')
cy.on('uncaught:exception', () => false)
cy.go('back')
```

## Tracking Issues

- Log issues in GitHub
- Reference in code using:

```js
// TODO: link to the issue description
```

## Custom Commands

Create reusable commands for common operations in `commands.js`
