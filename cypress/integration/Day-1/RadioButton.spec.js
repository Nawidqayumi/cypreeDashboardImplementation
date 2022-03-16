/// <reference types="cypress" />

import {URL} from '../../support/authentication'
import {CNA} from '../../support/CNA'

describe('Radio buttons', () => {
    
    it('Radio Buttons', ()=>{
        cy.visit(URL)
        CNA.function1()
    })

    it('should check first button', () => {
        cy.visit(URL)
        CNA.function2()
    });
});