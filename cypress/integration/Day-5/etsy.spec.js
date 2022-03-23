var data = require ('../../fixtures/etsy.json')
var careers = require ('../../fixtures/etsyCareers.json')
import {etsyUrlOster, etsyHelpCenterUrl} from '../../support/authentication.constant'
describe('Etsy test case ', () => {
    
    before('Navigate to etsy page', ()=>{
        cy.visit('https://www.etsy.com/')
        cy.contains('Akzeptieren').click()
        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item', {log: true})
       
    })

    it('Login to the Etsy', () => {
        
        cy.get('[class="wt-text-black"]').each(($el, index)=>{
            let text = $el.text()

            expect(text).to.contain(data.etsy[index])
        })

    });

    it('Navigate to page to Home Favorites', () => {
        cy.contains('Ostern').click()
        cy.url().should('eq',etsyUrlOster)
        // if(cy.contains('Accept').find()>0){
        //     cy.contains('Accept').click()
        // } else if (cy.contains('Akzeptieren')>0) {
        //     cy.contains('Akzeptieren').click() 
        // } else {

        

        cy.contains('Accept').click()
      
        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item', {log: true})
        //cy.getCookie('showWizard').then((val) =>{

        // })
        //cy.contains('Akzeptieren').click() 
            
        cy.scrollTo('bottomLeft')
        cy.contains('Help Center').should('be.visible')

    });

    it('Navigate to page to Help Center', () => {
        //url verification
        //scroll to bottom of the page
        //navigate to the go help center 
        //verify the url
        //go to payment option
        //verify the payment option is displayed
        //cy.contains('Akzeptieren').click()
        cy.scrollTo('bottomLeft')
        cy.contains('Help Center').click()
        cy.url().should('eq', etsyHelpCenterUrl)
        cy.go('back')
        cy.url().should('include', 'ostern')
        cy.contains('Accept').click()
        cy.contains('Careers').should('be.visible').click()
        cy.url().should('include', 'careers')
        cy.get('#keywordSearch').clear().type('Engineering')
        cy.get('#locationInput').clear().type('Br')
        cy.get('.phs-jobs-category').click()
        cy.get('#ph-search-backdrop').should('be.visible').click()
        cy.get('[data-ph-id="ph-page-element-page18-OsblyB"]').each(($el , index)=>{

            let text = $el.text()
            expect(text).to.contain(careers.etsy[index])
        })

    });
});