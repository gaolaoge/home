import { header_module } from "../locator.json";

export default class {
  constructor() {
    this.url = Cypress.env("input_address");
  }
  get wrapper() {
    return cy.get(header_module.wrapper);
  }
  get logo() {
    return cy.get(header_module.logo);
  }
  get navs() {
    return cy.get(header_module.rowNavs);
  }
  get search() {
    return cy.get(header_module.searchInput);
  }
  get patternBtn() {
    return cy.get(header_module.patternBtn);
  }
  get dropdownList() {
    return cy.get(header_module.dropdownList);
  }
  visit() {
    cy.visit(this.url);
  }
}
