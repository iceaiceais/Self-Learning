/// <reference types="cypress" />

describe ('handle 3 types of allert', ()=>{
    
    it('Allert box', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsAlert()"]').click()
    // //Checking the window alert text
        cy.on('window:alert',(txt) =>{
        expect(txt).to.contains('I am a JS Alert');
            })

        cy.get('#result').should('be.visible').should('have.text', 'You successfully clicked an alert')
        })   
       
    })

    it('allert confirmation using default', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.contains('I am a JS Confirm');
            })
        cy.get('#result').should('have.text', 'You clicked: Ok')
    
    })

    it.only('allert confirmation using cancel', ()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.contains('I am a JS Confirm');
            })
        cy.on('window:confirm',()=> false)
        cy.get('#result').should('have.text', 'You clicked: Cancel')
    
    })


    it('Test Case3', function (){
        // launch the url
        cy.visit("https://register.rediff.com/register/register.php?FormName=user_details");
        // click on submit button to produce the alert pop up
        cy.get('input[type="submit"]').click();
        // firing window: alert event with on() method
        cy.on('window:alert',(txt)=>{
           
           expect(txt).to.contains('Your full name cannot be blank.');
        })
     });