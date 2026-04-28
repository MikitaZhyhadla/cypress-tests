# Cypress Tests

This project contains Cypress end-to-end tests.

## Running Cypress

- **Run Cypress with UI (debug mode):**

  ```bash
  npx cypress open
  ```

- **Run Cypress in headless mode:**

  ```bash
  npx cypress run
  ```

## Watch Mode (Auto-reload)

When running `npx cypress open`, Cypress automatically reloads tests
when any files are changed and saved. No need to restart Cypress manually.

Make sure you:

- Run tests with `npx cypress open`
- Select the test file in the UI
- Save `.js`, `.json`, or `.ts` files inside the `cypress/` folder

## Code Formatting

- **Format the entire project with Prettier**:

  ```bash
  npx prettier --write .
  ```

- **Format a specific file (e.g., inventory page tests)**:
  ```bash
  npx prettier --write cypress/integration/ui/inventory-page.ui.spec.js
  ```

## Documentation

- **[Git Workflow Strategy](docs/git-strategy.md)**
- **[VS Code Hotkeys](docs/hotkeys.md)**
