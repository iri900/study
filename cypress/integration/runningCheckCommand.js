describe("Checkbox commands", () => {
    it("Checks a checkbox", () => {
      cy.visit("https://the-internet.herokuapp.com/checkboxes");
      cy.get("#checkboxes > [type='checkbox']").check();
    });
    it("Unchecks them", () => {
      cy.wait(1000);
      cy.get("input:checked").uncheck();
    });
  });