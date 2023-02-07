class cameraSubItem {
    static nikon (){
        cy.get(':nth-child(1) > .product-item > .picture > a').click()
    }
    static Leica (){
        cy.get(':nth-child(3) > .product-item > .picture > a').click()
    }
    static nikonAddCart1 (){
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click()
    }

    static nikonAddCart2 (){
        cy.get('#add-to-cart-button-14').click
    }
    
    static LeicaCart1 (){
        cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button').click
    }

    static LeicaAddCart (){
        cy.get('#add-to-cart-button-16').click()
    }
    static nikonWishlist (){
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-wishlist-button').click()
    }
    static LeicaWishlist (){
        cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .add-to-wishlist-button').click()
    }
}

export default cameraSubItem