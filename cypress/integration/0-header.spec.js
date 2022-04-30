/// <refrence types="Cypress" />

import Header from "./ui/module/header_module";

const navActions = [
  { index: 1, path: "/note" },
  { index: 2, path: "/log" },
  { index: 3, path: "/photo" },
  { index: 4, path: "/tag" },
  { index: 5, path: "/trip" },
  { index: 6, path: "/vlog" }
];

describe("header组件UI检测", () => {
  beforeEach(() => {
    let instance = new Header();
    instance.visit();
    cy.wrap(instance).as("instance");
  });

  it("全局检索", function () {
    // 检索功能，尚未实现
    this.instance.search.should("be.visible").type("gaoge{enter}");
  });

  it("一级路由", function () {
    this.instance.navs
      .should("be.visible")
      .children(".navItem")
      .then(list => {
        expect(list).to.have.length(8);

        list = Cypress._.reverse(list);
        // list = [...list].reverse();

        for (let { index, path } of navActions) {
          list[index].click();
          cy.wait(50);
          cy.url().should("contains", path);
          cy.go("back");
        }
      });
  });

  it("外链测试", function () {
    this.instance.navs
      .children(".navItem")
      .last()
      .click()
      .then(() => {
        this.instance.dropdownList
          .should("be.visible")
          .find("li")
          .should("have.length", 2)
          .first()
          .find("a")
          .should("have.attr", "href", "https://www.antgroup.com")
          .should("have.attr", "target", "_blank")
          .parents("li")
          .next()
          .find("a")
          .should("have.attr", "href", "https://www.antgroup.com")
          .should("have.attr", "target", "_blank");
      });

    this.instance.logo.should("be.visible");
  });

  it("UI模式切换", function () {
    this.instance.patternBtn.should("be.visible").click();
    this.instance.wrapper.should("have.class", "Dark");
  });
});
