import service from "./api";

export const getResume = () => {
  return service({
    url: "/resume/getResume",
    method: "GET"
  });
};
