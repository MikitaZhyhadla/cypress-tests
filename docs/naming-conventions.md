# Naming Conventions

To ensure consistency and readability across the project, follow the naming conventions below.

## Pages

- Use lowercase and kebab-case (hyphen-separated).
- Example: `login-page`, `cart-page`, `checkout-complete`

## Components

- Use camelCase for variables and functions.
- Use PascalCase for component names (if applicable).
- Examples:
  - Variable: `continueShoppingButton`
  - Function: `validateLoginForm()`
  - Component: `CartItem`, `LoginForm`

## Selectors

- Group selectors by page in `selectors.js`.
- Use clear, descriptive names that reflect the element purpose and context.
- Example for login page:
  ```js
  export const loginPage = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
  }
  ```

## Files and Directories

- Use lowercase and kebab-case.
- Place page-related files in separate folders under `/cypress/e2e/`.

## Test Files

- Use `.ui.spec.js` suffix for UI tests.
- Example: `login-page.ui.spec.js`

## Environment and Data Files

- Use snake_case for JSON config and test data files.
- Examples: `env_users.json`, `product_data.json`