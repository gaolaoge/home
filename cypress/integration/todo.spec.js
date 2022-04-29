/// <refrence types="Cypress" />

describe("初始化测试", () => {
  beforeEach(() => {
    cy.visit("http://localhost:2345");
  });
  it("测试DOM", () => {
    cy.get("#root").find(".App");
    cy.get(".LogoText").should("contain", "HERE IS LOGO");
  });
});
