describe ('Saucedemo problem_user tests', () => {

// Fix found online for the known 'load' event error on Saucedemo
beforeEach(() => {
    cy.intercept('/service-worker.js', {
        body: undefined
        })
})
    
    
    // Valid credentials
    it('Login test with valid credentials', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('problem_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
    
        cy.url().should('include', '/inventory.html')
    })
    
    
    // Logout
    it('Logout', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('problem_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
    
        cy.get('[data-test="login-button"]').should('exist');
    })
    
    
    // Sidebar menu functionality
    it('Sidebar menu functionality', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('problem_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#react-burger-cross-btn').click();
    
        cy.get('.bm-menu-wrap').should('be.hidden');
    })
    
    // Add product to cart
    it('Add a product to cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('problem_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.contains('button', 'Add to cart').click();
        cy.get('.shopping_cart_link').click();
    
        cy.contains('button', 'Remove').should('exist');
    })
    
    // Remove a product from cart
    it('Remove a product from cart', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('problem_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.contains('button', 'Add to cart').click();
        cy.get('.shopping_cart_link').click();
        cy.contains('button', 'Remove').click();
    
        cy.get('.cart_item').should('not.exist');
    })
    
    // Checkout
    it('Checkout functionality', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('problem_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.contains('button', 'Add to cart').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="firstName"]').type('Automation');
        cy.get('[data-test="lastName"]').type('Tester');
        cy.get('[data-test="postalCode"]').type('123456');
        cy.contains('input', 'Continue').click();
        cy.contains('button', 'Finish').click();
    
        cy.get('.complete-header').should('be.visible');
    })
    
    // Product description
    it('Product description is present', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('problem_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_5_img_link').click();
    
        cy.get('.inventory_details_desc').should('exist');
    })
    
    // Back to products button
    it('Back to products button', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('problem_user'); 
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('#item_5_img_link').click();
        cy.get('[data-test="back-to-products"]').click();
    
        cy.url().should('include', '/inventory.html')
    })
})