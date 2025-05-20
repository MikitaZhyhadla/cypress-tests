# Naming Conventions

## 📁 Files

- Use **kebab-case** for all filenames:  
  Examples:
  - `login-page.cy.js`
  - `user-profile.cy.js`
- Test files should follow the pattern:
  ```
  [page/component]-[flow].cy.js
  ```

## 📂 Folders

- Use folder names that reflect the route or feature:  
  Examples:
  - `/login/`
  - `/cart/`
  - `/checkout/`

## 📌 Selectors (in `selectors.js`)

- Group selectors by page or component
- Use **camelCase** for selector keys
- Example:

```js
export const loginPage = {
  usernameInput: '#user-name',
  passwordInput: '#password',
  loginButton: '#login-button',
}
```

## 🧱 Constants (in `requirements.js`)

- Use **UPPER_CASE** for constant keys
- Group by feature or flow
- Example:

```js
export const CHECKOUT_LIMIT = 10
export const MAX_USERNAME_LENGTH = 32
```

## 🌍 Localization Keys (in `l10n.json`)

- Use **dot notation** to represent nesting:

  - `login.error.requiredField`
  - `checkout.summary.total`

- Group by screen/flow

## 💡 Notes

- Keep naming **short but descriptive**
- Maintain **consistency** across files, folders, and selectors
- Prefer **clarity over abbreviation**
