import service from "./api";

export const getLogList = (data: any) => {
  return service({
    url: "/log/getLogList",
    method: "GET",
    data
  });
};
