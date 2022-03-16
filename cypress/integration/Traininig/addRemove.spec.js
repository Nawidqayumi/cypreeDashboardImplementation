var data  = require('../../fixtures/trainingdata/PracticeElements.json')

describe('Practice Cybertek Testing', () => {
    
    beforeEach(()=>{
        cy.visit('http://practice.cybertekschool.com/')
    })

    it('Should remove and add', () => {

        cy.contains('Add/Remove Elements').should('be.visible').click()

        cy.get('.added-manually').should('not.be.exist')

        cy.get('[onclick="addElement()"]').should('be.exist').click()

        cy.get('.added-manually').should('be.visible').should('have.text', 'Delete')
                
    });

    it('Autocomplete', () => {
        
        cy.contains('Autocomplete').should('be.exist').click()
        cy.get('h3').should('be.visible').should('have.text', 'Autocomplete')
        cy.get('.example > :nth-child(2)').should('be.visible').should('have.text', 'Start typing:')

        cy.get('#myCountry').should('be.visible').clear().type('a')
        cy.get('#myCountryautocomplete-list > :nth-child(1)').should('be.visible').click()
        cy.get('.btn').should('be.visible').click()
        cy.get('#result').should('be.exist').should('have.text', 'You selected: Afghanistan')

    });

    it('Basic Auth', () => {
        
        
        cy.window().then(($window)=>{
            cy.stub($window,'prompt').returns("admin")
            cy.contains('Basic Auth').should('be.visible').click()
            
        })

        cy.get('p').invoke('text').then((str)=>{
            expect(str).contain('Congratulations! You must have the proper credentials.')
        })
    });

    it('checkboxes', () => {
        cy.contains('Checkboxes').should('be.visible').click()
        cy.get('#box1').should('not.be.checked').check().should('be.checked')
        cy.get('#box2').should('be.checked').uncheck().should('not.be.checked')
    });

    it('Disappearing Elements', () => {
        cy.contains('Disappearing Elements').should('be.visible').click()

        cy.get('[class="example"] >ul>li').should('be.visible').each(($el, index)=>{
    
            const text = $el.text()
            expect(text).to.equal(data.Elements[index])
        })
    });

    
});