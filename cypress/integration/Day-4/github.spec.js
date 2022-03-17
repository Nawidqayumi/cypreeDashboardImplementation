import {githubURL} from '../../support/authentication.constant'
import {onGithubPage} from '../../support/github'

describe('Udemy Testing', () => {
    
    beforeEach('',()=>{
        cy.visit(githubURL)
    })

    it('Login to the Udemy', () => {
        onGithubPage.verifySignInUrl()
    });

    it('Navigate to page back', () => {
        onGithubPage.navigateToBack
    });
});