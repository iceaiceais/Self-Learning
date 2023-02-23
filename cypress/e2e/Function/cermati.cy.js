/// <reference types="cypress" />

describe('register account', ()=>{
    it('register new account', ()=>{
    cy.visit('https://www.cermati.com/app/gabung');
    cy.get('#email').type('user@gmail.com');
    cy.get('#mobilePhone').type('082122983561');
    cy.get('#password').type('User123!');
    cy.get(':nth-child(5) > .password_-poMd > .password__show-password_Ax16a').click();
    cy.get('#password').should('be.visible');
    cy.get('#confirmPassword').type('User123!');
    cy.get('#firstName').type('John')
    cy.get('#lastName').type('Sam');
    cy.get('#cityAndProvince').type('Jakarta').invoke('show');
    cy.get(':nth-child(1) > .autocomplete__list-item-label_-S4yV').click();
    cy.get('.RegistrationForm_form-container__button-text__k6N8W').click()
    cy.get('.container__content_PdQYv').should('have.text', 'Email sudah terdaftar');
    })

})
