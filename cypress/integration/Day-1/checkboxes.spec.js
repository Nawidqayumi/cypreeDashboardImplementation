/// <reference types="cypress" />

describe('checkboxes testing', () => {
    
    it('Should test the checkboxes', ()=>{

        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.wait(2000);

        cy.get('#box1').check().should('be.checked')

        //negative testing
        // cy.get('#box1').check().should('not.be.checked')

        cy.viewport('iphone-xr') //it change the view of our UI  in a specific device 

        cy.get('[name="checkbox2"]').click().should('not.be.checked')
    })

    it('Should test the checkboxes', ()=>{

        cy.visit('http://practice.cybertekschool.com/checkboxes')

        cy.wait(2000);

        cy.get('#box1').check().should('be.checked')

        //negative testing
        // cy.get('#box1').check().should('not.be.checked')

        cy.viewport('ipad-mini') //it change the view of our UI  in a specific device 

        cy.get('[name="checkbox2"]').click().should('not.be.checked')
    })
});