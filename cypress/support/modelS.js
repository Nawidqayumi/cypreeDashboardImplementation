
import { modelSURL } from "./authentication.constant";
var data = require ('../fixtures/modelSPage.json')

export class Models{

    urlVerification(){

        cy.contains('Model S').click()
        cy.url().should('eq', modelSURL )
    }

    privacy_verification(){

        cy.scrollTo('bottomLeft')

        cy.get('[class="tds-link tcl-link"]').each(($el , index) =>{

            const text = $el.text()

            expect(text).to.contain(data.ModelS[index])
        })
    }


}

export const onModelSpage = new Models;