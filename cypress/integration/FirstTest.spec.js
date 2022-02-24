// <reference types="cypress" />
//describe('My First Tests', () => {
  //it('Visiting Google displays the correct title', () => {
    //cy.visit('https://google.co.uk');
    //cy.title().should('contain', 'Google'); 
    //cy.get("input[name='q']").type('что-то').type('{enter}')     
    //cy.contains('https://context.reverso.net');
//});
//});

 

it('By ID', () => {
   
    cy.visit('http://www.google.com')
    //cy.visit('http://www.facebook.com')
    //су.get("#email")
    cy.title().should('contain', 'Google'); 
    cy.get("input[name='q']").type('что-то').type('{enter}')     
 
 });

 it.only('By class', () => {
   cy.visit('https://docs.cypress.io/api/commands/get.html#Sintax');
   су.get('ds-input')
 });