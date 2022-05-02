import React from "react";
import { getDateString, transClasses, getTimeString } from "../../src/utils";

describe("utils工具文件测试", () => {
  it("getDateString测试", () => {
    expect(getDateString("1651506687676")).toBe("05 02,2022");
    expect(getDateString(1651506687676)).toBe("05 02,2022");
    expect(getDateString("1")).toBe("01 01,1970");
    expect(getDateString("")).toBe(undefined);
  });

  it("getTimeString测试", () => {
    expect(getTimeString("1651506687676")).toBe("2022-05-0223:51:27");
    expect(getTimeString(1651506687676)).toBe("2022-05-0223:51:27");
    expect(getTimeString("1")).toBe("1970-01-0108:00:00");
    expect(getTimeString("")).toBe(undefined);
  });

  it("transClasses测试", () => {
    expect(transClasses(".wrapper")).toBe(".wrapper");
    expect(transClasses(".wrapper", ".home")).toBe(".wrapper .home");
    expect(transClasses(".wrapper", 1)).toBe(".wrapper 1");
    expect(transClasses(".wrapper", true)).toBe(".wrapper true");
    expect(transClasses(".wrapper", "")).toBe(".wrapper ");
    expect(transClasses(".wrapper", " ")).toBe(".wrapper  ");
  });
});
