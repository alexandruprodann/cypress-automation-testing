const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1200,
    viewportHeight: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
