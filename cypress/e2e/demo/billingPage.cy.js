/// <reference types="cypress" />

//register page using fixture - add to cart use POM - CO use custom command - billing page use fixtured

describe('test', ()=>{
    it('fill a billing form', ()=>{
        cy.visit('https://demo.nopcommerce.com/onepagecheckout#opc-billing')
        cy.get('#BillingNewAddress_FirstName').should('be.visible'); //cari ngecek autofill
        cy.get('#BillingNewAddress_CountryId').click();
        cy.get('[value=239]').select().should('have.value', '239').
        contains('Afghanistan');
        cy.get('#BillingNewAddress_StateProvinceId').click();
        cy.get('[value="0"]').select().should('have.value', '0').contains('other');
        cy.get('#BillingNewAddress_City').type('sesame street');
        cy.get('#BillingNewAddress_Address1').type('new jeans cluster');
        cy.get('#id="BillingNewAddress_ZipPostalCode"').type('1123');
        cy.get('#BillingNewAddress_PhoneNumber').type('092231923');
        cy.get('.button-1 new-address-next-step-button').click
        
    })

    it('shipping methode', ()=>{
        cy.get('.step-title').click()
        cy.get('#shippingoption_0').click()
        cy.get('#shippingoption_1').should('not.be.checked')
        cy.get('shippingoption_2').should('not.be.checked')
        cy.get('.button-1 shipping-method-next-step-button').click
        
    })
    
})