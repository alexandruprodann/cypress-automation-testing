const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    viewportWidth: 1200,
    viewportHeight: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
