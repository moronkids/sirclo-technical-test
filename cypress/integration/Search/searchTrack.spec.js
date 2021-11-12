/* eslint-disable no-undef */
/* eslint-disable no-undef */
import "../../support";
describe("positive-case| search track", () => {
  it("user visit page", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
  });
  it("User click one artist - coldplay", () => {
    cy.contains("Coldplay").click();
    cy.wait(1000);
  });
  it("user see list and pagination", () => {
    cy.get(".group.rounded-md.border.gray-100");
    cy.get(".w-full.h-full.rounded-md");
    cy.get("#next-btn-track");
    cy.wait(1000);
  });
  it("user click button next", () => {
    cy.get("#next-btn-track").click();
    cy.wait(1000);
  });
  it("user click button back", () => {
    cy.get("#back-btn-track").click();
    cy.wait(1000);
  });
  it("check input element is in document", () => {
    cy.get("#search-component");
    cy.wait(1000);
  });
  it("user search artist 2pac", () => {
    cy.get("#search-component").type("2pac");
    cy.contains("Search Keyword : 2pac");
    cy.wait(1000);
  });
});
