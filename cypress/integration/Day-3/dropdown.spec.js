var data = require('../../fixtures/states.json')
describe('Dropdown Testing', () => {
    
    it('State Selection', ()=>{
        cy.visit("http://practice.cybertekschool.com/dropdown")

        cy.get('[id="state"] > option').each(($el, index)=>{

            const text = $el.text()

            expect(text).to.contain(data.states[index])

            cy.get('[id="state"]').select($el.text()).should('be.visible')

        })
    })
});

describe('Select birthday', () => {

    it('Select birday from dropdowns', () => {
        
        cy.visit("http://practice.cybertekschool.com/dropdown")

        cy.get('#year').select('1993').should('have.value', '1993')
        cy.get('#month').select('March').should('have.value', '2')
        cy.get('#day').select('3').should('have.value', '3')

    });
    
});