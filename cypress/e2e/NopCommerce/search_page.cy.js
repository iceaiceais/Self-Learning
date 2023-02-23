/// <reference types="cypress" />// beforeEach(()=> {
// //     cy.visit('https://demo.nopcommerce.com/login');
// //     cy.get('.email').type('admin@gmail.com');
// //     cy.get('.password').type('admin123')
// //     cy.get('form > .buttons > .button-1').click
// //     cy.get('.header-logo > a > img').should('be.visible')
// //     cy.get('[type=text]').should('be.enabled')

// })


describe('it assert search page', () =>{
// 
    it('computer search page view',() => {
        
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('.mobile > :nth-child(1) > .sublist > :nth-child(2) > a').click({force:true})
        cy.get('h1').should('contain.text', 'Notebooks')

    })
    
    it.only('electronic page view', ()=> {
        cy.visit('https://demo.nopcommerce.com/');
        cy.get(':nth-child(1) > .category-item > .picture > a > img').click();
        cy.get(':nth-child(1) > .sub-category-item > .title > a')
        
    })
})

