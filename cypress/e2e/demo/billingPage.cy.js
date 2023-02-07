/// <reference types="cypress" />

//register page using fixture - add to cart use POM - CO use custom command - billing page use fixtured

describe('test', ()=>{
    it('filling a billing form', ()=>{
        cy.visit('https://demo.nopcommerce.com/onepagecheckout#opc-billing')
        cy.get('#BillingNewAddress_FirstName').should('be.visible') //cari ngecek autofill
        cy.get('#BillingNewAddress_CountryId').select(239).should('have.value', '239').
        contains('Afghanistan')
        
    })
    
})