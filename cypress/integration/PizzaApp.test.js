describe("testing end to end pizza app", () => {
  
    it("Visit the site", () => {
    cy.visit("http://localhost:3000/");
  });

  it("Add multuple items in cart and check cart view", () => {
    cy.get("button").click({ multiple: true });
    cy.get("img#cart-basket").click();
  });

  it("Increase and decrease items in cart", () => {
    cy.get("button#increaseCount").click({ multiple: true });
    cy.get("#counter").contains("2");
    cy.get("button#decreaseCount").click({ multiple: true });
    cy.get("#counter").contains("1");
  });

  it("cofirm order,goback", () => {
    cy.get("button#orderNow").click();
    cy.get(".order a").click();
  });

});
