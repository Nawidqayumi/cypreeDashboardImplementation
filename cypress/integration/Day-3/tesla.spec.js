import {teslaURL} from '../../support/authentication.constant'
import {onModelSpage} from '../../support/modelS'

describe('Tesla Automation Testing', () => {
    beforeEach(()=>{
        cy.visit(teslaURL)
    })

    it('Test One', () => {
        onModelSpage.urlVerification()
        onModelSpage.privacy_verification()
    });

    //navigate to page 
    //click compare
    //check every single text on the page

    it.only('compare modelS testing', () => {
        onModelSpage.urlVerification()
        onModelSpage.compareModelS()
    });
});