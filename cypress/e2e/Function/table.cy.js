
/// <reference types="cypress" />

describe ('handle tab element', ()=>{
    it.only('simple accordian', ()=>{
        cy.visit('https://www.globalsqa.com/samplepagetest/')
        cy.get('#g2599-name').type('Danny')
        

        // cy.visit('https://www.globalsqa.com/demo-site/');
        // cy.get(':nth-child(1) > ul > :nth-child(2) > .button').click() //baris pertama kolom kedua//
        // cy.get('#ui-id-3').click()
        // cy.get('#ui-id-4').should('include.text', 'faucibus urna')
    })
    })