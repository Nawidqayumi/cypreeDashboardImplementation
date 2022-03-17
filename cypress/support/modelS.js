
import { modelSURL , modelCompareURL} from "./authentication.constant";
var data = require ('../fixtures/modelSPage.json')
var info = require ('../fixtures/comparePage.json')

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

    compareModelS(){
        cy.scrollTo('bottomLeft')
        cy.get('[data-gtm-interaction="compare"] > span').should('be.visible').click()
        cy.url().should('eq', modelCompareURL)
        cy.scrollTo('bottomLeft')

        cy.get('.tds-text--caption.tcl-compare-models__item-title').each(($el, index)=>{
            const text = $el.text()

            expect(text).to.contain(info.comparePageText[index])
        })


    }


}

export const onModelSpage = new Models;