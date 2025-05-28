// e2e support file
import './commands';
import l10n from './l10n.json';
import { reqs } from './requirements';
import { urls } from './urls';
import { selectors } from './selectors';

Cypress.env('l10n', l10n);
Cypress.env('reqs', reqs);
Cypress.env('urls', urls);
Cypress.env('selectors', selectors);
