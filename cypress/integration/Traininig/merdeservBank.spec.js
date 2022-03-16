describe('Hover Over the elements', () => {
    
    it('Hover over', () => {
        cy.visit('https://mediservbank.de/')
        cy.contains('Alle akzeptieren').click()
        cy.wait(3000)
        cy.contains('Privatabrechnung').trigger('mouseover')
        cy.contains('Arzt').click({force :true})
        cy.url().should('eq','https://mediservbank.de/privatabrechnung/arzt/' )
    });

    it('Navige to module with commands', () => {
        cy.visit('https://mediservbank.de/')
        cy.contains('Alle akzeptieren').click()
        cy.NavigateToMmoduleSub('Privatabrechnung','Arzt')
    });
    it.only('Navige to module with commands', () => {
        cy.visit('https://mediservbank.de/')
        cy.contains('Alle akzeptieren').click()
        cy.NavigateToMmoduleSub('Privatabrechnung','Zahnarzt')
    });
});