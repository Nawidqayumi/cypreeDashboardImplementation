<reference types="cypress" />

//visit
cy.visit('open url')
cy.visit('url',{timeout : 10000})

//should is promise
let path = 'https://www.google.com'
cy.url().should('include',path)

//finding the element
cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')


//negative ones
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')

cy.get('h1').should('have.length',3)
cy.get('h1').should('have.text','blablabla')
cy.get('h1').should('have.value','cypress')


//parent ot the child
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(1).click()


//navigation
cy.go('back')

cy.get('tbody tr').nextAll.click({multiple: true}) //10elements
// -going to each element and click each one by one

cy.get(loc).prev.click()
cy.get(loc).prevAll.click()

//poition
cy.get(loc).click('top')
cy.get(loc).click('bottom')
cy.get(loc).click('top')


//hover over
cy.get(loc).trigger('mouseover').click()
cy.get(loc).trigger('mouseup').click()

//to clear something in input
cy.get('#username').clear().type('username')

