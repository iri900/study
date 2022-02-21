describe('Testing something on Google', ()=>{
    //комментарии
    it ('I can searh something', () =>{

        cy.visit('https://google.com');
       cy.get("input[name='q']").type('что-то').type('{enter}')
        
         cy.contains('https://pishempravilno.ru')
       cy.contains('https://context.reverso.net')
    });
});



                      