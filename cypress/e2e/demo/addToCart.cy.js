/// <reference types="cypress" />

import addToCart from "../pages/addToCart"
import subItemElectronic from "../pages/SubElectronic"
import cameraSubItem from "../pages/cameraPage"
import ProductPage from "../pages/ProductPage"


// describe('add product to cart', ()=>{
//     it('add to chart', ()=>{
//         cy.visit('https://demo.nopcommerce.com/')
//         cy.get(':nth-child(1) > .category-item > .title > a').click()
//         cy.get(':nth-child(2) >.sub-category-item > .title > a').click()
//         cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
//         cy.get('.rating').should('be.visible');
//         cy.get('#product_enteredQuantity_20').clear().type('1')
//         cy.get('#add-to-cart-button-20').click()
//         cy.get('.bar-notification success').should('contain', 'The product has been added to your shopping cart')
//         cy.get('.bar-notification success >.content >a').click()
//         cy.get('.page-title > h1').should('contain.text', 'Shopping Cart')
//     })
// })

describe('add cart using POM', ()=>{
    it('add electronics to cart', ()=>{
        
        cy.visit('https://demo.nopcommerce.com/')
        addToCart.selectCamera();
        addToCart.selectCamera3();
        addToCart.addcartCamera3();
        cy.AddedCart()
        
    })

    it('add shoes to cart with commands', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.AddShoesToCart(8)
        cy.AddedCart()
        
    })

    it.only('add camera to cart with POM', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        ProductPage.getElectronic()
        subItemElectronic.Camera()
        cameraSubItem.Leica()
        cameraSubItem.LeicaAddCart()
        cy.AddedCart()
    })
    
    //bikin flow pake aftereach ke shoping cart atau before each ke homepage 
    //atau opsi lain shoping cart ditaroh di suitcase terus abis itu pake assert di shopingcart
    //make sure satu script bisa berapa describe

    

})