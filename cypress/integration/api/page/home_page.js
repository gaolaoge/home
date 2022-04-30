import { home_page } from "../request.json";

export function getLogList(data = {}) {
  return cy.request({
    url: home_page.getLogList,
    mothod: "GET",
    body: {
      pageSize: 10,
      pageIndex: 1,
      tags: null,
      date: null,
      ...data
    }
  });
}
