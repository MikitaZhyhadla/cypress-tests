# Git Workflow Strategy

## Main Branch

- **main** — the default branch with reviewed and stable code
- Direct commits to the main branch are **not allowed**.
- Only squash merges are allowed into the main branch.
- After a pull request is merged, the source branch is **automatically deleted**.

## Feature Branches

- Create feature branches with descriptive names, e.g.:
  - `feature/login-form`
  - `feature/cart-ui`
  - `learning/session-2`
- Always branch off from the latest `main`.

## Git Flow

- All work must be done in feature branches.
- All changes must go through a Pull Request (PR).
- Each PR must be **approved by at least one reviewer** before merging.
- Only squash merges are allowed to maintain a clean commit history.

## Commit Messages

Since squash merge is enforced, use short and meaningful commit messages:

- Example: `add login form validation`
- Avoid long or complex prefixes like `feat:` or `fix:`

This simple strategy helps maintain a clean, readable history and traceable changes.

## Additional Notes

- Use `git pull origin main` in your feature branch regularly to stay up to date.
- Resolve merge conflicts locally before pushing your branch.
- Link related GitHub issues in your PR description or with inline TODO comments.