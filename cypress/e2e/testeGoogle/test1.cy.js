describe('Site Google.com', () => {

    // Testul 1
    it('Works with a text search', () => { 
        cy.visit('https://google.com/');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('Automation Testing').type('{enter}');

        cy.get('#result-stats').should('exist');
    })
    
})