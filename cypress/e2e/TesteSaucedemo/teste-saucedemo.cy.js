describe ('Teste Saucedemo', () => {

// Fix found online for the known 'load' event error on Saucedemo
beforeEach(() => {
    cy.intercept('/service-worker.js', {
        body: undefined
       })
})


    // Valid credentials
    it('Login test with valid credentials', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        cy.url().should('include', '/inventory.html')
    })


    // Invalid credentials
    it('Login test with invalid credentials', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('invalid'); 
        cy.get('[data-test="password"]').type('invalid');
        cy.get('[data-test="login-button"]').click();

        cy.get('[data-test="error"]').should('be.visible');
    })


    // Logout
    it('Logout test', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

        cy.get('[data-test="login-button"]').should('exist');
    })


   // Sidebar menu functionality
   it('Sidebar menu functionality test', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#react-burger-cross-btn').click();

        cy.get('.bm-menu-wrap').should('be.hidden');
    })

   // Add product to cart
   it('Add a product to cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        cy.get('.shopping_cart_badge').should('be.visible');
    })



})