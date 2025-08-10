const selectors = {
  loginPage: {
    title: '.login_logo',
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
    errorContainer: '[data-test="error"]',
    errorMessage: '[data-test="error"]',
    errorButton: '[data-test="error-button"]',
    inputError: 'input.input_error',
    errorIcon: 'svg',
  },
  cartPage: {
    continueShopping: '[data-test="continue-shopping"]',
  },
}

export default selectors
