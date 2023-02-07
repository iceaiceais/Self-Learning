/// <reference types="cypress" />

// describe('register flow', ()=>{
//     it('register with correct email and username', ()=>{
//         cy.visit('https://demo.nopcommerce.com/register')
//         cy.get('.male').click();
//         cy.get('#FirstName').type('Mister');
//         cy.get('#LastName').type('tester3')
//         cy.get('[name=DateOfBirthDay]').select('7')
//         cy.get('[name="DateOfBirthMonth"]').select('January')
//         cy.get('[name="DateOfBirthYear"]').select('1996')
//         cy.get('#Email').type('user@gmail.com')
//         cy.get('#Company').type('PT.Quality Assurance ')
//         cy.get('#Newsletter').check()
//         cy.get('#Password').type('password123')
//         cy.get('#ConfirmPassword').type('password123')
//         cy.get('#register-button').click().clearAllLocalStorage()
//         cy.get('.result').contains('Your registration completed')
//         cy.get('.header-logo > a > img').should('be.visible')
//         cy.get('.buttons > .button-1').click()
//         cy.get('.topic-block-title > h2').should('be.visible')
       
//     })

// })

describe('register using fixture',()=>{
    it('use fixture', ()=>{
        cy.visit('https://demo.nopcommerce.com/register');
        cy.fixture('example.json').then((data)=>{

            cy.get('.male').click();
            cy.get('#FirstName').type(data.first_name);
            cy.get('#LastName').type(data.last_name)
            cy.get('[name=DateOfBirthDay]').select('7')
            cy.get('[name="DateOfBirthMonth"]').select('January')
            cy.get('[name="DateOfBirthYear"]').select('1996')
            cy.get('#Email').type(data.email1)
            cy.get('#Company').type(data.company)
            cy.get('#Newsletter').check()
            cy.get('#Password').type(data.password1)
            cy.get('#ConfirmPassword').type(data.password1)
            cy.get('#register-button').click().clearAllLocalStorage()
            cy.get('.result').contains(data.successed)
            cy.get('.header-logo > a > img').should('be.visible')
            cy.get('.buttons > .button-1').click()
            cy.get('.topic-block-title > h2').should('be.visible')
  
        })

    })
})