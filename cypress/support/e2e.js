import './commands'
import l10n from './l10n.json'
import reqs from './requirements'
import urls from './urls'
import selectors from './selectors'

global.loginPage = selectors.loginPage
global.cartPage = selectors.cartPage
global.l10n = l10n
global.urls = urls
global.selectors = selectors
global.reqs = reqs
global.users = Cypress.env('users')
