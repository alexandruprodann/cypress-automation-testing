# Automation Tests using CypressJS

[Cypress](https://www.cypress.io/) is an open-source end-to-end testing framework that allows testers to write automated tests using JavaScript. Cypress uses Mocha and Chai for its testing syntax and it is used to ensure that web applications work as intended.

This repository contains sets of automated tests for [Saucedemo](https://www.saucedemo.com/), [Google](https://www.google.com/) and [Linkedin](https://www.linkedin.com/) using the Cypress testing framework.

## Installation
To get started with running the tests, you will need to have [Node.js](https://nodejs.org/en) installed on your machine. Once you have Node.js installed, clone this repository and run the following command to install the required dependencies:
```
npm install
```

## Running Tests
To run the tests, use the following command:
```
npx open cypress
```
This will launch the Cypress test runner, which will allow you to select which tests to run and view the results.


## Tests List
- Saucedemo
    - Login with valid credentials
    - Login with invalid credentials
    - Logout
    - Sidebar menu functionality
    - Add a product to cart
    - Remove a product from cart
    - Product description is present
    - Back to products button functionality
- Google
    - Works with a text search
- LinkedIn
    - Login with valid credentials


## Test Example
```javascript
// This is testing the 'add to cart' functionality of the Saucedemo website
    it('Add a product to cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.contains('button', 'Add to cart').click();
        cy.get('.shopping_cart_link').click();

        cy.contains('button', 'Remove').should('exist'); // this determine whether the test is working as expected or not
    })
```



