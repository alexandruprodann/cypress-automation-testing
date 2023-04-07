describe('Site Google.com', () => {

    // Testul 1
    it('Functioneaza cu o cautare text', () => { 
        cy.visit('https://google.com/');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('Automation Testing').type('{enter}');

        cy.get('#result-stats').should('exist');
    })
    
})