
describe('Javascript Alerts Testing', () => {
    
    it('Handling JS alert - validate alert text', ()=>{
        
        cy.visit("http://practice.cybertekschool.com/javascript_alerts")
        cy.get('[onclick="jsAlert()"]').click()

        cy.on('window:alert', (str)=>{
            expect(str).to.equal('I am a JS Alert')
        })
        
        cy.on('window:confirm', ()=>true)
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    it('Handling JS Confir, - click ok', ()=>{
        
        cy.visit("http://practice.cybertekschool.com/javascript_alerts")
        cy.get('[onclick="jsConfirm()"]').click()

        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=>true)
        cy.get('#result').should('have.text','You clicked: Ok')
        
    })

    it('Handling JS cancel, - click cancel', ()=>{
        
        cy.visit("http://practice.cybertekschool.com/javascript_alerts")
        cy.get('[onclick="jsConfirm()"]').click()

        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('I am a JS Confirm')
        })

        cy.on('window:confirm', ()=>false)
        cy.get('#result').should('have.text','You clicked: Cancel')
        
    })
    it('Handling JS Promt, - input text', ()=>{
        
        cy.visit("http://practice.cybertekschool.com/javascript_alerts")
       

        cy.window().then(($window)=>{
            cy.stub($window,'prompt').returns("This is a test text")
            cy.get('[onclick="jsPrompt()"]').click()
        })

        cy.get('#result').should('have.text','You entered: This is a test text')
        // cy.on('window:confirm', (str)=>{
        //     expect(str).to.equal('I am a JS prompt')
        // })

        // cy.on('window:confirm', ()=>false)
        // cy.get('#result').should('have.text','You clicked: Cancel')
        
    })
});