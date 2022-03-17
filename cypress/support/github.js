import {githubLoginURL} from '../support/authentication.constant'
export class Github{

    verifySignInUrl(){
        cy.contains('Sign in').click()
        cy.url().should('eq', githubLoginURL)
    }

    navigateToBack(){
        cy.go('back')
    }

}

export const onGithubPage = new Github