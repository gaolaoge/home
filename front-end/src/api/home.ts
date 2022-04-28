import service from "./api";

export const getUserSignature = () => {
  return service({
    url: "/home/getUserSignature",
    method: "GET"
  });
};
