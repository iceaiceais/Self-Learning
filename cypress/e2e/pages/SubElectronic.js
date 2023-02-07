class subItemElectronic {
    static Camera (){
        cy.get(':nth-child(1) >.sub-category-item > .title > a').click()

    }
    static Phone (){
        cy.get(':nth-child(2) >.sub-category-item > .title > a').click()
    }

    static other (){
        cy.get(':nth-child(3) >.sub-category-item > .title > a').click()
    }
}

export default subItemElectronic