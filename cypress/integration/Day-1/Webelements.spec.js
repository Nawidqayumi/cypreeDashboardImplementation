/// <reference types="cypress" />

describe('Get webelement', () => {
    
    //TagName
    cy.get('input')

    //Id
    cy.get('#idValue')

    //ClassName
    cy.get('.ClassName')

    //by Attribute name
    cy.get('[type]')

    //by Attribute name and value
    cy.get('[types="radio"]')

    //bu class value
    cy.get('[class="Value"]')

    //tag name and attribute with value
    cy.get('input[name="abuse"]')
    cy.get('input #raio1')

    //by two different attributes or more
    cy.get('[types="radio"][class="Value"]')

    //with text
    cy.contains('Blue').click()


});