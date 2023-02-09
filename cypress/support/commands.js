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

Cypress.Commands.add("AddedCart",()=> {
    cy.get('.bar-notification').should('have.text', 'The product has been added to your shopping cart')
})

Cypress.Commands.add("AddShoesToCart",()=>{

    cy.get(':nth-child(2) > .category-item > .title > a').click()
    cy.get(':nth-child(1) >.sub-category-item >.picture >a').click()
    cy.get('[data-productid=25] > .picture > a').click()
    cy.get('#product_attribute_9').select(1).should('have.value', '21')
    cy.get('[data-attr-value="25"] > label > .attribute-square-container > .attribute-square').click()
    cy.get('#add-to-cart-button-25').click()
})

Cypress.Commands.add("CheckoutCart", ()=>{
    cy.get('.cart-label').click()
    cy.get('total-info').should('contain.text', 'Sub-Total', 'Shipping', 'Tax', 'Total:')
    cy.get('#termsofservice').check().should('be.checked')
    cy.get('#checkout').click()
    cy.fixture('example.json').then((data)=>{
        cy.get('#Email').type(data.email1)
        cy.get('Password').type(data.password1)
        cy.get('.buttons > [type=submit] ').click()
    })
    cy.get('total-info').should('contain.text', 'You will earn:')
    cy.get('#termsofservice').check().should('be.checked')
    cy.get('#checkout').click()
})