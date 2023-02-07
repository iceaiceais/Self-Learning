class ProductPage {

    static getElectronic(){
        cy.get(':nth-child(1) > .category-item > .title > a').click()
    }

    static getApparel (){
        cy.get(':nth-child(2) > .category-item > .title > a').click()
    }

    static getDigitalDownload (){
        cy.get(':nth-child(3) > .category-item > .title > a').click()
    }

    static rating () {
        cy.get('.poll-display-text').should('be.visible')
    }
    static ratingEcxellent(){
        cy.get('#pollanswers-1').check()
    }

    static ratingPoor (){
        cy.get('#pollanswers-3').check()
    }
}

export default ProductPage