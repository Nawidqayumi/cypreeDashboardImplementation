describe('Drag and drop feature', () => {
    
    it('Drag and drop using data transfer', ()=>{

        cy.visit('http://practice.cybertekschool.com/drag_and_drop')

        drag_n_drop()
    })
});

const datatransfer = new DataTransfer;

function drag_n_drop() {

    // cy.get('#column-a').drag('#column-b') => it can run with drag plugin 

    cy.get('#column-a').should('be.visible').trigger('dragstart')
    cy.wait(500)
    cy.get('#column-b').should('be.visible').trigger('drop',{datatransfer})
    cy.wait(500)
    cy.get('#column-b').should('be.visible').trigger('dragend')

}