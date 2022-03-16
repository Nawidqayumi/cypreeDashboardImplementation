/// <reference types="cypress" />

describe('Login page of facebook', () => {
    
    it('right username  wrongpassword- negative testing', ()=>{
        cy.Negative_password_testing()
    })

    it('wrong username right password- negative testing', () => {
        cy.Negative_username_testing()
    });

    it('wrong username - password- negative testing', () => {
        cy.Negative_username_password_testing()
    });
});