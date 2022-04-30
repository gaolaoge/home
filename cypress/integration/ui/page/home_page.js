import { home_page } from "../locator.json";

export default class {
  constructor() {
    this.url = Cypress.env("home_address");
  }
  get wrapper() {
    return cy.get(home_page.wrapper);
  }
  get banner() {
    return cy.get(home_page.banner);
  }
  get logList() {
    return cy.get(home_page.logList);
  }
  get userInfo() {
    return cy.get(home_page.userInfo);
  }
  get resume() {
    return cy.get(home_page.resume);
  }

  visit() {
    cy.log(this.url);
    cy.visit(this.url);
  }
}
