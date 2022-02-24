it('by ID',()=>{
  cy.visit("https://facebook.com/")
  cy.get('#email')
});

it('by Tag',()=>{
  cy.visit("https://docs.cypress.io/api/commands/get#Examples")
  cy.get("nav")
});
it('by Tag Value',()=>{
  cy.visit("https://facebook.com/")
  cy.get('[name="pass"]');
});  
/* 
it('by Diffent Tag',()=>{
  cy.visit("https://facebook.com/")
  cy.get('[data-testid="open-registration-form-button"][role="button"]')
});
*/
it('by class',()=>{
  cy.visit("https://docs.cypress.io/api/commands/get#Examples")
  cy.get(".ds-input")
});