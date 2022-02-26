// <reference types="cypress" />
//describe('My First Tests', () => {
  //it('Visiting Google displays the correct title', () => {
    //cy.visit('https://google.co.uk');
    //cy.title().should('contain', 'Google'); 
    //cy.get("input[name='q']").type('что-то').type('{enter}')     
    //cy.contains('https://context.reverso.net');
//});
//});

 

// it('By ID', () => {
   
//     cy.visit('http://www.google.com')
//     //cy.visit('http://www.facebook.com')
//     //су.get("#email")
//     cy.title().should('contain', 'Google'); 
//     cy.get("input[name='q']").type('что-то').type('{enter}')     
 
//  });
//  it.only('By class', () => {
//    cy.visit('https://docs.cypress.io/api/commands/get.html#Sintax');
//    су.get('ds-input')
//  });

//GET

it('By ID', () =>{
  cy.visit("https://facebook.com")
  cy.get('#email')
}
)
it('By class', () =>{
  cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
  cy.get('.ds-input')
}
)

it('By Tag', () =>{
  cy.visit("http://beloweb.ru/category/dizayn-sayta")
  cy.get('nav')
}
)

it('By DiffeTag value', () =>{
  cy.visit('https://facebook.com')
  cy.get('[data-testid="open-registration-form-button"][role="button"]')
}
);

it('By Diffent Type', () =>{
  cy.visit('https://facebook.com')
  cy.get('[data-testid="open-registration-form-button"][role="button"]')
}
);

it('By Diffent Type', () =>{
  cy.visit('https://next.privat24.ua/')
  cy.get('*[class^="card"]')
}
);

// FIND, Eq
/// reference types = "cypress" />
it('Using get whit FIND and Eq', () =>{
  cy.visit('https://next.privat24.ua/deposit/open')
  cy.get('tbody').find('td').find('div').find('button').eq(0)
}
);

it.only('Using get whit FIND and Eq', () =>{
  cy.viewport(1800,700)
  cy.visit('https://docs.cypress.io/api/commands/get#Sintax')
  cy.get('aside').find('div').find('ol').find('li').find('a').eq(0) 
}
);