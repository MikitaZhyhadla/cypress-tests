# Git Workflow Strategy

## Main Branch

- **main** — the default branch with reviewed and stable code

## Feature Branches

- Create feature branches with descriptive names:
  - `feature/login-form`
  - `feature/cart-ui`

## Git Flow

- All work must be done in feature branches
- All changes must go through a Pull Request (PR)
- PRs must be reviewed and approved before merging

## Commit Messages

Since squash merge is used, prefer short and meaningful commit messages:

- Example: `add login form validation`
- Avoid long or complex prefixes like `feat:` or `fix:`

This simple strategy helps maintain a clean, readable history.
