// cypress/support/e2e.js

import './commands';
import l10n from './l10n.json';
import  reqs  from './requirements';
import  urls  from './urls';
import  selectors  from './selectors';
import users from '../sensitive-data/qa-users.json';

global.loginPage = selectors.loginPage;

global.cartPage = selectors.cartPage;
global.l10n = l10n;
global.urls = urls;
global.selectors = selectors;
global.users = users;
global.reqs = reqs;

