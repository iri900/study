describe("Goes to homepage", () => {
    it("Goes to the homepage", () => {
      cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
    });
    it("Clicks the Add Element Button", () => {
      cy.get('button[onclick="addElement()"]').click();
    });
  });