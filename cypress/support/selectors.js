// cypress/support/selectors.js

const selectors = {
  loginPage: {
    title: '.login_logo',
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
  },
  cartPage: {
    continueShopping: '[data-test="continue-shopping"]',
  }
};

export default selectors;