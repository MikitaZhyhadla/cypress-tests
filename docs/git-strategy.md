# Git Workflow Strategy

## Main Branches

- **master** — the main branch with stable, release-ready code.
- **feature/** — branches for new features. Naming: `feature/description`
- **bugfix/** — branches for fixing bugs. Naming: `bugfix/description`
- **hotfix/** — urgent fixes directly on production.

## Branching Rules

- All new work should be done in separate branches (feature, bugfix, etc.).
- Branch names should be clear and descriptive (e.g., `feature/login-page`).
- Always create a Pull Request (PR) before merging to master.
- PRs must be code-reviewed by teammates.
- Before merging, update your branch from master and resolve conflicts if any.

## Commits

- Write clear and concise commit messages.
- Message format:  
  `<type>: <short description>`  
  For example:  
  `feat: add login form`  
  `fix: correct validation error`

- Use commit types:  
  - `feat` — new feature  
  - `fix` — bug fix  
  - `chore` — maintenance tasks (dependency updates, CI config, etc.)  
  - `docs` — documentation

## Pull Requests (PR)

- Always use PRs to merge branches.
- Add a description of the changes.
- Assign reviewers (for example, Ivan Zdannovich — IvanZdanovich).
- Wait for approval and conflict resolution before merging.

---

*This document helps organize Git workflow in our project and makes the development process clear and efficient.*
