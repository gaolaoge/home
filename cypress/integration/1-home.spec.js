/// <refrence types="Cypress" />

import HomePage from "./ui/page/home_page";
import { getLogList } from "./api/page/home_page";

describe("Home页UI检测", () => {
  beforeEach(() => {
    let instance = new HomePage();
    instance.visit();
    cy.wrap(instance).as("instance");
  });

  it("Home判定节点存在", function () {
    this.instance.wrapper.should("be.visible").contains("Baby不要叹气、");
    this.instance.banner.should("be.visible");
    this.instance.logList.should("be.visible");
    this.instance.userInfo.should("be.visible");
    this.instance.resume.should("be.visible");
  });
});

describe("Home页api测试", () => {
  it("获取日志列表", function () {
    getLogList().then(({ body }) => {
      let { code, message, data } = body;
      cy.log(Object.keys(body).join(","));
      expect(code).to.equal(200);
    });
  });
});
