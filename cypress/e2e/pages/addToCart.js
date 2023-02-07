
    const URL = 'https://demo.nopcommerce.com/'
    const shoping_cart = '#topcartlink'
    const electronics = ':nth-child(1) > .category-item > .title > a'
    const Apparel = ':nth-child(2) > .category-item > .title > a'
    const digitalDown = ':nth-child(3) > .category-item > .title > a'
    const E_camera = ':nth-child(1) >.sub-category-item > .title > a'
    const E_phone = ':nth-child(2) >.sub-category-item > .title > a'
    const A_clothing = ':nth-child(2) >.sub-category-item >.picture >a'
    const A_shoes = ':nth-child(1) >.sub-category-item >.picture >a'
    const ifYouWaiting = ':nth-child(1) >.picture > a'
    const nightVision = '[data-productid=34] >.picture >a'
    const notifAddedCart = '.bar-notification success'
    const assert_added_cart ='The product has been added to your shopping cart'
    const AdidasRed = '[data-attr-value="25"] > label > .attribute-square-container > .attribute-square'
    const AdidasBlue = '[data-attr-value="26"] > label > .attribute-square-container > .attribute-square'
    const AdidasGrey = '[data-attr-value="27"] > label > .attribute-square-container > .attribute-square'


class addToCart {
    static getshoppingCart(){
        cy.get('#topcartlink').click()
    }
    
    static selectCamera (){
        
        cy.get(electronics).click()
        cy.get(E_camera).click()
    
    }
    static selectPhone (){
        cy.get(electronics).click()
        cy.get(E_phone).click()
        
    }

    static selectCamera3 (){
        cy.get(':nth-child(3) > .product-item > .picture > a').click()
    }

    static addcartCamera3(){
        cy.get('#add-to-cart-button-16').click()
    }

    static selectShoes (){
        cy.get(':nth-child(2) > .category-item > .title > a').click()
        cy.get(':nth-child(1) >.sub-category-item >.picture >a').click()
    }
    static selectClothing (){
        cy.get(Apparel).click()
        cy.get(':nth-child(2) >.sub-category-item >.picture >a').click()
    }

    static selectShoesAdidas (size){
        cy.get(':nth-child(1) > .product-item > .picture > a').click()
    }

    static sizeAdidas (){
        cy.get('#product_attribute_9').select(size)
    }

    static colourAdidasRed (){
        cy.get(AdidasRed).select()
    }
    static colourAdidasBlue (){
        cy.get(AdidasBlue).select()
    }
    static addToCartAdidas (){
        cy.get('#add-to-cart-button-25').click()
    }
    static selectClothingLevis(){
        cy.get('[data-productid=30] > .details >.product-title > a').click()
    }
    static addToCartLevis (){
        cy.get('.add-to-cart-button-30').click
    }
}



   


export default addToCart 