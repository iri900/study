///referens types ='cypress' />

/*
it('by ID',()=>{
    cy.visit("https://facebook.com/")
    cy.get("#email")
});
it('by class',()=>{
    cy.visit("https://docs.cypress.io/api/commands/get.htm#Syntax")
    cy.get('.ds-input')
});
it('by Tag',()=>{
    cy.visit("https://docs.cypress.io/api/commands/get#Examples")
    cy.get("nav")
});
it('by Tag Value',()=>{
    cy.visit("https://facebook.com/")
    cy.get('[name="pass"]');
});   
it('by Diffrent Tag',()=>{
    cy.visit("https://facebook.com/")
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});
it('by Contains name',()=>{
    cy.visit("https://next.privat24.ua/")
    cy.get('*[class^="card"]')
});
*/
// коментарий
// test findelement
it('Using get with find and eq',()=>{
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get("tbody").find('td').find('div').find('button').eq(0)
    
});

it.only('Using get with find and eq',()=>{
    cy.viewport(1800,700)
    cy.visit("https://docs.cypress.io/api/commands/eq.html#System")
    cy.get("aside").find('div').find('ul').find('li').find('a').eq(0)
    
});
