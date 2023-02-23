
/// <reference types="cypress" />

describe ('dropdown element', ()=>{
    it('navbar dropdown', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('.zw-product-header > .content-wrap > .product-nav-links > .menu > :nth-child(3) > .dropdown-toggle').trigger('mouseover')
        cy.get('.zw-product-header > .content-wrap > .product-nav-links > .menu > :nth-child(3) > .dropdown-toggle > .zsubmenu-commerc')
        .should('be.visible').each(($el, index, $list) =>{
            if($el.text()=== 'Home & Garden')
            cy.wrap($el).click()
        })   
       
    })

    it('select dropdown with visible value', ()=>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get('#zcf_address_country').select('Greenland')
        cy.get('#zcf_users').select('Selling offline')   
       
    })
})