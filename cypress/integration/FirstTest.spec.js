/// <reference types="cypress" />
describe('My First Tests', () => {
  it('Visiting Google displays the correct title', () => {
    cy.visit('https://google.co.uk');
    cy.title().should('contain', 'Google'); 
    cy.get("input[name='q']").type('что-то').type('{enter}')     
    cy.contains('https://context.reverso.net');
});
});