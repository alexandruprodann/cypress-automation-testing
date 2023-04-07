describe('Teste LinkedIn', () => {

    it('Users can login', () => {
        cy.visit('https://www.linkedin.com/')
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('test@linkedin.com');
        cy.get('#password').type('randompass');
        cy.get('.btn__primary--large').click();

        cy.get('#ember14').should('exist');
    })



})