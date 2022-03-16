// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

import {url, username, password, wrongusername, wrongpassword, loginPageErrorMSG} from '../support/authentication.constant'

Cypress.Commands.add('login_positive_scenario', () => {
    cy.visit(url)
    cy.get('[data-cookiebanner="accept_button"]').click()

    cy.get('#email').clear().type(username)
    cy.get('#pass').clear().type(password)
    cy.get('[data-testid="royal_login_button"]').click()
})

Cypress.Commands.add('Negative_password_testing', () => {
    cy.visit(url)
    cy.get('[data-cookiebanner="accept_button"]').click()

    cy.get('#email').clear().type(username)
    cy.get('#pass').clear().type(wrongpassword)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeader').should('be.visible')
})

Cypress.Commands.add('Negative_username_testing', () => {
    cy.visit(url)
    cy.get('[data-cookiebanner="accept_button"]').click()

    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(password)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeader').should('be.visible')
})

Cypress.Commands.add('Negative_username_password_testing', () => {
    cy.visit(url)
    cy.get('[data-cookiebanner="accept_button"]').click()

    cy.get('#email').clear().type(wrongusername)
    cy.get('#pass').clear().type(wrongpassword)
    cy.get('[data-testid="royal_login_button"]').click()
    cy.get('.uiHeader').should('be.visible')
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('NavigateToMmoduleSub', (module, submenu) => {
    cy.wait(3000)
    cy.contains(module).trigger('mouseover')
    cy.contains(submenu).click({force :true})
    let text = submenu.toLowerCase();
    cy.url().should('eq','https://mediservbank.de/privatabrechnung/'+text+'/' )
})

