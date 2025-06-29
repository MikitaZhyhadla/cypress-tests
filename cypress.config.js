const { defineConfig } = require('cypress');
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/integration/**/*.js',
    setupNodeEvents(on, config) {
      const usersPath = path.resolve(__dirname, 'cypress/sensitive-data/env-users.json');
      if (fs.existsSync(usersPath)) {
        const users = JSON.parse(fs.readFileSync(usersPath));
        config.env.users = users;
      }
      return config;
    }
  }
});
