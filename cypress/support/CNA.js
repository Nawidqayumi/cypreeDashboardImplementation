export class functions {

    function1() {
        cy.get('[type="radio"]').then(radioButtons =>{
            cy.wrap(radioButtons).first()
            .check()
            .should('be.checked')

            for(var i = 0; i<= radioButtons.length-1 ; i++){
                cy.wrap(radioButtons).eq(i)
                .check({force :true})
                .should('be.visible')
                cy.wait(500)
            }
        })
    }

    function2(){
        cy.get('[type="radio"]').then(radioButtons =>{
            cy.wrap(radioButtons).first()
            .check()
            .should('be.checked')
        })
    }

  

}


export const CNA = new functions;