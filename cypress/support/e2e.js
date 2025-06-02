// cypress/support/e2e.js

import './commands';
import l10n from './l10n.json';
import { reqs } from './requirements';
import { urls } from './urls';
import { selectors } from './selectors';
import users from '../sensitive-data/qa-users.json';

Cypress.env('l10n', l10n);
Cypress.env('reqs', reqs);
Cypress.env('urls', urls);
Cypress.env('selectors', selectors);
Cypress.env('users', users);
